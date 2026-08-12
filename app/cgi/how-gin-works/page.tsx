import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'How the Gem Identity Number (GIN) Works — CGI System',
  description: 'Every CGI-registered gemstone receives a unique Gem Identity Number (GIN) — a structured identifier that links physical stones to their complete digital provenance record, certification data, and treatment history.',
  alternates: { canonical: 'https://serendibgemstones.com/cgi/how-gin-works' },
}

const ginComponents = [
  {
    code: 'CGI',
    label: 'System Prefix',
    description: 'Identifies the record as part of the Ceylon Gem Identity system.',
    colour: '#6b2d8b',
  },
  {
    code: 'LK',
    label: 'Country of Origin',
    description: 'ISO country code confirming Sri Lankan origin. Establishes the regulatory framework under which the stone was mined and exported.',
    colour: '#2e8b57',
  },
  {
    code: 'BS',
    label: 'Gemstone Species',
    description: 'Two-letter code identifying the gem species — Blue Sapphire (BS), Padparadscha (PS), Ruby (RB), Alexandrite (AX), Star Sapphire (SS), and others.',
    colour: '#1a5f9e',
  },
  {
    code: '2024',
    label: 'Registration Year',
    description: 'The year the gemstone was registered in the CGI system — establishing a temporal anchor for provenance documentation.',
    colour: '#c9a84c',
  },
  {
    code: '00142',
    label: 'Sequential Number',
    description: 'A unique sequential identifier within the species and year — ensuring no two GINs are ever duplicated.',
    colour: '#c0392b',
  },
]

const dataFields = [
  { category: 'Identity', fields: ['Gem Identity Number (GIN)', 'Species & variety', 'Carat weight', 'Dimensions (mm)', 'Shape & cut'] },
  { category: 'Provenance', fields: ['Country of origin', 'Mining region', 'Mining method', 'Date of acquisition', 'Chain of custody summary'] },
  { category: 'Certification', fields: ['Laboratory name(s)', 'Certificate number(s)', 'Origin determination', 'Species confirmation', 'Date of certification'] },
  { category: 'Treatment', fields: ['Treatment status', 'Treatment type (if any)', 'Disclosure statement', 'Laboratory confirmation', 'Pre/post treatment notes'] },
]

const lifecycle = [
  { step: '01', title: 'Mining & Acquisition', description: 'Stone is sourced from a Sri Lankan mine. Mining region, method, and date are documented at the point of acquisition.' },
  { step: '02', title: 'Initial Assessment', description: 'Gemstone undergoes preliminary evaluation — species identification, weight, dimensions, and visual quality assessment.' },
  { step: '03', title: 'Laboratory Certification', description: 'Stone is submitted to an independent laboratory (GIA, GRS, or equivalent) for formal certification, origin determination, and treatment analysis.' },
  { step: '04', title: 'GIN Registration', description: 'A unique Gem Identity Number is assigned. All documentation — provenance, certification, imagery — is linked to this identifier.' },
  { step: '05', title: 'CGI Passport Creation', description: 'The complete digital identity record is compiled into a CGI Passport — a single document that travels with the stone digitally.' },
  { step: '06', title: 'Verification Activation', description: 'The GIN becomes active in the verification portal. Buyers, jewellers, and laboratories can look up the stone and access its complete record.' },
  { step: '07', title: 'Ongoing Record', description: 'As the stone changes hands, new certifications are added, or ownership transfers occur, the CGI record is updated — creating a living provenance document.' },
]

export default function HowGINWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How the Gem Identity Number (GIN) Works',
            description: 'Every CGI-registered gemstone receives a unique Gem Identity Number — a structured identifier linking physical stones to their complete digital record.',
            url: 'https://serendibgemstones.com/cgi/how-gin-works',
            author: { '@type': 'Organization', name: 'Serendib Gemstones', url: 'https://serendibgemstones.com' },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
              { '@type': 'ListItem', position: 2, name: 'Ceylon Gem Identity', item: 'https://serendibgemstones.com/cgi' },
              { '@type': 'ListItem', position: 3, name: 'How GIN Works', item: 'https://serendibgemstones.com/cgi/how-gin-works' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-24 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(26,95,158,0.3) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-3 justify-center mb-6">
              <Link href="/cgi" className="font-jost text-xs tracking-[0.2em] uppercase text-purple-mid/60 hover:text-purple-mid transition-colors">
                Ceylon Gem Identity
              </Link>
              <span className="text-offwhite/20">/</span>
            </div>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6 text-center">
              How the Gem Identity Number Works
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl mx-auto leading-relaxed text-center">
              Every CGI-registered gemstone receives a unique GIN — a structured identifier that makes provenance, certification, and treatment history instantly accessible and permanently verifiable.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* GIN Structure */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">Anatomy</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-6 text-center">
              Anatomy of a GIN
            </h2>
            <p className="font-jost text-sm text-offwhite/40 text-center max-w-xl mx-auto leading-relaxed mb-10">
              A Gem Identity Number is not a random string. Each segment carries meaning — encoding origin, species, and registration data into a human-readable format.
            </p>
          </FadeUp>

          {/* Example GIN */}
          <FadeUp delay={0.06}>
            <div className="bg-dark border border-teal/15 p-8 mb-14 text-center">
              <p className="font-jost text-[10px] tracking-widest uppercase text-offwhite/30 mb-4">Example Gem Identity Number</p>
              <p className="font-mono text-2xl sm:text-3xl lg:text-4xl text-teal-light tracking-[0.15em] font-light">
                <span className="text-purple-mid">CGI</span>
                <span className="text-offwhite/20">-</span>
                <span className="text-green-400/70">LK</span>
                <span className="text-offwhite/20">-</span>
                <span className="text-blue-400/70">BS</span>
                <span className="text-offwhite/20">-</span>
                <span className="text-teal-light">2024</span>
                <span className="text-offwhite/20">-</span>
                <span className="text-red-400/70">00142</span>
              </p>
              <p className="font-jost text-xs text-offwhite/30 mt-4">A 4.72ct <Link href="/learn/what-is-an-unheated-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">unheated</Link> <Link href="/gemstones/blue-sapphire" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">blue sapphire</Link> from <Link href="/learn/sri-lanka" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">Ratnapura</Link>, certified by <Link href="/learn/gia-vs-grs-certificate" className="text-teal-light hover:text-teal underline underline-offset-2 decoration-teal/30">GRS</Link></p>
            </div>
          </FadeUp>

          {/* Components breakdown */}
          <div className="space-y-4">
            {ginComponents.map((comp, i) => (
              <FadeUp key={comp.code} delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 bg-dark border border-white/6 p-6">
                  <div className="flex items-center gap-4 sm:w-48 shrink-0">
                    <span className="font-mono text-lg font-semibold tracking-wider" style={{ color: comp.colour }}>{comp.code}</span>
                    <span className="font-jost text-xs text-offwhite/50 uppercase tracking-wide">{comp.label}</span>
                  </div>
                  <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{comp.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What a GIN Links To */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Data Model</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-6">
              What a GIN Links To
            </h2>
            <p className="font-jost text-sm text-offwhite/40 text-center max-w-xl mx-auto leading-relaxed mb-16">
              A GIN is not just an identifier — it is a key to a comprehensive data record. Each number connects to four categories of information that together form the gemstone&apos;s complete digital identity.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {dataFields.map((cat, i) => (
              <FadeUp key={cat.category} delay={i * 0.06}>
                <div className="h-full bg-dark-card border border-white/6 p-7">
                  <h3 className="font-cormorant text-xl text-teal-light font-semibold mb-5">{cat.category}</h3>
                  <ul className="space-y-2.5">
                    {cat.fields.map((field) => (
                      <li key={field} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal/40 shrink-0" />
                        <span className="font-jost text-xs text-offwhite/45">{field}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Timeline */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Process</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-6">
              From Mine to Market
            </h2>
            <p className="font-jost text-sm text-offwhite/40 text-center max-w-xl mx-auto leading-relaxed mb-16">
              How a gemstone acquires its digital identity — from the moment it leaves the earth to its permanent record in the CGI system.
            </p>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-teal/15" />

            <div className="space-y-8">
              {lifecycle.map((step, i) => (
                <FadeUp key={step.step} delay={i * 0.05}>
                  <div className="flex gap-6">
                    <div className="relative z-10 w-12 h-12 rounded-full border border-teal/25 bg-dark flex items-center justify-center shrink-0">
                      <span className="font-mono text-xs text-teal-light">{step.step}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-2">{step.title}</h3>
                      <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{step.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">Principles</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-12 text-center">
              Design Principles
            </h2>
          </FadeUp>
          <div className="space-y-5">
            {[
              { title: 'Human-Readable', text: 'GINs are designed to be understood by people, not just machines. A jeweller can read the origin, species, and year from the number itself.' },
              { title: 'Permanently Unique', text: 'No two gemstones will ever share a GIN. Once assigned, the number belongs to that stone for its entire existence.' },
              { title: 'Non-Transferable', text: 'A GIN cannot be moved from one stone to another. If a stone is re-cut or significantly altered, a new GIN is issued with a reference to the original.' },
              { title: 'Extensible', text: 'The GIN structure is designed to accommodate future gem species, additional origin countries, and evolving certification standards.' },
            ].map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.06}>
                <div className="bg-dark-card border border-white/6 p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <GemSVG colour="#c9a84c" size={24} />
                    <h3 className="font-cormorant text-lg text-offwhite font-semibold">{p.title}</h3>
                  </div>
                  <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{p.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-dark-card py-20 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FadeUp>
              <Link href="/cgi/cgi-passport" className="group block bg-dark border border-white/6 hover:border-teal/25 transition-colors p-7">
                <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-2">Next</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">
                  The CGI Passport
                </h3>
                <p className="font-jost text-xs text-offwhite/35 leading-relaxed">
                  See what a gemstone&apos;s complete digital identity document looks like.
                </p>
              </Link>
            </FadeUp>
            <FadeUp delay={0.06}>
              <Link href="/cgi/verification" className="group block bg-dark border border-white/6 hover:border-teal/25 transition-colors p-7">
                <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-2">Also</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">
                  Verification Portal
                </h3>
                <p className="font-jost text-xs text-offwhite/35 leading-relaxed">
                  How buyers verify a gemstone using its Gem Identity Number.
                </p>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark overflow-hidden py-28 px-6 text-center border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'linear-gradient(135deg, rgba(26,95,158,0.35) 0%, rgba(201,168,76,0.3) 100%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-cormorant italic text-2xl text-offwhite/60 mb-5">
              One number. One stone. One truth.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
              Enquire About CGI
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
