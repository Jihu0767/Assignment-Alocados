import styled, { css } from 'styled-components'
import React, { forwardRef, InputHTMLAttributes, memo, ReactNode, Ref } from 'react'

type InputProps = {
  labelText?: string | ReactNode
  isRequireLabel?: boolean
  isValid?: boolean
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
    isValid,
    invalidText,
    ...rest
  }: InputHTMLAttributes<HTMLInputElement> & InputProps,
  ref?: Ref<HTMLInputElement>
) => {
  return (
    <St.InputContainer>
      <St.Label htmlFor={id} $isRequireLabel={isRequireLabel}>
        {labelText}
      </St.Label>
      <St.Input
        id={id}
        type={type}
        className={className}
        value={value}
        onChange={onChange}
        {...rest}
        ref={ref}
        $isValid={isValid !== undefined && !isValid}
      />
      {isValid !== undefined && !isValid && (
        <>
          <St.InvalidText>{invalidText || '입력하신 값을 확인해주세요.'}</St.InvalidText>
        </>
      )}
    </St.InputContainer>
  )
}

export default memo(forwardRef(Input))

const St = {
  InputContainer: styled.div`
    width: 100%;
    padding: 10px 16px 14px;
    border-radius: ${(props) => props.theme.radius.s12};
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
  Input: styled.input<{ $isValid: boolean }>`
    width: 100%;
    border: ${(props) => (props.$isValid ? '2px solid red' : 'none')};
    font-weight: 600;
    font-size: 18px;

    &::placeholder {
      font-weight: 400;
      color: ${(props) => props.theme.colors.shade300};
    }
  `,
  InvalidText: styled.div`
    margin-top: 5px;
    font-size: 14px;
    color: red;
  `,
}
