import { renderHook } from '@testing-library/react';
import { useOnline } from '../core/src';

describe('useOnline', () => {
  it('should return true when online status is true', () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(true);
  });
  it('should return true when online status is false', () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);
    const { result } = renderHook(() => useOnline());
    expect(result.current).toBe(false);
  });
});
