import { useState, useCallback } from 'react';
import { handleError } from '../utils/errorHandling';

interface AsyncState<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

export function useAsync<T>() {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const execute = useCallback(async (asyncFunction: () => Promise<T>) => {
    setState({ data: null, error: null, loading: true });

    try {
      const data = await asyncFunction();
      setState({ data, error: null, loading: false });
      return data;
    } catch (error) {
      const handledError = handleError(error, 'Async Operation');
      setState({ data: null, error: handledError, loading: false });
      throw handledError;
    }
  }, []);

  return { ...state, execute };
}