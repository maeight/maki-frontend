import React, { lazy } from 'react'
import { Redirect, Router, Route, Switch } from 'react-router-dom'
import { ResetCSS } from 'maki-uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { usePollCoreFarmData, usePollBlockNumber } from 'state/hooks' // removed: useFetchProfile
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
// import EasterEgg from './components/EasterEgg'
import Pools from './views/Pools'
import history from './routerHistory'
// import NotFound from 'views/NotFound'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const NotFound = lazy(() => import('./views/NotFound'))
// const Lottery = lazy(() => import('./views/Lottery'))
// const Ifos = lazy(() => import('./views/Ifos'))
// const Collectibles = lazy(() => import('./views/Collectibles'))
// const Teams = lazy(() => import('./views/Teams'))
// const Team = lazy(() => import('./views/Teams/Team'))
// const Profile = lazy(() => import('./views/Profile'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()
  // useFetchProfile()
  usePollCoreFarmData()

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
      <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" >
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Pools />
            </Route>
            {/* <Route path="/lottery">
              <Lottery />
            </Route>
            <Route path="/ifo">
              <Ifos />
            </Route>
            <Route path="/collectibles">
              <Collectibles />
            </Route>
            <Route exact path="/teams">
              <Teams />
            </Route>
            <Route path="/teams/:id">
              <Team />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route> */}
            {/* Redirect */}
            <Route path="/staking">
              <Redirect to="/pools" />
            </Route>
            <Route path="/soy">
              <Redirect to="/pools" />
            </Route>
            {/* <Route path="/nft">
              <Redirect to="/collectibles" />
            </Route> */}
            {/* 404 */}
            <Route component={NotFound} />

          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      <ToastListener />
    </Router>
  )
}

export default React.memo(App)
