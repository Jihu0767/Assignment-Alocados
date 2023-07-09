import { FC } from 'react'
import { ExchangeHistoriesType } from 'store/exchange/exchangeSlice'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/ArrowRight.svg'
import { CoinNameToUnit } from 'static/coinNameToUnit'
import CoinToIcon from 'components/common/CoinToIcon'
import styled from 'styled-components'

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
          {sourceCoinAmount} {CoinNameToUnit[sourceCoinName]}
        </St.RecentlyRecordCoin>
        <ArrowRightIcon />
        <St.RecentlyRecordCoin>
          <CoinToIcon coinName={targetCoinName} />
          {resultAmount} {CoinNameToUnit[targetCoinName]}
        </St.RecentlyRecordCoin>
      </St.RecentlyRecordCoinsWrpaper>
    </St.RecentlyRecordsWrapper>
  )
}

export default RecentlyExchangeRow

const St = {
  RecentlyRecordsWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${(props) => `${props.theme.spacing.s8} ${props.theme.spacing.s16}`};
    border-radius: ${(props) => props.theme.radius.s12};
    background-color: ${(props) => props.theme.colors.shade100};
  `,
  RecentlyRecordDate: styled.div`
    font-size: 14px;
  `,
  RecentlyRecordCoinsWrpaper: styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.s32};
  `,
  RecentlyRecordCoin: styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.s8};
    font-size: 18px;
    font-weight: 600;
  `,
}
