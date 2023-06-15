import JokeCard from '@/components/joke-card';

/**
 * Test page that can be removed later
 */
export default function SandboxPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-2xl font-extrabold">Sandbox</h1>
      <JokeCard joke={{} as any} />
    </main>
  );
}
