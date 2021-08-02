// import { Currency, CurrencyAmount, Fraction, Percent } from 'maki-sdk'
// import React from 'react'
// import { Button } from 'maki-uikit-v2'
// import { RowBetween, RowFixed } from 'state/components/Row'
// import CurrencyLogo from 'state/components/CurrencyLogo'
// import { Field } from 'state/mint/actions'
// import { TYPE } from 'state/components/Shared'

// const { body: Body } = TYPE

// export function ConfirmAddModalBottom({
//   noLiquidity,
//   price,
//   currencies,
//   parsedAmounts,
//   poolTokenPercentage,
//   onAdd,
// }: {
//   noLiquidity?: boolean
//   price?: Fraction
//   currencies: { [field in Field]?: Currency }
//   parsedAmounts: { [field in Field]?: CurrencyAmount }
//   poolTokenPercentage?: Percent
//   onAdd: () => void
// }) {
//   return (
//     <>
//       <RowBetween>
//         <Body>{currencies[Field.CURRENCY_A]?.symbol} Deposited</Body>
//         <RowFixed>
//           <CurrencyLogo currency={currencies[Field.CURRENCY_A]} style={{ marginRight: '8px' }} />
//           <Body>{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}</Body>
//         </RowFixed>
//       </RowBetween>
//       <RowBetween>
//         <Body>{currencies[Field.CURRENCY_B]?.symbol} Deposited</Body>
//         <RowFixed>
//           <CurrencyLogo currency={currencies[Field.CURRENCY_B]} style={{ marginRight: '8px' }} />
//           <Body>{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}</Body>
//         </RowFixed>
//       </RowBetween>
//       <RowBetween>
//         <Body>Rates</Body>
//         <Body>
//           {`1 ${currencies[Field.CURRENCY_A]?.symbol} = ${price?.toSignificant(4)} ${
//             currencies[Field.CURRENCY_B]?.symbol
//           }`}
//         </Body>
//       </RowBetween>
//       <RowBetween style={{ justifyContent: 'flex-end' }}>
//         <Body>
//           {`1 ${currencies[Field.CURRENCY_B]?.symbol} = ${price?.invert().toSignificant(4)} ${
//             currencies[Field.CURRENCY_A]?.symbol
//           }`}
//         </Body>
//       </RowBetween>
//       <RowBetween>
//         <Body>Share of Pool:</Body>
//         <Body>{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</Body>
//       </RowBetween>
//       <Button mt="20px" onClick={onAdd}>
//         {noLiquidity ? 'Create Pool & Supply' : 'Confirm Supply'}
//       </Button>
//     </>
//   )
// }

// export default ConfirmAddModalBottom



import { Currency, CurrencyAmount, Fraction, Percent } from 'maki-sdk'
import React from 'react'
import { Button, Text } from 'maki-uikit-v2'
import { TranslateString } from 'utils/translateTextHelpers'
import { Field } from 'state/mint/actions'
import { RowBetween, RowFixed } from 'components/Row'
import CurrencyLogo from 'components/CurrencyLogo'

export function ConfirmAddModalBottom({
  noLiquidity,
  price,
  currencies,
  parsedAmounts,
  poolTokenPercentage,
  onAdd,
}: {
  noLiquidity?: boolean
  price?: Fraction
  currencies: { [field in Field]?: Currency }
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  poolTokenPercentage?: Percent
  onAdd: () => void
}) {
  return (
    <>
      <RowBetween>
        <Text>{currencies[Field.CURRENCY_A]?.symbol} Deposited</Text>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_A]} style={{ marginRight: '8px' }} />
          <Text>{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}</Text>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <Text>{currencies[Field.CURRENCY_B]?.symbol} Deposited</Text>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_B]} style={{ marginRight: '8px' }} />
          <Text>{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}</Text>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <Text>Rates</Text>
        <Text>
          {`1 ${currencies[Field.CURRENCY_A]?.symbol} = ${price?.toSignificant(4)} ${
            currencies[Field.CURRENCY_B]?.symbol
          }`}
        </Text>
      </RowBetween>
      <RowBetween style={{ justifyContent: 'flex-end' }}>
        <Text>
          {`1 ${currencies[Field.CURRENCY_B]?.symbol} = ${price?.invert().toSignificant(4)} ${
            currencies[Field.CURRENCY_A]?.symbol
          }`}
        </Text>
      </RowBetween>
      <RowBetween>
        <Text>Share of Pool:</Text>
        <Text>{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</Text>
      </RowBetween>
      <Button mt="20px" onClick={onAdd}>
        {noLiquidity ? TranslateString(250, 'Create Pool & Supply') : TranslateString(252, 'Confirm Supply')}
      </Button>
    </>
  )
}

export default ConfirmAddModalBottom