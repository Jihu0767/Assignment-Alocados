import React, { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import St from 'styles/common/Select.style'
import { ReactComponent as DropDownIcon } from 'assets/icons/DropDownIcon.svg'

interface DropdownContextValue {
  isOpen: boolean
  selected: any
  handleOpen: () => void
  handleClose: () => void
  handleSelctAndClose: (item: string) => void
}

const DropdownContext = createContext<DropdownContextValue | null>(null)

interface Props<T> {
  value: T
  className?: string
  onChange: (item: T) => void
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
    <DropdownContext.Provider value={{ isOpen, selected, handleOpen, handleClose, handleSelctAndClose }}>
      <St.DropDownWrapper className={className}>{children}</St.DropDownWrapper>
    </DropdownContext.Provider>
  )
}
const Trigger = ({ children }: PropsWithChildren) => {
  const context = useDropdownContext()
  const { isOpen, handleOpen, handleClose } = context
  return (
    <St.ListTrigger onClick={!isOpen ? handleOpen : handleClose} $isOpen={isOpen}>
      {children}
      <DropDownIcon className={'drop-down-icon'} />
    </St.ListTrigger>
  )
}

const Menu = ({ children }: PropsWithChildren) => {
  const { isOpen } = useDropdownContext()

  if (!isOpen) return null

  return <St.List>{children}</St.List>
}

const Item = ({ value, disabled, children }: PropsWithChildren<{ value: string; disabled?: boolean }>) => {
  const { handleSelctAndClose, selected } = useDropdownContext()

  return (
    <St.Item $isSelect={selected === value} onClick={() => handleSelctAndClose(value)} $isDisabled={disabled}>
      {children}
    </St.Item>
  )
}

Dropdown.Trigger = Trigger
Dropdown.Menu = Menu
Dropdown.Item = Item

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (context === null) {
    throw new Error('useDropdownContext must be used within a DropdownProvider')
  }
  return context
}

export default Dropdown
