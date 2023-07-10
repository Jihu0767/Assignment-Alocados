import PageTitle from 'components/PageTitle'
import St from 'styles/pages/transdetail/TransDetail.style'
import TransHistoryList from './TransHistoryList'

const TransHistoriesTemplate = () => {
  return (
    <>
      <St.TransHistoriesContainer>
        <PageTitle>환전 내역</PageTitle>
        <TransHistoryList />
      </St.TransHistoriesContainer>
    </>
  )
}

export default TransHistoriesTemplate
