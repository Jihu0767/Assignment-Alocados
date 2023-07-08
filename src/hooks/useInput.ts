import React, { useState, useCallback } from 'react'

type HandlerType = (e: React.ChangeEvent<HTMLInputElement>) => void

const useInput = (initValue: string) => {
  const [value, setter] = useState<string>(initValue)

  const handler = useCallback<HandlerType>((e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value)
  }, [])

  return [value, setter, handler] as const
}

export default useInput
