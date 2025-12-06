import type { Metadata } from 'next';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Massagista Espiritual | Portfolio',
  description: 'Harmonia para corpo, mente e alma através de toques zen.',
};

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50">
        {children}
      </body>
    </html>
  );
}
