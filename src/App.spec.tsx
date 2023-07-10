import { render, screen } from '@testing-library/react'
import Home from './pages/Home'

describe('App Test', () => {
  test('렌더 테스트', async () => {
    render(<Home />)
    await screen.findByText(/환전하기/)
  })
})
