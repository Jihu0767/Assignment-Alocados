import styled, { css } from 'styled-components'
import Button from 'components/common/buttons/Button'

const St = {
  TransHistoriesContainer: styled.section`
    max-width: 768px;
    margin: 0 auto;
  `,
  TransHistoryList: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.spacing.s8};
  `,
  TransListHead: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${(props) => `${props.theme.spacing.s8} ${props.theme.spacing.s16}`};
    border-radius: ${(props) => props.theme.radius.s12};
    background-color: ${(props) => props.theme.colors.shade100};
  `,
  HeadColumn: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    & > span.exchange-date {
      font-weight: 700;
    }
  `,
  SortButton: styled(Button)<{ $isAsce: boolean }>`
    height: 17px;
    transition: transform 0.21s;
    ${({ $isAsce }) =>
      $isAsce &&
      css`
        transform: rotate(180deg);
      `}}

  `,
}

export default St
