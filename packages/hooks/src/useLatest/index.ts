import { type RefObject, useRef } from 'react'

const useLatest = <T>(value: T): RefObject<T> => {
  const ref = useRef(value)
  ref.current = value
  return ref
}

export default useLatest
