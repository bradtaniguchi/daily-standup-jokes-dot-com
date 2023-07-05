/**
 * Wrapper around the fetch-api to sensibly fetch
 * async data from the api.
 *
 * Will throw if the response does not come back "ok", or
 * if fetch fails due to a network error. This will include the statusText
 *
 * TODO: should throw more specific errors depending on status codes
 */
export async function sensibleFetch<ResponseType>(
  url: Parameters<typeof fetch>[0],
  init: Parameters<typeof fetch>[1]
) {
  const response = await fetch(url, init);

  if (!response.ok) throw new Error(response.statusText);

  return response.json() as ResponseType;
}
