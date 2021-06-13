import React, { useContext, useEffect } from 'react'
import { Menu as UikitMenu } from 'maki-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceMakiHusd, useProfile } from 'state/hooks'
import { HECO_MAINNET } from 'config/constants/metamask_network'
import config from './config'

const Menu = (props) => {
  const { account, ethereum, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const makiPriceUsd = usePriceMakiHusd()
  const { profile } = useProfile()

  useEffect(() => {
    (window as any).ethereum
        .request(HECO_MAINNET)
        // .then(() => {console.log('ok done')})
        // .catch((error: any) => {
        //   console.log(error)
        // })

  }, [])
 
  return (
    <UikitMenu
      account={account}
      provider={ethereum}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
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
