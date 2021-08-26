import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Heading, Flex, useModal, AutoRenewIcon } from 'maki-uikit-v2'
import { useWeb3React } from '@web3-react/core'
import { LotteryStatus } from 'config/constants/types'
import { useTranslation } from 'contexts/Localization'
import { useGetUserLotteriesGraphData, useLottery } from 'state/lottery/hooks'
import ConnectWalletButton from 'components/ConnectWalletButton'
import ClaimPrizesModal from './ClaimPrizesModal'
import useGetUnclaimedRewards, { FetchStatus } from '../hooks/useGetUnclaimedRewards'

const WinnerImageLeft = styled.div`
  position: absolute;
  left: 20%;
  width: 150px;
  height: 150px;
  & img {
    position: absolute;
  }
  & img:first-child {
    width: 70px;
    bottom: 0;
    left: 0;
  }
  & img:last-child {
    width: 80px;
    right: 0;
    top: 0;
  }
`

const WinnerImageRight = styled.div`
  width: 309px;
  position: absolute;
  right: 0;
  bottom: 0;
`

const CheckPrizesSection = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    isTransitioning,
    currentRound: { status },
  } = useLottery()
  const { fetchAllRewards, unclaimedRewards, fetchStatus } = useGetUnclaimedRewards()
  const userLotteryData = useGetUserLotteriesGraphData()
  const [hasCheckedForRewards, setHasCheckedForRewards] = useState(false)
  const [hasRewardsToClaim, setHasRewardsToClaim] = useState(false)
  const [onPresentClaimModal] = useModal(<ClaimPrizesModal roundsToClaim={unclaimedRewards} />, false)
  const isFetchingRewards = fetchStatus === FetchStatus.IN_PROGRESS
  const lotteryIsNotClaimable = status === LotteryStatus.CLOSE
  const isCheckNowDisabled = !userLotteryData.account || lotteryIsNotClaimable

  useEffect(() => {
    if (fetchStatus === FetchStatus.SUCCESS) {
      // Manage showing unclaimed rewards modal once per page load / once per lottery state change
      if (unclaimedRewards.length > 0 && !hasCheckedForRewards) {
        setHasRewardsToClaim(true)
        setHasCheckedForRewards(true)
        onPresentClaimModal()
      }

      if (unclaimedRewards.length === 0 && !hasCheckedForRewards) {
        setHasRewardsToClaim(false)
        setHasCheckedForRewards(true)
      }
    }
  }, [unclaimedRewards, hasCheckedForRewards, fetchStatus, onPresentClaimModal])

  useEffect(() => {
    // Clear local state on account change, or when lottery isTransitioning state changes
    setHasRewardsToClaim(false)
    setHasCheckedForRewards(false)
  }, [account, isTransitioning])

  const getBody = () => {
    if (!account) {
      return (
        <Flex alignItems="center" justifyContent="center">
          <WinnerImageLeft>
            <img src="/images/lottery/lotteryImage2.png" alt="lottery ticket" />
            <img src="/images/lottery/lotteryImage3.png" alt="lottery ticket" />
          </WinnerImageLeft>
          <Flex mx={['4px', null, '16px']} flexDirection="column" alignItems="center">
            <Heading textAlign="center" color="#F4EEFF">
              {t('Connect your wallet')}
            </Heading>
            <Heading textAlign="center" color="#F4EEFF" mb="24px">
              {t("to check if you've won!")}
            </Heading>
            <ConnectWalletButton width="190px" />
          </Flex>
          <WinnerImageRight>
            <img src="/images/lottery/lotteryImage1.png" alt="lottery ticket" />
          </WinnerImageRight>
        </Flex>
      )
    }
    if (hasCheckedForRewards && !hasRewardsToClaim) {
      return (
        <Flex alignItems="center" justifyContent="center">
          <WinnerImageLeft>
            <img src="/images/lottery/lotteryImage2.png" alt="lottery ticket" />
            <img src="/images/lottery/lotteryImage3.png" alt="lottery ticket" />
          </WinnerImageLeft>
          <Flex mx={['4px', null, '16px']} flexDirection="column">
            <Heading textAlign="center" color="#F4EEFF">
              {t('No prizes to collect')}...
            </Heading>
            <Heading textAlign="center" color="#F4EEFF">
              {t('Better luck next time!')}
            </Heading>
          </Flex>
          <WinnerImageRight>
            <img src="/images/lottery/lotteryImage1.png" alt="lottery ticket" />
          </WinnerImageRight>
        </Flex>
      )
    }
    if (hasCheckedForRewards && hasRewardsToClaim) {
      return (
        <Flex alignItems="center" justifyContent="center">
          <WinnerImageLeft>
            <img src="/images/lottery/lotteryImage2.png" alt="lottery ticket" />
            <img src="/images/lottery/lotteryImage3.png" alt="lottery ticket" />
          </WinnerImageLeft>
          <Flex mx={['4px', null, '16px']} flexDirection="column">
            <Heading textAlign="center" color="#F4EEFF">
              {t('Congratulations!')}
            </Heading>
            <Heading textAlign="center" color="#F4EEFF">
              {t('Why not play again')}
            </Heading>
          </Flex>
          <WinnerImageRight>
            <img src="/images/lottery/lotteryImage1.png" alt="lottery ticket" />
          </WinnerImageRight>
        </Flex>
      )
    }
    const checkNowText = () => {
      if (lotteryIsNotClaimable) {
        return `${t('Calculating rewards')}...`
      }
      if (isFetchingRewards) {
        return t('Checking')
      }
      return t('Check Now')
    }
    return (
      <Flex alignItems="center" justifyContent="center">
        <WinnerImageLeft>
          <img src="/images/lottery/lotteryImage2.png" alt="lottery ticket" />
          <img src="/images/lottery/lotteryImage3.png" alt="lottery ticket" />
        </WinnerImageLeft>
        <Flex mx={['4px', null, '16px']} flexDirection="column">
          <Heading textAlign="center" color="#F4EEFF" mb="24px">
            {t('Are you a winner?')}
          </Heading>
          <Button
            disabled={isCheckNowDisabled}
            onClick={fetchAllRewards}
            isLoading={isFetchingRewards}
            endIcon={isFetchingRewards ? <AutoRenewIcon color="currentColor" spin /> : null}
          >
            {checkNowText()}
          </Button>
        </Flex>
        <WinnerImageRight>
          <img src="/images/lottery/lotteryImage1.png" alt="lottery ticket" />
        </WinnerImageRight>
      </Flex>
    )
  }

  return <Flex>{getBody()}</Flex>
}

export default CheckPrizesSection
