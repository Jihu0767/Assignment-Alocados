import styled from 'styled-components'
import Button from '../../components/common/buttons/Button'

const St = {
  HomeContainer: styled.section`
    display: flex;
    gap: ${(props) => props.theme.spacing.s16};
  `,
  MyCoinListContainer: styled.article`
    flex: 1 1 30%;
    border-radius: ${(props) => props.theme.radius.s12};
    padding: ${(props) => props.theme.spacing.s24};
    background-color: ${(props) => props.theme.colors.shade100};

    h2 {
      font-weight: 600;
      color: ${(props) => props.theme.colors.shade700};
    }

    hr {
      display: inline-block;
      width: 100%;
      height: 1px;
      border: none;
      background-color: ${(props) => props.theme.colors.shade300};
      margin: ${(props) => props.theme.spacing.s16} 0;
    }
  `,
  // -------------- 지갑 --------------
  MyCoinList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.s24};
  `,
  MyCoinListItem: styled.li``,
  SymbolInfo: styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.s8};
    margin-bottom: ${(props) => props.theme.spacing.s8};
  `,
  CoinName: styled.span`
    font-size: 18px;
    color: ${(props) => props.theme.colors.shade700};
  `,
  CoinIconWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: ${(props) => props.theme.spacing.s8};
    border-radius: ${(props) => props.theme.radius.s30};
    background-color: ${(props) => props.theme.colors.shade5};
  `,
  ExchangeAmount: styled.div`
    display: flex;
    gap: 4px;
    span {
      font-family: Poppins, serif;
      font-size: 18px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.shade900}
      display: inline-block;
    }
  `,
  // -------------- 지갑 --------------
  // -------------- 환전 폼 --------------
  ExchangeFormContainer: styled.article`
    flex: 1 1 70%;
  `,
  InputWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing.s24};
  `,
  ExchangeButton: styled(Button)`
    height: 56px;
    margin: ${(props) => `${props.theme.spacing.s32} 0 ${props.theme.spacing.s16} 0`}}; 
  `,
  RecentlyRecordsWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${(props) => `${props.theme.spacing.s8} ${props.theme.spacing.s16}`};
    border-radius: ${(props) => props.theme.radius.s12};
    background-color: ${(props) => props.theme.colors.shade100};
  `,
  RecentlyRecordDate: styled.div``,
  RecentlyRecordCoinsWrpaper: styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.s32};
  `,
  RecentlyRecordCoin: styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacing.s8};
    font-size: 18px;
    font-weight: 600;
  `,
}
export default St
