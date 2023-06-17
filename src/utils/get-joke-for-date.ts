import { isJokeFile } from "@/types/joke-file";
import { JokeDate } from "@/types/joke/joke-date";
import fs from 'fs-extra';
import path from 'path';

/**
 * Returns the joke for the given date. Will return undefined if one isn't defined.
 * Will throw if the given date isn't valid, or if the file isn't valid.
 * 
 * @param date the date to get the joke for
 */
export const getJokeForDate = (date: JokeDate) => {
  const rawJokesFile = fs.readJson(path.join(__dirname, '../jokes.json'));

  if (!isJokeFile(rawJokesFile)) throw new Error('Invalid jokes file');

  const joke = rawJokesFile.jokes.find(joke => joke.date === date);
  
  return joke;
}