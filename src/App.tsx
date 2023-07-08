import React from 'react'
import GlobalStyle from 'styles/GlobalStyle'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalTheme } from 'styles/GlobalTheme'
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={GlobalTheme}>
        <Routes>
          <Route path="'/" element={<></>} />
          <Route path="'/transDetails " element={<></>} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
