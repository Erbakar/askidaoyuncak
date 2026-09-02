import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://askidaoyuncak.org'),
  title: 'Askıda Oyuncak | Oyuncaklara ikinci hayat',
  description: 'Kullanılmayan oyuncakları topluyor, temizliyor, onarıyor ve ihtiyaç sahibi çocuklarla buluşturuyoruz.',
  openGraph: {
    title: 'Askıda Oyuncak | Oyuncaklara ikinci hayat',
    description: 'Kullanılmayan oyuncakları güvenle yeniliyor ve ihtiyaç sahibi çocuklarla buluşturuyoruz.',
    images: [{ url: '/og-corporate.png', width: 1734, height: 907, alt: 'Oyuncaklara ikinci hayat.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Askıda Oyuncak | Oyuncaklara ikinci hayat',
    description: 'Kullanılmayan oyuncakları güvenle yeniliyor ve ihtiyaç sahibi çocuklarla buluşturuyoruz.',
    images: ['/og-corporate.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
