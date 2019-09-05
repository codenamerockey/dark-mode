import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    //Getting the local storage with a key
    const item = window.localStorage.getItem(key);
    // this returns the item from the get request and parses it from  a string back to a javascript object or array. Or returns the initial value.
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    //setting the value of the state variable
    setStoredValue(value);
    //taking the set value and turning it from a object or array into a string, and storing it in local storage.
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
