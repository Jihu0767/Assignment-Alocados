import St from 'styles/home/Home.style'
import { ReactComponent as EthereumIcon } from 'assets/icons/Ethereum.svg'
import { ReactComponent as SolanaIcon } from 'assets/icons/Solana.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/ArrowRight.svg'
const RecentlyExchangeRecord = () => {
  return (
    <St.RecentlyRecordsWrapper>
      <St.RecentlyRecordDate>2023-03-12, AM 10:50</St.RecentlyRecordDate>
      <St.RecentlyRecordCoinsWrpaper>
        <St.RecentlyRecordCoin>
          <EthereumIcon />
          1,302.44 ETH
        </St.RecentlyRecordCoin>
        <ArrowRightIcon />
        <St.RecentlyRecordCoin>
          <SolanaIcon />
          1,302.44 SOL
        </St.RecentlyRecordCoin>
      </St.RecentlyRecordCoinsWrpaper>
    </St.RecentlyRecordsWrapper>
  )
}

export default RecentlyExchangeRecord
