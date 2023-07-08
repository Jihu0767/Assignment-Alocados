import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coinList: [
    {
      name: 'Ethereun',
      amount: 1000,
    },
    {
      name: 'Solana',
      amount: 1000,
    },
    {
      name: 'BnB',
      amount: 1000,
    },
  ],
}

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    currencyExchange() {
      console.log()
    },
  },
})
export const { currencyExchange } = exchangeSlice.actions
export default exchangeSlice.reducer
