import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'TTA',
    lpAddresses: {
      256: '0x8F967c2514C7D2Efe185D0D22db8D4F63192AAB4',
      128: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    tokenSymbol: 'MAKI',
    tokenAddresses: {
      256: '0x71737b80f0fB1359da1711e03F09370C139ABD07',
      128: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
