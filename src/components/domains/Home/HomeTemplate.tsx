import St from 'styles/home/Home.style'
import MyCoinList from './MyCoinList'
import ExchangeForm from './ExchangeForm'
import React from 'react'

const HomeTemplate = () => {
  return (
    <St.HomeContainer>
      <MyCoinList />
      <ExchangeForm />
    </St.HomeContainer>
  )
}

export default HomeTemplate
