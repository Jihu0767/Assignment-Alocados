import styled from 'styled-components'

const St = {
  DropDownWrapper: styled.div`
    position: relative;
    height: 100%;
  `,
  ListTrigger: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: ${(props) => props.theme.spacing.s10};
    border-radius: ${(props) => props.theme.radius.s12};
    background-color: ${(props) => props.theme.colors.shade100};
    cursor: pointer;
  `,
  List: styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    padding: ${(props) => props.theme.spacing.s8} 0;
    border-radius: ${(props) => props.theme.radius.s12};
    background-color: ${(props) => props.theme.colors.shade100};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    left: 0;
    transform: translateY(15px);
  `,
  Item: styled.div<{ $isSelect: boolean }>`
    padding: ${(props) => props.theme.spacing.s10};
    opacity: ${({ $isSelect }) => ($isSelect ? '0.4' : '1')};
    cursor: pointer;
  `,
}
export default St
