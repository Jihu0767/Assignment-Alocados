import React, { memo, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { ColorsType } from 'styles/GlobalTheme'

type ButtonProps = PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  background?: ColorsType
}>

const Button = ({
  type = 'button',
  className,
  onClick,
  children,
  disabled,
  background = 'primary100',
  ...rest
}: ButtonProps) => {
  return (
    <>
      <St.Button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
        $background={background}
        {...rest}
      >
        {children}
      </St.Button>
    </>
  )
}

export default memo(Button)

const St = {
  Button: styled.button<{ $background: ColorsType }>`
    width: 100%;
    text-align: center;
    background-color: ${(props) => props.theme.colors[props.$background]};
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
