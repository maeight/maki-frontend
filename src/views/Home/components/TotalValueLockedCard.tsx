import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from 'makiswap-uikit'
import { useGetStats } from 'hooks/api'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const data = useGetStats()
  const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

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
            <Skeleton height={45} />
          </>
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
