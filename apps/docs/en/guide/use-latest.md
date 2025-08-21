# useLatest

`useLatest` is a custom hook that returns a ref object whose `.current` property always holds the latest value.  
Useful for avoiding stale closures inside callbacks or effects.

## Usage

```tsx
import { useState, useEffect } from 'react'
import { useLatest } from '@gracefront/hooks'

export default function Example() {
  const [count, setCount] = useState(0)
  const latestCount = useLatest(count)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Current count:', latestCount.current)
    }, 1000)

    return () => clearInterval(interval)
  }, [latestCount])

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  )
}
