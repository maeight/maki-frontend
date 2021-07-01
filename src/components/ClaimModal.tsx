import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Modal, Text, Flex, Box, Button, Input } from 'maki-uikit'
import { getMerkleDistributorContract } from 'utils/contractHelpers'
import { merkle } from 'config/constants/merkle'

const StyledInput = styled(Input)`
  border-radius: 16px;
  margin-left: auto;
`
const InputWrapper = styled.div`
  position: relative;
  margin-top: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

const getClaimObjectFromAddress = (address: string) => {
  const keys = Object.keys(merkle.claims)
  return merkle.claims[keys.find(key => key.toLowerCase() === address.toLowerCase())]
}

const ClaimModal: React.FC = () => {
  const { account } = useWallet()
  const airdropContract = getMerkleDistributorContract()
  const [recipientAddress, setRecipientAddress] = useState('')
  const [isEligible, setIsEligible] = useState(false)
  /* eslint-disable-next-line */
  const [isAirdropClaimed, setIsAirdropClaimed] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const getEligibility = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const address = event.target.value
    setRecipientAddress(address)
    const eligibility = !!getClaimObjectFromAddress(address)
    setIsEligible(eligibility)
    if (eligibility) {
      setError('')
    } else {
      setError('Address has no available claim')
    }
  }, [setIsEligible, setError]);

  const getAirdropStats = useCallback(async () => {
    const claimObject: any = getClaimObjectFromAddress(recipientAddress)
    const isClaimed = await airdropContract.methods.isClaimed(claimObject.index).call()
    setIsAirdropClaimed(isClaimed)
    if (isClaimed) {
      setError('You have already claimed your airdrop')
    } else {
      setError('')
    }
  }, [recipientAddress, setIsAirdropClaimed, setError, airdropContract])

  const claimAirdrop = useCallback(() => {
    airdropContract.methods.claim(
        merkle.claims[recipientAddress].index,
        recipientAddress,
        merkle.claims[recipientAddress].amount,
        merkle.claims[recipientAddress].proof
      )
      .send({ from: account })
      .on('error', () => setError('Transaction was not successful'))
      .on('transactionHash', () => setMessage('Your transaction has been recorded'))
      .on('confirmation', () => setMessage('You have successfully claimed your airdrop'))
  }, [account, recipientAddress, airdropContract, setError, setMessage])

  useEffect(() => {
    const setup = async () => {
      if (!airdropContract) {
        setError('Airdrop not available')
      }
      if (isEligible) {
        await getAirdropStats()
      }
    }
    setup()
  }, [isEligible, getAirdropStats, setError, airdropContract])

  return (
    <Modal title="MAKI AIRDROP CLAIM">
      <Flex justifyContent="center">
        <Box maxWidth="320px">
          <Text fontSize="14px">
            Enter an address to trigger a MAKI claim. If the address has any claimable MAKI it will be sent to them on submission.
          </Text>
          <InputWrapper>
            <StyledInput
              scale="lg"
              value={recipientAddress}
              placeholder="Recipient Address"
              onChange={getEligibility}
            />
          </InputWrapper>
          <Text color="red">{error}</Text>
          <Text color="green">{message}</Text>
          <Button fullWidth mt="16px" disabled={!isEligible} onClick={claimAirdrop}>Claim MAKI</Button>
        </Box>
      </Flex>
    </Modal>
  )
}

export default ClaimModal
