import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'MAKI-HT',
    lpAddresses: {
      256: '0xa0af5d360232e077decfd4650e8b95875fdd6aad', // UPDATE
      128: '0xC923E7Dd24A96Da2136Cbc3C99F544F225A46424', // UPDATED
    },
    tokenSymbol: 'MAKI',
    tokenAddresses: {
      256: '0x6858a26bBBc8e185274969f6baf99674929Cf766', // UPDATED
      128: '0x5fad6fbba4bba686ba9b8052cf0bd51699f38b93', // UPDATED - ABI UPDATED
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 2,
    lpSymbol: 'LAYER-HT',
    lpAddresses: {
      256: '0xa0af5d360232e077decfd4650e8b95875fdd6aad', // Is correct?
      128: '0xc189d2699c7e077cb050d9bc666effa40bb31771', // UPDATED
    },
    tokenSymbol: 'LAYER',
    tokenAddresses: {
      256: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c', // UPDATE
      128: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c', // UPDATED - ABI UPDATED
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 3,
    lpSymbol: 'MAKI-HUSD',
    lpAddresses: {
      256: '',
      128: '0x88b076F1C2EDcf558711a21639C15D01706938e8', // UPDATED
    },
    tokenSymbol: 'MAKI',
    tokenAddresses: {
      256: '0x6858a26bBBc8e185274969f6baf99674929Cf766', // UPDATED
      128: '0x5fad6fbba4bba686ba9b8052cf0bd51699f38b93', // UPDATED - ABI UPDATED
    },
    quoteTokenSymbol: QuoteToken.HUSD,
    quoteTokenAdresses: contracts.husd,
  },
]

export default farms
