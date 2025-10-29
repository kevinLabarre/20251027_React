import { useState } from "react";

export const useCount = ({
  min = -Infinity,
  max = Infinity,
  initialValue = 0,
}) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => (prev < max ? prev + 1 : prev));

  const decrement = () => setCount((prev) => (prev > min ? prev - 1 : prev));

  return { count, increment, decrement };
  //   return { count: count, increment: increment, decrement: decrement };
};
