import React, { useMemo, useState } from 'react'
import St from 'styles/home/Home.style'
import Input from 'components/common/inputs/Input'
import { ReactComponent as SwapIcon } from 'assets/icons/SwapIcon.svg'
import RecentlyExchangeRecord from './RecentlyExchangeRecord'
import DropDown from 'components/common/select/DropDown'
import { useAppSelector } from 'hooks/redux/useAppSelector'
import CoinToIcon from 'components/common/CoinToIcon'
import { ExchangeCoinType } from 'types/exchange/exchange.type'
import useInput from 'hooks/useInput'
import { ExchangeRates } from 'static/exchangeRate'
import { useAppDispatch } from 'hooks/redux/useAppDispatch'
import { currencyExchange, addHistory, setVisibleExchangeNotice } from 'store/exchange/exchangeSlice'
import { getNowDate } from '../../../utils/dateUtil'

const ExchangeForm = () => {
  const dispatch = useAppDispatch()
  const { coinList } = useAppSelector((state) => state.exchangeReducer)

  const [selectedSourceCoin, setSelectedSourceCoin] = useState<ExchangeCoinType>(coinList[0].name)
  const [selectedTargetCoin, setSelectedTargetCoin] = useState<ExchangeCoinType>(coinList[1].name)
  const [sourceCoinAmount, setSourceCoinAmount, handleSourceCoinAmount] = useInput('0')

  const exchangeResultAmount = useMemo(() => {
    const rate = ExchangeRates[selectedSourceCoin][selectedTargetCoin] as number
    const targetAmount = Number(sourceCoinAmount) * rate
    if (selectedSourceCoin === selectedTargetCoin) {
      return Number(sourceCoinAmount)
    } else {
      return targetAmount
    }
  }, [sourceCoinAmount, selectedSourceCoin, selectedTargetCoin])

  const submitExchange = () => {
    dispatch(
      currencyExchange({
        sourceCoin: selectedSourceCoin,
        targetCoin: selectedTargetCoin,
        amount: Number(sourceCoinAmount),
      })
    )

    dispatch(
      addHistory({
        date: getNowDate(),
        sourceCoinName: selectedSourceCoin,
        sourceCoinAmount: Number(sourceCoinAmount),
        targetCoinName: selectedTargetCoin,
        resultAmount: exchangeResultAmount,
      })
    )

    dispatch(setVisibleExchangeNotice())
    setSourceCoinAmount('0')
  }

  const selectSourceCoin = (item: ExchangeCoinType) => {
    setSelectedSourceCoin(item)
  }

  const selectTargetCoin = (item: ExchangeCoinType) => {
    setSelectedTargetCoin(item)
  }

  /**
   * 1. 오직 숫자 및 하나의 . 만 입력 가능
   * 2. 0 또는 소유 자산보다 큰 값 입력 시 `error` 처리
   *     - border 색상 변경
   * 3. 최대 소수점 10번째 자리까지만 입력 가능
   *     - 환전 시 소수점 10번째 자리까지 모두 계산
   */
  const checkInputInvalid = (value: string) => {
    const onlyOneDotRegex = /^(?!.*\..*\..*)[^.]*\.?[^.]*$/
    const decimalLength = /^(?!.*\..{11})[^.]*\.?[^.]{0,10}$/
    const currentAmount = coinList.filter((item) => item.name === selectedSourceCoin)[0].amount

    const validOneDot = onlyOneDotRegex.test(value)
    const validDecimalLength = decimalLength.test(value)
    const overflowAmount = Number(value) > currentAmount

    return !validOneDot || !validDecimalLength || overflowAmount
  }

  /**
   * 환전될 갯수가 1보다 작은경우
   * 코인 선택이 안된경우
   * 입력된 값이 없는 경우
   * 선택된 코인이 같은 경우
   */
  const buttonValidation = useMemo(() => {
    const targetCoinQty = coinList.filter((item) => item.name === selectedSourceCoin)[0].amount
    const sameSelectedCoin = selectedSourceCoin !== selectedTargetCoin
    const isValidButton =
      sourceCoinAmount !== '' &&
      exchangeResultAmount >= 1 &&
      targetCoinQty >= Number(sourceCoinAmount) &&
      sameSelectedCoin

    return !isValidButton
  }, [sourceCoinAmount])

  return (
    <St.ExchangeFormContainer>
      <St.InfoWrapper>
        <St.InputWrapper>
          <Input
            labelText={'전환 수량 (FROM)'}
            wrapperClassName={'amount-input'}
            value={sourceCoinAmount}
            onChange={handleSourceCoinAmount}
            isInvalid={checkInputInvalid(sourceCoinAmount)}
            placeholder={'0'}
          />
          <DropDown<ExchangeCoinType> className={'dropdown'} value={selectedSourceCoin} onChange={selectSourceCoin}>
            <DropDown.Trigger>
              <St.DropDownItemInfo>
                <CoinToIcon coinName={selectedSourceCoin as ExchangeCoinType} />
                {selectedSourceCoin}
              </St.DropDownItemInfo>
            </DropDown.Trigger>
            <DropDown.Menu>
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
            </DropDown.Menu>
          </DropDown>
        </St.InputWrapper>

        <SwapIcon />

        <St.InputWrapper>
          <Input labelText={'전환 수량 (TO)'} wrapperClassName={'amount-input'} value={exchangeResultAmount} readOnly />
          <DropDown<ExchangeCoinType> className={'dropdown'} value={selectedTargetCoin} onChange={selectTargetCoin}>
            <DropDown.Trigger>
              <St.DropDownItemInfo>
                <CoinToIcon coinName={selectedTargetCoin as ExchangeCoinType} />
                {selectedTargetCoin}
              </St.DropDownItemInfo>
            </DropDown.Trigger>
            <DropDown.Menu>
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
            </DropDown.Menu>
          </DropDown>
        </St.InputWrapper>
      </St.InfoWrapper>
      <St.ExchangeButton type={'button'} background={'primary100'} onClick={submitExchange} disabled={buttonValidation}>
        환전
      </St.ExchangeButton>
      <RecentlyExchangeRecord />
    </St.ExchangeFormContainer>
  )
}

export default ExchangeForm
