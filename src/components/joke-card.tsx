export interface JokeCardProps {
  /**
   * The joke to display in the card
   */
  joke: unknown;
}

export default function JokeCard(props: JokeCardProps) {
  // a tailwindcss component for a card that displays a joke text
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-solid	border-gray-400 p-4">
      <p className="text-xl font-bold">Joke text</p>
      <p className="text-sm font-light">Joke author</p>
    </div>
  );
}
