import St from 'styles/pages/home/Home.style'
import MyCoinListItem from './MyCoinListItem'
import { useAppSelector } from 'hooks/redux/useAppSelector'

const MyCoinList = () => {
  const { coinList } = useAppSelector((state) => state.exchangeReducer)
  return (
    <St.MyCoinListContainer>
      <h2>지갑</h2>
      <hr />

      <St.MyCoinList>
        {coinList.map((item) => {
          return <MyCoinListItem key={item.id} coinName={item.name} amount={item.amount} />
        })}
      </St.MyCoinList>
    </St.MyCoinListContainer>
  )
}

export default MyCoinList
