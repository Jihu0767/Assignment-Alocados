import styled, { css } from 'styled-components'

const St = {
  InputContainer: styled.div<{ $isInvalid?: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px 16px 14px;
    border-radius: ${(props) => props.theme.radius.s12};
    border: ${(props) => (props.$isInvalid ? `2px solid ${props.theme.colors.error100}` : 'none')};
    background-color: ${(props) => props.theme.colors.shade100};
  `,
  Label: styled.label<{ $isRequireLabel?: boolean }>`
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.6px;

    color: ${(props) => props.theme.colors.shade600}
      ${(props) =>
        props.$isRequireLabel &&
        css`
          &::before {
            content: '*';
            margin-right: 3px;
            color: red;
          }
        `};
  `,
  Input: styled.input`
    width: 100%;
    font-weight: 600;
    font-size: 18px;

    &::placeholder {
      font-weight: 600;
      color: ${(props) => props.theme.colors.shade900};
    }
  `,
}

export default St
