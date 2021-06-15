import React, { useContext } from 'react'
import { Menu as UikitMenu } from 'maki-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceMakiHusd } from 'state/hooks' // useProfile
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { currentLanguage, setLanguage } = useTranslation()
  const { isDark, toggleTheme } = useTheme()
  const makiPriceUsd = usePriceMakiHusd()
  // const { profile } = useProfile()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      makiPriceUsd={makiPriceUsd.toNumber()}
      links={config}
      // profile={{
      //   username: profile?.username,
      //   image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
      //   profileLink: '/profile',
      //   noProfileLink: '/profile',
      //   showPip: !profile?.username,
      // }}
      {...props}
    />
  )
}

export default Menu
