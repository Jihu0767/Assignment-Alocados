import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import reducer from 'store/rootReducer'

const middleware = [...getDefaultMiddleware()]
const Store = configureStore({
  reducer,
  middleware,
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

export default Store
