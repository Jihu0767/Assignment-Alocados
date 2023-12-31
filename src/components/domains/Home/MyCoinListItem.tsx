import { FC } from 'react'
import St from 'styles/pages/home/Home.style'
import CoinToIcon from 'components/CoinToIcon'
import { ExchangeCoinType } from 'types/exchange/exchange.type'
import { commaFormat } from 'utils/formatUtil'
import { CoinNameToUnit } from 'static/coinNameToUnit'

interface MyCoinListItemProps {
  coinName: ExchangeCoinType
  amount: number
}

const MyCoinListItem: FC<MyCoinListItemProps> = ({ coinName, amount }) => {
  return (
    <St.MyCoinListItem>
      <St.SymbolInfo>
        <St.CoinIconWrapper>
          <CoinToIcon coinName={coinName} />
        </St.CoinIconWrapper>
        <St.CoinName>{coinName}</St.CoinName>
      </St.SymbolInfo>
      <St.ExchangeAmount>
        <span data-testid={`${coinName}-coin-amount`} className={'amount'}>
          {commaFormat(amount)}
        </span>
        <span className={'unit'}>{CoinNameToUnit[coinName]}</span>
      </St.ExchangeAmount>
    </St.MyCoinListItem>
  )
}

export default MyCoinListItem
