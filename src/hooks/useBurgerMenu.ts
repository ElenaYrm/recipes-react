import { useEffect, useState } from 'react';

// to change className for burger and body

export function useBurgerMenu(): [boolean, () => void] {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('stop-scroll');
    } else {
      document.body.classList.remove('stop-scroll');
    }
  }, [isActive]);

  return [isActive, handleClick];
}
