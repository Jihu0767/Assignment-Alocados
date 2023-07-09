import React from 'react'
import St from 'styles/home/Home.style'
import MyCoinList from './MyCoinList'
import ExchangeForm from './ExchangeForm'
import ExchangeNotice from './ExchangeNotice'

const HomeTemplate = () => {
  return (
    <>
      <St.HomeTitle>환전하기</St.HomeTitle>
      <ExchangeNotice />
      <St.HomeContainer>
        <MyCoinList />
        <ExchangeForm />
      </St.HomeContainer>
    </>
  )
}

export default HomeTemplate
