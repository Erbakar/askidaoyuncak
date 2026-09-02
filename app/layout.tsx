import type { Metadata } from 'next';
import { Geist, Newsreader } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://askidaoyuncak.org'),
  title: 'Askıda Oyuncak | Sevilen oyuncaklar yeniden sevilsin',
  description: 'Kullanılmayan oyuncakları topluyor, temizliyor, onarıyor ve ihtiyaç sahibi çocuklarla buluşturuyoruz.',
  openGraph: {
    title: 'Askıda Oyuncak | Sevilen oyuncaklar yeniden sevilsin',
    description: 'Oyuncaklara ikinci bir hikâye, çocuklara daha çok oyun.',
    images: [{ url: '/og.png', width: 1734, height: 907, alt: 'Sevilen oyuncaklar yeniden sevilsin.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Askıda Oyuncak | Sevilen oyuncaklar yeniden sevilsin',
    description: 'Oyuncaklara ikinci bir hikâye, çocuklara daha çok oyun.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${newsreader.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
