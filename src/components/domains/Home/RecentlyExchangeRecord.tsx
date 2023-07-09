import St from 'styles/home/Home.style'
import { ReactComponent as EthereumIcon } from 'assets/icons/Ethereum.svg'
import { ReactComponent as SolanaIcon } from 'assets/icons/Solana.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/ArrowRight.svg'
import { useAppSelector } from '../../../hooks/redux/useAppSelector'
import { CoinNameToUnit } from '../../../static/coinNameToUnit'
const RecentlyExchangeRecord = () => {
  const { exchangeHistories } = useAppSelector((state) => state.exchangeReducer)
  const recentlyHistory = exchangeHistories

  if (recentlyHistory.length === 0) {
    return <></>
  }

  const { date, resultAmount, sourceCoinAmount, sourceCoinName, targetCoinName } = recentlyHistory[0]
  return (
    <St.RecentlyRecordsWrapper>
      <St.RecentlyRecordDate>{date}</St.RecentlyRecordDate>
      <St.RecentlyRecordCoinsWrpaper>
        <St.RecentlyRecordCoin>
          <EthereumIcon />
          {sourceCoinAmount} {CoinNameToUnit[sourceCoinName]}
        </St.RecentlyRecordCoin>
        <ArrowRightIcon />
        <St.RecentlyRecordCoin>
          <SolanaIcon />
          {resultAmount} {CoinNameToUnit[targetCoinName]}
        </St.RecentlyRecordCoin>
      </St.RecentlyRecordCoinsWrpaper>
    </St.RecentlyRecordsWrapper>
  )
}

export default RecentlyExchangeRecord
