import { getMakiAddress } from 'utils/addressHelpers'
import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'MAKI',
    stakingTokenName: QuoteToken.MAKI,
    stakingTokenAddress: getMakiAddress(),
    contractAddress: {
      256: '0x734A1e360E4C57591CE67F008F1F53304CaC7BAB',
      128: '0x4cb4c9C8cC67B171Ce86eB947cf558AFDBcAB17E', // UPDATED WITH MASTERCHEF
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://app.makiswap.com/',
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
