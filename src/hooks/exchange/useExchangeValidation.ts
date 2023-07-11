import { useCallback, useMemo } from 'react'
import { useAppSelector } from 'hooks/redux/useAppSelector'
import { ExchangeCoinType } from 'types/exchange/exchange.type'

interface useExchangeValidationProps {
  selectedSourceCoin: ExchangeCoinType
  selectedTargetCoin: ExchangeCoinType
  sourceCoinAmount: number
  exchangeResultAmount: number
}

const useExchangeValidation = ({
  selectedSourceCoin,
  selectedTargetCoin,
  sourceCoinAmount,
  exchangeResultAmount,
}: useExchangeValidationProps) => {
  const { coinList } = useAppSelector((state) => state.exchangeReducer)
  /**
   * 1. 오직 숫자 및 하나의 . 만 입력 가능
   * 2. 0 또는 소유 자산보다 큰 값 입력 시 `error` 처리
   *     - border 색상 변경
   * 3. 최대 소수점 10번째 자리까지만 입력 가능
   *     - 환전 시 소수점 10번째 자리까지 모두 계산
   */
  const checkInputInvalid = useCallback(
    (value: string) => {
      const onlyOneDotRegex = /^(?!.*\..*\..*)[^.]*\.?[^.]*$/
      const decimalLength = /^(?!.*\..{11})[^.]*\.?[^.]{0,10}$/
      const currentAmount = coinList.filter((item) => item.name === selectedSourceCoin)[0].amount

      const validOneDot = onlyOneDotRegex.test(value)
      const validDecimalLength = decimalLength.test(value)
      const overflowAmount = Number(value) > currentAmount
      const isZero = value === '0'

      return !validOneDot || !validDecimalLength || overflowAmount || isZero
    },
    [sourceCoinAmount]
  )

  /**
   * 환전될 갯수가 1보다 작은경우
   * 입력된 값이 없는 경우
   * 선택된 코인이 같은 경우
   */
  const buttonInvalid = useMemo(() => {
    const sameSelectedCoin = selectedSourceCoin !== selectedTargetCoin

    const isValidButton = sourceCoinAmount !== 0 && exchangeResultAmount >= 1 && sameSelectedCoin

    return !isValidButton
  }, [sourceCoinAmount, selectedSourceCoin, exchangeResultAmount])

  return { checkInputInvalid, buttonInvalid }
}

export default useExchangeValidation
