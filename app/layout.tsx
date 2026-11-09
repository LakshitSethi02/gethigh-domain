import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter/wght.css';
import './globals.css';

const siteUrl = 'https://gethigh.in';
const title = 'gethigh.in | A name with room to rise';
const description =
  'Buy or rent gethigh.in, a memorable seven-letter .in domain. Explore the possibilities and discuss purchase or rental terms directly with the owner.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'gethigh.in',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0b0e',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'gethigh.in',
  description,
  category: 'Domain Name',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

