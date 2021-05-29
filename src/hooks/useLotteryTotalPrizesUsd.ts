import { usePriceMakiHusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCake = getBalanceNumber(totalRewards)
  const makiPriceBusd = usePriceMakiHusd()

  return totalCake * makiPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
