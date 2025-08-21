# useLatest

`useLatest` 是一个自定义 Hook，它返回一个 ref 对象，`.current` 属性始终保存最新的值。  
在回调或副作用中避免闭包“捕获旧值”的问题时非常有用。

## 用法示例

```tsx
import { useState, useEffect } from 'react'
import { useLatest } from '@gracefront/hooks'

export default function Example() {
  const [count, setCount] = useState(0)
  const latestCount = useLatest(count)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('当前 count:', latestCount.current)
    }, 1000)

    return () => clearInterval(interval)
  }, [latestCount])

  return (
    <button onClick={() => setCount(c => c + 1)}>
      计数：{count}
    </button>
  )
}
