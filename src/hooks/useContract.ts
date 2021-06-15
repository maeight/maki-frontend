import { useEffect, useState } from 'react' // useMemo
import { AbiItem } from 'web3-utils'
import { ContractOptions } from 'web3-eth-contract'
import useWeb3 from 'hooks/useWeb3'

// Addresses
import {
  getAddress,
  getMasterChefAddress,
  getMakiAddress,
  getMakiVaultAddress
} from 'utils/addressHelpers'
import { poolsConfig } from 'config/constants'
import { PoolCategory } from 'config/constants/types'

// ABIs
import hrc20 from 'config/abi/hrc20.json'
import masterChef from 'config/abi/masterchef.json'
import sousChef from 'config/abi/sousChef.json'
import sousChefHt from 'config/abi/sousChefHt.json'
import makiVault from 'config/abi/makiVault.json'

// import ifo from 'config/abi/ifo.json'
// import profile from 'config/abi/pancakeProfile.json'
// import pointCenterIfo from 'config/abi/pointCenterIfo.json'
// import bunnySpecial from 'config/abi/bunnySpecial.json'
// import lottery from 'config/abi/lottery.json'
// import lotteryTicket from 'config/abi/lotteryNft.json'

const useContract = (abi: AbiItem, address: string, contractOptions?: ContractOptions) => {
  const web3 = useWeb3()
  const [contract, setContract] = useState(new web3.eth.Contract(abi, address, contractOptions))

  useEffect(() => {
    setContract(new web3.eth.Contract(abi, address, contractOptions))
  }, [abi, address, contractOptions, web3])

  return contract
}

/**
 * Helper hooks to get specific contracts (by ABI)
 */
export const useHRC20 = (address: string) => {
  const hrc20Abi = (hrc20 as unknown) as AbiItem
  return useContract(hrc20Abi, address)
}

export const useMaki = () => {
  return useHRC20(getMakiAddress())
}

export const useMasterchef = () => {
  const abi = (masterChef as unknown) as AbiItem
  return useContract(abi, getMasterChefAddress())
}

export const useSousChef = (id) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const rawAbi = config.poolCategory === PoolCategory.HECO ? sousChefHt : sousChef
  const abi = (rawAbi as unknown) as AbiItem
  return useContract(abi, getAddress(config.contractAddress))
}

// FIX ** NEED TO ADD
export const useMakiVaultContract = () => {
  const abi = (makiVault as unknown) as AbiItem
  return useContract(abi, getMakiVaultAddress())
}

// Pancake
// export const useIfoContract = (address: string) => {
//   const ifoAbi = (hrc20 as unknown) as AbiItem
//   return useContract(ifoAbi, address)
// }

// export const useBunnyFactory = () => {
//   const bunnyFactoryAbi = (hrc20 as unknown) as AbiItem
//   return useContract(bunnyFactoryAbi, getMakiAddress())
// }

// export const usePancakeRabbits = () => {
//   const pancakeRabbitsAbi = (hrc20 as unknown) as AbiItem
//   return useContract(pancakeRabbitsAbi, getMakiAddress())
// }

// export const useProfile = () => {
//   const profileABIAbi = (hrc20 as unknown) as AbiItem
//   return useContract(profileABIAbi, getMakiAddress())
// }

export const useLottery = () => {
  const abi = (hrc20 as unknown) as AbiItem
  return useContract(abi, getMakiAddress())
}

// export const useLotteryTicket = () => {
//   const abi = (hrc20 as unknown) as AbiItem
//   return useContract(abi, getMakiAddress())
// }


// export const usePointCenterIfoContract = () => {
//   const abi = (hrc20 as unknown) as AbiItem
//   return useContract(abi, getMakiAddress())
// }

// export const useBunnySpecialContract = () => {
//   const abi = (hrc20 as unknown) as AbiItem
//   return useContract(abi, getMakiAddress())
// }

export default useContract
