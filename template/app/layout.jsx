import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js MongoDB App',
  description: 'A Next.js app with MongoDB and shadcn/ui',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}