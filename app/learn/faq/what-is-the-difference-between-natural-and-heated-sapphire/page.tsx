import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'What Is the Difference Between a Natural and Heated Sapphire?',
  description: 'Both are natural sapphires — "heated" refers to enhancement, not origin. Heat treatment improves colour and clarity but reduces value by 2–5× compared to unheated stones.',
  alternates: { canonical: 'https://serendibgemstones.com/learn/faq/what-is-the-difference-between-natural-and-heated-sapphire' },
}

const faqItems = [
  {
    q: 'Is a heated sapphire still a real sapphire?',
    a: 'Yes. Heat treatment does not make a sapphire synthetic or artificial. A heated sapphire is still a natural gemstone mined from the earth — the treatment simply improves its appearance. The distinction is between "treated" and "untreated," not between "real" and "fake." However, treatment status must always be disclosed and significantly affects value.',
  },
  {
    q: 'Can you reverse heat treatment on a sapphire?',
    a: 'No. Heat treatment permanently alters the crystal structure, dissolving rutile silk and modifying colour-causing trace elements. Once a sapphire has been heated, it cannot be returned to its original state. This is one reason unheated sapphires command a premium — their natural beauty is irreplaceable.',
  },
  {
    q: 'Why do dealers heat sapphires if it reduces value?',
    a: 'Because the vast majority of rough sapphires are not attractive enough to sell without enhancement. Heating can transform a pale, milky stone into a commercially appealing gem. While the per-carat value is lower than an unheated stone of equivalent quality, the heated stone would have had virtually no commercial value without treatment. Heating creates saleable inventory from otherwise unsaleable rough.',
  },
  {
    q: 'How can I verify if my sapphire is unheated?',
    a: 'The only reliable method is laboratory certification from an accredited gemological laboratory such as GIA or GRS. These labs examine microscopic internal features — inclusion alteration patterns, dissolved rutile needles, stress halos, and flux residues — that are diagnostic of heating. Visual inspection or simple home tests cannot reliably distinguish heated from unheated sapphires.',
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
        { '@type': 'ListItem', position: 3, name: 'Natural vs Heated Sapphire' },
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
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.2) 0%, transparent 70%)' }} />
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
              What is the difference between a natural and heated sapphire?
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
                Both heated and unheated sapphires are <strong className="text-offwhite">natural gemstones</strong> mined from the earth. The term &ldquo;heated&rdquo; refers to a post-mining treatment that improves colour and clarity, not to the stone&apos;s origin. An unheated sapphire achieves its beauty entirely through nature, which is why it typically costs <strong className="text-offwhite">2&ndash;5 times more</strong> than a heated stone of equivalent appearance.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 pb-16">
        <div className="max-w-3xl mx-auto prose-gem">
          <FadeUp>
            <h2>The Full Answer</h2>
            <p>
              The most common misconception in the gemstone world is that &ldquo;natural&rdquo; means &ldquo;unheated.&rdquo; In fact, every sapphire that was formed in the earth &mdash; whether heated or not &mdash; is a natural sapphire. The opposite of natural is <em>synthetic</em> (laboratory-created), not heated.
            </p>
            <p>
              Heat treatment is a process where natural rough sapphires are placed in furnaces at temperatures between 1,200&deg;C and 1,800&deg;C. This dissolves microscopic rutile inclusions (called &ldquo;silk&rdquo;), improves colour saturation, and can enhance clarity. The treatment is permanent, widely accepted in the trade, and applied to over 95% of all sapphires on the commercial market.
            </p>
            <h3>What changes during heating</h3>
            <p>
              At the molecular level, heat dissolves the titanium-bearing needles that cause a milky or silky appearance in many rough sapphires. It can also redistribute iron and titanium — the trace elements responsible for blue colour — creating a more saturated, even hue. In some cases, heating can transform a nearly colourless stone into a vivid blue gem.
            </p>
            <h3>Why unheated sapphires cost more</h3>
            <p>
              An unheated sapphire that shows fine colour and good clarity achieved those qualities entirely through geological processes. No human intervention improved its appearance. This is genuinely rare &mdash; fewer than 5% of mined sapphires are attractive enough to sell without treatment. That scarcity, combined with strong collector demand for natural beauty, drives the 2&ndash;5&times; price premium. At auction, the premium for exceptional unheated stones can exceed 10&times;.
            </p>
            <h3>How treatment is disclosed</h3>
            <p>
              All reputable gemological laboratories &mdash; GIA, GRS, G&uuml;belin, SSEF &mdash; test for heat treatment and disclose the results on their reports. GIA uses the phrase &ldquo;No indications of heating&rdquo; for unheated stones. GRS uses &ldquo;No indication of thermal treatment.&rdquo; These statements are the internationally accepted standard for confirming a stone is unheated.
            </p>
          </FadeUp>
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
              <Link href="/learn/what-is-an-unheated-sapphire" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">What is an unheated sapphire?</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
              <Link href="/learn/treatments" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">Treatments &amp; Enhancements</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-xl text-offwhite/60 mb-4">Want to verify a stone&apos;s treatment status?</p>
          <p className="font-jost text-sm text-offwhite/45 mb-6 max-w-md mx-auto leading-relaxed">
            Send us the certificate and we&apos;ll explain every field &mdash; free, no obligation.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-teal hover:bg-teal-light text-white font-jost text-xs tracking-widest uppercase transition-colors duration-300">
            Submit a Certificate
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
