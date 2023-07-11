import { FC } from 'react'
import { ExchangeHistoriesType } from 'store/exchange/exchangeSlice'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/ArrowRight.svg'
import { CoinNameToUnit } from 'static/coinNameToUnit'
import CoinToIcon from 'components/CoinToIcon'
import St from 'styles/components/RecentlyRecordRow.style'
import { commaFormat } from '../utils/formatUtil'

const RecentlyExchangeRow: FC<ExchangeHistoriesType> = ({
  targetCoinName,
  sourceCoinName,
  sourceCoinAmount,
  resultAmount,
  date,
}) => {
  return (
    <St.RecentlyRecordsWrapper>
      <St.RecentlyRecordDate>{date}</St.RecentlyRecordDate>
      <St.RecentlyRecordCoinsWrpaper>
        <St.RecentlyRecordCoin>
          <CoinToIcon coinName={sourceCoinName} />
          <span data-testid={`source-${sourceCoinName}-amount-record`}>{commaFormat(sourceCoinAmount, 2)}</span>{' '}
          {CoinNameToUnit[sourceCoinName]}
        </St.RecentlyRecordCoin>
        <ArrowRightIcon />
        <St.RecentlyRecordCoin>
          <CoinToIcon coinName={targetCoinName} />
          <span data-testid={`result-${sourceCoinName}-amount-record`}>{commaFormat(resultAmount, 2)}</span>{' '}
          {CoinNameToUnit[targetCoinName]}
        </St.RecentlyRecordCoin>
      </St.RecentlyRecordCoinsWrpaper>
    </St.RecentlyRecordsWrapper>
  )
}

export default RecentlyExchangeRow
