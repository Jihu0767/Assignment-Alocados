import PageTitle from 'components/common/PageTitle'
import St from 'styles/transdetail/TransDetail.style'
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
