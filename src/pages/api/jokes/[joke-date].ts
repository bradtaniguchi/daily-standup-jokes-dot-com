import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Returns the joke for the given date.
 *
 * If there isn't one, we will return a 404 joke
 */
async function handler(_: NextApiRequest, res: NextApiResponse) {
  // TODO:
  // const { jokeDate } = req.;
  const joke = {};

  res.send({ joke });
}

export default handler;
