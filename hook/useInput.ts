import { useCallback, useState, ChangeEvent } from 'react';

type UseInputType = [string, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput = (initialValue: string): UseInputType => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

export default useInput;
