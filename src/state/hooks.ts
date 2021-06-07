import { useEffect, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useSelector, useDispatch } from 'react-redux'
import { getWeb3NoAccount } from 'utils/web3'
import { kebabCase } from 'lodash'
import { Toast, toastTypes } from 'maki-uikit'
import { farmsConfig } from 'config/constants'
// import { useWallet } from '@binance-chain/bsc-use-wallet'
// import { useAppDispatch } from 'state'

// import { Team } from 'config/constants/types'
import useRefresh from 'hooks/useRefresh'
import {
  // fetchPoolsPublicDataAsync,
  fetchFarmsPublicDataAsync,
  fetchPoolsUserDataAsync,
  push as pushToast,
  remove as removeToast,
  clear as clearToast,
} from './actions'
import { State, Farm, Pool, FarmsState } from './types' // ProfileState, TeamsState, AchievementState,
import { fetchFarmUserDataAsync, nonArchivedFarms } from './farms'
// import { fetchProfile } from './profile'
// import { fetchTeam, fetchTeams } from './teams'
// import { fetchAchievements } from './achievements'



const ZERO = new BigNumber(0)

export const usePollFarmsData = (includeArchive = false) => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  const web3 = getWeb3NoAccount()
  const { account } = useWeb3React()

  useEffect(() => {
    const farmsToFetch = includeArchive ? farmsConfig : nonArchivedFarms
    const pids = farmsToFetch.map((farmToFetch) => farmToFetch.pid)

    dispatch(fetchFarmsPublicDataAsync(pids))

    if (account) {
      dispatch(fetchFarmUserDataAsync({ account, pids }))
    }
  }, [includeArchive, dispatch, slowRefresh, web3, account])
}

// --------------------
//  Farms
// --------------------

export const useFarms = (): FarmsState => {
  const farms = useSelector((state: State) => state.farms)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}

// --------------------
//  Pools
// --------------------

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// ----- V2 POOLS W/ ROWS & VAULT -----
// export const useFetchPublicPoolsData = () => {
//   const dispatch = useAppDispatch()
//   const { slowRefresh } = useRefresh()
//   const web3 = getWeb3NoAccount()

//   useEffect(() => {
//     const fetchPoolsPublicData = async () => {
//       const blockNumber = await web3.eth.getBlockNumber()
//       dispatch(fetchPoolsPublicDataAsync(blockNumber))
//     }

//     fetchPoolsPublicData()
//     dispatch(fetchPoolsStakingLimitsAsync())
//   }, [dispatch, slowRefresh, web3])
// }

// export const usePools = (account): { pools: Pool[]; userDataLoaded: boolean } => {
//   const { fastRefresh } = useRefresh()
//   const dispatch = useAppDispatch()
//   useEffect(() => {
//     if (account) {
//       dispatch(fetchPoolsUserDataAsync(account))
//     }
//   }, [account, dispatch, fastRefresh])

//   const { pools, userDataLoaded } = useSelector((state: State) => ({
//     pools: state.pools.data,
//     userDataLoaded: state.pools.userDataLoaded,
//   }))
//   return { pools: pools.map(transformPool), userDataLoaded }
// }

// export const usePoolFromPid = (sousId: number): Pool => {
//   const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
//   return transformPool(pool)
// }

// export const useFetchCakeVault = () => {
//   const { account } = useWeb3React()
//   const { fastRefresh } = useRefresh()
//   const dispatch = useAppDispatch()

//   useEffect(() => {
//     dispatch(fetchCakeVaultPublicData())
//   }, [dispatch, fastRefresh])

//   useEffect(() => {
//     dispatch(fetchCakeVaultUserData({ account }))
//   }, [dispatch, fastRefresh, account])

//   useEffect(() => {
//     dispatch(fetchCakeVaultFees())
//   }, [dispatch])
// }

// export const useCakeVault = () => {
//   const {
//     totalShares: totalSharesAsString,
//     pricePerFullShare: pricePerFullShareAsString,
//     totalCakeInVault: totalCakeInVaultAsString,
//     estimatedCakeBountyReward: estimatedCakeBountyRewardAsString,
//     totalPendingCakeHarvest: totalPendingCakeHarvestAsString,
//     fees: { performanceFee, callFee, withdrawalFee, withdrawalFeePeriod },
//     userData: {
//       isLoading,
//       userShares: userSharesAsString,
//       cakeAtLastUserAction: cakeAtLastUserActionAsString,
//       lastDepositedTime,
//       lastUserActionTime,
//     },
//   } = useSelector((state: State) => state.pools.cakeVault)

//   const estimatedCakeBountyReward = useMemo(() => {
//     return new BigNumber(estimatedCakeBountyRewardAsString)
//   }, [estimatedCakeBountyRewardAsString])

//   const totalPendingCakeHarvest = useMemo(() => {
//     return new BigNumber(totalPendingCakeHarvestAsString)
//   }, [totalPendingCakeHarvestAsString])

//   const totalShares = useMemo(() => {
//     return new BigNumber(totalSharesAsString)
//   }, [totalSharesAsString])

//   const pricePerFullShare = useMemo(() => {
//     return new BigNumber(pricePerFullShareAsString)
//   }, [pricePerFullShareAsString])

//   const totalCakeInVault = useMemo(() => {
//     return new BigNumber(totalCakeInVaultAsString)
//   }, [totalCakeInVaultAsString])

//   const userShares = useMemo(() => {
//     return new BigNumber(userSharesAsString)
//   }, [userSharesAsString])

//   const cakeAtLastUserAction = useMemo(() => {
//     return new BigNumber(cakeAtLastUserActionAsString)
//   }, [cakeAtLastUserActionAsString])

//   return {
//     totalShares,
//     pricePerFullShare,
//     totalCakeInVault,
//     estimatedCakeBountyReward,
//     totalPendingCakeHarvest,
//     fees: {
//       performanceFee,
//       callFee,
//       withdrawalFee,
//       withdrawalFeePeriod,
//     },
//     userData: {
//       isLoading,
//       userShares,
//       cakeAtLastUserAction,
//       lastDepositedTime,
//       lastUserActionTime,
//     },
//   }
// }

// --------------------
//  Prices
// --------------------

export const usePriceMakiHusd = (): BigNumber => {
  const makiHusdFarm = useFarmFromPid(3)
  return makiHusdFarm.tokenPriceVsQuote ? new BigNumber(1).div(makiHusdFarm.tokenPriceVsQuote) : ZERO
}

export const usePriceHtHusd = (): BigNumber => {
  const whtHusdFarm = useFarmFromPid(4)
  return whtHusdFarm.tokenPriceVsQuote ? new BigNumber(1).div(whtHusdFarm.tokenPriceVsQuote) : ZERO
}

export const usePriceEthHusd = (): BigNumber => {
  const pid = 5 // ETH-HUSD LP
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(1).div(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceEthHt = (): BigNumber => {
  const priceHtHusd = usePriceHtHusd()
  const priceEthHusd = usePriceEthHusd()
  return priceEthHusd.div(priceHtHusd)
}

export const usePriceBtcHusd = (): BigNumber => {
  const btcHusdFarm = useFarmFromPid(6)
  return btcHusdFarm.tokenPriceVsQuote ? new BigNumber(1).div(btcHusdFarm.tokenPriceVsQuote) : ZERO
}

// --------------------
//  Toasts
// --------------------

export const useToast = () => {
  const dispatch = useDispatch()
  const helpers = useMemo(() => {
    const push = (toast: Toast) => dispatch(pushToast(toast))

    return {
      toastError: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.DANGER, title, description })
      },
      toastInfo: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.INFO, title, description })
      },
      toastSuccess: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.SUCCESS, title, description })
      },
      toastWarning: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.WARNING, title, description })
      },
      push,
      remove: (id: string) => dispatch(removeToast(id)),
      clear: () => dispatch(clearToast()),
    }
  }, [dispatch])

  return helpers
}

// // --------------------
// //  Profile
// // --------------------

// export const useFetchProfile = () => {
//   const { account } = useWallet()
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchProfile(account))
//   }, [account, dispatch])
// }

// export const useProfile = () => {
//   const { isInitialized, isLoading, data, hasRegistered }: ProfileState = useSelector((state: State) => state.profile)
//   return { profile: data, hasProfile: isInitialized && hasRegistered, isInitialized, isLoading }
// }

// // --------------------
// //  Teams
// // --------------------

// export const useTeam = (id: number) => {
//   const team: Team = useSelector((state: State) => state.teams.data[id])
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchTeam(id))
//   }, [id, dispatch])

//   return team
// }

// export const useTeams = () => {
//   const { isInitialized, isLoading, data }: TeamsState = useSelector((state: State) => state.teams)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchTeams())
//   }, [dispatch])

//   return { teams: data, isInitialized, isLoading }
// }

// // --------------------
// //  Achievements
// // --------------------

// export const useFetchAchievements = () => {
//   const { account } = useWallet()
//   const dispatch = useDispatch()

//   useEffect(() => {
//     if (account) {
//       dispatch(fetchAchievements(account))
//     }
//   }, [account, dispatch])
// }

// export const useAchievements = () => {
//   const achievements: AchievementState['data'] = useSelector((state: State) => state.achievements.data)
//   return achievements
// }