import { MetadataRoute } from 'next'

const BASE = 'https://www.serendibgemstones.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/ceylon-sapphires`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gemstones`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/custom-jewellery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/how-we-source`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/how-we-verify`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },

    // International Buyer Pages
    { url: `${BASE}/for-jewellers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/custom-sourcing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/export-shipping`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Gemstone Library
    { url: `${BASE}/gemstones/blue-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/padparadscha-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/ruby`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/yellow-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/pink-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/star-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/green-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/alexandrite`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/spinel`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/star-ruby`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/hessonite`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/gemstones/zircon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/wholesale`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },

    // Knowledge Centre
    { url: `${BASE}/learn`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // Topic Clusters
    { url: `${BASE}/learn/sapphires`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/learn/buying-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/learn/treatments`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/learn/certification`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/learn/sri-lanka`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Articles
    { url: `${BASE}/learn/what-is-an-unheated-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/learn/gia-vs-grs-certificate`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/learn/what-is-padparadscha-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/learn/what-does-no-heat-mean-on-certificate`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/learn/what-is-a-star-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/learn/ceylon-vs-kashmir-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/learn/how-is-sapphire-origin-determined`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/learn/are-unheated-sapphires-worth-more`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Ceylon Gem Identity (CGI)
    { url: `${BASE}/cgi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/cgi/why-digital-gem-identity`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cgi/how-gin-works`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cgi/cgi-passport`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/cgi/verification`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // FAQ Pages
    { url: `${BASE}/learn/faq/how-much-is-a-blue-sapphire-worth`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/learn/faq/what-is-the-best-colour-for-a-blue-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/learn/faq/how-can-you-tell-if-a-sapphire-is-real`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/learn/faq/what-is-the-rarest-gemstone-in-sri-lanka`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/learn/faq/are-sapphires-a-good-investment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/learn/faq/what-is-the-difference-between-natural-and-heated-sapphire`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/learn/faq/how-to-read-a-gemstone-certificate`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/learn/faq/why-are-ceylon-sapphires-so-expensive`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/learn/faq/what-carat-size-sapphire-should-i-buy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/learn/faq/is-a-gia-certificate-worth-it`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
  ]
}
