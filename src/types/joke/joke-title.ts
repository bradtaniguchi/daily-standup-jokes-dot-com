/**
 * A joke title is a string, but with length.
 */
export type JokeTitle = string & { readonly brand: unique symbol };

/**
 * Validates if the given title is a valid joke title.
 */
export const isJokeTitle = (title: unknown): title is JokeTitle =>
  typeof title === 'string' && title.length > 0;
