import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = initialValue => {
  const [darkModeValue, storeDarkModeValue] = useLocalStorage(
    'DarkMode',
    initialValue
  );

  useEffect(() => {
    if (darkModeValue) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkModeValue]);

  return [darkModeValue, storeDarkModeValue];
};
