import styled from 'styled-components'
import { ColorsType } from 'styles/GlobalTheme'

const St = {
  Button: styled.button<{ $background?: ColorsType }>`
    text-align: center;
    background-color: ${(props) => (props.$background ? props.theme.colors[props.$background] : 'transparent')};
    color: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: ${(props) => props.theme.radius.s12};
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.75px;
    cursor: pointer;
    &:disabled {
      background-color: ${(props) => props.theme.colors.shade200};
      color: ${(props) => props.theme.colors.shade400};
      cursor: not-allowed;
    }
  `,
}

export default St
