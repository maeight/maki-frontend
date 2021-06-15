import BigNumber from 'bignumber.js'
import { convertSharesToCake } from 'views/Pools/helpers'
import { getMakiVaultContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'

const makiVaultContract = getMakiVaultContract()

export const fetchPublicVaultData = async () => {
  try {
    const [sharePrice, shares, estimatedMakiBountyReward, totalPendingMakiHarvest] = await makeBatchRequest([
      makiVaultContract.methods.getPricePerFullShare().call,
      makiVaultContract.methods.totalShares().call,
      makiVaultContract.methods.calculateHarvestCakeRewards().call,
      makiVaultContract.methods.calculateTotalPendingCakeRewards().call,
    ])
    const totalSharesAsBigNumber = new BigNumber(shares as string)
    const sharePriceAsBigNumber = new BigNumber(sharePrice as string)
    const totalMakiInVaultEstimate = convertSharesToCake(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalMakiInVault: totalMakiInVaultEstimate.cakeAsBigNumber.toJSON(),
      estimatedMakiBountyReward: new BigNumber(estimatedMakiBountyReward as string).toJSON(),
      totalPendingMakiHarvest: new BigNumber(totalPendingMakiHarvest as string).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalMakiInVault: null,
      estimatedMakiBountyReward: null,
      totalPendingMakiHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const [performanceFee, callFee, withdrawalFee, withdrawalFeePeriod] = await makeBatchRequest([
      makiVaultContract.methods.performanceFee().call,
      makiVaultContract.methods.callFee().call,
      makiVaultContract.methods.withdrawFee().call,
      makiVaultContract.methods.withdrawFeePeriod().call,
    ])
    return {
      performanceFee: parseInt(performanceFee as string, 10),
      callFee: parseInt(callFee as string, 10),
      withdrawalFee: parseInt(withdrawalFee as string, 10),
      withdrawalFeePeriod: parseInt(withdrawalFeePeriod as string, 10),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
