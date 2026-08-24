import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-KYNVXFJ05T'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const BASE = 'https://serendibgemstones.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Serendib Gemstones — Unheated Ceylon Sapphires, GIA & GRS Certified',
    template: '%s | Serendib Gemstones',
  },
  description:
    'Mine-direct, unheated Sri Lankan sapphires, rubies, and alexandrite — independently certified by GIA and GRS. Sourced from Ratnapura, Elahera and Kanthale.',
  keywords: [
    'unheated sapphire', 'Ceylon sapphire', 'Sri Lanka gemstones', 'GIA certified sapphire',
    'GRS certified', 'blue sapphire Sri Lanka', 'padparadscha sapphire', 'no heat sapphire',
    'Ratnapura gems', 'buy sapphire', 'unheated ruby', 'alexandrite Sri Lanka',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE,
    siteName: 'Serendib Gemstones',
    title: 'Serendib Gemstones — Unheated Ceylon Sapphires',
    description: 'Mine-direct, unheated Sri Lankan sapphires and gemstones, independently certified by GIA and GRS.',
    images: [{ url: '/logo.jpg', width: 800, height: 800, alt: 'Serendib Gemstones' }],
  },
  twitter: {
    card: 'summary',
    title: 'Serendib Gemstones — Unheated Ceylon Sapphires',
    description: 'Mine-direct, unheated Sri Lankan sapphires and gemstones, independently certified by GIA and GRS.',
    images: ['/logo.jpg'],
  },
  alternates: {
    canonical: BASE,
  },
  verification: {
    other: {
      'msvalidate.01': '8007F79D9D0F89E8137D0D777B9BD4C3',
    },
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Serendib Gemstones (Pvt) Ltd',
  alternateName: 'Serendib Gemstones',
  url: 'https://serendibgemstones.com',
  logo: 'https://serendibgemstones.com/logo.jpg',
  description: 'Mine-direct supplier of unheated, GIA and GRS certified Sri Lankan sapphires, rubies, and alexandrite. Sourced from Ratnapura, Elahera, and Kanthale.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '309/2, Kristhuraja Mawatha, Daluwakotuwa',
    addressLocality: 'Kochchikade',
    addressCountry: 'LK',
  },
  email: 'gems@serendibgemstones.com',
  sameAs: ['https://instagram.com/serendibgemstones'],
  knowsAbout: [
    'Unheated sapphires', 'Ceylon sapphires', 'Sri Lankan gemstones',
    'GIA certification', 'GRS certification', 'Padparadscha sapphires',
    'Star sapphires', 'Alexandrite', 'Ruby', 'Gemstone investment',
  ],
  founder: [
    { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director' },
    { '@type': 'Person', name: 'Meril Peiris', jobTitle: 'Co-Founder & Director' },
    { '@type': 'Person', name: 'Rangana Silva', jobTitle: 'Co-Founder & Director' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  )
}
