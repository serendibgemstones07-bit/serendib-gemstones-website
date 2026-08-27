import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import ArticleByline from '@/components/ArticleByline'
import SourcesReferences from '@/components/SourcesReferences'

export const metadata: Metadata = {
  title: 'Gemstone Certification: GIA & GRS',
  description: 'How GIA, GRS, Gübelin and SSEF reports work — what they tell you about identity, treatment, origin and colour, and why certification is essential.',
  openGraph: { url: 'https://www.serendibgemstones.com/learn/certification' },
  alternates: { canonical: 'https://www.serendibgemstones.com/learn/certification' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'Knowledge Centre', item: 'https://www.serendibgemstones.com/learn' },
        { '@type': 'ListItem', position: 3, name: 'Certification & Grading', item: 'https://www.serendibgemstones.com/learn/certification' },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: 'Gemstone Certification — Understanding GIA, GRS & Laboratory Reports',
      description: 'Expert guide to gemstone certification: how GIA, GRS, Gubelin, and SSEF reports work, what they tell you, and why certification is essential for any serious purchase.',
      url: 'https://www.serendibgemstones.com/learn/certification',
      author: { '@type': 'Organization', name: 'Serendib Gemstones Editorial', url: 'https://www.serendibgemstones.com' },
      reviewedBy: { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Co-Founder & Director', worksFor: { '@type': 'Organization', name: 'Serendib Gemstones (Pvt) Ltd' } },
      publisher: { '@type': 'Organization', name: 'Serendib Gemstones', logo: { '@type': 'ImageObject', url: 'https://www.serendibgemstones.com/logo.jpg' } },
      dateModified: '2026-08-12',
    },
  ],
}

const laboratories = [
  {
    name: 'GIA',
    fullName: 'Gemological Institute of America',
    location: 'Carlsbad, USA (with global offices)',
    description: 'The world\'s most recognised gemological laboratory and the standard-setter for diamond grading. For coloured stones, GIA reports are valued for their conservative, highly credible approach. Their treatment determinations — particularly "No indications of heating" — are accepted without question by every major auction house and dealer. GIA does not assign commercial colour grades (such as "Royal Blue" or "Pigeon Blood"), preferring objective descriptions.',
    strength: 'Universally accepted, conservative methodology, strongest brand recognition in the US and European markets.',
  },
  {
    name: 'GRS',
    fullName: 'GemResearch Swisslab',
    location: 'Lucerne, Switzerland (with offices in Hong Kong, Bangkok)',
    description: 'Founded by Dr Adolf Peretti, GRS is the leading laboratory for coloured gemstone identification and origin determination. GRS pioneered the use of trace-element analysis for origin determination and is widely respected for its depth of expertise in sapphires, rubies, and emeralds. Unlike GIA, GRS assigns commercial colour grades — "Royal Blue", "Cornflower Blue", "Pigeon Blood" — that carry significant market weight, particularly in Asian markets.',
    strength: 'Deep coloured stone expertise, commercial colour grades with market impact, strong recognition in Asian and auction markets.',
  },
  {
    name: 'Gubelin',
    fullName: 'Gubelin Gem Lab',
    location: 'Lucerne, Switzerland',
    description: 'The oldest continuously operating gemological laboratory, founded in 1923. Gubelin built its reputation on inclusion research — much of what the trade knows about the internal features of coloured stones originates from their scientific work. Their reports are considered the gold standard for provenance and are particularly valued by established European dealers, collectors, and auction houses. Gubelin also pioneered the Provenance Proof initiative for supply chain transparency.',
    strength: 'Historic authority, unmatched inclusion expertise, strong European and auction market credibility.',
  },
  {
    name: 'SSEF',
    fullName: 'Swiss Gemmological Institute',
    location: 'Basel, Switzerland',
    description: 'Affiliated with the Swiss Foundation for the Research of Gemstones, SSEF is a research-driven laboratory known for its scientific rigour. SSEF reports are regularly cited in academic gemological literature and are trusted by the most discerning private collectors and institutional buyers. Their advanced analytical techniques — including LA-ICP-MS trace element mapping — are among the most sophisticated in the industry.',
    strength: 'Academic rigour, advanced analytical methods, trusted by institutional buyers and high-end auction houses.',
  },
]

const certificateContents = [
  {
    field: 'Identification',
    explanation: 'Confirms the stone is natural corundum (sapphire or ruby) and not a synthetic, simulant, or other species entirely. This is the most fundamental determination — everything else on the report depends on it.',
  },
  {
    field: 'Treatment Status',
    explanation: 'States whether the laboratory found evidence of heat treatment, beryllium diffusion, flux healing, or other enhancements. For sapphires, the critical phrase is "No indications of heating" (GIA) or "No heat" (GRS). This single determination has the largest impact on value.',
  },
  {
    field: 'Geographic Origin',
    explanation: 'Assigns a geographic origin based on trace element chemistry and inclusion analysis — for example, "Sri Lanka (Ceylon)", "Kashmir", or "Madagascar". Origin carries significant value implications: a confirmed Ceylon origin adds a measurable premium over stones from less prestigious sources.',
  },
  {
    field: 'Colour Description',
    explanation: 'Describes or grades the stone\'s colour. GIA uses descriptive terms; GRS assigns commercial grades like "Royal Blue" or "Vivid" that carry market weight. Colour is the primary aesthetic factor in sapphire valuation.',
  },
  {
    field: 'Measurements & Weight',
    explanation: 'Records the stone\'s dimensions in millimetres and its carat weight to two decimal places. These measurements allow precise identification and ensure the report matches the physical stone presented for sale.',
  },
]

const guides = [
  {
    slug: 'gia-vs-grs-certificate',
    title: 'GIA vs GRS: which certificate is better?',
    description: 'Both laboratories are internationally respected, but they serve different buyers. Here is how to choose the right certificate for your stone.',
    readTime: '4 min',
    category: 'Certification',
    categoryStyle: 'text-purple-mid/80 border-purple-mid/30',
  },
  {
    slug: 'what-does-no-heat-mean-on-certificate',
    title: 'What does "no heat" mean on a gem certificate?',
    description: 'The single most commercially significant statement on a coloured stone report — what it means, how labs determine it, and why it matters.',
    readTime: '4 min',
    category: 'Certification',
    categoryStyle: 'text-purple-mid/80 border-purple-mid/30',
  },
  {
    slug: 'how-is-sapphire-origin-determined',
    title: 'How is a sapphire\'s origin determined?',
    description: 'Laboratories use trace element chemistry and inclusion analysis to assign geographic origin. Here is how it works — and why Ceylon origin adds value.',
    readTime: '4 min',
    category: 'Certification',
    categoryStyle: 'text-purple-mid/80 border-purple-mid/30',
  },
]

const coming = [
  'How to read a GIA coloured stone report — field by field',
  'GRS colour grades explained — Royal Blue, Cornflower, Vivid, and more',
  'When to get a second laboratory opinion on your gemstone',
  'Certificate fraud — how to verify a laboratory report is genuine',
]

export default function CertificationHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 70%, rgba(201,168,76,0.35) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeUp>
            <nav className="flex items-center gap-2 font-jost text-xs tracking-wider uppercase text-offwhite/30 mb-8">
              <Link href="/" className="hover:text-teal/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-teal/60 transition-colors">Knowledge Centre</Link>
              <span>/</span>
              <span className="text-teal/60">Certification</span>
            </nav>
            <span className="inline-block font-jost text-xs tracking-wider uppercase text-teal/60 border border-teal/20 px-3 py-1 mb-6">
              Topic Hub
            </span>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6">
              Certification &amp; Grading
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl leading-relaxed">
              A gemstone without a credible laboratory report is a gemstone without provable identity, treatment status, or origin. In the coloured stone market — where visual appearance alone cannot reveal whether a sapphire has been heated, diffused, or even synthesised — independent certification is not a luxury. It is the mechanism that makes informed buying possible. This hub covers the major laboratories, what their reports contain, and how to use that information.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Byline */}
      <section className="bg-dark px-6 lg:px-10 pb-4">
        <div className="max-w-5xl mx-auto">
          <ArticleByline updated="2026-08-12" reviewer="Thusira Ranasinghe" />
        </div>
      </section>

      {/* Why Certification Matters */}
      <section className="bg-dark-card border-y border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-4">Context</p>
            <h2 className="font-cormorant text-3xl text-offwhite mb-5">Why certification matters</h2>
            <div className="font-jost text-sm text-offwhite/50 leading-relaxed space-y-4 max-w-3xl">
              <p>
                Unlike diamonds, which are graded on a standardised scale of cut, colour, clarity, and carat weight, coloured gemstones resist easy standardisation. Two sapphires that appear identical under normal lighting can differ radically in treatment status, origin, and therefore value. The same Sri Lankan <Link href="/gemstones/blue-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">blue sapphire</Link>, confirmed <Link href="/learn/what-is-an-unheated-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">unheated</Link> with fine natural colour, can command a very significant premium over its heated counterpart — but only a laboratory can make that determination reliably.
              </p>
              <p>
                Certification also provides the documentary foundation for resale, insurance, and estate planning. A stone purchased today with a current GIA or GRS report carries that provenance forward indefinitely. A stone without documentation is, at the point of resale, simply an unverified coloured gem — and the market discounts accordingly.
              </p>
              <p>
                We certify every stone in our collection through either GIA or GRS, and we encourage buyers to understand what those reports contain. Our <Link href="/how-we-verify" className="text-teal/70 hover:text-teal transition-colors underline underline-offset-2">verification process</Link> explains how we use laboratory reports as part of our sourcing workflow.
              </p>
              <p className="text-offwhite/45 pt-2">
                Related reading:
                {' '}<Link href="/learn/gia-vs-grs-certificate" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">GIA vs GRS</Link>
                {' · '}<Link href="/learn/how-is-sapphire-origin-determined" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">How origin is determined</Link>
                {' · '}<Link href="/learn/what-does-no-heat-mean-on-certificate" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">What &ldquo;no heat&rdquo; means</Link>
                {' · '}<Link href="/cgi" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Ceylon Gem Identity</Link>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Major Laboratories */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Reference</p>
            <h2 className="font-cormorant text-3xl text-offwhite mb-4">Major laboratories</h2>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl leading-relaxed">
              Four laboratories dominate the coloured gemstone certification landscape. Each has a distinct methodology, market focus, and reputation — and understanding their differences helps you evaluate the report that accompanies any stone.
            </p>
          </FadeUp>
          <div className="space-y-5">
            {laboratories.map((lab, i) => (
              <FadeUp key={lab.name} delay={i * 0.06}>
                <div className="bg-dark-card border border-white/6 p-7">
                  <div className="flex items-start gap-3 flex-wrap mb-1">
                    <h3 className="font-cormorant text-xl text-offwhite font-semibold">{lab.name}</h3>
                    <span className="font-jost text-[10px] tracking-wider uppercase border text-purple-mid/80 border-purple-mid/30 px-2.5 py-0.5">{lab.fullName}</span>
                  </div>
                  <p className="font-jost text-xs text-offwhite/25 mb-3">{lab.location}</p>
                  <p className="font-jost text-sm text-offwhite/45 leading-relaxed mb-3">{lab.description}</p>
                  <p className="font-jost text-xs text-teal/60 leading-relaxed">
                    <span className="font-semibold uppercase tracking-wider">Key strength:</span> {lab.strength}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What a Certificate Tells You */}
      <section className="bg-dark-card border-y border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Quick Reference</p>
            <h2 className="font-cormorant text-3xl text-offwhite mb-4">What a certificate tells you</h2>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl leading-relaxed">
              Every coloured stone report from a reputable laboratory addresses the same five core questions. Here is what each field means and why it matters.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificateContents.map((c, i) => (
              <FadeUp key={c.field} delay={i * 0.07}>
                <div className="bg-dark border border-white/6 p-7 h-full">
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3">{c.field}</h3>
                  <p className="font-jost text-xs text-offwhite/40 leading-relaxed">{c.explanation}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Guides */}
      <section className="bg-dark px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-10">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Guides</p>
            <h2 className="font-cormorant text-3xl text-offwhite">Certification guides</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {guides.map((g, i) => (
              <FadeUp key={g.slug} delay={i * 0.07}>
                <Link href={`/learn/${g.slug}`} className="group block bg-dark-card border border-white/6 p-7 hover:border-teal/30 transition-colors h-full">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className={`font-jost text-xs tracking-wider uppercase border px-2.5 py-0.5 ${g.categoryStyle}`}>{g.category}</span>
                    <span className="font-jost text-xs text-offwhite/25">{g.readTime} read</span>
                  </div>
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-3 group-hover:text-teal-light transition-colors leading-snug">{g.title}</h3>
                  <p className="font-jost text-xs text-offwhite/40 leading-relaxed mb-4">{g.description}</p>
                  <span className="font-jost text-xs tracking-widest uppercase text-teal/50 group-hover:text-teal transition-colors">Read article &rarr;</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-dark-card border-y border-teal/10 px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="mb-8">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-2">Coming Soon</p>
            <h2 className="font-cormorant text-3xl text-offwhite">More certification guides on the way</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {coming.map((c, i) => (
              <FadeUp key={c} delay={i * 0.05}>
                <div className="flex items-center gap-4 bg-dark border border-white/4 px-5 py-4">
                  <span className="font-jost text-[10px] tracking-wider uppercase border text-purple-mid/80 border-purple-mid/30 px-2 py-0.5 shrink-0">Certification</span>
                  <p className="font-jost text-sm text-offwhite/40 leading-snug">{c}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-dark px-6 lg:px-10 pb-16 pt-16 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <SourcesReferences sources={[
            { label: 'GIA — Gemological Institute of America', detail: 'Coloured stone identification, treatment disclosure, and origin reports', href: 'https://www.gia.edu' },
            { label: 'GRS — GemResearch Swisslab', detail: 'Colour grading (Royal Blue, Cornflower, Pigeon Blood) and origin determination', href: 'https://www.gemresearch.ch' },
            { label: 'SSEF — Swiss Gemmological Institute', detail: 'Advanced spectroscopy and origin determination', href: 'https://www.ssef.ch' },
            { label: 'Gübelin Gem Lab', detail: 'Origin determination, inclusion research, and Provenance Proof initiative', href: 'https://www.gubelin.com/en/gemlab' },
            { label: 'AGL — American Gemological Laboratories', detail: 'Coloured stone reports and treatment disclosure', href: 'https://www.aglgemlab.com' },
            { label: 'CIBJO — The World Jewellery Confederation', detail: 'International gemstone nomenclature and disclosure standards (Blue Books)', href: 'https://www.cibjo.org' },
            { label: 'Gems & Gemology (GIA quarterly journal)', detail: 'Peer-reviewed research on gemstone identification and treatment detection', href: 'https://www.gia.edu/gems-gemology' },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-16 px-6 border-t border-teal/10 text-center">
        <FadeUp>
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Serendib Gemstones</p>
          <h2 className="font-cormorant text-3xl text-offwhite mb-5">Every stone certified, every report current</h2>
          <p className="font-jost text-sm text-offwhite/50 max-w-md mx-auto mb-8 leading-relaxed">
            We certify every stone through GIA or GRS before it enters our collection. Each listing includes a verifiable report number so you can confirm the details independently.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/gemstones"
              className="px-8 py-3 bg-teal text-dark font-jost text-sm tracking-widest uppercase hover:bg-teal-light transition-colors"
            >
              Our Collection
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-teal/40 text-teal-light font-jost text-sm tracking-widest uppercase hover:bg-teal hover:text-white hover:border-teal transition-all"
            >
              Enquire
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
