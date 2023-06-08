import { JokeDate, isJokeDate } from './joke-date';
import { JokeTitle, isJokeTitle } from './joke-title';
import { JokeType, isJokeType } from './joke-type';

/**
 * A joke is what is shown on the main page. Its the main data-type.
 */
export interface Joke {
  /**
   * The date this joke is from.
   */
  date: JokeDate;
  /**
   * The title of the joke.
   */
  title: JokeTitle;

  /**
   * The type of joke, which customizes the UI of how the joke is displayed.
   */
  type: JokeType;
}

/**
 * Type-guard that returns if the given object is a valid joke.
 * Relies on nested type-guards for each property.
 *
 * Use the more specific type-guards to get specific versions of a joke
 *
 * @param joke the object to check
 * @returns if the given object is a valid joke.
 */
export const isJoke = (joke: unknown): joke is Joke =>
  typeof joke === 'object' &&
  joke !== null &&
  isJokeDate((joke as Joke).date) &&
  isJokeTitle((joke as Joke).title) &&
  isJokeType((joke as Joke).type);

/**
 * A basic joke is just the text directly. It has no hidden parts.
 */
export interface BasicJoke extends Joke {
  /**
   * The text of the joke.
   */
  text: string;
  /**
   * The type of joke, which customizes the UI of how the joke is displayed.
   */
  type: 'basic';
}

/**
 * Type-guard that returns if the given object is a valid basic joke.
 * Relies on nested type-guards.
 *
 * @param joke the object to check
 * @returns if the given object is a valid basic joke.
 */
export const isBasicJoke = (joke: unknown): joke is BasicJoke =>
  isJoke(joke) && joke.type === 'basic';

/**
 * A reveal joke is a joke that has a hidden part that is revealed when the user
 * clicks on the button described by the "buttonText" attribute.
 */
export interface RevealJoke extends Joke {
  /**
   * The text that is shown on the reveal button.
   */
  buttonText: string;
  /**
   * The text that is hidden and revealed when the user clicks on the button.
   * This is the "punchline" of the joke.
   */
  revealText: string;
}

/**
 * Type-guard that returns if the given object is a valid reveal joke.
 *
 * @param joke the object to check
 * @returns if the given object is a valid reveal joke.
 */
export const isRevealJoke = (joke: unknown): joke is RevealJoke =>
  isJoke(joke) && joke.type === 'reveal';
