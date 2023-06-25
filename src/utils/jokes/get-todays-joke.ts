import dayjs from 'dayjs';
import { getJokesSingleton } from './get-jokes-singleton';

/**
 * Returns a joke based on the current day of the year.
 * Will return undefined if one isn't defined.
 */
export const getTodaysJoke = async () => {
  const today = dayjs().format('YYYY-MM-DD');
  const jokesFile = await getJokesSingleton();

  const joke = jokesFile.jokes.find(joke => joke.date === today);

  return joke;
};