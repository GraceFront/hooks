# useUnmount

`useUnmount` 是一个自定义 Hook，用于在组件卸载时执行回调函数。  
它在 React 的 `useEffect` 清理阶段触发，适合做资源释放、事件解绑、取消订阅等操作。

## 使用场景
- 组件卸载时清理定时器
- 解绑全局事件监听
- 取消网络请求

## 用法

```tsx
import React, { useState } from 'react'
import { useUnmount } from '@gracefront/hooks'

export default () => {
  const [visible, setVisible] = useState(true)

  useUnmount(() => {
    console.log('组件已卸载，执行清理逻辑')
  })

  return (
    <>
      {visible && <p>我是一个组件</p>}
      <button onClick={() => setVisible(false)}>卸载组件</button>
    </>
  )
}
