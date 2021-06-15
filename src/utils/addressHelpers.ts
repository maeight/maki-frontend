import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const mainNetChainId = 128
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}


// Native
export const getWhtAddress = () => {
  return getAddress(tokens.wht.address)
}
export const getMakiAddress = () => {
  return getAddress(tokens.maki.address)
}
export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getMakiVaultAddress = () => {
  return getAddress(addresses.makiVault)
}
export const getProfileAddress = () => {
  return getAddress(addresses.makiProfile)
}

// Pancakeswap
// export const getLotteryAddress = () => {
//   return getAddress(addresses.lottery)
// }
// export const getLotteryTicketAddress = () => {
//   return getAddress(addresses.lotteryNFT)
// }
// export const getPancakeRabbitsAddress = () => {
//   return getAddress(addresses.pancakeRabbits)
// }
// export const getBunnyFactoryAddress = () => {
//   return getAddress(addresses.bunnyFactory)
// }
// export const getClaimRefundAddress = () => {
//   return getAddress(addresses.claimRefund)
// }
// export const getPointCenterIfoAddress = () => {
//   return getAddress(addresses.pointCenterIfo)
// }
// export const getBunnySpecialAddress = () => {
//   return getAddress(addresses.bunnySpecial)
// }
