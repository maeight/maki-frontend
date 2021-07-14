import BigNumber from 'bignumber.js'
import { getMakiVaultContract } from 'utils/contractHelpers'

const makiVaultContract = getMakiVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await makiVaultContract.methods.userInfo(account).call()
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime as string,
      lastUserActionTime: userContractResponse.lastUserActionTime as string,
      makiAtLastUserAction: new BigNumber(userContractResponse.makiAtLastUserAction).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      makiAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
