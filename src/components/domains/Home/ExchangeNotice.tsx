import St from 'styles/home/Home.style'
import { ReactComponent as NoticeIcon } from 'assets/icons/NoticeIcon.svg'
import { ReactComponent as CloseIcon } from 'assets/icons/CloseIcon.svg'
import Button from 'components/common/buttons/Button'
import { useAppDispatch } from 'hooks/redux/useAppDispatch'
import { useAppSelector } from 'hooks/redux/useAppSelector'
import { hideExchangeNotice } from '../../../store/exchange/exchangeSlice'

const ExchangeNotice = () => {
  const dispatch = useAppDispatch()
  const { visibleExchangeNotice } = useAppSelector((state) => state.exchangeReducer)
  const onClickHideNotice = () => {
    dispatch(hideExchangeNotice())
  }

  if (visibleExchangeNotice) {
    return (
      <St.ExchangeNoticeContainer>
        <div>
          <NoticeIcon />
          <St.ExchangeNoticeText>최근 거래 후 갱신되었습니다.</St.ExchangeNoticeText>
        </div>
        <Button style={{ height: '24px' }} onClick={onClickHideNotice}>
          <CloseIcon />
        </Button>
      </St.ExchangeNoticeContainer>
    )
  } else {
    return <></>
  }
}

export default ExchangeNotice
