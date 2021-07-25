import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text } from 'maki-uikit'
import BigNumber from 'bignumber.js'

import { useGetStats } from 'hooks/api'
import { useFarmFromPid, usePriceBtcHusd, usePriceMakiHusd, usePriceHtHusd, usePriceEthHusd } from 'state/hooks'
// import { split } from 'lodash'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  // const data = useGetStats()
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

/* ACQUIRE PRICES */
  const makiPrice = new BigNumber(usePriceMakiHusd())
  const htPrice = new BigNumber(usePriceHtHusd())
  const ethPrice = new BigNumber(usePriceEthHusd())
  const btcPrice = new BigNumber(usePriceBtcHusd())
  
/* VALUE BY PID */
  const F0 = new BigNumber(4000000).times(makiPrice)
  const F1 = new BigNumber(useFarmFromPid(1).quoteTokenAmount).times(htPrice)
  const F2 = new BigNumber(useFarmFromPid(2).quoteTokenAmount).times(htPrice)
  const F3 = new BigNumber(useFarmFromPid(3).quoteTokenAmount).times(makiPrice)
  const F4 = new BigNumber(useFarmFromPid(4).quoteTokenAmount).times(htPrice)
  const F5 = new BigNumber(useFarmFromPid(5).quoteTokenAmount).times(ethPrice)
  const F6 = new BigNumber(useFarmFromPid(6).quoteTokenAmount).times(btcPrice)
  const F7 = new BigNumber(useFarmFromPid(7).quoteTokenAmount).times(htPrice)
  const F8 = new BigNumber(useFarmFromPid(8).quoteTokenAmount)
  const F9 = new BigNumber(useFarmFromPid(9).quoteTokenAmount).times(ethPrice)
  const F10 = new BigNumber(useFarmFromPid(10).quoteTokenAmount).times(htPrice)
  const F11 = new BigNumber(useFarmFromPid(11).quoteTokenAmount).times(htPrice)
  const F12 = new BigNumber(useFarmFromPid(12).quoteTokenAmount).times(htPrice)
  const F13 = new BigNumber(useFarmFromPid(13).quoteTokenAmount)
  const F14 = new BigNumber(useFarmFromPid(14).quoteTokenAmount).times(makiPrice)
  const F15 = new BigNumber(useFarmFromPid(15).quoteTokenAmount).times(makiPrice)
  const F16 = new BigNumber(useFarmFromPid(16).quoteTokenAmount).times(makiPrice)
  const F17 = new BigNumber(useFarmFromPid(17).quoteTokenAmount).times(htPrice)
  const F18 = new BigNumber(useFarmFromPid(18).quoteTokenAmount).times(makiPrice)
  const F19 = new BigNumber(useFarmFromPid(19).quoteTokenAmount).times(htPrice)
  const F20 = new BigNumber(useFarmFromPid(20).quoteTokenAmount).times(htPrice)
  const F21 = new BigNumber(useFarmFromPid(21).quoteTokenAmount).times(makiPrice)
  const F22 = new BigNumber(useFarmFromPid(22).quoteTokenAmount).times(ethPrice)
  const F23 = new BigNumber(useFarmFromPid(23).quoteTokenAmount).times(htPrice)

  const SOYVAL = F0
  const HTVAL = F1.plus(F2).plus(F4).plus(F7).plus(F10).plus(F11).plus(F12).plus(F17).plus(F19).plus(F20).plus(F23)
  const MAKIVAL = F3.plus(F14).plus(F15).plus(F16).plus(F18).plus(F21)
  const ETHVAL = F5.plus(F9).plus(F22)
  const BTCVAL = F6
  const USDVAL = F8.plus(F13)

/* SUM VALUE LOCKED */
  const ttlVal = new BigNumber(((HTVAL.plus(MAKIVAL).plus(ETHVAL).plus(BTCVAL).plus(USDVAL)).times(2)).plus(SOYVAL)).toLocaleString().slice(0,11)
  const totalValueFormated = ttlVal
  ? `$${Number(ttlVal).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
  : '-'

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          Total Value Locked (TVL)
        </Heading>
        {/* <Skeleton height={45} /> */}
        <Heading size="xl">{totalValueFormated}</Heading>
        <Text color="textSubtle">Across all LPs and Maki Pools</Text>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
