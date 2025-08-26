import { renderHook } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import useMount from '../index'

describe('useMount', () => {
  test('useMount should work', () => {
    const fn = vi.fn()
    const { rerender, unmount } = renderHook(() => useMount(fn))
    expect(fn).toBeCalledTimes(1)
    rerender()
    expect(fn).toBeCalledTimes(1)
    unmount()
    expect(fn).toBeCalledTimes(1)
  })
})
