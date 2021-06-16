import { useEffect } from 'react'
import { connectorLocalStorageKey, ConnectorNames } from 'maki-uikit'
import useAuth from 'hooks/useAuth'

const _binanceChainListener = async () =>
  new Promise<void>((resolve) =>
    Object.defineProperty(window, 'HECO', {
      get() {
        return this.heco
      },
      set(heco) {
        this.heco = heco

        resolve()
      },
    }),
  )

const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey) as ConnectorNames

    if (connectorId) {
      const isConnectorInjected = connectorId === ConnectorNames.Injected
      const isHecoDefined = Reflect.has(window, 'HECO')

      // Currently HECO extension doesn't always inject in time.
      // We must check to see if it exists, and if not, wait for it before proceeding.
      if (isConnectorInjected && !isHecoDefined) {
        _binanceChainListener().then(() => login(connectorId))

        return
      }

      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
