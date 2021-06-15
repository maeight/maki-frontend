import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from 'maki-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
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
          Farms & Staking
        </Heading>
        <CardImage src="/images/farms-img.svg" alt="maki logo" width={117} height={67} />
        <Block>
          <Label>MAKI to Harvest:</Label>
          <MakiHarvestBalance />
        </Block>
        <Block>
          <Label>MAKI in Wallet:</Label>
          <MakiWalletBalance />
        </Block>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              width='100%'
            >
              {pendingTx
                ? 'Collecting MAKI'
                : `Harvest all (${balancesWithValue.length})`}
            </Button>
          ) : (
            <UnlockButton width='100%' />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
