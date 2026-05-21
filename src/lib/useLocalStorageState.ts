import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useLocalStorageState<T>(
  key: string,
  initialValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const fallback = initialValue instanceof Function ? initialValue() : initialValue;

    try {
      const stored = window.localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
