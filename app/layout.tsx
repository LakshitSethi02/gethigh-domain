import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'gethigh.in - Premium Domain For Sale',
  description: 'Acquire the premium domain gethigh.in for your next brand, startup, or e-commerce venture.',
  openGraph: {
    title: 'gethigh.in - Premium Domain For Sale',
    description: 'Make an offer and acquire gethigh.in today.',
    url: 'https://gethigh.in',
    siteName: 'gethigh.in',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-neutral-50 antialiased selection:bg-emerald-500 selection:text-neutral-950">
        {children}
      </body>
    </html>
  );
}
