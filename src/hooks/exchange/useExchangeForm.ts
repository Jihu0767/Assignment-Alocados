import { useMemo, useState } from 'react'
import { ExchangeCoinType } from 'types/exchange/exchange.type'
import { addHistory, currencyExchange, setVisibleExchangeNotice } from 'store/exchange/exchangeSlice'
import { getNowDate } from 'utils/dateUtil'
import { useAppDispatch } from 'hooks/redux/useAppDispatch'
import useInput from 'hooks/useInput'
import { ExchangeRates } from '../../static/exchangeRate'

const useExchangeForm = (initialSelectedCoin: ExchangeCoinType[]) => {
  const dispatch = useAppDispatch()

  const [selectedSourceCoin, setSelectedSourceCoin] = useState<ExchangeCoinType>(initialSelectedCoin[0])
  const [selectedTargetCoin, setSelectedTargetCoin] = useState<ExchangeCoinType>(initialSelectedCoin[1])
  const {
    value: sourceCoinAmount,
    setValue: setSourceCoinAmount,
    onlyNumberHandler: handleSourceCoinAmount,
  } = useInput('')

  const exchangeResultAmount = useMemo(() => {
    const rate = ExchangeRates[selectedSourceCoin][selectedTargetCoin] as number
    const targetAmount = Number(sourceCoinAmount) * rate
    if (selectedSourceCoin === selectedTargetCoin) {
      return Number(sourceCoinAmount)
    } else {
      return targetAmount
    }
  }, [sourceCoinAmount, selectedSourceCoin, selectedTargetCoin])

  const submitExchange = (sourceCoinAmount: number, exchangeResultAmount: number) => {
    dispatch(
      currencyExchange({
        sourceCoin: selectedSourceCoin as ExchangeCoinType,
        targetCoin: selectedTargetCoin as ExchangeCoinType,
        amount: sourceCoinAmount,
      })
    )

    dispatch(
      addHistory({
        date: getNowDate(),
        sourceCoinName: selectedSourceCoin as ExchangeCoinType,
        sourceCoinAmount: sourceCoinAmount,
        targetCoinName: selectedTargetCoin as ExchangeCoinType,
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
    exchangeResultAmount,
  }
}

export default useExchangeForm
