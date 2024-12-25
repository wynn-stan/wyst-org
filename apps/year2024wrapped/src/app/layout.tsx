import { Analytics } from '@vercel/analytics/react';
import { JetBrains_Mono, Inter as InterFont } from 'next/font/google';

import './global.scss';
import clsx from 'clsx';

export const metadata = {
  title: '2024 Digital Wrapped',
  description: '2024 Digital Wrapped',
};

const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const Inter = InterFont({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${Inter.variable} ${JetBrainsMono.variable} !p-0`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
