import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'MAKI-HT',
    lpAddresses: {
      256: '0xa0af5d360232e077decfd4650e8b95875fdd6aad',
      128: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6', // UPDATE
    },
    tokenSymbol: 'MAKI',
    tokenAddresses: {
      256: '0x6858a26bBBc8e185274969f6baf99674929Cf766',
      128: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // UPDATE
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
]

export default farms
