import { Analytics } from '@vercel/analytics/react';
import { Work_Sans } from 'next/font/google';

import { StyledComponentsRegistry } from './registry';
import './global.css';

export const metadata = {
  title: 'Wyst Porfolio',
  description: 'Developer portfolio by Winston Lamptey',
};

const WorkSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={WorkSans.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}
