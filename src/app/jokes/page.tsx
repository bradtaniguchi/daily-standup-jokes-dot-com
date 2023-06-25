import { Joke } from "@/types/joke/joke";
import { JokeDate } from "@/types/joke/joke-date";
import { getNext30Days } from "@/utils/dates/get-next-30-days";
import { getPrevious30Days } from "@/utils/dates/get-previous-30-days";
import Link from "next/link";

/**
 * Page that shows the last 30 days of jokes. If the user uses any pagination on this page, 
 * it will make an async call to get the next/previous 30 days of jokes.
 */
export default function JokesPage() {
  // TODO: switch to hooks
  const last30DaysOfJokes: Joke[] = [];

  const next30DayDate: JokeDate = getNext30Days();
  const previous30DayDate: JokeDate = getPrevious30Days();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* TODO: update design */}
      <h1 className="text-2xl font-extrabold">Jokes</h1>
      <p className="m-4">Jokes page</p>
      <li>
        {last30DaysOfJokes.map((joke) => (
          <div key={joke.date} className="m-2">
            {/* TODO: update to link individual pages of jokes */}
            <pre>{JSON.stringify(joke, null, 2)}</pre>
          </div>
        ))}
      </li>
      <div>
        <Link href={{
          pathname: '/jokes',
          query: {
            date: previous30DayDate,
          }
        }}>Previous</Link>
        <Link href={{
          pathname: '/jokes',
          query: {
            date: next30DayDate,
          }
        }}>Next</Link>
      </div>
    </main>
  );
}
