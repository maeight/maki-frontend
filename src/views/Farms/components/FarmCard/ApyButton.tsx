import React from 'react'
import BigNumber from 'bignumber.js'
import { CalculateIcon, IconButton, useModal } from 'maki-uikit'
import ApyCalculatorModal from './ApyCalculatorModal'

export interface ApyButtonProps {
  lpLabel?: string
  makiPrice?: BigNumber
  apy?: BigNumber
  addLiquidityUrl?: string
}

const ApyButton: React.FC<ApyButtonProps> = ({ lpLabel, makiPrice, apy, addLiquidityUrl }) => {
  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal lpLabel={lpLabel} makiPrice={makiPrice} apy={apy} addLiquidityUrl={addLiquidityUrl} />,
  )

  return (
    <IconButton onClick={onPresentApyModal} variant="text" size="sm" ml="4px">
      <CalculateIcon />
    </IconButton>
  )
}

export default ApyButton
