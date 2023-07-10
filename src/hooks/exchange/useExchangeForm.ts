import { useState } from 'react'
import { ExchangeCoinType } from 'types/exchange/exchange.type'
import { addHistory, currencyExchange, setVisibleExchangeNotice } from 'store/exchange/exchangeSlice'
import { getNowDate } from 'utils/dateUtil'
import { useAppDispatch } from 'hooks/redux/useAppDispatch'
import useInput from 'hooks/useInput'

const useExchangeForm = (initialSelectedCoin: ExchangeCoinType[]) => {
  const dispatch = useAppDispatch()

  const [selectedSourceCoin, setSelectedSourceCoin] = useState<ExchangeCoinType>(initialSelectedCoin[0])
  const [selectedTargetCoin, setSelectedTargetCoin] = useState<ExchangeCoinType>(initialSelectedCoin[1])
  const {
    value: sourceCoinAmount,
    setValue: setSourceCoinAmount,
    onlyNumberHandler: handleSourceCoinAmount,
  } = useInput('')

  const submitExchange = (sourceCoinAmount: number, exchangeResultAmount: number) => {
    dispatch(
      currencyExchange({
        sourceCoin: selectedSourceCoin,
        targetCoin: selectedTargetCoin,
        amount: sourceCoinAmount,
      })
    )

    dispatch(
      addHistory({
        date: getNowDate(),
        sourceCoinName: selectedSourceCoin,
        sourceCoinAmount: sourceCoinAmount,
        targetCoinName: selectedTargetCoin,
        resultAmount: exchangeResultAmount,
      })
    )
    dispatch(setVisibleExchangeNotice())
    setSourceCoinAmount('')
  }

  return {
    selectedSourceCoin,
    setSelectedSourceCoin,
    selectedTargetCoin,
    setSelectedTargetCoin,
    sourceCoinAmount,
    handleSourceCoinAmount,
    submitExchange,
  }
}

export default useExchangeForm
