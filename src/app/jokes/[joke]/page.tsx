/**
 * Page for individual dates that shows the joke for that date.
 *
 * TODO: need to provide a 404 page, and show another random joke for future dates
 */
export default function JokePage() {
  // TODO: show joke-card component for the current date
  // see: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-extrabold">Joke</h1>
      <p className="m-4">Joke page</p>
    </main>
  );
}

// TODO: add generateStaticParams from the jokes JSON file
