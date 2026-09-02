import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'Knowledge Centre — Expert Guides to Ceylon Gemstones',
  description: 'Authoritative guides on Ceylon sapphires, gemstone certification, heat treatment, buying advice, and Sri Lankan origins — written by people who source these stones at the mine.',
  alternates: { canonical: 'https://www.serendibgemstones.com/learn' },
}

const clusters = [
  {
    href: '/learn/sapphires',
    title: 'Natural Sapphires',
    description: 'Colour varieties, origins, quality factors, and what makes Ceylon sapphires the world\'s most sought-after.',
    colour: '#1a5f9e',
    articleCount: 4,
  },
  {
    href: '/learn/buying-guide',
    title: 'Buying Guide',
    description: 'How to buy with confidence — certification, pricing, red flags, and what to prioritise at every budget.',
    colour: '#c9a84c',
    articleCount: 1,
  },
  {
    href: '/learn/treatments',
    title: 'Treatments & Enhancements',
    description: 'Heat treatment, beryllium diffusion, lead-glass filling — what they are, how to detect them, and why they matter.',
    colour: '#8b4513',
    articleCount: 3,
  },
  {
    href: '/learn/certification',
    title: 'Certification & Grading',
    description: 'GIA, GRS, Gübelin — understanding laboratory reports, origin determination, and what certificates really tell you.',
    colour: '#6b2d8b',
    articleCount: 3,
  },
  {
    href: '/learn/sri-lanka',
    title: 'Sri Lanka & Origins',
    description: '2,500 years of gemstone heritage — mining regions, geology, and why this island produces the finest sapphires on earth.',
    colour: '#2e8b57',
    articleCount: 2,
  },
]

const featuredArticles = [
  {
    slug: 'what-is-an-unheated-sapphire',
    cluster: 'Sapphires',
    title: 'What is an unheated sapphire?',
    description: 'Over 95% of commercial sapphires are heat-treated. An unheated stone is the rare exception — here is why that matters.',
    readTime: '5 min',
  },
  {
    slug: 'gia-vs-grs-certificate',
    cluster: 'Certification',
    title: 'GIA vs GRS: which certificate is better?',
    description: 'Both laboratories are internationally respected, but they serve different buyers. Here is how to choose.',
    readTime: '4 min',
  },
  {
    slug: 'ceylon-vs-kashmir-sapphire',
    cluster: 'Sapphires',
    title: 'Ceylon vs Kashmir sapphire',
    description: 'Kashmir stones are virtually unobtainable. Ceylon sapphires are the finest accessible alternative.',
    readTime: '5 min',
  },
  {
    slug: 'are-unheated-sapphires-worth-more',
    cluster: 'Buying',
    title: 'Are unheated sapphires worth more?',
    description: 'Yes — significantly. Here is why the unheated premium exists and why it is structural.',
    readTime: '4 min',
  },
]

const allArticles = [
  { slug: 'what-is-an-unheated-sapphire', cluster: 'Sapphires', title: 'What is an unheated sapphire?' },
  { slug: 'what-is-padparadscha-sapphire', cluster: 'Sapphires', title: 'What is a Padparadscha sapphire?' },
  { slug: 'what-is-a-star-sapphire', cluster: 'Sapphires', title: 'What is a star sapphire?' },
  { slug: 'ceylon-vs-kashmir-sapphire', cluster: 'Sapphires', title: 'Ceylon vs Kashmir sapphire' },
  { slug: 'gia-vs-grs-certificate', cluster: 'Certification', title: 'GIA vs GRS: which certificate is better?' },
  { slug: 'what-does-no-heat-mean-on-certificate', cluster: 'Certification', title: 'What does "no heat" mean on a certificate?' },
  { slug: 'how-is-sapphire-origin-determined', cluster: 'Certification', title: 'How is sapphire origin determined?' },
  { slug: 'are-unheated-sapphires-worth-more', cluster: 'Buying', title: 'Are unheated sapphires worth more?' },
]

const popularFAQs = [
  { slug: 'how-much-is-a-blue-sapphire-worth', title: 'How much is a blue sapphire worth?' },
  { slug: 'what-is-the-best-colour-for-a-blue-sapphire', title: 'What is the best colour for a blue sapphire?' },
  { slug: 'how-can-you-tell-if-a-sapphire-is-real', title: 'How can you tell if a sapphire is real?' },
  { slug: 'are-sapphires-a-good-investment', title: 'Are sapphires a good investment?' },
  { slug: 'why-are-ceylon-sapphires-so-expensive', title: 'Why are Ceylon sapphires so expensive?' },
  { slug: 'is-a-gia-certificate-worth-it', title: 'Is a GIA certificate worth it for a sapphire?' },
]

const clusterColour: Record<string, string> = {
  Sapphires: 'text-teal/70 border-teal/25',
  Certification: 'text-purple-mid/80 border-purple-mid/30',
  Buying: 'text-offwhite/50 border-white/15',
}

export default function LearnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Knowledge Centre — Expert Guides to Ceylon Gemstones',
            description: 'Authoritative guides on Ceylon sapphires, certification, heat treatment, buying advice, and Sri Lankan origins.',
            url: 'https://www.serendibgemstones.com/learn',
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.3) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight mb-6">
              Knowledge Centre
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl mx-auto leading-relaxed">
              Expert-written guides on <Link href="/ceylon-sapphires" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Ceylon sapphires</Link>, heat treatment, certification, and buying advice — by people who source these stones at the mine in <Link href="/learn/sri-lanka" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Sri Lanka</Link>. Everything you need to buy, invest, and collect with confidence.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Topic Clusters */}
      <section className="bg-dark px-6 lg:px-10 py-20 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Browse by Topic</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-offwhite font-semibold text-center mb-14">
              Explore Our Guides
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clusters.map((cluster, i) => (
              <FadeUp key={cluster.href} delay={i * 0.06}>
                <Link href={cluster.href} className="group block h-full">
                  <div className="flex flex-col h-full bg-dark-card border border-white/6 hover:border-teal/25 transition-all duration-300 p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <GemSVG colour={cluster.colour} size={36} />
                      <h3 className="font-cormorant text-xl text-offwhite font-semibold group-hover:text-teal-light transition-colors">
                        {cluster.title}
                      </h3>
                    </div>
                    <p className="font-jost text-xs text-offwhite/45 leading-relaxed mb-5 flex-1">
                      {cluster.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-jost text-[10px] text-offwhite/25 tracking-wide">
                        {cluster.articleCount} {cluster.articleCount === 1 ? 'guide' : 'guides'}
                      </span>
                      <span className="font-jost text-xs tracking-widest uppercase text-teal/50 group-hover:text-teal transition-colors">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-dark-card px-6 lg:px-10 py-20 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Featured</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-offwhite font-semibold text-center mb-14">
              Most Popular Guides
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredArticles.map((article, i) => (
              <FadeUp key={article.slug} delay={i * 0.06}>
                <Link href={`/learn/${article.slug}`} className="group block h-full">
                  <div className="flex flex-col h-full bg-dark border border-white/6 hover:border-teal/30 transition-colors p-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`font-jost text-[10px] tracking-wider uppercase border px-2.5 py-0.5 ${clusterColour[article.cluster] ?? 'text-offwhite/40 border-white/10'}`}>
                        {article.cluster}
                      </span>
                      <span className="font-jost text-[10px] text-offwhite/25">{article.readTime} read</span>
                    </div>
                    <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-3 group-hover:text-teal-light transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-5 flex-1">
                      {article.description}
                    </p>
                    <span className="font-jost text-xs tracking-widest uppercase text-teal/50 group-hover:text-teal transition-colors">
                      Read guide →
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="bg-dark px-6 lg:px-10 py-20 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-offwhite font-semibold text-center mb-14">
              All Guides
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allArticles.map((article, i) => (
              <FadeUp key={article.slug} delay={i * 0.04}>
                <Link href={`/learn/${article.slug}`} className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-5">
                  <span className={`inline-block font-jost text-[10px] tracking-wider uppercase border px-2 py-0.5 mb-3 ${clusterColour[article.cluster] ?? 'text-offwhite/40 border-white/10'}`}>
                    {article.cluster}
                  </span>
                  <p className="font-cormorant text-base text-offwhite font-semibold leading-snug group-hover:text-teal-light transition-colors">
                    {article.title}
                  </p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-dark-card px-6 lg:px-10 py-20 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Quick Answers</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-offwhite font-semibold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-jost text-sm text-offwhite/40 text-center max-w-xl mx-auto leading-relaxed mb-14">
              Direct answers to the questions we hear most — from first-time buyers to experienced collectors.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularFAQs.map((faq, i) => (
              <FadeUp key={faq.slug} delay={i * 0.04}>
                <Link href={`/learn/faq/${faq.slug}`} className="group flex items-start gap-3 bg-dark border border-white/6 hover:border-teal/25 transition-colors p-5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                    <text x="8" y="11.5" textAnchor="middle" fill="rgba(201,168,76,0.5)" fontSize="10" fontFamily="serif">?</text>
                  </svg>
                  <p className="font-jost text-sm text-offwhite/60 leading-snug group-hover:text-teal-light transition-colors">
                    {faq.title}
                  </p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Gemstone Library Cross-link */}
      <section className="bg-dark px-6 lg:px-10 py-20 border-t border-teal/10">
        <div className="max-w-5xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Gemstone Library</p>
            <h2 className="font-cormorant text-3xl sm:text-4xl text-offwhite font-semibold mb-4">
              In-Depth Gemstone Guides
            </h2>
            <p className="font-jost text-sm text-offwhite/45 max-w-lg mx-auto leading-relaxed mb-10">
              Comprehensive, encyclopedic guides to individual gemstone species — everything from origins and quality factors to investment value and care.
            </p>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: '/gemstones/blue-sapphire', label: 'Blue Sapphire Guide', colour: '#1a5f9e' },
              { href: '/gemstones/padparadscha-sapphire', label: 'Padparadscha Guide', colour: '#e8855e' },
              { href: '/gemstones/ruby', label: 'Ruby Guide', colour: '#c0392b' },
            ].map((gem) => (
              <FadeUp key={gem.href}>
                <Link href={gem.href} className="group flex items-center gap-3 px-6 py-3 border border-white/6 hover:border-teal/30 transition-colors bg-dark-card">
                  <GemSVG colour={gem.colour} size={24} />
                  <span className="font-jost text-sm text-offwhite/60 group-hover:text-teal-light transition-colors">{gem.label}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-offwhite/30 group-hover:text-teal" />
                  </svg>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark-card py-20 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-2xl text-offwhite/60 mb-4">
            Have a question we haven&apos;t covered?
          </p>
          <p className="font-jost text-sm text-offwhite/45 mb-8 max-w-lg mx-auto leading-relaxed">
            Our founders are always happy to share their knowledge — whether you&apos;re researching a purchase, evaluating a certificate, or just curious about gemstones.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Ask Us Anything
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
