import './global.css';
import { StyledComponentsRegistry } from './registry';

export const metadata = {
  title: 'Wyst Porfolio',
  description: 'Developer portfolio by Winston Lamptey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
