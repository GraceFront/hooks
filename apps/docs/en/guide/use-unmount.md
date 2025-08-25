# useUnmount

`useUnmount` is a custom hook that runs a callback function when the component is unmounted.  
It leverages React’s `useEffect` cleanup phase and is useful for resource cleanup, event removal, or request cancellation.

## Use Cases
- Clear timers when a component is unmounted
- Remove global event listeners
- Cancel network requests

## Usage

```tsx
import React, { useState } from 'react'
import { useUnmount } from '@gracefront/hooks'

export default () => {
  const [visible, setVisible] = useState(true)

  useUnmount(() => {
    console.log('Component unmounted, cleanup executed')
  })

  return (
    <>
      {visible && <p>I am a component</p>}
      <button onClick={() => setVisible(false)}>Unmount</button>
    </>
  )
}
