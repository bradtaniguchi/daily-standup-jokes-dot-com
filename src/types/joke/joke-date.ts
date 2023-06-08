import dayjs from 'dayjs';

/**
 * Type that represents a JokeDate, which is just a string in the format:
 * YYYY-MM-DD. Only valid dates are allowed.
 */
export type JokeDate = string & { readonly brand: unique symbol };

/**
 * Validates if the given date is a valid date string, relies on day.js
 *
 * @param date the date to check
 * @returns if the given date is a joke-date string, with a valid date.
 */
export const isJokeDate = (date: unknown): date is JokeDate =>
  typeof date === 'string' && dayjs(date, 'YYYY-MM-DD', true).isValid();
