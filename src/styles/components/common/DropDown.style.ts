import styled, { css } from 'styled-components'

const St = {
  DropDownWrapper: styled.div`
    position: relative;
    height: 100%;
  `,
  ListTrigger: styled.div<{ $isOpen: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: ${(props) => props.theme.spacing.s10};
    border-radius: ${(props) => props.theme.radius.s12};
    background-color: ${(props) => props.theme.colors.shade100};
    cursor: pointer;

    & .drop-down-icon {
      transition: 0.21s ease-in-out;
      ${(props) =>
        props.$isOpen &&
        css`
          transform: rotate(180deg);
        `};
    }
  `,
  List: styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    padding: ${(props) => props.theme.spacing.s8} 0;
    border-radius: ${(props) => props.theme.radius.s12};
    background-color: ${(props) => props.theme.colors.shade100};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    left: 0;
    transform: translateY(15px);
  `,
  Item: styled.div<{ $isSelect: boolean; $isDisabled?: boolean }>`
    padding: ${(props) => props.theme.spacing.s10};
    opacity: ${({ $isSelect, $isDisabled }) => ($isSelect || $isDisabled ? '0.4' : '1')};
    cursor: ${({ $isSelect, $isDisabled }) => ($isSelect || $isDisabled ? 'not-allowed' : 'pointer')};
  `,
}
export default St
