import type { Metadata } from 'next'
import EnquiryPaths from '@/components/EnquiryPaths'
import FadeUp from '@/components/FadeUp'
import LogoImage from '@/components/LogoImage'

export const metadata: Metadata = {
  title: 'Contact & Enquiry — Serendib Gemstones',
  description: 'Enquire about certified, unheated Sri Lankan sapphires, rubies, and alexandrite. Whether you\'re a collector, jeweller, or investor — we respond personally to every enquiry.',
  alternates: { canonical: 'https://serendibgemstones.com/contact' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Serendib Gemstones (Pvt) Ltd',
  image: 'https://serendibgemstones.com/logo.jpg',
  url: 'https://serendibgemstones.com',
  email: 'gems@serendibgemstones.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '309/2, Kristhuraja Mawatha, Daluwakotuwa',
    addressLocality: 'Kochchikade',
    addressCountry: 'LK',
  },
  description: 'Mine-direct supplier of unheated, GIA and GRS certified Sri Lankan sapphires, rubies, and alexandrite.',
  priceRange: '$$$',
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* Hero */}
      <section className="bg-dark pt-36 pb-16 px-6 lg:px-10 border-b border-teal/10">
        <div className="max-w-3xl">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Get in Touch</p>
            <h1 className="font-cormorant leading-[1.05] mb-4">
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light">Start a</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl text-offwhite font-semibold italic">Conversation.</span>
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-lg leading-relaxed mt-4">
              Whether you&apos;re looking for a specific stone, exploring gemstone investment, or need help reading a certificate — choose the pathway that fits your needs. Every enquiry receives a personal response from our founders.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Enquiry pathways + info */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Multi-path forms */}
        <div className="bg-dark px-8 lg:px-16 py-16">
          <FadeUp>
            <EnquiryPaths />
          </FadeUp>
        </div>

        {/* Contact details */}
        <div className="bg-warm px-8 lg:px-16 py-16">
          <FadeUp delay={0.1}>
            <h2 className="font-cormorant text-3xl text-dark font-semibold italic mb-1">
              Serendib Gemstones
            </h2>
            <p className="font-cormorant italic text-teal text-base mb-10 tracking-wide">
              (Pvt) Ltd
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-jost text-xs uppercase tracking-widest text-dark/35 mb-1">Address</p>
                <p className="font-jost text-sm text-dark/70 leading-relaxed">
                  309/2, Kristhuraja Mawatha,<br />Daluwakotuwa, Kochchikade,<br />Sri Lanka
                </p>
              </div>
              <div>
                <p className="font-jost text-xs uppercase tracking-widest text-dark/35 mb-1">Email</p>
                <a href="mailto:gems@serendibgemstones.com" className="font-jost text-sm text-teal hover:text-teal-dark transition-colors">
                  gems@serendibgemstones.com
                </a>
              </div>
              <div>
                <p className="font-jost text-xs uppercase tracking-widest text-dark/35 mb-1">WhatsApp</p>
                <a href="https://wa.me/94702494944" className="font-jost text-sm text-dark/70 hover:text-teal transition-colors">
                  +94 70 249 4944
                </a>
              </div>
              <div>
                <p className="font-jost text-xs uppercase tracking-widest text-dark/35 mb-1">Instagram</p>
                <a
                  href="https://instagram.com/serendibgemstones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jost text-sm text-dark/70 hover:text-purple transition-colors"
                >
                  @serendibgemstones
                </a>
              </div>
            </div>

            {/* Response promise */}
            <div className="mt-10 pt-8 border-t border-dark/10">
              <p className="font-jost text-xs uppercase tracking-widest text-dark/35 mb-3">Our commitment</p>
              <div className="space-y-3">
                {[
                  'Personal response from a founder within 24 hours',
                  'No sales pressure — just honest guidance',
                  'Free certificate review assistance',
                  'Secure international shipping to any country',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                      <circle cx="8" cy="8" r="6" stroke="#c9a84c" strokeWidth="1" />
                      <path d="M5.5 8l2 2 3-3.5" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-jost text-sm text-dark/60">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-dark/10">
              <p className="font-cormorant italic text-base text-teal/70">
                &ldquo;We respond personally to every enquiry.&rdquo;
              </p>
              <p className="font-jost text-xs text-dark/40 mt-2 uppercase tracking-wider">
                — The Founders
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Bottom */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[280px]">
        <div className="bg-warm px-10 lg:px-16 py-14 flex flex-col justify-center">
          <FadeUp>
            <h3 className="font-cormorant text-2xl italic text-dark font-semibold mb-3">
              Serendib Gemstones (Pvt) Ltd
            </h3>
            <p className="font-jost text-sm text-dark/55">309/2, Kristhuraja Mawatha,<br />Daluwakotuwa, Kochchikade,<br />Sri Lanka</p>
            <p className="font-cormorant italic text-teal mt-5 text-base">
              Unheated. Untreated. Unmatched.
            </p>
          </FadeUp>
        </div>
        <div className="bg-dark flex items-center justify-center py-14 px-10">
          <FadeUp className="flex flex-col items-center gap-4">
            <LogoImage size={120} />
            <p className="font-cormorant italic text-teal/60 text-base tracking-wide text-center">
              Unheated. Untreated. Unmatched.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
