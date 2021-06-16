import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from 'maki-uikit'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import { useWeb3React } from '@web3-react/core'
import { usePriceMakiHusd } from 'state/hooks'
import CardHusdValue from '../../../Home/components/CardHusdValue'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
}

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const { account } = useWeb3React()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const makiPrice = usePriceMakiHusd()
  const dispatch = useAppDispatch()
  const rawEarningsBalance = account ? getBalanceNumber(earnings) : 0
  const displayBalance = rawEarningsBalance.toLocaleString()
  const earningsHusd = rawEarningsBalance ? new BigNumber(rawEarningsBalance).multipliedBy(makiPrice).toNumber() : 0

  return (
    <Flex mb="8px" justifyContent="space-between" alignItems="center">
      <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>
        {displayBalance}
        {earningsHusd > 0 && <CardHusdValue value={earningsHusd} />}
      </Heading>
      <Button
        disabled={rawEarningsBalance === 0 || pendingTx}
        onClick={async () => {
          setPendingTx(true)
          await onReward()
          dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))

          setPendingTx(false)
        }}
      >
        Harvest
      </Button>
    </Flex>
  )
}

export default HarvestAction
