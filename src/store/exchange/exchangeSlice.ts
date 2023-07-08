import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExchangeCoinType, ExchangeUnitType } from '../../types/exchange/exchange.type'
import { exchangeRates } from 'static/exchangeRate'

interface ExchangeStateType {
  coinList: {
    id: number
    name: ExchangeCoinType
    unit: ExchangeUnitType
    amount: number
  }[]
}

const initialState: ExchangeStateType = {
  coinList: [
    {
      id: 0,
      name: 'Ethereum',
      unit: 'ETH',
      amount: 1000,
    },
    {
      id: 1,
      name: 'Solana',
      unit: 'SOL',
      amount: 1000,
    },
    {
      id: 2,
      name: 'BnB',
      unit: 'BNB',
      amount: 1000,
    },
  ],
}

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    currencyExchange(
      state,
      action: PayloadAction<{ sourceCoin: ExchangeCoinType; targetCoin: ExchangeCoinType; amount: number }>
    ) {
      const { sourceCoin, targetCoin, amount } = action.payload
      const rate = exchangeRates[sourceCoin][targetCoin] as number
      const convertedAmount = amount * rate

      const updatedCoinList = state.coinList.map((coin) => {
        if (coin.name === sourceCoin) {
          return {
            ...coin,
            amount: coin.amount - amount,
          }
        }
        if (coin.name === targetCoin) {
          return {
            ...coin,
            amount: coin.amount + convertedAmount,
          }
        }
        return coin
      })

      return {
        ...state,
        coinList: updatedCoinList,
      }
    },
  },
})
export const { currencyExchange } = exchangeSlice.actions
export default exchangeSlice.reducer
