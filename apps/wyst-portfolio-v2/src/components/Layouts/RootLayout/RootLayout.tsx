import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-[80px]">
      <div className=" mt-4">
        <Navbar />
      </div>

      <div>{children}</div>
      <Footer />
    </div>
  );
}
