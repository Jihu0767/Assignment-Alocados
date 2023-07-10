import { useAppSelector } from 'hooks/redux/useAppSelector'
import RecentlyExchangeRow from 'components/RecentlyExchangeRow'

const RecentlyExchangeRecord = () => {
  const { exchangeHistories } = useAppSelector((state) => state.exchangeReducer)
  const recentlyHistory = exchangeHistories

  if (recentlyHistory.length === 0) {
    return <></>
  }

  const { date, resultAmount, sourceCoinAmount, sourceCoinName, targetCoinName } = recentlyHistory[0]
  return (
    <RecentlyExchangeRow
      date={date}
      sourceCoinName={sourceCoinName}
      sourceCoinAmount={sourceCoinAmount}
      targetCoinName={targetCoinName}
      resultAmount={resultAmount}
    />
  )
}

export default RecentlyExchangeRecord
