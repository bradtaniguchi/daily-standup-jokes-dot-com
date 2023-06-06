import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-extrabold">Daily Standup Jokes</h1>
      <p className="m-4">
        A daily joke site, for your daily standup meeting to spice things up.
        Currently under construction
      </p>
    </main>
  );
}
