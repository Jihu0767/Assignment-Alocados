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
    submitExchange,
    setSelectedSourceCoin,
    sourceCoinAmount,
    handleSourceCoinAmount,
    exchangeResultAmount,
  } = useExchangeForm([coinList[0].name, coinList[1].name])

  const { checkInputInvalid, buttonInvalid } = useExchangeValidation({
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
            className={`valid-${!checkInputInvalid(sourceCoinAmount)}`}
            wrapperClassName={'amount-input'}
            value={sourceCoinAmount === '0' ? undefined : sourceCoinAmount}
            onChange={handleSourceCoinAmount}
            isInvalid={checkInputInvalid(sourceCoinAmount)}
            placeholder={'0'}
            data-testid={`source-coin-input`}
          />
          <DropDown<ExchangeCoinType>
            className={'dropdown'}
            value={selectedSourceCoin}
            onChange={setSelectedSourceCoin}
          >
            <DropDown.Trigger>
              <St.DropDownItemInfo data-testid={'source-coin-dropdown-trigger'}>
                <CoinToIcon coinName={selectedSourceCoin} />
                {selectedSourceCoin}
              </St.DropDownItemInfo>
            </DropDown.Trigger>
            <DropDown.List key={'source-select'}>
              {coinList.map((item) => {
                return (
                  <DropDown.Item key={item.id} value={item.name}>
                    <St.DropDownItemInfo data-testid={`source-coin-item-${item.name}`}>
                      <CoinToIcon coinName={item.name} />
                      {item.name}
                    </St.DropDownItemInfo>
                  </DropDown.Item>
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
              <St.DropDownItemInfo data-testid={'target-coin-dropdown-trigger'}>
                <CoinToIcon coinName={selectedTargetCoin} />
                {selectedTargetCoin}
              </St.DropDownItemInfo>
            </DropDown.Trigger>
            <DropDown.List>
              {coinList.map((item) => {
                return (
                  <DropDown.Item key={item.id} value={item.name} data-testid={`source-coin-item-${item.name}`}>
                    <St.DropDownItemInfo data-testid={`target-coin-item-${item.name}`}>
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
        disabled={buttonInvalid || checkInputInvalid(sourceCoinAmount)}
      >
        환전
      </St.ExchangeButton>
      <RecentlyExchangeRecord />
    </St.ExchangeFormContainer>
  )
}

export default ExchangeForm
