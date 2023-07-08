import { ExchangeCoinType } from 'types/exchange/exchange.type'

interface ExchangeRatesType {
  [sourceCoin: string]: Partial<Record<ExchangeCoinType, number>>
}

export const exchangeRates: ExchangeRatesType = {
  // Ethereum 1개는 Solana 100개 BnB는 50개
  Ethereum: {
    Solana: 100,
    BnB: 50,
  },
  Solana: {
    Ethereum: 0.01,
    BnB: 0.5,
  },
  BnB: {
    Ethereum: 0.02,
    Solana: 2,
  },
} as const
