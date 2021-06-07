import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'MAKI-HT',
    lpAddresses: {
      256: '0xa0af5d360232e077decfd4650e8b95875fdd6aad',
      128: '0xC923E7Dd24A96Da2136Cbc3C99F544F225A46424',
    },
    token: tokens.soy,
    quoteToken: tokens.wht,
  },
  {
    pid: 2,
    lpSymbol: 'LAYER-HT',
    lpAddresses: {
      256: '0xa0af5d360232e077decfd4650e8b95875fdd6aad',
      128: '0xc189d2699c7e077cb050d9bc666effa40bb31771',
    },
    token: tokens.layer,
    quoteToken: tokens.wht,
  },
  {
    pid: 3,
    lpSymbol: 'MAKI-HUSD',
    lpAddresses: {
      256: '0xa0af5d360232e077decfd4650e8b95875fdd6aad',
      128: '0xc189d2699c7e077cb050d9bc666effa40bb31771',
    },
    token: tokens.maki,
    quoteToken: tokens.husd,
  },
  {
    pid: 4,
    lpSymbol: 'HUSD-HT',
    lpAddresses: {
      256: '',
      128: '0x12cb243CFa46f1cb98B0EAe80a1e2f757eDE2b3A',
    },
    token: tokens.husd,
    quoteToken: tokens.wht,
  },
  {
    pid: 5,
    lpSymbol: 'ETH-HUSD',
    lpAddresses: {
      256: '',
      128: '0xBdb405E580774F1AbA1273f22aF06c9B81433e87',
    },
    token: tokens.eth,
    quoteToken: tokens.husd,
  },
  {
    pid: 6,
    lpSymbol: 'BTC-HUSD',
    lpAddresses: {
      256: '',
      128: '0x901a89e02cd610c04d0feb45791dbf64b8c20503',
    },
    token: tokens.btc,
    quoteToken: tokens.husd,
  },
  {
    pid: 7,
    lpSymbol: 'USDT-HT',
    lpAddresses: {
      256: '',
      128: '0x94c8C66670dE883c6667B8aa214c4961bFeeB04a', // (1/6/21)
    },
    token: tokens.usdt,
    quoteToken: tokens.wht,
  },
  {
    pid: 8,
    lpSymbol: 'USDT-HUSD',
    lpAddresses: {
      256: '',
      128: '0x79DD12783DD8A1b33e6e530e77389B196962bBfa', // (2/6/21)
    },
    token: tokens.usdt,
    quoteToken: tokens.husd,
  },
  {
    pid: 9,
    lpSymbol: 'BTC-ETH',
    lpAddresses: {
      256: '',
      128: '0x82C12Ea7d9eD69E9CF631589A8911DD546615808', // (3/6/21)
    },
    token: tokens.btc,
    quoteToken: tokens.eth,
  },
  {
    pid: 10,
    lpSymbol: 'ETH-HT',
    lpAddresses: {
      256: '',
      128: '0x65d024d140756677073aA3b7f7010a72b7117eFF', // (4/6/21)
    },
    token: tokens.eth,
    quoteToken: tokens.wht,
  },
]

export default farms
