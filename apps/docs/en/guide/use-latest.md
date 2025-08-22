# useLatest

`useLatest` is a custom hook that returns a ref object whose `.current` property always holds the latest value.  
Useful for avoiding stale closures inside callbacks or effects.

## Usage

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
