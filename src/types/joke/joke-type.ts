/**
 * The list of supported joke-types.
 */
export const JOKE_TYPES = ['basic', 'reveal'] as const;

/**
 * The type of jokes supported. Different types of jokes have different UI when
 * displayed.
 *
 * - `basic` is a joke that is just text.
 * - `reveal` is a joke that has a hidden part that is revealed when the user
 */
export type JokeType = (typeof JOKE_TYPES)[number];

/**
 * Type-guard that returns if the given type is a valid joke-type.
 *
 * @param type the type to check
 * @returns if the given type is a valid joke-type.
 */
export const isJokeType = (type: unknown): type is JokeType =>
  typeof type === 'string' && JOKE_TYPES.includes(type as JokeType);
