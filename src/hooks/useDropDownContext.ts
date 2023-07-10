import { createContext, useContext } from 'react'

interface DropdownContextValue {
  isOpen: boolean
  selected: string
  handleOpen: () => void
  handleClose: () => void
  handleSelctAndClose: (item: string) => void
}

export const DropdownContext = createContext<DropdownContextValue | null>(null)

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (context === null) {
    throw new Error('useDropdownContext must be used within a DropdownProvider')
  }
  return context
}

export default useDropdownContext
