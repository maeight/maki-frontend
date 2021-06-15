import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utils/web3'
import { poolsConfig } from 'config/constants'
import { PoolCategory } from 'config/constants/types'
import { DEFAULT_GAS_PRICE } from 'config'

// -----------------
// Addresses
// -----------------
import {
  getAddress,
  getMakiAddress,
  getMasterChefAddress,
  getMakiVaultAddress
} from 'utils/addressHelpers'

// -----------------
//  ABIs
// -----------------
import hrc20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import lpTokenAbi from 'config/abi/uni_v2_lp.json'

import makiAbi from 'config/abi/maki.json'
import masterChef from 'config/abi/masterchef.json'
import sousChef from 'config/abi/sousChef.json'
import sousChefHt from 'config/abi/sousChefHt.json'
import makiVaultAbi from 'config/abi/makiVault.json' // NEEDS TO BE UPDATED W/ MULTICALL V2

import { getSettings, getGasPriceInWei } from './settings'
// -----------------
//  Functions
// -----------------
export const getContract = (abi: any, address: string, web3?: Web3, account?: string) => {
  const _web3 = web3 ?? web3NoAccount
  const gasPrice = account ? getSettings(account).gasPrice : DEFAULT_GAS_PRICE

  return new _web3.eth.Contract(abi as unknown as AbiItem, address, {
    gasPrice: getGasPriceInWei(gasPrice).toString(),
  })
}
export const getHrc20Contract = (address: string, web3?: Web3) => {
  return getContract(hrc20Abi, address, web3)
}
export const getErc721Contract = (address: string, web3?: Web3) => {
  return getContract(erc721Abi, address, web3)
}
export const getLpContract = (address: string, web3?: Web3) => {
  return getContract(lpTokenAbi, address, web3)
}
export const getMakiContract = (web3?: Web3) => {
  return getContract(makiAbi, getMakiAddress(), web3)
}
export const getMakiVaultContract = (web3?: Web3) => {
  return getContract(makiVaultAbi, getMakiVaultAddress(), web3)
}
export const getMasterchefContract = (web3?: Web3) => {
  return getContract(masterChef, getMasterChefAddress(), web3)
}
export const getSouschefContract = (id: number, web3?: Web3) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const abi = config.poolCategory === PoolCategory.HECO ? sousChefHt : sousChef
  return getContract(abi, getAddress(config.contractAddress), web3)
}