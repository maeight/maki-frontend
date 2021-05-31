import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Text } from 'makiswap-uikit'
import BigNumber from 'bignumber.js'

import { useGetStats } from 'hooks/api'
import { useFarmFromPid, usePriceMakiHusd, usePriceHtHusd, usePriceEthHusd } from 'state/hooks'
// import { split } from 'lodash'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`
const TotalValueLockedCard = () => {
  const data = useGetStats()
  const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

/* ACQUIRE PRICES */
  const makiPrice = new BigNumber(usePriceMakiHusd())
  const htPrice = new BigNumber(usePriceHtHusd())
  const ethPrice = new BigNumber(usePriceEthHusd())

  
/* VALUE BY PID */
  const F1 = new BigNumber(useFarmFromPid(1).quoteTokenAmount).times(htPrice)
  const F2 = new BigNumber(useFarmFromPid(2).quoteTokenAmount).times(htPrice)
  const F3 = new BigNumber(useFarmFromPid(3).quoteTokenAmount).times(makiPrice)
  const F4 = new BigNumber(useFarmFromPid(4).quoteTokenAmount).times(htPrice)
  const F5 = new BigNumber(useFarmFromPid(5).quoteTokenAmount).times(ethPrice)

  const HTVAL = F1.plus(F2).plus(F4)
  const MAKIVAL = F3
  const ETHVAL = F5



/* SUM VALUE LOCKED */

  const ttlVal = new BigNumber((HTVAL.plus(MAKIVAL).plus(ETHVAL)).times(2)).toLocaleString().slice(0,11)
  

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          Total Value Locked (TVL)
        </Heading>
        {data ? (
          <>
            <Heading size="xl">{tvl}</Heading>
            <Text color="textSubtle">Across all LPs and Maki Pools</Text>
          </>
        ) : (
          <>
          {/* <Skeleton height={45} /> */}
          <Heading size="xl">${ttlVal}</Heading>
          <Text color="textSubtle">Across all LPs and Maki Pools</Text>
          </>
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
