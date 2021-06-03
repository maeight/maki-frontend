import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useFarms, usePriceHtHusd } from 'state/hooks'
import React, { useCallback, useRef } from 'react'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from 'maki-uikit'
import BigNumber from 'bignumber.js'
import { QuoteToken } from 'config/constants/types'
import { BLOCKS_PER_YEAR, MAKI_PER_BLOCK, MAKI_POOL_PID, MAKI_HUSD_POOL_PID } from 'config'


const StyledFarmStakingCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const EarnAPYCard = () => {
  const farmsLP = useFarms()
  const htPrice = usePriceHtHusd()

  const maxAPY = useRef(Number.MIN_VALUE)

  const getHighestAPY = () => {
    const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')

    calculateAPY(activeFarms)

    return new BigNumber(maxAPY.current * 1).toLocaleString().slice(0, -13)
  }
  

  const calculateAPY = useCallback(
    (farmsToDisplay) => {
      const makiPriceVsHT = new BigNumber(farmsLP.find((farm) => farm.pid === MAKI_POOL_PID)?.tokenPriceVsQuote || 0)
      const makiPrice = new BigNumber(farmsLP.find((farm) => farm.pid === MAKI_HUSD_POOL_PID)?.tokenPriceVsQuote || 0)

      farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const makiRewardPerBlock = MAKI_PER_BLOCK.times(farm.poolWeight)
        const makiRewardPerYear = makiRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = makiPriceVsHT.times(makiRewardPerYear).div(farm.lpTotalInQuoteToken)

        // FIX ** 
        if (farm.quoteTokenSymbol === QuoteToken.HUSD) {
          apy = makiPrice.div(farm.lpTotalInQuoteToken).div(new BigNumber(1500))
        } else if (farm.quoteTokenSymbol === QuoteToken.HT) {
          apy = makiPriceVsHT.times(makiRewardPerYear).div(farm.lpTotalInQuoteToken).times(htPrice)
        // } else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
        //   apy = ??
        } else if (farm.quoteTokenSymbol === QuoteToken.MAKI) {
          apy = makiPriceVsHT.times(makiRewardPerYear).div(farm.lpTotalInQuoteToken)
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

        if (maxAPY.current < apy.toNumber()) maxAPY.current = apy.toNumber()

        // return apy
        return apy.toFixed(2)
      })
    },
    [htPrice, farmsLP],
  )
  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="text" size="lg">
          Earn up to
        </Heading>
        <CardMidContent color="primaryDark">
        {getHighestAPY() ? (
            `${getHighestAPY()}% ${'APR'}`
          ) : (
            <Skeleton animation="pulse" variant="rect" height="44px" />
          )}
        </CardMidContent>
        <Flex justifyContent="space-between">
          <Heading color="text" size="lg">
            in Farms
          </Heading>
          <NavLink exact activeClassName="active" to="/farms" id="farm-apy-cta">
            <ArrowForwardIcon mt={30} color="primary" />
          </NavLink>
        </Flex>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default EarnAPYCard
