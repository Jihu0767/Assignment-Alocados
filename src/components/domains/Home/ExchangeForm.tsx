import St from 'styles/home/Home.style'
import Input from 'components/common/inputs/Input'
import { ReactComponent as SwapIcon } from 'assets/icons/SwapIcon.svg'
import { ReactComponent as DropDownIcon } from 'assets/icons/DropDownIcon.svg'
import RecentlyExchangeRecord from './RecentlyExchangeRecord'
import DropDown from 'components/common/select/DropDown'
import React, { useState } from 'react'
import { useAppSelector } from 'hooks/redux/useAppSelector'
import CoinToIcon from '../../common/CoinToIcon'
import { ExchangeCoinType } from 'types/exchange/exchange.type'

const ExchangeForm = () => {
  const { coinList } = useAppSelector((state) => state.exchangeReducer)
  const [selectedCoinName, setSelectedCoinName] = useState<ExchangeCoinType | string>(coinList[0].name)

  return (
    <St.ExchangeFormContainer>
      <St.InfoWrapper>
        <St.InputWrapper>
          <Input labelText={'전환 수량 (FROM)'} wrapperClassName={'amount-input'} />
          <DropDown className={'dropdown'} value={selectedCoinName} onChange={setSelectedCoinName}>
            <DropDown.Trigger>
              <CoinToIcon coinName={selectedCoinName as ExchangeCoinType} />
              {selectedCoinName}
              <DropDownIcon />
            </DropDown.Trigger>
            <DropDown.Menu>
              {coinList.map((item) => {
                return (
                  <>
                    <DropDown.Item key={item.id} value={item.name}>
                      <CoinToIcon coinName={item.name} />
                      {item.name}
                    </DropDown.Item>
                  </>
                )
              })}
            </DropDown.Menu>
          </DropDown>
        </St.InputWrapper>

        <SwapIcon />

        <St.InputWrapper>
          <Input labelText={'전환 수량 (TO)'} wrapperClassName={'amount-input'} />
          <DropDown className={'dropdown'} value={selectedCoinName} onChange={setSelectedCoinName}>
            <DropDown.Trigger>
              <CoinToIcon coinName={selectedCoinName as ExchangeCoinType} />
              {selectedCoinName}
              <DropDownIcon />
            </DropDown.Trigger>
            <DropDown.Menu>
              {coinList.map((item) => {
                return (
                  <>
                    <DropDown.Item key={item.id} value={item.name}>
                      <CoinToIcon coinName={item.name} />
                      {item.name}
                    </DropDown.Item>
                  </>
                )
              })}
            </DropDown.Menu>
          </DropDown>
        </St.InputWrapper>
      </St.InfoWrapper>
      <St.ExchangeButton type={'button'}>환전</St.ExchangeButton>
      <RecentlyExchangeRecord />
    </St.ExchangeFormContainer>
  )
}

export default ExchangeForm
