import { useEffect, useState } from 'react';

// have to limit number of elements on a page because API doesn't provide loading by pages
// (for button to show more elements)

export function useShowMoreBtn<T>(arr: Array<T>, stepBtn: number): [Array<T>, () => void, boolean] {
  const [count, setCount] = useState(stepBtn);
  const [data, setData] = useState(arr);
  // to show or hide button
  const [isDisabled, setIsDisabled] = useState(false);

  function handleCount() {
    setCount((prevCount) => prevCount + stepBtn);
  }

  useEffect(() => {
    if (arr.length > 0 && arr.length < count) {
      const result: Array<T> = [];
      for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
      }
      setData(result);
      setIsDisabled(true);
    } else if (arr.length > 0 && arr.length >= count) {
      const result: Array<T> = [];
      for (let i = 0; i < count; i++) {
        result.push(arr[i]);
      }
      setData(result);
      setIsDisabled(false);
    } else {
      setData(arr);
      setIsDisabled(true);
    }
  }, [count, arr]);

  return [data, handleCount, isDisabled];
}
