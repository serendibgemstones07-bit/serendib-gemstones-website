import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'How We Source Our Gemstones — Serendib Gemstones',
  description: 'From mine to client — the journey of a Serendib gemstone. We work directly with trusted field operators in Ratnapura, Elahera and Sri Lanka\'s gem regions.',
  openGraph: { url: 'https://www.serendibgemstones.com/how-we-source' },
  alternates: { canonical: 'https://www.serendibgemstones.com/how-we-source' },
}

const steps = [
  {
    number: '01',
    title: 'Mine Selection',
    location: 'Ratnapura · Elahera · Eheliyagoda',
    description: 'Our sourcing begins at Sri Lanka\'s alluvial gem fields. We work with trusted mining operators — relationships built over years — in the island\'s most productive gem regions. Unlike brokers who buy from distant intermediaries, we visit the mines and inspect rough material at the source.',
    detail: 'Sri Lanka\'s gems are found in secondary alluvial deposits — ancient riverbeds and gravel layers. Mining methods are largely traditional, using pits, pumps, and hand-washing techniques that have been refined over millennia.',
  },
  {
    number: '02',
    title: 'Rough Assessment',
    location: 'On-site evaluation',
    description: 'Not every rough crystal is worth cutting. Our team evaluates rough material for colour potential, clarity, crystal integrity, and likely yield. We select only rough that shows promise for producing fine finished stones — the vast majority is passed over.',
    detail: 'This stage requires deep experience. The colour of a rough crystal does not always predict the colour of the finished stone. Understanding how light will interact with the cut gem is a skill developed over many years of handling Sri Lankan material.',
  },
  {
    number: '03',
    title: 'Cutting & Polishing',
    location: 'Sri Lankan master cutters',
    description: 'Selected rough is entrusted to experienced Sri Lankan gem cutters who shape and polish each stone to maximise colour and brilliance. Cutting decisions are made stone by stone — there are no shortcuts when working with fine material.',
    detail: 'Sri Lanka has a centuries-old cutting tradition. Our cutters specialise in coloured stones, orienting each crystal to display its best colour face-up while retaining maximum weight from the rough.',
  },
  {
    number: '04',
    title: 'Quality Inspection',
    location: 'Internal review',
    description: 'Every finished stone undergoes our internal quality review. We assess colour, clarity, cut quality, and overall appeal under standardised lighting conditions. Stones that don\'t meet our standards are set aside — they never enter our collection.',
    detail: 'We look for strong, even colour distribution, eye-clean clarity (or better), good proportions without excessive depth, and a lively appearance with good light return. We also verify that the stone shows no signs of undisclosed treatment.',
  },
  {
    number: '05',
    title: 'Laboratory Certification',
    location: 'GIA · GRS',
    description: 'Every significant stone is sent to an independent gemological laboratory — GIA (Gemological Institute of America) or GRS (GemResearch SwissLab) — for formal identification, origin determination, and treatment analysis.',
    detail: 'The laboratory report is a non-negotiable part of our process. It independently confirms the stone\'s identity, geographic origin, and treatment status. For unheated stones, the critical statement is "no indications of heating" — verified through microscopic examination of the stone\'s internal features.',
  },
  {
    number: '06',
    title: 'Photography & Documentation',
    location: 'Controlled studio conditions',
    description: 'Each certified stone is professionally photographed and filmed under standardised lighting that accurately represents its colour and character. We photograph every stone in both natural daylight and controlled indoor light.',
    detail: 'Gemstone photography is notoriously difficult — colours can be easily misrepresented by camera settings, lighting, and post-processing. We use consistent, calibrated conditions so that what you see in our images reflects the stone you will receive.',
  },
  {
    number: '07',
    title: 'Client Presentation',
    location: 'Direct to you, worldwide',
    description: 'The stone enters our collection with its laboratory certificate, photographs, and video. When you enquire, we present the full documentation and answer any questions directly. Shipping is insured, tracked, and delivered to your door anywhere in the world.',
    detail: 'Every enquiry is handled personally by one of our founders. We provide complete transparency on every stone — its origin, its journey through our supply chain, its laboratory report, and honest commentary on its strengths and any characteristics you should know about.',
  },
]

export default function HowWeSourcePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-offwhite/60">How We Source</span>
          </nav>
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-4">Transparency</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight mb-6">
              How We Source<br />Our Gemstones
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-xl leading-relaxed">
              Every stone in our collection follows the same path — from mine to your hands. No shortcuts, no hidden steps, no middlemen you can&apos;t see. Read our overview of <Link href="/learn/sri-lanka" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Sri Lanka&apos;s gem regions</Link> and the pillar guide to <Link href="/ceylon-sapphires" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Ceylon sapphires</Link>.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Pipeline */}
      <section className="bg-dark px-6 lg:px-10 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal/30 via-teal/15 to-transparent hidden sm:block" />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <FadeUp key={step.number} delay={i * 0.08}>
                  <div className="flex gap-6 sm:gap-10">
                    {/* Step number */}
                    <div className="shrink-0 relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 border border-teal/30 flex items-center justify-center bg-dark relative z-10">
                        <span className="font-cormorant text-xl sm:text-2xl text-teal/60 font-light">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap items-baseline gap-3 mb-3">
                        <h2 className="font-cormorant text-2xl sm:text-3xl text-offwhite font-semibold">{step.title}</h2>
                        <span className="font-jost text-xs text-teal/50 tracking-wider">{step.location}</span>
                      </div>
                      <p className="font-jost text-sm text-offwhite/60 leading-relaxed mb-4">{step.description}</p>
                      <div className="border-l-2 border-teal/15 pl-5">
                        <p className="font-jost text-xs text-offwhite/40 leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="bg-dark-card border-t border-teal/10 py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-4">Why This Matters</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-5 leading-snug">
              Why we don&apos;t sell every stone
            </h2>
            <p className="font-jost text-sm text-offwhite/55 leading-relaxed mb-4">
              For every stone that enters our collection, we pass over many more. Not every crystal meets our standards, and not every finished stone is worth certifying.
            </p>
            <p className="font-jost text-sm text-offwhite/55 leading-relaxed">
              This selectivity is deliberate. Our reputation depends on each stone living up to its documentation. When we say a stone is fine, it must be fine. When we say it is unheated, the laboratory must confirm it. This means our collection is smaller than it could be — but every piece in it earns its place.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-4">Direct Means Accountable</p>
            <h2 className="font-cormorant text-3xl text-offwhite font-semibold mb-5 leading-snug">
              No invisible supply chain
            </h2>
            <p className="font-jost text-sm text-offwhite/55 leading-relaxed mb-4">
              In the gemstone trade, stones often pass through five or six hands before reaching a buyer — each adding a margin and reducing transparency. By the time a stone reaches a retail shop, the original mine, the cutting decisions, and the treatment history can be unknowable.
            </p>
            <p className="font-jost text-sm text-offwhite/55 leading-relaxed">
              We work differently. Our founders personally handle sourcing, inspection, and client communication. There is no long chain of anonymous intermediaries. When you buy from Serendib, the person who inspected the stone at the mine is the same person who answers your questions.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark py-20 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-2xl text-offwhite/60 mb-4">
            Want to know more about a specific stone&apos;s journey?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            Ask us about any stone in our collection. We can tell you where it was mined, who cut it, and every step of its path to our inventory.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Make an Enquiry
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
