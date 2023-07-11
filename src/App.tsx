import React from 'react'
import GlobalStyle from 'styles/GlobalStyle'
import { Route, Routes } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import Home from 'pages/Home'
import TransHistories from 'pages/TransHistories'
import Header from './components/Header'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transHistories" element={<TransHistories />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
