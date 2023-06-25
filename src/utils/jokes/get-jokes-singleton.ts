import { JokeFile, isJokeFile } from '@/types/joke-file';

/**
 * The singleton promise of the jokes files being loaded from the filesystem.
 */
let _jokesSingleton: Promise<JokeFile> | undefined;

/**
 * Returns the singleton promise of the jokes files being loaded from the 
 * filesystem. This will prevent extra hits to the filesystem. Might have an issue
 * with scaling in the future, but this shouldn't be an issue for a while.
 * 
 * Will throw if the jokes file is not valid or not found.
 * 
 * @param params the parameters for the function
 * @param params.bustCache if we are to wipe the previous cache and get a new one
 */
export const getJokesSingleton =  async (params: {
  bustCache?: boolean
} = {bustCache: false}): Promise<JokeFile> => {
  const {bustCache} = params;
  
  if (_jokesSingleton && !bustCache) return _jokesSingleton;

  const rawJokesFile$ = import('../../jokes.json');

  _jokesSingleton = rawJokesFile$.then((jokesFile) => {
    if (!isJokeFile(jokesFile)) throw new Error('Invalid jokes file');
    return jokesFile;
  });

  return _jokesSingleton;

};