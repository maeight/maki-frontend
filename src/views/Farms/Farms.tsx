import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Heading } from 'makiswap-uikit'
import { BLOCKS_PER_YEAR, MAKI_PER_BLOCK, MAKI_POOL_PID, } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceMakiHusd, usePriceBnbBusd, usePriceCakeBusd, usePriceEthBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const farmsLP = useFarms()
  const makiPrice = usePriceMakiHusd()

  const cakePrice = usePriceCakeBusd() // FIX ** ? REMOVE
  const bnbPrice = usePriceBnbBusd() // FIX ** ? REMOVE
  const ethPriceUsd = usePriceEthBusd() // FIX ** ? REMOVE

  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stackedOnly, setStackedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')
  const stackedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const makiPriceVsHt = new BigNumber(farmsLP.find((farm) => farm.pid === MAKI_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const makiRewardPerBlock = MAKI_PER_BLOCK.times(farm.poolWeight)
        const makiRewardPerYear = makiRewardPerBlock.times(BLOCKS_PER_YEAR)

        // cakePriceInQuote * makiRewardPerYear / lpTotalInQuoteToken
        let apy = makiPriceVsHt.times(makiRewardPerYear).div(farm.lpTotalInQuoteToken)

        if (farm.quoteTokenSymbol === QuoteToken.BUSD || farm.quoteTokenSymbol === QuoteToken.UST) {
          apy = makiPriceVsHt.times(makiRewardPerYear).div(farm.lpTotalInQuoteToken)
        } else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
          apy = makiPrice.div(ethPriceUsd).times(makiRewardPerYear).div(farm.lpTotalInQuoteToken)
        } else if (farm.quoteTokenSymbol === QuoteToken.MAKI) {
          apy = makiRewardPerYear.div(farm.lpTotalInQuoteToken)
        } else if (farm.dual) {
          const makiApy =
            farm && makiPriceVsHt.times(makiRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
          const dualApy =
            farm.tokenPriceVsQuote &&
            new BigNumber(farm.tokenPriceVsQuote)
              .times(farm.dual.rewardPerBlock)
              .times(BLOCKS_PER_YEAR)
              .div(farm.lpTotalInQuoteToken)

          apy = makiApy && dualApy && makiApy.plus(dualApy)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={makiPrice}
          ethPrice={ethPriceUsd}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [farmsLP, bnbPrice, ethPriceUsd, makiPrice, ethereum, account],
  )

  return (
    <Page>
      <Heading as="h1" size="lg" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        Stake LP tokens to earn MAKI
      </Heading>
      <FarmTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} />
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {stackedOnly ? farmsList(stackedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/images/MakiTime.png" alt="Maki illustration" style={{ maxWidth: '100%' }} />
      </div>
    </Page>
  )
}

export default Farms
