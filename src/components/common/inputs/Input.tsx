import React, { forwardRef, InputHTMLAttributes, memo, ReactNode, Ref } from 'react'
import styled, { css } from 'styled-components'

type InputProps = {
  wrapperClassName?: string
  labelText?: string | ReactNode
  isRequireLabel?: boolean
  isInvalid?: boolean
  invalidText?: string
}

const Input = (
  {
    id,
    type,
    className,
    value,
    onChange,
    labelText,
    isRequireLabel,
    isInvalid,
    invalidText,
    wrapperClassName,
    ...rest
  }: InputHTMLAttributes<HTMLInputElement> & InputProps,
  ref?: Ref<HTMLInputElement>
) => {
  return (
    <St.InputContainer className={wrapperClassName} $isInvalid={isInvalid !== undefined && isInvalid}>
      <St.Label htmlFor={id} $isRequireLabel={isRequireLabel}>
        {labelText}
      </St.Label>
      <St.Input id={id} type={type} className={className} value={value} onChange={onChange} {...rest} ref={ref} />
    </St.InputContainer>
  )
}

export default memo(forwardRef(Input))

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
      font-weight: 400;
      color: ${(props) => props.theme.colors.shade300};
    }
  `,
}
