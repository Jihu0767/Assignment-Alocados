import St from 'styles/home/Home.style'
import MyCoinListItem from './MyCoinListItem'
import { ReactComponent as SolanaIcon } from 'assets/icons/Solana.svg'
import { ReactComponent as EthereumIcon } from 'assets/icons/Ethereum.svg'
import { ReactComponent as BnBIcon } from 'assets/icons/BnB.svg.svg'

const MyCoinList = () => {
  return (
    <St.MyCoinListContainer>
      <h2>지갑</h2>
      <hr />

      <St.MyCoinList>
        <MyCoinListItem></MyCoinListItem>
        <MyCoinListItem></MyCoinListItem>
        <MyCoinListItem></MyCoinListItem>
      </St.MyCoinList>
    </St.MyCoinListContainer>
  )
}

export default MyCoinList
