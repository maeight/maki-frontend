import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Text } from 'makiswap-uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/stats-bg.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const MakiStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="primary" size="xl" mb="24px">
          {TranslateString(534, 'Maki Stats')}
        </Heading>
        <CardImage src="/images/stats-img.png" alt="cake logo" width={64} height={64} />
        <Block>
          <Text color="primaryDark" style={{ lineHeight: '24px' }}>
            {cakeSupply}
          </Text>
          <Text style={{ lineHeight: '36px' }}>
            {TranslateString(298, 'Total MAKI Supply')}
          </Text>
        </Block>
        <Block>
          <Text color="primaryDark" style={{ lineHeight: '24px' }}>
            {getBalanceNumber(burnedBalance)}
          </Text>
          <Text style={{ lineHeight: '36px' }}>
            {TranslateString(298, 'Total MAKI Burned')}
          </Text>
        </Block>
        <Block>
          <Text color="primaryDark" style={{ lineHeight: '24px' }}>
            25
          </Text>
          <Text style={{ lineHeight: '36px' }}>
            {TranslateString(298, 'New MAKI / Block')}
          </Text>
        </Block>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default MakiStats
