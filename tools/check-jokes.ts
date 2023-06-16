import fs from 'fs-extra';
import path from 'path';
import { getInvalidJokes, isJokeFile } from '../src/types/joke-file';

(async () => {
  try {
    console.log('[check-jokes]');
    const rawJokeFileContents = await fs.readJSON(path.join(__dirname, '../src/jokes.json'), 'utf8');

    if (!isJokeFile(rawJokeFileContents)) {
      const invalidJokes = getInvalidJokes(rawJokeFileContents);
      
      console.log(`[check-jokes] Invalid jokes found: ${invalidJokes.length}`);
      console.log('[check-jokes]\n', JSON.stringify(invalidJokes, null, 2));
      console.log('[check-jokes] Please fix these jokes before continuing.');
      // TODO: improve the error reporting to point out the invalid properties
      process.exit(1);
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  
})();