import { isJokeFile } from '@/types/joke-file';
import dayjs from 'dayjs';
import fs from 'fs-extra';
import path from 'path';

/**
 * Returns a joke based on the current day of the year.
 * Will return undefined if one isn't defined.
 */
export const getTodaysJoke = () => {
  const today = dayjs().format('YYYY-MM-DD');
  const rawJokesFile = fs.readJson(path.join(__dirname, '../jokes.json'));

  if (!isJokeFile(rawJokesFile)) throw new Error('Invalid jokes file');

  const joke = rawJokesFile.jokes.find(joke => joke.date === today);

  return joke;
};