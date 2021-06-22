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
      128: '0x5FaD6fBBA4BbA686bA9B8052Cf0bd51699f38B93', // UPDATED - ABI UPDATED
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 30,
    lpSymbol: 'MATIC-ETH',
    lpAddresses: {
      256: '', // 
      128: '0xa458bf4f266762ad087e7f9f60f94dd0661d76f4', // June 22nd, 2021
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      256: '', // 
      128: '0x5fad6fbba4bba686ba9b8052cf0bd51699f38b93', // June 22nd, 2021
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 29,
    lpSymbol: 'MAKI-MATIC',
    lpAddresses: {
      256: '', // 
      128: '0xeeb94653baeac54561a45b47ec2b107a31923722', // June 19th, 2021
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      256: '', // 
      128: '0x5fad6fbba4bba686ba9b8052cf0bd51699f38b93', // June 19th, 2021
    },
    quoteTokenSymbol: QuoteToken.MAKI,
    quoteTokenAdresses: contracts.maki,
  },
  {
    pid: 21,
    lpSymbol: 'MAKI-AETH',
    lpAddresses: {
      256: '',
      128: '0x3af1b17956f87c00d534438e90bdbf7ce5ed2be1', // (June 11th, 2021)
    },
    tokenSymbol: 'AETH',
    tokenAddresses: {
      256: '', // 
      128: '0x62c10412d69823a98db5c09cf6e82810e0df5ad7' // (June 11th, 2021)
    },
    quoteTokenSymbol: QuoteToken.MAKI,
    quoteTokenAdresses: contracts.maki,
  },
  {
    pid: 15,
    lpSymbol: 'MAKI-ETH',
    lpAddresses: {
      256: '',
      128: '0xEA5447Db71205FFb834fbEB33177D98C0AdD13ef', // (June 7th, 2021)
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      256: '', // 
      128: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd' // (June 7th, 2021)
    },
    quoteTokenSymbol: QuoteToken.MAKI,
    quoteTokenAdresses: contracts.maki,
  },
  {
    pid: 18,
    lpSymbol: 'MAKI-BTC',
    lpAddresses: {
      256: '',
      128: '0xF3F3CBeF5C90C78214929B61Fe7e5C00C1B37227', // (June 9th, 2021)
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      256: '', // 
      128: '0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa' // (June 9th, 2021)
    },
    quoteTokenSymbol: QuoteToken.MAKI,
    quoteTokenAdresses: contracts.maki,
  },
  {
    pid: 24,
    lpSymbol: 'MAKI-DOT',
    lpAddresses: {
      256: '', // 
      128: '0x4Ce51c76bBd6aD0aBdF13119e925c41512342c17', // June 14th, 2021
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      256: '', // 
      128: '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3', // June 14th, 2021
    },
    quoteTokenSymbol: QuoteToken.MAKI,
    quoteTokenAdresses: contracts.maki,
  },
  {
    pid: 3,
    lpSymbol: 'MAKI-HUSD',
    lpAddresses: {
      256: '',
      128: '0x88b076F1C2EDcf558711a21639C15D01706938e8', // UPDATED
    },
    tokenSymbol: 'HUSD',
    tokenAddresses: {
      256: '',
      128: '0x0298c2b32eae4da002a15f36fdf7615bea3da047', // UPDATED - ABI UPDATED
    },
    quoteTokenSymbol: QuoteToken.MAKI,
    quoteTokenAdresses: contracts.maki,
  },
  {
    pid: 14,
    lpSymbol: 'MAKI-USDC',
    lpAddresses: {
      256: '',
      128: '0xFE963b6E4091fFF01DD10e1150A53Eb608848E75', // (June 7th, 2021)
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      256: '', // 
      128: '0x9362bbef4b8313a8aa9f0c9808b80577aa26b73b' // (June 7th, 2021)
    },
    quoteTokenSymbol: QuoteToken.MAKI,
    quoteTokenAdresses: contracts.maki,
  },
  {
    pid: 16,
    lpSymbol: 'MAKI-USDT',
    lpAddresses: {
      256: '',
      128: '0x3eaf762adacb7fe967796a9c9d4c52d55761b42e', // (June 8th, 2021)
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      256: '', // 
      128: '0xa71EdC38d189767582C38A3145b5873052c3e47a' // (June 8th, 2021)
    },
    quoteTokenSymbol: QuoteToken.MAKI,
    quoteTokenAdresses: contracts.maki,
  },
  { pid: 22,
    lpSymbol: 'DOT-ETH',
    lpAddresses: {
      256: '', // UPDATE
      128: '0x3B8552476Af84fF8F7885d1E8918c1E85D9D10f4', // June 12th, 2021
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      256: '', // UPDATED
      128: '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3', // June 12th, 2021
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 4,
    lpSymbol: 'HUSD-HT',
    lpAddresses: {
      256: '',
      128: '0x12cb243CFa46f1cb98B0EAe80a1e2f757eDE2b3A', // (29/5/21)
    },
    tokenSymbol: 'HUSD',
    tokenAddresses: {
      256: '', // 
      128: '0x0298c2b32eae4da002a15f36fdf7615bea3da047', // (29/5/21)
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 5,
    lpSymbol: 'ETH-HUSD',
    lpAddresses: {
      256: '',
      128: '0xBdb405E580774F1AbA1273f22aF06c9B81433e87', // (30/5/21)
    },
    tokenSymbol: 'HUSD',
    tokenAddresses: {
      256: '', // 
      128: '0x0298c2b32eae4da002a15f36fdf7615bea3da047', // (30/5/21)
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
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
    pid: 6,
    lpSymbol: 'BTC-HUSD',
    lpAddresses: {
      256: '',
      128: '0x901a89e02cd610c04d0feb45791dbf64b8c20503', // (31/5/21)
    },
    tokenSymbol: 'HUSD',
    tokenAddresses: {
      256: '', // 
      128: '0x0298c2b32eae4da002a15f36fdf7615bea3da047', // (31/5/21)
    },
    quoteTokenSymbol: QuoteToken.BTC,
    quoteTokenAdresses: contracts.btc,
  },
  {
    pid: 28,
    lpSymbol: 'DOT-HT',
    lpAddresses: {
      256: '', // 
      128: '0x17448C40C3CABec4708CA6e6FbF212253195dE3b', // June 18th, 2021
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      256: '', // 
      128: '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3', // June 18th, 2021
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 27,
    lpSymbol: 'DAI-HT',
    lpAddresses: {
      256: '', // 
      128: '0x927E800cF58B8b71710882248698C24268C73E10', // June 17th, 2021
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      256: '', // 
      128: '0x3d760a45d0887dfd89a2f5385a236b29cb46ed2a', // June 17th, 2021
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 25,
    lpSymbol: 'BCH-HT',
    lpAddresses: {
      256: '', // UPDATE
      128: '0xA9d73cf74A1Bf493Cc64eDc45Cdbbbbfa276d580', // June 15th, 2021
    },
    tokenSymbol: 'BCH',
    tokenAddresses: {
      256: '', // UPDATED
      128: '0xef3cebd77e0c52cb6f60875d9306397b5caca375', // June 15th, 2021
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 26,
    lpSymbol: 'ADA-HT',
    lpAddresses: {
      256: '',
      128: '0x32e9dF1057049AD672b01B4f7fdB54d922c38713', // (June 11th, 2021)
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      256: '', // 
      128: '0x843af718ef25708765a8e0942f89edeae1d88df0' // (June 11th, 2021)
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 7,
    lpSymbol: 'USDT-HT',
    lpAddresses: {
      256: '',
      128: '0x94c8C66670dE883c6667B8aa214c4961bFeeB04a', // (1/6/21)
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      256: '', // 
      128: '0xa71EdC38d189767582C38A3145b5873052c3e47a' // (1/6/21)
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 10,
    lpSymbol: 'ETH-HT',
    lpAddresses: {
      256: '',
      128: '0x65d024d140756677073aA3b7f7010a72b7117eFF', // (4/6/21)
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      256: '', // 
      128: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd' // (4/6/21)
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 11,
    lpSymbol: 'BTC-HT',
    lpAddresses: {
      256: '',
      128: '0xDEc79D81A873B13b31dFc6158ab175f573121732', // (June 5th, 2021)
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      256: '', // 
      128: '0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa' // (June 5th, 2021)
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 12,
    lpSymbol: 'AETH-HT',
    lpAddresses: {
      256: '',
      128: '0xE4c81115014787905CdF0D4216BfFE262A53bEBE', // (June 5th, 2021)
    },
    tokenSymbol: 'AETH',
    tokenAddresses: {
      256: '', // 
      128: '0x62c10412d69823a98db5c09cf6e82810e0df5ad7' // (June 5th, 2021)
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 23,
    lpSymbol: 'FIL-HT',
    lpAddresses: {
      256: '', // 
      128: '0x69E47E80c2DFC6f30442757104d8Bd10eaeb9924', // June 13th, 2021
    },
    tokenSymbol: 'FIL',
    tokenAddresses: {
      256: '', // 
      128: '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810', // June 13th, 2021
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 9,
    lpSymbol: 'BTC-ETH',
    lpAddresses: {
      256: '',
      128: '0x82C12Ea7d9eD69E9CF631589A8911DD546615808', // (3/6/21)
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      256: '', // 
      128: '0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa' // (3/6/21)
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 17,
    lpSymbol: 'AAVE-HT',
    lpAddresses: {
      256: '',
      128: '0x6c9A6DDa61c0840F0fFbDee86501B8138eEb3f29', // (June 8th, 2021)
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      256: '', // 
      128: '0x202b4936fe1a82a4965220860ae46d7d3939bb25' // (June 8th, 2021)
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 19,
    lpSymbol: 'MATIC-HT',
    lpAddresses: {
      256: '',
      128: '0xcDbE5901b56d87Dfa9C0eAC815Ce3ddbB3e63714', // (June 9th, 2021)
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      256: '', // 
      128: '0xdb11743fe8b129b49b11236e8a715004bdabe7e5' // (June 9th, 2021)
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 20,
    lpSymbol: 'LINK-HT',
    lpAddresses: {
      256: '',
      128: '0x8baaE305Bca59743F28761C2736D7160B0CDbd9a', // (June 10th, 2021)
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      256: '', // 
      128: '0x9e004545c59d359f6b7bfb06a26390b087717b42' // (June 10th, 2021)
    },
    quoteTokenSymbol: QuoteToken.HT,
    quoteTokenAdresses: contracts.wht,
  },
  {
    pid: 8,
    lpSymbol: 'USDT-HUSD',
    lpAddresses: {
      256: '',
      128: '0x79DD12783DD8A1b33e6e530e77389B196962bBfa', // (2/6/21)
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      256: '', // 
      128: '0xa71EdC38d189767582C38A3145b5873052c3e47a' // (2/6/21)
    },
    quoteTokenSymbol: QuoteToken.HUSD,
    quoteTokenAdresses: contracts.husd,
  },
  {
    pid: 13,
    lpSymbol: 'USDC-USDT',
    lpAddresses: {
      256: '',
      128: '0x1a5474f7b997181ed3431d76148376efd9bb7e0e', // (June 6th, 2021)
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      256: '', // 
      128: '0x9362bbef4b8313a8aa9f0c9808b80577aa26b73b' // (June 6th, 2021)
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },

]

export default farms
