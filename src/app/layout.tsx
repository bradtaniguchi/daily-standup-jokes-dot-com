import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// TODO: add typing for metadata
export const metadata = {
  title: 'Daily Standup Jokes',
  description:
    'A daily joke site, for your daily standup meeting to spice things up.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
