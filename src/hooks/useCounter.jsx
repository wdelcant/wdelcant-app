import { useState, useEffect } from 'react';

export const useCounter = ({ initialValue }) => {
  const [counter, setCounter] = useState(parseInt(initialValue));

  // La función Agregar agrega 1 al contador
  const Add = () => {
    setCounter(counter + 1);
  };

  // la función Sub resta 1 del contador
  const Sub = () => {
    setCounter(counter - 1);
  };

  // restablece el contador a 0.
  const reset = () => {
    setCounter(0);
  };

  // Se llama cuando se monta el componente y cuando cambia el valor inicial.
  useEffect(() => {
    setCounter(parseInt(initialValue));
  }, [initialValue]);

  return {
    counter,
    Add,
    Sub,
    reset,
  };
};
