import React from 'react'
import GlobalStyle from 'styles/GlobalStyle'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalTheme } from 'styles/GlobalTheme'
import Layout from 'components/Layout/Layout'
import Home from 'pages/Home'
import TransDetail from 'pages/TransDetail'
import Header from './components/common/Header'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={GlobalTheme}>
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transDetail" element={<TransDetail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
