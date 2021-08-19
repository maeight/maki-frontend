import { ethers } from 'ethers'
import getRpcUrl, { getNodeUrlMumbai } from 'utils/getRpcUrl'

const RPC_URL = getRpcUrl()
const RPC_URL_MUMBAI = getNodeUrlMumbai()

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)
export const simpleRpcProviderMumbai = new ethers.providers.JsonRpcProvider(RPC_URL_MUMBAI)

export default null