import './globals.css'
import type { ReactNode } from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })

const siteUrl = 'https://1dagsnettside.no'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '1-Dags Nettside',
    template: '%s | 1-Dags Nettside',
  },
  description: 'Få en moderne nettside på 1 dag for 4000 kr',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: ['/icon.svg'],
  },
  openGraph: {
    title: '1-Dags Nettside',
    description: 'Få en moderne nettside på 1 dag for 4000 kr',
    url: siteUrl,
    siteName: '1-Dags Nettside',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1-Dags Nettside',
    description: 'Få en moderne nettside på 1 dag for 4000 kr',
  },
}

function JsonLd() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '1-Dags Nettside',
    url: siteUrl,
    telephone: '+47 123 45 678',
    email: 'post@borgar-stensrud.no',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NO',
      addressLocality: 'Telemark',
    },
    areaServed: 'Telemark',
    priceRange: 'NOK 4000',
    sameAs: [
      'https://facebook.com/',
      'https://instagram.com/',
      'https://www.linkedin.com/',
    ],
  }
  return (
    <script
      type="application/ld+json"
      // We intentionally stringify here
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}>
        {children}
        <JsonLd />
      </body>
    </html>
  )
}
