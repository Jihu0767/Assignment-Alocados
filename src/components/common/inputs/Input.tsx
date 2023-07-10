import React, { forwardRef, InputHTMLAttributes, memo, ReactNode, Ref } from 'react'
import St from 'styles/components/common/Input.style'

type InputProps = {
  wrapperClassName?: string
  labelText?: string | ReactNode
  isRequireLabel?: boolean
  isInvalid?: boolean
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
