import { getCakeAddress } from 'utils/addressHelpers'
import { PoolConfig, QuoteToken, PoolCategory } from './types'


const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'MAKI',
    stakingTokenName: QuoteToken.MAKI,
    stakingTokenAddress: getCakeAddress(),
    contractAddress: {
      256: '0x232f691ccaaC8bb6928948880C5BeD3207E37915',
      128: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://makiswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
