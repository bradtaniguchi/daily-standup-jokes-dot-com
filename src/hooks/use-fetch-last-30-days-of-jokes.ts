import { Joke } from "@/types/joke/joke";
import { useEffect, useState } from "react";

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
    setLoading(true);
    fetch('/api/jokes')
      .then((response) => response.json())
      .then((json) => {
        setJokes(json);
      })
      .catch((error) => {
        setError(error);
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading, 
    error,
    jokes,
  };
};