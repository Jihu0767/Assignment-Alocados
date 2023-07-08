import St from 'styles/home/Home.style'
import { ReactComponent as SolanaIcon } from 'assets/icons/Solana.svg'
import { ReactComponent as EthereumIcon } from 'assets/icons/Ethereum.svg'
import { ReactComponent as BnBIcon } from 'assets/icons/BnB.svg.svg'

const MyCoinListItem = () => {
  return (
    <St.MyCoinListItem>
      <St.SymbolInfo>
        <St.CoinIconWrapper>
          <SolanaIcon />
        </St.CoinIconWrapper>
        <St.CoinName>Solana</St.CoinName>
      </St.SymbolInfo>
      <St.ExchangeAmount>
        <span className={'amount'}>1,211,023,512.34</span>
        <span className={'unit'}>SOL</span>
      </St.ExchangeAmount>
    </St.MyCoinListItem>
  )
}

export default MyCoinListItem
