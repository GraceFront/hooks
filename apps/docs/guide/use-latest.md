# useLatest

`useLatest` 是一个自定义 Hook，它返回一个 ref 对象，`.current` 属性始终保存最新的值。  
在回调或副作用中避免闭包“捕获旧值”的问题时非常有用。

## 用法示例

```tsx
import React, { useState, useEffect } from 'react';
import { useLatest } from '@gracefront/hooks';

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(count2 + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>count(useLatest): {count}</p>
      <p>count(default): {count2}</p>
    </>
  );
};
