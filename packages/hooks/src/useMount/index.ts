import { useEffect } from 'react'
import useLatest from '../useLatest'

const useMount = (fn: () => void) => {
  const fnRef = useLatest(fn)
  useEffect(() => {
    fnRef.current()
  }, [])
}

export default useMount
