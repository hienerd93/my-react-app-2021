import { useRef, useEffect } from "react";

function usePrevious<T>(arg: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = arg;
  }, [arg]);
  return ref.current;
}

export { usePrevious };
