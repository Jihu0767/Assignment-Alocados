import { ReactNode } from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import { GlobalTheme } from './styles/GlobalTheme'
import App from './App'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store/store'
import { clear } from '@testing-library/user-event/dist/clear'

describe('홈 환전 테스트', () => {
  test('1. 자산 기본값 1000개', async () => {
    renderWithProvider(<App />, { route: '/' })

    const coinAmountElements = screen.getAllByTestId(/coin-amount/)

    coinAmountElements.forEach((coinAmountElement) => {
      expect(coinAmountElement.textContent).toBe('1,000')
    })
  })

  test('2. 이더리움 100.0000000005 개를 Solana로 환전 - 솔라나 갯수 10,000.00000005로 변경 - 이더리움 899.9999999995로 변경', async () => {
    renderWithProvider(<App />, { route: '/' })

    const input = screen.getByTestId('source-coin-input')

    fireEvent.change(input, {
      target: {
        value: '100.0000000005',
      },
    })

    const sourceCoin = 'Ethereum'
    const targetCoin = 'Solana'

    // 타겟 드롭다운에서 Solana 클릭
    const targetCoinDropDown = screen.getByTestId('target-coin-dropdown-trigger')
    expect(targetCoinDropDown).toBeInTheDocument()
    await userEvent.click(targetCoinDropDown)

    const targetCoinDropdownItem = screen.getByTestId(`target-coin-item-${targetCoin}`)
    expect(targetCoinDropdownItem).toBeInTheDocument()
    await userEvent.click(targetCoinDropdownItem)

    const exchangeButton = screen.getByText('환전')
    expect(exchangeButton).toBeInTheDocument()
    await userEvent.click(screen.getByText('환전'))

    expect(screen.getByTestId(`${sourceCoin}-coin-amount`).textContent).toBe('899.9999999995')
    expect(screen.getByTestId(`${targetCoin}-coin-amount`).textContent).toBe('11,000.00000005')
  })

  test('3. 환전 - 홈에 가장 최근 거래내역 노출', async () => {
    renderWithProvider(<App />, { route: '/' })
    const input = screen.getByTestId('source-coin-input')
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {
      target: {
        value: '100',
      },
    })

    const sourceCoin = 'Ethereum'
    const targetCoin = 'Solana'

    // 타겟 드롭다운에서 Solana 클릭
    const targetCoinDropDown = screen.getByTestId('target-coin-dropdown-trigger')
    expect(targetCoinDropDown).toBeInTheDocument()
    await userEvent.click(targetCoinDropDown)

    const targetCoinDropdownItem = screen.getByTestId(`target-coin-item-${targetCoin}`)
    expect(targetCoinDropdownItem).toBeInTheDocument()
    await userEvent.click(targetCoinDropdownItem)

    const exchangeButton = screen.getByText('환전')
    expect(exchangeButton).toBeInTheDocument()
    await userEvent.click(screen.getByText('환전'))

    // 최근 기록은 소수점 2째자리까지 출력
    expect(screen.getByTestId(`source-${sourceCoin}-amount-record`).textContent).toBe('100')
    expect(screen.getByTestId(`result-${targetCoin}-amount-record`).textContent).toBe('10,000')
  })

  test('4. 환전 - Input value 초기화', async () => {
    renderWithProvider(<App />, { route: '/' })
    const input = screen.getByTestId('source-coin-input')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, {
      target: {
        value: '100',
      },
    })

    const targetCoin = 'Solana'

    // 타겟 드롭다운에서 Solana 클릭
    const targetCoinDropDown = screen.getByTestId('target-coin-dropdown-trigger')
    expect(targetCoinDropDown).toBeInTheDocument()
    await userEvent.click(targetCoinDropDown)

    const targetCoinDropdownItem = screen.getByTestId(`target-coin-item-${targetCoin}`)
    expect(targetCoinDropdownItem).toBeInTheDocument()
    await userEvent.click(targetCoinDropdownItem)

    const exchangeButton = screen.getByText('환전')
    expect(exchangeButton).toBeInTheDocument()
    await userEvent.click(screen.getByText('환전'))

    expect(input.textContent).toBe('')
  })

  test('5. 환전 후 Notice 표시', async () => {
    renderWithProvider(<App />, { route: '/' })
    const input = screen.getByTestId('source-coin-input')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, {
      target: {
        value: '100.0000000005',
      },
    })

    const targetCoin = 'Solana'

    // 타겟 드롭다운에서 Solana 클릭
    await userEvent.click(screen.getByTestId('target-coin-dropdown-trigger'))
    await userEvent.click(screen.getByTestId(`target-coin-item-${targetCoin}`))

    await userEvent.click(screen.getByText('환전'))

    expect(screen.getByText(/최근 거래 후 갱신되었습니다./))
  })

  test('6. 99 Solana는 Ethereum으로 교환 불가능한지 체크', async () => {
    renderWithProvider(<App />, { route: '/' })

    const sourceCoin = 'Solana'
    const targetCoin = 'Ethereum'

    // 소스코인 드롭다운에서 Solana 클릭
    await userEvent.click(screen.getByTestId('source-coin-dropdown-trigger'))
    await userEvent.click(screen.getByTestId(`source-coin-item-${sourceCoin}`))

    const input = screen.getByTestId('source-coin-input')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, {
      target: {
        value: '99',
      },
    })

    // 타겟코인 드롭다운에서 Ethereum 클릭
    await userEvent.click(screen.getByTestId('target-coin-dropdown-trigger'))
    await userEvent.click(screen.getByTestId(`target-coin-item-${targetCoin}`))

    expect(screen.getByRole('button', { name: '환전' })).toBeDisabled()
  })
})

describe('Input validation', () => {
  test('소수점 10자리 이상 입력 시 Input Invalid', async () => {
    renderWithProvider(<App />, { route: '/' })

    const input = screen.getByTestId('source-coin-input')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, {
      target: {
        value: '100.12345678910',
      },
    })

    expect(input.className.includes('valid-false')).toBe(true)
  })

  test('input에 하나의 .만 입력가능', () => {
    renderWithProvider(<App />, { route: '/' })

    const input = screen.getByTestId('source-coin-input')
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {
      target: {
        value: '100..1234567',
      },
    })

    expect(input.textContent).toBe('')
  })
})

describe('Button Validation', () => {
  test('input이 error인 경우 button disabled', () => {
    renderWithProvider(<App />, { route: '/' })

    const input = screen.getByTestId('source-coin-input')
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {
      target: {
        value: '100.12345678910',
      },
    })

    expect(input.className.includes('valid-false')).toBe(true)

    expect(screen.getByRole('button', { name: '환전' })).toBeDisabled()
  })

  test('input에 입력된 값이 없을 경우 button disabled', async () => {
    renderWithProvider(<App />, { route: '/' })

    const input = screen.getByTestId('source-coin-input')

    expect(input).toBeInTheDocument()

    // 인풋에 아무것도 입력되어 있지 않다면 button은 disabled
    const exchangeButton = screen.getByRole('button', { name: '환전' })
    expect(exchangeButton).toBeInTheDocument()
    expect(exchangeButton).toBeDisabled()
  })
})

describe('환전내역 테스트', () => {
  afterEach(() => {
    cleanup()
  })
  test('이더리움 100개를 Solana 10,000개로 환전 후 환전내역 확인', async () => {
    renderWithProvider(<App />, { route: '/' })

    const input = screen.getByTestId('source-coin-input')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, {
      target: {
        value: '100',
      },
    })
    // 이더리움 100개를 Solana 10,000개로 환전
    const exchangeButton = await screen.getByRole('button', { name: '환전' })
    expect(exchangeButton).toBeInTheDocument()
    await userEvent.click(exchangeButton)

    const exchangeRecordLink = await screen.getByText('거래내역')
    expect(exchangeRecordLink).toBeInTheDocument()

    await userEvent.click(exchangeRecordLink)

    const sourceCoin = 'Ethereum'

    // 최근 기록은 소수점 2째자리까지 출력
    expect(screen.getAllByTestId(`source-${sourceCoin}-amount-record`).length)
  })
})
function renderWithProvider(Component: ReactNode, options: { route: string }) {
  return render(
    <MemoryRouter initialEntries={[options.route]}>
      <Provider store={Store}>
        <ThemeProvider theme={GlobalTheme}>{Component}</ThemeProvider>
      </Provider>
    </MemoryRouter>
  )
}
