import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' });

export const metadata = {
  title: 'May Flowers Horticulture | Premium Vertical Gardens',
  description: 'Discover the future of urban farming with our premium vertical gardens. Perfect for any space.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
