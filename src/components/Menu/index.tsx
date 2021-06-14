import React, { useContext, useEffect } from 'react'
import { Menu as UikitMenu } from 'maki-uikit'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import { HECO_MAINNET } from 'config/constants/metamask_network'
import useTheme from 'hooks/useTheme'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
// import useAuth from 'hooks/useAuth'
import { usePriceMakiHusd, useProfile } from 'state/hooks'
import config from './config'


const Menu = (props) => {
  // const { login, logout } = useAuth()
  const { account, connect, reset }: {account: string, ethereum: provider, connect: any, reset: any} = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const makiPriceUsd = usePriceMakiHusd()
  const { profile } = useProfile()

  useEffect(() => {
    (window as any).ethereum
        .request(HECO_MAINNET)
        // eslint-disable-next-line
        .then(() => {console.log('ok done')})
        .catch((error: any) => {
          // eslint-disable-next-line
          console.log(error)
        })

  }, [])

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      setLang={setSelectedLanguage}
      makiPriceUsd={makiPriceUsd.toNumber()}
      links={config}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: !profile?.username,
      }}
      {...props}
    />
  )
}

export default Menu