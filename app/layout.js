import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'May Flowers Horticulture | Premium Vertical Gardens',
  description: 'Discover the future of urban farming with our premium vertical gardens. Perfect for any space.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
