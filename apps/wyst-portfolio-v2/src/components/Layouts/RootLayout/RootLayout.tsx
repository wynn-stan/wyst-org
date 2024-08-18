import clsx from 'clsx';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={clsx(' flex-grow', 'flex flex-col gap-20')}>
      <div className="mt-4">
        <Navbar />
      </div>

      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
