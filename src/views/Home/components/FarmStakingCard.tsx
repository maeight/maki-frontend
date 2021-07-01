import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from 'maki-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import ClaimButton from 'components/ClaimButton'
import MakiHarvestBalance from './MakiHarvestBalance'
import MakiWalletBalance from './MakiWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/farm-bg.svg');
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

const Label = styled.div`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="primary" size="xl" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <CardImage src="/images/farms-img.svg" alt="maki logo" width={117} height={67} />
        <Block>
          <Label>{TranslateString(544, 'MAKI to Harvest')}:</Label>
          <MakiHarvestBalance />
        </Block>
        <Block>
          <Label>{TranslateString(546, 'MAKI in Wallet')}:</Label>
          <MakiWalletBalance />
        </Block>
        <Actions>
          {account ? (
            <>
              <Button
                id="harvest-all"
                disabled={balancesWithValue.length <= 0 || pendingTx}
                onClick={harvestAllFarms}
                fullWidth
              >
                {pendingTx
                  ? TranslateString(548, 'Collecting MAKI')
                  : TranslateString(532, `Harvest all (${balancesWithValue.length})`)}
              </Button>
              <ClaimButton mt="10px" fullWidth />
            </>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
