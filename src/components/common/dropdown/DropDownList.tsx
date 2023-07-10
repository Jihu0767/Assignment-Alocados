import React, { PropsWithChildren } from 'react'
import St from 'styles/components/common/DropDown.style'
import useDropdownContext from 'hooks/useDropDownContext'

const DropDownList = ({ children }: PropsWithChildren) => {
  const { isOpen } = useDropdownContext()

  if (!isOpen) return null

  return <St.List>{children}</St.List>
}

export default DropDownList
