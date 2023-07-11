import { useGetTodaysJoke } from '@/hooks/use-get-joke';

export default function HomePage() {
  const { loading, joke, error } = useGetTodaysJoke();

  if (loading) return <div>loading...</div>;
  if (error)
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <p>Oops there was an error</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );

  if (!joke)
    return (
      <div className="flex min-h-screen flex-col items-center p-24">
        <p>No joke for today!</p>
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-extrabold">Daily Standup Jokes</h1>
      <pre className="m-4" title={JSON.stringify(joke, null, 2)}>
        {JSON.stringify(joke, null, 2)}
      </pre>
    </div>
  );
}

// TODO: migrate to pages router to statically get the data for this page.
