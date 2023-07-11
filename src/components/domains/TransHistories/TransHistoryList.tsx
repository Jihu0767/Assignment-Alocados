import { useState } from 'react'
import { useAppSelector } from 'hooks/redux/useAppSelector'
import RecentlyExchangeRow from 'components/RecentlyExchangeRow'
import St from 'styles/pages/transdetail/TransDetail.style'
import { ReactComponent as SortIcon } from 'assets/icons/SortIcon.svg'

type ExchangeHistorySortType = 'desc' | 'asce'

const TransHistoryList = () => {
  const { exchangeHistories } = useAppSelector((state) => state.exchangeReducer)
  const [sort, setSort] = useState<ExchangeHistorySortType>('desc')

  const sortedHistories = [...exchangeHistories].sort(() => {
    if (sort === 'desc') {
      return 1
    } else {
      return -1
    }
  })

  const toggleSort = () => {
    if (sort === 'desc') {
      setSort('asce')
    } else {
      setSort('desc')
    }
  }

  return (
    <St.TransHistoryList>
      <St.TransListHead>
        <St.HeadColumn onClick={toggleSort}>
          <span className={'exchange-date'}>환전시간</span>
          <St.SortButton type={'button'} $isAsce={sort === 'asce'}>
            <SortIcon />
          </St.SortButton>
        </St.HeadColumn>
        <St.HeadColumn>환전금액</St.HeadColumn>
      </St.TransListHead>
      {sortedHistories.map((item) => {
        return (
          <RecentlyExchangeRow
            key={item.id}
            date={item.date}
            sourceCoinName={item.sourceCoinName}
            sourceCoinAmount={item.sourceCoinAmount}
            targetCoinName={item.targetCoinName}
            resultAmount={item.resultAmount}
          />
        )
      })}
    </St.TransHistoryList>
  )
}

export default TransHistoryList
