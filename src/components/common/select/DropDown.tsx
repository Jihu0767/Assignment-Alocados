import React, { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from 'react'
import St from 'styles/common/Select.style'

interface DropdownContextValue {
  isOpen: boolean
  select: string
  handleOpen: () => void
  handleClose: () => void
  handleSelctAndClose: (item: string) => void
}

const DropdownContext = createContext<DropdownContextValue | null>(null)

interface Props {
  value: string
  className?: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

export function Dropdown({ value, children, className, onChange }: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(false)
  const [select, setSelect] = useState(value)

  const firstMounded = useRef(true)
  useEffect(() => {
    if (!firstMounded.current) {
      onChange(select)
    }
    firstMounded.current = false
  }, [select])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = (item?: string) => {
    setIsOpen(false)
  }
  const handleSelctAndClose = (item: string) => {
    handleClose()
    setSelect(item)
  }
  return (
    <DropdownContext.Provider value={{ isOpen, select, handleOpen, handleClose, handleSelctAndClose }}>
      <St.DropDownWrapper className={className}>{children}</St.DropDownWrapper>
    </DropdownContext.Provider>
  )
}
const Trigger = ({ children }: PropsWithChildren) => {
  const context = useDropdownContext()
  const { isOpen, handleOpen, handleClose } = context
  return <St.ListTrigger onClick={!isOpen ? handleOpen : handleClose}>{children}</St.ListTrigger>
}

const Menu = ({ children }: PropsWithChildren) => {
  const { isOpen } = useDropdownContext()

  if (!isOpen) return null

  return <St.List>{children}</St.List>
}

const Item = ({ value, children }: PropsWithChildren<{ value: string }>) => {
  const { handleSelctAndClose, select } = useDropdownContext()
  return (
    <St.Item $isSelect={select === value} onClick={() => handleSelctAndClose(value)}>
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
