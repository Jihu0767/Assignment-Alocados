import React, { PropsWithChildren } from 'react'
import St from 'styles/components/common/DropDown.style'
import useDropdownContext from 'hooks/useDropDownContext'

const DropDownItem = ({ value, disabled, children }: PropsWithChildren<{ value: string; disabled?: boolean }>) => {
  const { handleSelctAndClose, selected } = useDropdownContext()

  return (
    <St.Item $isSelect={selected === value} onClick={() => handleSelctAndClose(value)} $isDisabled={disabled}>
      {children}
    </St.Item>
  )
}
export default DropDownItem
