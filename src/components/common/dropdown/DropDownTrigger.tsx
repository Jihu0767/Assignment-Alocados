import React, { PropsWithChildren } from 'react'
import St from 'styles/components/common/DropDown.style'
import useDropdownContext from 'hooks/useDropDownContext'
import { ReactComponent as DropDownIcon } from 'assets/icons/DropDownIcon.svg'

const DropDownTrigger = ({ children }: PropsWithChildren) => {
  const context = useDropdownContext()
  const { isOpen, handleOpen, handleClose } = context

  return (
    <St.ListTrigger onClick={!isOpen ? handleOpen : handleClose} $isOpen={isOpen}>
      {children}
      <DropDownIcon className={'drop-down-icon'} />
    </St.ListTrigger>
  )
}

export default DropDownTrigger
