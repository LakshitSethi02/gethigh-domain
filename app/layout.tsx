import type { Metadata, Viewport } from 'next';
import '@fontsource/anton';
import '@fontsource-variable/baloo-2/wght.css';
import '@fontsource-variable/inter/wght.css';
import './globals.css';

const siteUrl = 'https://gethigh.in';
const title = 'gethigh.in — A Premium .in Domain, For Sale';
const description =
  'gethigh.in is a seven-letter, one-word .in domain available for purchase. Ready to transfer today — make an offer, all inquiries confidential.';

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
  themeColor: '#0b0b14',
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
      <body className="bg-ink text-white font-sans antialiased selection:bg-grad-mid selection:text-white">
        {children}
      </body>
    </html>
  );
}
