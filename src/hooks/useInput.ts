import React, { useState, useCallback } from 'react'

type HandlerType = (e: React.ChangeEvent<HTMLInputElement>) => void

const useInput = (initValue: string) => {
  const [value, setValue] = useState<string>(initValue)

  const handler = useCallback<HandlerType>((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  return [value, setValue, handler] as const
}

export default useInput
