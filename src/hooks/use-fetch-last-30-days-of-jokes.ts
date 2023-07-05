import { Joke } from '@/types/joke/joke';
import { useEffect, useState } from 'react';

/**
 * Custom hook to fetch the last 30 days of jokes from the API
 * TODO: needs to be updated
 */
export const useFetchLast30DaysOfJokes = (): {
  loading: boolean;
  error: Error | null;
  jokes: Joke[];
} => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);
    fetch('/api/jokes', { signal })
      .then((response) => response.json())
      .then((json) => {
        setJokes(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return {
    loading,
    error,
    jokes,
  };
};
