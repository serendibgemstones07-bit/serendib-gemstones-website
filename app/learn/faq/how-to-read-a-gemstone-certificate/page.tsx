import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'How to Read a Gemstone Certificate — A Complete Guide',
  description: 'Learn how to read a GIA or GRS gemstone certificate: identification, carat weight, measurements, treatment disclosure, origin determination, and colour grade explained.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/faq/how-to-read-a-gemstone-certificate' },
}

const fields = [
  { name: 'Identification', description: 'Confirms what the stone is — "Natural Sapphire," "Natural Ruby," etc. This verifies it is a genuine gemstone, not synthetic, glass, or a simulant.' },
  { name: 'Carat Weight', description: 'The stone\'s weight measured to two decimal places. One carat equals 0.2 grams. Price-per-carat increases non-linearly at milestone weights (1ct, 2ct, 3ct, 5ct, 10ct).' },
  { name: 'Measurements', description: 'Length × width × depth in millimetres. These tell you the stone\'s face-up size and proportions — a well-cut 2ct sapphire should look like a 2ct stone, not a deep 1.5ct.' },
  { name: 'Shape & Cut', description: 'The stone\'s outline (oval, cushion, round) and cutting style (faceted, cabochon). Shape is aesthetic; cut quality affects light performance and value.' },
  { name: 'Colour', description: 'GRS assigns specific colour grades (e.g., "Vivid Blue," "Royal Blue," "Pigeon Blood"). GIA describes colour but does not assign trade names. Colour is the single most important value factor.' },
  { name: 'Treatment / Enhancement', description: 'The critical field. "No indications of heating" (GIA) or "No indication of thermal treatment" (GRS) means unheated. Any treatment — heat, beryllium diffusion, filling — is disclosed here.' },
  { name: 'Origin', description: 'Geographic origin when determinable: "Sri Lanka (Ceylon)," "Myanmar (Burma)," "Kashmir." Origin is established through inclusion analysis and trace element chemistry. Ceylon and Kashmir command premiums.' },
  { name: 'Comments', description: 'Additional observations — fluorescence, specific inclusion types, or trade name qualifications. Read these carefully; labs sometimes note concerns that don\'t appear in the main fields.' },
]

const faqItems = [
  {
    q: 'What is the difference between a GIA and GRS certificate?',
    a: 'GIA (Gemological Institute of America) is the most internationally recognised laboratory and is considered the gold standard for certification. GRS (Gem Research Swisslab) is highly respected in the coloured stone trade and assigns commercial colour grades like "Royal Blue" and "Pigeon Blood" that GIA does not use. For maximum resale value and international recognition, GIA is preferred. For colour-grade documentation that aids selling in the Asian market, GRS is preferred. Many serious buyers obtain both.',
  },
  {
    q: 'How much does a gemstone certificate cost?',
    a: 'GIA coloured stone reports typically cost between USD 100 and 300, depending on the stone\'s size and the report type. GRS reports are in a similar range. The cost is trivial relative to the stone\'s value — a certificate for a $5,000 sapphire costs roughly 2-4% of the stone\'s price and can increase its resale value by 20% or more through documented provenance.',
  },
  {
    q: 'Can a certificate be faked?',
    a: 'Yes, and it happens. Both GIA and GRS provide online verification databases where you can enter the report number and verify that the certificate is genuine and matches the stone described. Always verify online before relying on a paper certificate. If the seller cannot provide a verifiable report number, treat the certificate as suspect.',
  },
  {
    q: 'Does every gemstone need a certificate?',
    a: 'For any sapphire, ruby, or emerald above 1 carat that you intend to keep, resell, or insure — yes, absolutely. The cost of certification is small relative to the stone\'s value, and an uncertified stone of significant value will always sell at a discount because buyers cannot verify treatment status or origin independently.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'How to Read a Certificate' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative bg-dark pt-36 pb-16 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(107,45,139,0.2) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/learn" className="hover:text-teal transition-colors">Knowledge Centre</Link>
            <span>/</span>
            <span className="text-offwhite/60">FAQ</span>
          </nav>
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Frequently Asked Question</p>
            <h1 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-light leading-tight mb-6">
              How to read a gemstone certificate
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 py-10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="bg-dark-card border border-teal/20 p-6 sm:p-8">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Quick Answer</p>
              <p className="font-jost text-sm text-offwhite/70 leading-relaxed">
                A gemstone certificate from GIA or GRS tells you the stone&apos;s <strong className="text-offwhite">identity</strong> (what it is), <strong className="text-offwhite">weight and measurements</strong> (how big), <strong className="text-offwhite">treatment status</strong> (heated or unheated), <strong className="text-offwhite">origin</strong> (where it&apos;s from), and <strong className="text-offwhite">colour grade</strong> (how fine). The treatment field is the most commercially important — it determines whether you&apos;re paying unheated prices for a genuinely unheated stone.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 pb-16">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Certificate Fields Explained</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-10">What Each Section Tells You</h2>
          </FadeUp>
          <div className="space-y-4">
            {fields.map((field, i) => (
              <FadeUp key={field.name} delay={i * 0.04}>
                <div className="border border-white/6 bg-dark-card p-6 hover:border-teal/20 transition-colors">
                  <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">{field.name}</h3>
                  <p className="font-jost text-sm text-offwhite/50 leading-relaxed">{field.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-card px-6 lg:px-10 py-16 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-2xl text-offwhite font-semibold mb-8">Related Questions</h2>
            <div className="space-y-3">
              {faqItems.map((faq) => (
                <details key={faq.q} className="faq-item border border-white/6 bg-dark">
                  <summary className="px-6 py-4 cursor-pointer font-jost text-sm text-offwhite/70">{faq.q}</summary>
                  <div className="faq-answer px-6">{faq.a}</div>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 py-12 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-xl text-offwhite font-semibold mb-5">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/learn/gia-vs-grs-certificate" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">GIA vs GRS: which certificate is better?</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
              <Link href="/learn/certification" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">Certification &amp; Grading Hub</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-xl text-offwhite/60 mb-4">Have a certificate you need help reading?</p>
          <p className="font-jost text-sm text-offwhite/45 mb-6 max-w-md mx-auto leading-relaxed">
            Send it to us and we&apos;ll explain every field in plain language &mdash; free, no obligation.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-teal hover:bg-teal-light text-white font-jost text-xs tracking-widest uppercase transition-colors duration-300">
            Submit a Certificate
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
