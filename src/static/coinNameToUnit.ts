import { ExchangeCoinType, ExchangeUnitType } from '../types/exchange/exchange.type'

export const CoinNameToUnit: Readonly<Record<ExchangeCoinType, ExchangeUnitType>> = {
  Ethereum: 'ETH',
  Solana: 'SOL',
  BnB: 'BNB',
} as const
