# useMount

`useMount` 是一个自定义 Hook，用于在组件挂载时执行回调函数。  
它在 React 的 `useEffect` 挂载阶段触发，适合执行初始化操作、数据获取等一次性任务。

## 使用场景
- 组件挂载时获取初始数据
- 初始化第三方库
- 发送埋点/统计信息

## 用法

```tsx
import React, { useState } from 'react'
import { useMount } from '@gracefront/hooks'

export default () => {
  const [data, setData] = useState(null)

  useMount(() => {
    console.log('组件已挂载，执行初始化逻辑')
    fetchData().then(setData)
  })

  return (
    <div>
      {data ? <p>数据加载完成: {data}</p> : <p>加载中...</p>}
    </div>
  )
}