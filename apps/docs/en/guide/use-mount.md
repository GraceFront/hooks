# useMount

`useMount` is a custom hook that runs a callback function when the component is mounted.  
It leverages React's `useEffect` with an empty dependency array and is useful for one-time initialization tasks.

## Use Cases
- Fetch initial data when a component mounts
- Initialize third-party libraries
- Send analytics or tracking events on component mount

## Usage

```tsx
import React, { useState } from 'react'
import { useMount } from '@gracefront/hooks'

export default () => {
  const [data, setData] = useState(null)

  useMount(() => {
    console.log('Component mounted, performing initialization')
    fetchData().then(setData)
  })

  return (
    <div>
      {data ? <p>Data loaded: {data}</p> : <p>Loading...</p>}
    </div>
  )
}