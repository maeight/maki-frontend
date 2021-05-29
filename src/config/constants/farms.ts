import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 1,
  //   lpSymbol: 'MAKI-HT',
  //   lpAddresses: {
  //     256: '0xa0af5d360232e077decfd4650e8b95875fdd6aad', // Is correct?
  //     128: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6', // UPDATE
  //   },
  //   tokenSymbol: 'MAKI',
  //   tokenAddresses: {
  //     256: '0x6858a26bBBc8e185274969f6baf99674929Cf766', // Is correct?
  //     128: '0x5fad6fbba4bba686ba9b8052cf0bd51699f38b93', // UPDATED - ABI UPDATED
  //   },
  //   quoteTokenSymbol: QuoteToken.HT,
  //   quoteTokenAdresses: contracts.wht,
  // },
]

export default farms
