import { Analytics } from '@vercel/analytics/react';
import { Work_Sans } from 'next/font/google';

import { StyledComponentsRegistry } from './registry';
import { Layouts } from '../components';
import './global.scss';

export const metadata = {
  title: 'Wyst Porfolio',
  description: 'Developer portfolio by Winston Lamptey',
};

const WorkSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
});

// const PoppinsFont = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={WorkSans.className}>
        <StyledComponentsRegistry>
          <Layouts.RootLayout>{children}</Layouts.RootLayout>
        </StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  );
}
