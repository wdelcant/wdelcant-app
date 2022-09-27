import { useState, useEffect } from "react";

export const useCounter = ({ initialValue }) => {
  const [counter, setCounter] = useState(parseInt(initialValue));

  const Add = () => {
    setCounter(counter + 1);
  };

  const Sub = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

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
