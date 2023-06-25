import { JokeDate } from "@/types/joke/joke-date";
import { getJokesSingleton } from "./get-jokes-singleton";

/**
 * Returns the joke for the given date. Will return undefined if one isn't defined.
 * Will throw if the given date isn't valid, or if the file isn't valid.
 * 
 * @param date the date to get the joke for
 */
export const getJokeForDate = async (date: JokeDate) => {
  const jokesFile = await getJokesSingleton();

  const joke = jokesFile.jokes.find(joke => joke.date === date);
  
  return joke;
}