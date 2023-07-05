import { JokeDate, isJokeDate } from '@/types/joke/joke-date';
import { Joke } from '@/types/joke/joke';
import { useEffect, useState } from 'react';
import { sensibleFetch } from '@/utils/sensible-fetch';
import dayjs from 'dayjs';

/**
 * Custom hook to fetch the joke for the given date.
 */
export const useGetJoke = (date: JokeDate) => {
  const [state, setState] = useState<{
    loading: boolean;
    error: Error | null;
    joke: Joke | undefined;
  }>({
    loading: false,
    error: null,
    joke: undefined,
  });

  useEffect(() => {
    if (!isJokeDate(date)) {
      setState((prevState) => ({
        ...prevState,
        error: new Error('Invalid date'),
      }));
      return;
    }
    const controller = new AbortController();
    const { signal } = controller;

    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    sensibleFetch<Joke>(`/api/jokes/${date}`, { signal })
      .then((joke) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          joke,
        }));
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error,
        }));
      });

    return () => {
      controller.abort();
    };
  }, [date]);

  return state;
};

/**
 * Alternate hook to fetch the joke for today, is a special version
 * of `useGetJoke`.
 */
export const useGetTodaysJoke = () => {
  // TODO: add converter
  const today = dayjs().format('YYYY-MM-DD') as JokeDate;
  return useGetJoke(today);
};
