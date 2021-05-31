import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex } from 'makiswap-uikit'
import { calculateMakiEarnedPerThousandDollars, apyModalRoi } from 'utils/compoundApyHelpers'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  lpLabel?: string
  makiPrice?: BigNumber
  apy?: BigNumber
  addLiquidityUrl?: string
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

const Description = styled(Text)`
  max-width: 320px;
  margin-bottom: 28px;
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  lpLabel,
  makiPrice,
  apy,
  addLiquidityUrl,
}) => {
  const farmApy = apy.times(new BigNumber(25)).toNumber()
  const oneThousandDollarsWorthOfMaki = 1000 / makiPrice.toNumber()

  const makiEarnedPerThousand1D = calculateMakiEarnedPerThousandDollars({ numberOfDays: 1, farmApy, makiPrice })
  const makiEarnedPerThousand7D = calculateMakiEarnedPerThousandDollars({ numberOfDays: 7, farmApy, makiPrice })
  const makiEarnedPerThousand30D = calculateMakiEarnedPerThousandDollars({ numberOfDays: 30, farmApy, makiPrice })
  const makiEarnedPerThousand365D = calculateMakiEarnedPerThousandDollars({ numberOfDays: 365, farmApy, makiPrice })

  return (
    <Modal title="ROI" onDismiss={onDismiss}>
      <Grid>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            Timeframe
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            ROI
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            MAKI per $1000
          </Text>
        </GridItem>
        {/* 1 day row */}
        <GridItem>
          <Text>1d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: makiEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfMaki })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{makiEarnedPerThousand1D}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text>7d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: makiEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfMaki })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{makiEarnedPerThousand7D}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text>30d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: makiEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfMaki })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{makiEarnedPerThousand30D}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem>
          <Text>365d(APY)</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: makiEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfMaki })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{makiEarnedPerThousand365D}</Text>
        </GridItem>
      </Grid>
      <Description fontSize="12px" color="textSubtle">
        Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.
      </Description>
      <Flex justifyContent="center">
        <LinkExternal href={addLiquidityUrl}>
          Get {lpLabel}
        </LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
