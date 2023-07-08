import { combineReducers } from '@reduxjs/toolkit'
import exchangeReducer from './exchange/exchangeSlice'

const reducer = combineReducers({
  exchangeReducer,
})

export default reducer
