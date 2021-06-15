import React, { useContext } from 'react'
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
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const makiPriceUsd = usePriceMakiHusd()
  const { profile } = useProfile()

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