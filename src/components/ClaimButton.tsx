import React from 'react'
import { Button, useModal } from 'maki-uikit'
import ClaimModal from 'components/ClaimModal'

const ClaimButton = (props) => {
  const [onPresentClaimModal] = useModal(<ClaimModal />)

  return (
    <Button onClick={onPresentClaimModal} {...props}>Claim MAKI</Button>
  )
}

export default ClaimButton
