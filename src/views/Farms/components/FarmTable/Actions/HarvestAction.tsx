import React, { useState, useRef, useEffect } from 'react'
import { Button, Skeleton } from 'maki-uikit'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import { getBalanceNumber } from 'utils/formatBalance'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { usePriceMakiHusd } from 'state/hooks'
import { useHarvest } from 'hooks/useHarvest'
import { useCountUp } from 'react-countup'

import { ActionContainer, ActionTitles, Title, Subtle, ActionContent, Earned, Staked } from './styles'

interface HarvestActionProps extends FarmWithStakedValue {
  userDataReady: boolean
}

const HarvestAction: React.FunctionComponent<HarvestActionProps> = ({ pid, userData, userDataReady }) => {
  const earningsBigNumber = new BigNumber(userData.earnings)
  const makiPrice = usePriceMakiHusd()
  let earnings = 0
  let earningsHusd = 0
  let displayBalance = userDataReady ? earnings.toLocaleString() : <Skeleton width={60} />

  // If user didn't connect wallet default balance will be 0
  if (!earningsBigNumber.isZero()) {
    earnings = getBalanceNumber(earningsBigNumber)
    earningsHusd = new BigNumber(earnings).multipliedBy(makiPrice).toNumber()
    displayBalance = earnings.toLocaleString()
  }

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const { countUp, update } = useCountUp({
    start: 0,
    end: earningsHusd,
    duration: 1,
    separator: ',',
    decimals: 3,
  })
  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(earningsHusd)
  }, [earningsHusd, updateValue])

  return (
    <ActionContainer>
      <ActionTitles>
        <Title>MAKI </Title>
        <Subtle>EARNED</Subtle>
      </ActionTitles>
      <ActionContent>
        <div>
          <Earned>{displayBalance}</Earned>
          {countUp > 0 && <Staked>~{countUp}USD</Staked>}
        </div>
        <Button
          disabled={!earnings || pendingTx || !userDataReady}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))

            setPendingTx(false)
          }}
          ml="4px"
        >
          Harvest
        </Button>
      </ActionContent>
    </ActionContainer>
  )
}

export default HarvestAction
