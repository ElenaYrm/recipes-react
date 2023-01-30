import { useCallback, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;
type cbFunc = (...args: any[]) => void;

export function useDebounce(callback: cbFunc, delay: number) {
  const timer = useRef<Timer>();

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}
