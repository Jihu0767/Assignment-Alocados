import styled from 'styled-components'

const St = {
  RecentlyRecordsWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${(props) => `${props.theme.spacing.s8} ${props.theme.spacing.s16}`};
    border-radius: ${(props) => props.theme.radius.s12};
    background-color: ${(props) => props.theme.colors.shade100};
  `,
  RecentlyRecordDate: styled.div`
    font-size: 14px;
  `,
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
