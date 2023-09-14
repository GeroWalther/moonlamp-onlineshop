import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navbar } from './components/UI/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Moonlamp Online-Shop',
  description:
    'Moonlamp E-commerce website built with Next.js 13, TypeScript, Framer-Motion, TailwindCSS, Stripe etc.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
