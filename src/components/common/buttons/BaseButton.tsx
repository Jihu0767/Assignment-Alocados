import React, { memo, PropsWithChildren } from 'react'
import styled from 'styled-components'

type ButtonProps = PropsWithChildren<{
  type: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}>

const BaseButton = ({ type, className, onClick, children, disabled, ...rest }: ButtonProps) => {
  return (
    <>
      <St.Button type={type} className={className} onClick={onClick} disabled={disabled} {...rest}>
        {children}
      </St.Button>
    </>
  )
}

export default memo(BaseButton)

const St = {
  Button: styled.button`
    height: 40px;
    text-align: center;
    background-color: #9f79ff;
    color: white;
    border: none;
    border-radius: 4px;

    &:disabled {
      background-color: ${(props) => props.theme.colors.stale200};
      color: ${(props) => props.theme.colors.stale400};
      cursor: not-allowed;
    }
  `,
}
