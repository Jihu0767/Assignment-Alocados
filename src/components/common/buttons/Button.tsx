import React, { ButtonHTMLAttributes, forwardRef, memo, PropsWithChildren, Ref } from 'react'
import St from 'styles/components/common/Button.style'
import { ColorsType } from 'styles/GlobalTheme'

type ButtonProps = PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  background?: ColorsType
}>

const Button = (
  {
    type = 'button',
    className,
    children,
    disabled,
    background,
    ...rest
  }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
  ref?: Ref<HTMLButtonElement>
) => {
  return (
    <>
      <St.Button type={type} className={className} disabled={disabled} $background={background} ref={ref} {...rest}>
        {children}
      </St.Button>
    </>
  )
}

export default memo(forwardRef(Button))
