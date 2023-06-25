import { JokeDate, isJokeDate } from "@/types/joke/joke-date";
import dayjs from 'dayjs';
import { getJokesSingleton } from "./get-jokes-singleton";

/**
 * Returns the jokes for the last 30 days from the given date.
 * 
 * @param date the date to get the jokes for, defaults to today if not given
 */
export const getJokesForLast30Days = async (date?: JokeDate) => {

  const today = (() => {
    if (date) return date;
    const today = dayjs().format('YYYY-MM-DD');
    if (isJokeDate(today)) return today;
    throw new Error('Invalid joke date generated from dayjs');
  })() as JokeDate;


  const jokesFile = await getJokesSingleton();

  const jokes = jokesFile.jokes.filter(joke => {
    const jokeDate = new Date(joke.date);
    const dateToCompare = new Date(today);
    dateToCompare.setDate(dateToCompare.getDate() - 30);
    return jokeDate >= dateToCompare && jokeDate <= new Date(today);
  });

  return jokes;

};