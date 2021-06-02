import React from 'react'
import { Text } from 'maki-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getMakiAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceMakiHusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardHusdValue from './CardHusdValue'

const MakiWalletBalance = () => {
  const TranslateString = useI18n()
  const makiBalance = useTokenBalance(getMakiAddress())
  const husdBalance = new BigNumber(getBalanceNumber(makiBalance)).multipliedBy(usePriceMakiHusd()).toNumber()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(makiBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      <CardHusdValue value={husdBalance} />
    </>
  )
}

export default MakiWalletBalance
