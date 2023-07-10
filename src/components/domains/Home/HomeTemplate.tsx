import React from 'react'
import St from 'styles/pages/home/Home.style'
import MyCoinList from './MyCoinList'
import ExchangeForm from './ExchangeForm'
import ExchangeNotice from './ExchangeNotice'
import PageTitle from 'components/PageTitle'

const HomeTemplate = () => {
  return (
    <>
      <St.HomeContainer>
        <PageTitle>환전하기</PageTitle>
        <ExchangeNotice />
        <div>
          <MyCoinList />
          <ExchangeForm />
        </div>
      </St.HomeContainer>
    </>
  )
}

export default HomeTemplate
