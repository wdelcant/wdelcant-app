import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Una función que devuelve el valor del almacenamiento local.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // La función setValue toma un valor como argumento y luego establece el valor almacenado en el valor y luego establece el elemento localStorage en el valor.
  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
