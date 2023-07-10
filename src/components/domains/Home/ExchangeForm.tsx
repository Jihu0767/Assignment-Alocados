import React, { useMemo } from 'react'
import St from 'styles/pages/home/Home.style'
import Input from 'components/common/inputs/Input'
import { ReactComponent as SwapIcon } from 'assets/icons/SwapIcon.svg'
import RecentlyExchangeRecord from './RecentlyExchangeRecord'
import DropDown from 'components/common/dropdown/DropDown'
import { useAppSelector } from 'hooks/redux/useAppSelector'
import CoinToIcon from 'components/CoinToIcon'
import { ExchangeCoinType } from 'types/exchange/exchange.type'
import { ExchangeRates } from 'static/exchangeRate'
import useExchangeForm from 'hooks/exchange/useExchangeForm'
import useExchangeValidation from 'hooks/exchange/useExchangeValidation'

const ExchangeForm = () => {
  const { coinList } = useAppSelector((state) => state.exchangeReducer)

  const {
    selectedSourceCoin,
    selectedTargetCoin,
    setSelectedTargetCoin,
    setSelectedSourceCoin,
    submitExchange,
    sourceCoinAmount,
    handleSourceCoinAmount,
  } = useExchangeForm([coinList[0].name, coinList[1].name])

  const exchangeResultAmount = useMemo(() => {
    const rate = ExchangeRates[selectedSourceCoin][selectedTargetCoin] as number
    const targetAmount = Number(sourceCoinAmount) * rate
    if (selectedSourceCoin === selectedTargetCoin) {
      return Number(sourceCoinAmount)
    } else {
      return targetAmount
    }
  }, [sourceCoinAmount, selectedSourceCoin, selectedTargetCoin])

  const { inputValidation, buttonValidation } = useExchangeValidation({
    exchangeResultAmount,
    sourceCoinAmount: Number(sourceCoinAmount),
    selectedSourceCoin,
    selectedTargetCoin,
  })

  return (
    <St.ExchangeFormContainer>
      <St.InfoWrapper>
        <St.InputWrapper>
          <Input
            labelText={'전환 수량 (FROM)'}
            wrapperClassName={'amount-input'}
            value={sourceCoinAmount === '0' ? undefined : sourceCoinAmount}
            onChange={handleSourceCoinAmount}
            isInvalid={inputValidation(sourceCoinAmount)}
            placeholder={'0'}
          />
          <DropDown<ExchangeCoinType>
            className={'dropdown'}
            value={selectedSourceCoin}
            onChange={setSelectedSourceCoin}
          >
            <DropDown.Trigger>
              <St.DropDownItemInfo>
                <CoinToIcon coinName={selectedSourceCoin as ExchangeCoinType} />
                {selectedSourceCoin}
              </St.DropDownItemInfo>
            </DropDown.Trigger>
            <DropDown.List>
              {coinList.map((item) => {
                return (
                  <>
                    <DropDown.Item key={item.id} value={item.name}>
                      <St.DropDownItemInfo>
                        <CoinToIcon coinName={item.name} />
                        {item.name}
                      </St.DropDownItemInfo>
                    </DropDown.Item>
                  </>
                )
              })}
            </DropDown.List>
          </DropDown>
        </St.InputWrapper>

        <SwapIcon />

        <St.InputWrapper>
          <Input labelText={'전환 수량 (TO)'} wrapperClassName={'amount-input'} value={exchangeResultAmount} readOnly />
          <DropDown<ExchangeCoinType>
            className={'dropdown'}
            value={selectedTargetCoin}
            onChange={setSelectedTargetCoin}
          >
            <DropDown.Trigger>
              <St.DropDownItemInfo>
                <CoinToIcon coinName={selectedTargetCoin as ExchangeCoinType} />
                {selectedTargetCoin}
              </St.DropDownItemInfo>
            </DropDown.Trigger>
            <DropDown.List>
              {coinList.map((item) => {
                return (
                  <DropDown.Item key={item.id} value={item.name}>
                    <St.DropDownItemInfo>
                      <CoinToIcon coinName={item.name} />
                      {item.name}
                    </St.DropDownItemInfo>
                  </DropDown.Item>
                )
              })}
            </DropDown.List>
          </DropDown>
        </St.InputWrapper>
      </St.InfoWrapper>
      <St.ExchangeButton
        type={'button'}
        background={'primary100'}
        onClick={() => submitExchange(Number(sourceCoinAmount), exchangeResultAmount)}
        disabled={buttonValidation}
      >
        환전
      </St.ExchangeButton>
      <RecentlyExchangeRecord />
    </St.ExchangeFormContainer>
  )
}

export default ExchangeForm
