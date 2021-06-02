import React from 'react'
import { Text } from 'maki-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import { usePriceMakiHusd } from 'state/hooks'
import styled from 'styled-components'
import CardValue from './CardValue'
import CardHusdValue from './CardHusdValue'

const Block = styled.div`
  margin-bottom: 24px;
}
`

const MakiHarvestBalance = () => {
  const TranslateString = useI18n()
  const { account } = useWallet()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const earningsHusd = new BigNumber(earningsSum).multipliedBy(usePriceMakiHusd()).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={earningsSum} lineHeight="1.5" />
      <CardHusdValue value={earningsHusd} />
    </Block>
  )
}

export default MakiHarvestBalance
