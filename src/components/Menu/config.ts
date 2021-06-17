import { MenuEntry } from 'maki-uikit'
import { ContextApi } from 'contexts/Localization/types'

// const config: MenuEntry[] = [
const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
    {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    href: 'https://exchange.makiswap.com',
      items: [
        {
          label: 'Exchange',
          href: 'https://exchange.makiswap.com',
        },
        {
          label: 'Liquidity',
          href: 'https://exchange.makiswap.com/#/pool',
        },
      ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Contracts'),
    icon: 'ContractsIcon',
    items: [
      {
        label: 'MakiToken.sol',
        href: 'https://hecoinfo.com/address/0x5FaD6fBBA4BbA686bA9B8052Cf0bd51699f38B93#code', 
      },
      {
        label: 'SoyBar.sol',
        href: 'https://hecoinfo.com/address/0xfb4C85B31b888e4F84aC131667865E029D6486F7#code',
      },
      {
        label: 'MasterChef.sol',
        href: 'https://hecoinfo.com/address/0x4cb4c9C8cC67B171Ce86eB947cf558AFDBcAB17E/#code',
      },
      {
        label: 'MakiswapFactory.sol',
        href: 'https://hecoinfo.com/address/0x11cdc9bd86ff68b6a6152037342bae0c3a717f56#code',
      },
      {
        label: 'MakiswapRouter.sol',
        href: 'https://hecoinfo.com/address/0x7F88bC12aa1Ed9fF4605123649Ac90F2Cd9407eB/#code',
      },
    ],
  },
  {
    label: t('Audits'),
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Chainsulting',
        href: 'https://github.com/chainsulting/Smart-Contract-Security-Audits/blob/master/MakiSwap/02_Smart%20Contract%20Audit_MakiSwap.pdf', 
      },
      {
        label: 'Certik',
        href: 'https://www.certik.org/projects/makiswap', 
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo'
  // },
  {
     label: t('Info'),
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
   {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://docs.makiswap.com/', 
      },
      {
        label: 'Github',
        href: 'https://github.com/MakiSwap-Protocol', 
      },
      {
        label: 'Contact',
        href: 'https://docs.makiswap.com/jiro-ono/contact-us/business-and-partnerships', 
      },
    ]
   }
]

export default config
