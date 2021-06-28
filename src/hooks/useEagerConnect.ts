/* eslint-disable */
// import { useEffect } from 'react'
// import { connectorLocalStorageKey, ConnectorNames } from 'maki-uikit'
// import useAuth from 'hooks/useAuth'

// const useEagerConnect = () => {
//   const { login } = useAuth()

//   useEffect(() => {
//     const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames

//     if (connectorId) {
//       const isConnectorInjected = connectorId === ConnectorNames.Injected
//       const isHecoDefined = Reflect.has(window, 'HECO')

//       // Currently HECO extension doesn't always inject in time.
//       // We must check to see if it exists, and if not, wait for it before proceeding.
//       if (isConnectorInjected && !isHecoDefined) {
//         _binanceChainListener().then(() => login(connectorId))

//         return
//       }

//       login(connectorId)
//     })
//   }
// export default useEagerConnect

import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from 'utils/connectors'

export function useEagerConnect() {
  const { active, error, activate } = useWeb3React()

  const [tried, setTried] = useState(false)

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true)
        })
      } else {
        setTried(true)
      }
    })
  }, []) // intentionally only running on mount (make sure it's only mounted once :)) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [tried, active])
  return tried
}

export default useEagerConnect