import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Heading } from 'maki-uikit'
import { BLOCKS_PER_YEAR, MAKI_PER_BLOCK, MAKI_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBtcHusd, usePriceEthHusd, usePriceMakiHusd, usePriceHtHusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const farmsLP = useFarms()
  const makiPrice = usePriceMakiHusd() // Calculates MAKI price
  const htPrice = usePriceHtHusd() // Calculates HT price
  const ethPrice = usePriceEthHusd() // Calculates ETH price
  const btcPrice = usePriceBtcHusd() // Calculates BTC price

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
      const makiPriceVsHT = new BigNumber(farmsLP.find((farm) => farm.pid === MAKI_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const makiRewardPerBlock = MAKI_PER_BLOCK.times(farm.poolWeight)
        const makiRewardPerYear = makiRewardPerBlock.times(BLOCKS_PER_YEAR)

        // makiPriceInQuote * makiRewardPerYear / lpTotalInQuoteToken
        let apy = makiPriceVsHT.times(makiRewardPerYear).div(farm.lpTotalInQuoteToken)

        if (farm.quoteTokenSymbol === QuoteToken.HUSD || farm.quoteTokenSymbol === QuoteToken.USDT) {
          apy = (makiPrice.times(makiRewardPerYear)).div(farm.lpTotalInQuoteToken)
        } else if (farm.quoteTokenSymbol === QuoteToken.HT) {
          apy = makiPrice.div(htPrice).times(makiRewardPerYear).div(farm.lpTotalInQuoteToken)
        } else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
          apy = makiPrice.div(ethPrice).times(makiRewardPerYear).div(farm.lpTotalInQuoteToken)               
        } else if (farm.quoteTokenSymbol === QuoteToken.BTC) {
          apy = makiPrice.div(btcPrice).times(makiRewardPerYear).div(farm.lpTotalInQuoteToken)               
        } else if (farm.quoteTokenSymbol === QuoteToken.MAKI) {
          apy = makiRewardPerYear.div(farm.lpTotalInQuoteToken)
        } else if (farm.dual) {
          const makiApy =
            farm && makiPriceVsHT.times(makiRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
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
          htPrice={htPrice}
          ethPrice={ethPrice}
          makiPrice={makiPrice}
          btcPrice={btcPrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [farmsLP, htPrice, ethPrice, makiPrice, btcPrice, ethereum, account],
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
