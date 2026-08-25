import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'

export const metadata: Metadata = {
  title: 'Is a GIA Certificate Worth It for a Sapphire?',
  description: 'Yes — a GIA certificate verifies identity, treatment status, and origin, giving buyers independent confidence and stronger resale positioning. Essential for any sapphire over 1 carat.',
  alternates: { canonical: 'https://www.serendibgemstones.com/learn/faq/is-a-gia-certificate-worth-it' },
}

const faqItems = [
  {
    q: 'What does a GIA sapphire certificate confirm?',
    a: 'A GIA Colored Stone Identification and Origin Report independently confirms three things that matter most for value: the stone\'s identity (natural corundum vs synthetic or another material), its treatment status (heated, unheated, or otherwise enhanced), and its geographic origin. These are the same factors that most directly determine a sapphire\'s market value.',
  },
  {
    q: 'Should I get GIA or GRS certification?',
    a: 'For maximum international recognition and resale confidence, GIA is preferred — it is the most widely accepted laboratory globally. For colour-grade documentation valued in the Asian market (trade names like "Royal Blue" or "Pigeon Blood"), GRS is preferred. For very high-value stones, many buyers obtain both certifications. For everyday purchases, one reputable certificate is sufficient.',
  },
  {
    q: 'Can I buy a sapphire without a certificate?',
    a: 'You can, but you are taking a significant risk. Without a laboratory report, you cannot independently verify the stone\'s identity (is it really sapphire?), treatment status (heated or unheated?), or origin (is it really from Sri Lanka?). For stones under 0.5 carats or those intended purely for decorative jewellery, the risk may be acceptable. For anything above 1 carat or any purchase framed as investment, certification is essential.',
  },
  {
    q: 'Does a GIA certificate guarantee the sapphire is good?',
    a: 'No. A GIA certificate tells you what the stone is — it does not tell you whether it is beautiful, well-cut, or worth the asking price. A certified sapphire can still have poor colour, bad proportions, or windowing. The certificate verifies identity, treatment, and origin — the visual quality and value assessment require expert judgement or a trusted dealer.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://www.serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Is a GIA Certificate Worth It?' },
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
              Is a GIA certificate worth it for a sapphire?
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
                <strong className="text-offwhite">Yes, for any sapphire over 1 carat.</strong> A GIA report independently verifies the stone&apos;s identity, treatment status, and origin &mdash; three things that are impossible to confirm without laboratory analysis and that directly affect market value, resale confidence, and insurability.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark px-6 lg:px-10 pb-16">
        <div className="max-w-3xl mx-auto prose-gem">
          <ArticleByline updated="2026-08-12" />
          <FadeUp>
            <h2>The full answer</h2>
            <p>
              GIA (Gemological Institute of America) is the most internationally recognised gemological laboratory. A GIA Colored Stone Report provides independent, scientifically rigorous verification of three things that matter most for sapphire value: what the stone is, whether it has been treated, and where it came from.
            </p>
            <h3>What GIA tests</h3>
            <p>
              GIA&apos;s analysis includes spectroscopic identification (confirming the stone is natural corundum), microscopic inclusion examination (detecting evidence of heat treatment), trace element chemistry via energy-dispersive X-ray fluorescence (supporting origin determination), and photographic documentation. The result is a report that any buyer, anywhere in the world, can rely on.
            </p>
            <h3>The value certification adds</h3>
            <p>
              A GIA report turns claims into verified facts. A dealer&apos;s statement that a stone is &ldquo;unheated Ceylon&rdquo; is difficult for a buyer to test; a GIA report saying the same thing is independently checkable. That verification carries forward every time the stone changes hands &mdash; supporting stronger resale positioning, cleaner insurance appraisals, and greater confidence for estate or gift planning. The uplift is most pronounced for unheated stones and for material from prestigious origins such as Sri Lanka or Kashmir, where the origin and treatment statements are the price-defining facts.
            </p>
            <h3>When certification is essential</h3>
            <p>
              Certification is essential for any sapphire above 1 carat that you intend to keep, resell, insure, or leave to an heir. It is especially important for unheated stones, where the treatment status claim commands a significant premium. Without a laboratory report confirming &ldquo;no indications of heating,&rdquo; you are paying the unheated premium on trust alone.
            </p>
            <h3>When you might skip it</h3>
            <p>
              For small sapphires under 0.5ct used in decorative jewellery, the cost of certification may exceed the value it adds. For commercial heated sapphires at the accessible end of the market, the economics are similar. In these cases, buying from a trusted dealer with a clear return policy is a reasonable alternative to independent certification.
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
              <Link href="/learn/gia-vs-grs-certificate" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">GIA vs GRS: which certificate is better?</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
              <Link href="/learn/faq/how-to-read-a-gemstone-certificate" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                <p className="font-cormorant text-base text-offwhite font-semibold group-hover:text-teal-light transition-colors leading-snug">How to read a gemstone certificate</p>
                <span className="font-jost text-xs text-teal/50 mt-2 inline-block">Read guide &rarr;</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-dark-card py-16 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-xl text-offwhite/60 mb-4">All our stones come with GIA or GRS certification</p>
          <p className="font-jost text-sm text-offwhite/45 mb-6 max-w-md mx-auto leading-relaxed">
            Every gemstone we sell includes an independent laboratory report. No exceptions.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-teal hover:bg-teal-light text-white font-jost text-xs tracking-widest uppercase transition-colors duration-300">
            Explore Our Collection
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
