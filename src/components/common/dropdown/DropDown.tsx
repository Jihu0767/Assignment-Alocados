import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import St from 'styles/components/common/DropDown.style'
import DropDownTrigger from './DropDownTrigger'
import DropDownList from './DropDownList'
import DropDownItem from './DropDownItem'
import { DropdownContext } from 'hooks/useDropDownContext'

interface Props<T> {
  value: T
  className?: string
  onChange: (item: T) => void | React.Dispatch<React.SetStateAction<T>>
}

export function Dropdown<T>({ value, children, className, onChange }: PropsWithChildren<Props<T>>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(value)
  const firstMounded = useRef(true)

  useEffect(() => {
    if (!firstMounded.current) {
      onChange(selected as T)
    }
    firstMounded.current = false
  }, [selected])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  const handleSelctAndClose = (item: T | string) => {
    handleClose()
    setSelected(item as T)
  }
  return (
    <DropdownContext.Provider
      value={{ isOpen, selected: selected as string, handleOpen, handleClose, handleSelctAndClose }}
    >
      <St.DropDownWrapper className={className}>{children}</St.DropDownWrapper>
    </DropdownContext.Provider>
  )
}

export default Dropdown

Dropdown.Trigger = DropDownTrigger
Dropdown.List = DropDownList
Dropdown.Item = DropDownItem
