import { MenuEntry } from 'makiswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    href: 'https://swap.makiswap.com',
    //   items: [
    //     {
    //       label: 'Exchange',
    //       href: 'https://exchange.makiswap.com',
    //     },
    //     {
    //       label: 'Liquidity',
    //       href: 'https://exchange.makiswap.com/#/pool',
    //     },
    //   ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.makiswap.com',
      },
      {
        label: 'Tokens',
        href: 'https://info.makiswap.com/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.makiswap.com/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.makiswap.com/accounts',
      },
    ],
  },
]

export default config
