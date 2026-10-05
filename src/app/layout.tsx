import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bunnyportfolio.vercel.app'),
  title: 'Le Vu Hanh Thao | Commercial Portfolio',
  description: 'Commercial portfolio of Le Vu Hanh Thao: sales, partnerships, content-led lead generation and data-driven growth.',
  openGraph: {
    title: 'Le Vu Hanh Thao | Commercial Portfolio',
    description: 'Sales, partnerships and data-driven commercial growth.',
    images: ['/assets/hero-portrait.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
