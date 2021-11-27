import { useRef, useEffect } from "react";

const usePrevious = <T extends unknown>(arg: T) => {
  const ref: any = useRef<T>();
  useEffect(() => {
    ref.current = arg;
  }, [arg]);
  return ref.current;
};

export default usePrevious;
