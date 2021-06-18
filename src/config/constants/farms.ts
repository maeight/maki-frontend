import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
    /**
   * These 3 farms (PID 0, 1, 4) should always be at the top of the file.
   */
    {
    pid: 0,
    lpSymbol: 'MAKI',
    lpAddresses: {
      256: '0x6858a26bBBc8e185274969f6baf99674929Cf766',
      128: '0x5fad6fbba4bba686ba9b8052cf0bd51699f38b93', // June 15th, 2021
    },
    token: tokens.maki,
    quoteToken: tokens.wht,
  },
  {
    pid: 1,
    lpSymbol: 'MAKI-HT',
    lpAddresses: {
      256: '0xa0af5d360232e077decfd4650e8b95875fdd6aad',
      128: '0xC923E7Dd24A96Da2136Cbc3C99F544F225A46424',
    },
    token: tokens.maki,
    quoteToken: tokens.wht,
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
    pid: 27,
    lpSymbol: 'DAI-HT',
    lpAddresses: {
      256: '', 
      128: '0x927E800cF58B8b71710882248698C24268C73E10', // June 17th, 2021
    },
    token: tokens.dai,
    quoteToken: tokens.wht
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

  // Migrated pools from DEV branch
  {
    pid: 26,
    lpSymbol: 'ADA-HT',
    lpAddresses: {
      256: '',
      128: '0x32e9dF1057049AD672b01B4f7fdB54d922c38713', // (June 11th, 2021)
    },
    token: tokens.ada,
    quoteToken: tokens.wht,
  },
  {
    pid: 21,
    lpSymbol: 'MAKI-AETH',
    lpAddresses: {
      256: '',
      128: '0x3af1b17956f87c00d534438e90bdbf7ce5ed2be1', // (June 11th, 2021)
    },
    token: tokens.maki,
    quoteToken: tokens.aeth
  },
  {
    pid: 15,
    lpSymbol: 'MAKI-ETH',
    lpAddresses: {
      256: '',
      128: '0xEA5447Db71205FFb834fbEB33177D98C0AdD13ef', // (June 7th, 2021)
    },
    token: tokens.maki,
    quoteToken: tokens.eth
  },
  {
    pid: 18,
    lpSymbol: 'MAKI-BTC',
    lpAddresses: {
      256: '',
      128: '0xF3F3CBeF5C90C78214929B61Fe7e5C00C1B37227', // (June 9th, 2021)
    },
    token: tokens.maki,
    quoteToken: tokens.btc,
  },
  {
    pid: 24,
    lpSymbol: 'MAKI-DOT',
    lpAddresses: {
      256: '', // 
      128: '0x4Ce51c76bBd6aD0aBdF13119e925c41512342c17', // June 14th, 2021
    },
    token: tokens.maki,
    quoteToken: tokens.dot
  },
  {
    pid: 14,
    lpSymbol: 'MAKI-USDC',
    lpAddresses: {
      256: '',
      128: '0xFE963b6E4091fFF01DD10e1150A53Eb608848E75', // (June 7th, 2021)
    },
    token: tokens.maki,
    quoteToken: tokens.usdc
  },
  {
    pid: 16,
    lpSymbol: 'MAKI-USDT',
    lpAddresses: {
      256: '',
      128: '0x3eaf762adacb7fe967796a9c9d4c52d55761b42e', // (June 8th, 2021)
    },
    token: tokens.maki,
    quoteToken: tokens.usdt
  },
  { pid: 22,
    lpSymbol: 'DOT-ETH',
    lpAddresses: {
      256: '', // UPDATE
      128: '0x3B8552476Af84fF8F7885d1E8918c1E85D9D10f4', // June 12th, 2021
    },
    token: tokens.dot,
    quoteToken: tokens.eth
  },
  {
    pid: 19,
    lpSymbol: 'MATIC-HT',
    lpAddresses: {
      256: '',
      128: '0xcDbE5901b56d87Dfa9C0eAC815Ce3ddbB3e63714', // (June 9th, 2021)
    },
    token: tokens.matic,
    quoteToken: tokens.wht
  },
  {
    pid: 20,
    lpSymbol: 'LINK-HT',
    lpAddresses: {
      256: '',
      128: '0x8baaE305Bca59743F28761C2736D7160B0CDbd9a', // (June 10th, 2021)
    },
    token: tokens.link,
    quoteToken: tokens.wht
  },
  {
    pid: 25,
    lpSymbol: 'BCH-HT',
    lpAddresses: {
      256: '', // UPDATE
      128: '0xA9d73cf74A1Bf493Cc64eDc45Cdbbbbfa276d580', // June 15th, 2021
    },
    token: tokens.bch,
    quoteToken: tokens.wht
  },
  {
    pid: 11,
    lpSymbol: 'BTC-HT',
    lpAddresses: {
      256: '',
      128: '0xDEc79D81A873B13b31dFc6158ab175f573121732', // (June 5th, 2021)
    },
    token: tokens.btc,
    quoteToken: tokens.wht
  },
  {
    pid: 12,
    lpSymbol: 'AETH-HT',
    lpAddresses: {
      256: '',
      128: '0xE4c81115014787905CdF0D4216BfFE262A53bEBE', // (June 5th, 2021)
    },
    token: tokens.aeth,
    quoteToken: tokens.wht
  },
  {
    pid: 23,
    lpSymbol: 'FIL-HT',
    lpAddresses: {
      256: '', // 
      128: '0x69E47E80c2DFC6f30442757104d8Bd10eaeb9924', // June 13th, 2021
    },
    token: tokens.fil,
    quoteToken: tokens.wht
  },
  {
    pid: 17,
    lpSymbol: 'AAVE-HT',
    lpAddresses: {
      256: '',
      128: '0x6c9A6DDa61c0840F0fFbDee86501B8138eEb3f29', // (June 8th, 2021)
    },
    token: tokens.aave,
    quoteToken: tokens.wht
  },
  {
    pid: 13,
    lpSymbol: 'USDC-USDT',
    lpAddresses: {
      256: '',
      128: '0x1a5474f7b997181ed3431d76148376efd9bb7e0e', // (June 6th, 2021)
    },
    token: tokens.usdc,
    quoteToken: tokens.usdt
  },
]

export default farms
