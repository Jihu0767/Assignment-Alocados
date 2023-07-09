import St from 'styles/home/Home.style'
import MyCoinList from './MyCoinList'
import ExchangeForm from './ExchangeForm'
import React from 'react'

const HomeTemplate = () => {
  return (
    <>
      <St.HomeTitle>환전하기</St.HomeTitle>
      <St.HomeContainer>
        <MyCoinList />
        <ExchangeForm />
      </St.HomeContainer>
    </>
  )
}

export default HomeTemplate
