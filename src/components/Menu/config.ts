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
    href: 'https://swap.maki-swap.finance',
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
        href: 'https://info.maki-swap.finance',
      },
      {
        label: 'Tokens',
        href: 'https://info.maki-swap.finance/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.maki-swap.finance/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.maki-swap.finance/accounts',
      },
    ],
  },
]

export default config
