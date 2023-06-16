import { Joke, isJoke } from "./joke/joke";

/**
 * The joke file should replicate whats in the jokes.json file.
 */
export interface JokeFile {
  /**
   * All the jokes for all of time.
   */
  jokes: Joke[];
}


/**
 * Type-guard for the joke-file
 * 
 * @param rawJokeFileContents the content from the file to check
 */
export const isJokeFile = (rawJokeFileContents: unknown): rawJokeFileContents is JokeFile => 
  rawJokeFileContents !== null &&
  typeof rawJokeFileContents === "object" &&
  Array.isArray((rawJokeFileContents as JokeFile).jokes) &&
  (rawJokeFileContents as JokeFile).jokes.every(joke => isJoke(joke));


/**
 * Returns all the invalid jokes in the joke file.
 * 
 * @param rawJokeFileContents the content from the file to check
 */
export const getInvalidJokes = (jokeFile: JokeFile): Joke[] => jokeFile.jokes.filter(joke => !isJoke(joke));