import { useAppDispatch } from 'hooks/redux/useAppDispatch'
import { useEffect } from 'react'
import St from 'styles/home/Home.style'
import Input from 'components/common/inputs/Input'
import { ReactComponent as SwapIcon } from 'assets/icons/SwapIcon.svg'
import { ReactComponent as SolanaIcon } from 'assets/icons/Solana.svg'
import { ReactComponent as EthereumIcon } from 'assets/icons/Ethereum.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/ArrowRight.svg'
import Button from 'components/common/buttons/Button'
import { currencyExchange } from '../../../store/exchange/exchangeSlice'
const ExchangeForm = () => {
  const dispatch = useAppDispatch()

  return (
    <St.ExchangeFormContainer>
      <St.InputWrapper>
        <Input labelText={'전환 수량 (FROM)'} />
        <Button background={'white'}>
          <SwapIcon />
        </Button>
        <Input labelText={'전환 수량 (TO)'} />
      </St.InputWrapper>
      <St.ExchangeButton type={'button'}>환전</St.ExchangeButton>
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
    </St.ExchangeFormContainer>
  )
}

export default ExchangeForm
