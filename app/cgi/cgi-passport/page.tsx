import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'The CGI Passport — A Digital Identity Document for Every Gemstone',
  description: 'The CGI Passport combines laboratory certification, provenance documentation, treatment disclosure, and high-resolution imagery into one comprehensive, verifiable digital identity for each gemstone.',
  alternates: { canonical: 'https://serendibgemstones.com/cgi/cgi-passport' },
}

const passportSections = [
  {
    section: 'Header & Identity',
    fields: ['Gem Identity Number (GIN)', 'Date of registration', 'Current status (Active / Transferred / Re-cut)', 'QR code linking to verification portal'],
    description: 'The header establishes the stone as a registered CGI gemstone with its unique identifier and current status in the system.',
    colour: '#6b2d8b',
  },
  {
    section: 'Gemstone Profile',
    fields: ['Species & variety', 'Carat weight', 'Dimensions (length x width x depth)', 'Shape & cutting style', 'Colour description', 'Clarity assessment'],
    description: 'Core physical characteristics of the gemstone — the essential data that identifies and distinguishes this particular stone.',
    colour: '#1a5f9e',
  },
  {
    section: 'Provenance Record',
    fields: ['Country of origin', 'Mining region (e.g., Ratnapura, Elahera)', 'Mining method', 'Date of acquisition', 'Sourcing company', 'NGJA registration reference'],
    description: 'Documented chain of custody from mine to market. This section answers the question every buyer asks: where did this stone come from?',
    colour: '#2e8b57',
  },
  {
    section: 'Laboratory Certification',
    fields: ['Certifying laboratory (GIA, GRS, Gubelin, etc.)', 'Certificate number', 'Date of certification', 'Origin determination result', 'Species & variety confirmation', 'Link to digital certificate (where available)'],
    description: 'Independent laboratory analysis linked directly to the CGI record — providing third-party verification that complements the provenance documentation.',
    colour: '#c9a84c',
  },
  {
    section: 'Treatment Disclosure',
    fields: ['Treatment status (Unheated / Heated / Enhanced)', 'Treatment type & method (if applicable)', 'Pre-treatment documentation (if available)', 'Laboratory treatment confirmation', 'Full disclosure statement'],
    description: 'Complete transparency about any treatments or enhancements. For unheated stones, this section confirms natural status with laboratory backing.',
    colour: '#c0392b',
  },
  {
    section: 'Visual Documentation',
    fields: ['High-resolution photographs (multiple angles)', 'Macro photography of inclusions (where relevant)', 'Colour reference images under standardised lighting', 'Certificate scan or digital certificate link'],
    description: 'Professional imagery that allows remote evaluation and provides a permanent visual record. Photographs are taken under standardised conditions for consistency.',
    colour: '#e8855e',
  },
]

const comparisonRows = [
  { feature: 'Species identification', cert: true, passport: true },
  { feature: 'Origin determination', cert: true, passport: true },
  { feature: 'Treatment analysis', cert: true, passport: true },
  { feature: 'Mining region documentation', cert: false, passport: true },
  { feature: 'Chain of custody record', cert: false, passport: true },
  { feature: 'Sourcing company identity', cert: false, passport: true },
  { feature: 'High-resolution imagery', cert: false, passport: true },
  { feature: 'Digital verification via unique ID', cert: false, passport: true },
  { feature: 'Ongoing record updates', cert: false, passport: true },
  { feature: 'NGJA registration reference', cert: false, passport: true },
]

export default function CGIPassportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The CGI Passport — A Digital Identity Document for Every Gemstone',
            description: 'The CGI Passport combines laboratory certification, provenance, treatment disclosure, and imagery into one verifiable digital identity.',
            url: 'https://serendibgemstones.com/cgi/cgi-passport',
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
              { '@type': 'ListItem', position: 3, name: 'CGI Passport', item: 'https://serendibgemstones.com/cgi/cgi-passport' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-24 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.3) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-3 justify-center mb-6">
              <Link href="/cgi" className="font-jost text-xs tracking-[0.2em] uppercase text-purple-mid/60 hover:text-purple-mid transition-colors">
                Ceylon Gem Identity
              </Link>
              <span className="text-offwhite/20">/</span>
            </div>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6 text-center">
              The CGI Passport
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl mx-auto leading-relaxed text-center">
              A comprehensive digital identity document for each gemstone — combining certification, provenance documentation, treatment disclosure, and professional imagery into one verifiable record that stays with the stone throughout its life.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What Is It */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">Overview</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-12 text-center">
              More Than a Certificate
            </h2>
          </FadeUp>
          <div className="space-y-7">
            <FadeUp>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                A laboratory certificate tells you <em className="text-offwhite/70">what</em> a gemstone is. The CGI Passport tells you <em className="text-offwhite/70">everything else</em> — where it came from, who sourced it, how it was documented, and how to verify every claim independently.
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                Think of it as the difference between a passport photo and a passport. The photo identifies you. The passport documents your identity, citizenship, and travel history. The CGI Passport does the same for gemstones — creating a permanent, comprehensive record that supports trust at every point in the supply chain.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                Each CGI Passport is linked to a unique Gem Identity Number (GIN) and can be accessed digitally through the CGI verification portal. The document is designed to be shared with buyers, insurers, and future owners — providing the transparency that the modern gemstone market demands.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Passport Sections */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Structure</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-6">
              Inside the CGI Passport
            </h2>
            <p className="font-jost text-sm text-offwhite/40 text-center max-w-xl mx-auto leading-relaxed mb-16">
              Six sections, each addressing a critical dimension of gemstone documentation. Together they create the most comprehensive identity record available for a coloured gemstone.
            </p>
          </FadeUp>

          <div className="space-y-5">
            {passportSections.map((s, i) => (
              <FadeUp key={s.section} delay={i * 0.05}>
                <div className="bg-dark-card border border-white/6 p-7">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-80 shrink-0">
                      <div className="flex items-center gap-3 mb-3">
                        <GemSVG colour={s.colour} size={28} />
                        <h3 className="font-cormorant text-xl text-offwhite font-semibold">{s.section}</h3>
                      </div>
                      <p className="font-jost text-xs text-offwhite/40 leading-relaxed">{s.description}</p>
                    </div>
                    <div className="flex-1">
                      <ul className="space-y-2">
                        {s.fields.map((field) => (
                          <li key={field} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.colour, opacity: 0.5 }} />
                            <span className="font-jost text-xs text-offwhite/50">{field}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Comparison</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-6">
              Certificate vs CGI Passport
            </h2>
            <p className="font-jost text-sm text-offwhite/40 text-center max-w-xl mx-auto leading-relaxed mb-16">
              The CGI Passport does not replace laboratory certification — it builds on it, adding the provenance and transparency layers that certificates alone cannot provide.
            </p>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-teal/15">
                    <th className="text-left font-jost text-xs tracking-widest uppercase text-offwhite/30 pb-4 pr-4">Feature</th>
                    <th className="text-center font-jost text-xs tracking-widest uppercase text-offwhite/30 pb-4 px-4 w-36">Lab Certificate</th>
                    <th className="text-center font-jost text-xs tracking-widest uppercase text-teal/60 pb-4 pl-4 w-36">CGI Passport</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-white/5">
                      <td className="font-jost text-xs text-offwhite/50 py-3.5 pr-4">{row.feature}</td>
                      <td className="text-center py-3.5 px-4">
                        {row.cert ? (
                          <span className="text-teal/60">&#10003;</span>
                        ) : (
                          <span className="text-offwhite/15">&mdash;</span>
                        )}
                      </td>
                      <td className="text-center py-3.5 pl-4">
                        <span className="text-teal-light">&#10003;</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Example Passport Preview */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">Preview</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-12 text-center">
              Example CGI Passport
            </h2>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="bg-dark-card border border-teal/15 overflow-hidden">
              {/* Passport Header */}
              <div className="bg-dark border-b border-teal/15 p-6 flex items-center justify-between">
                <div>
                  <p className="font-jost text-[10px] tracking-widest uppercase text-purple-mid/60 mb-1">Ceylon Gem Identity</p>
                  <p className="font-mono text-lg text-teal-light tracking-wider">CGI-LK-BS-2024-00142</p>
                </div>
                <div className="w-14 h-14 border border-teal/20 bg-dark flex items-center justify-center">
                  <span className="font-jost text-[8px] text-offwhite/25 text-center leading-tight">QR<br/>Code</span>
                </div>
              </div>

              {/* Passport Body */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-jost text-[10px] tracking-wider uppercase text-offwhite/25 mb-1">Species</p>
                    <p className="font-jost text-sm text-offwhite/70">Natural Sapphire (Blue)</p>
                  </div>
                  <div>
                    <p className="font-jost text-[10px] tracking-wider uppercase text-offwhite/25 mb-1">Carat Weight</p>
                    <p className="font-jost text-sm text-offwhite/70">4.72 ct</p>
                  </div>
                  <div>
                    <p className="font-jost text-[10px] tracking-wider uppercase text-offwhite/25 mb-1">Dimensions</p>
                    <p className="font-jost text-sm text-offwhite/70">10.2 x 8.1 x 5.4 mm</p>
                  </div>
                  <div>
                    <p className="font-jost text-[10px] tracking-wider uppercase text-offwhite/25 mb-1">Shape</p>
                    <p className="font-jost text-sm text-offwhite/70">Oval Mixed Cut</p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-5">
                  <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-3">Provenance</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-jost text-[10px] tracking-wider uppercase text-offwhite/25 mb-1">Origin</p>
                      <p className="font-jost text-sm text-offwhite/70">Sri Lanka (Ceylon)</p>
                    </div>
                    <div>
                      <p className="font-jost text-[10px] tracking-wider uppercase text-offwhite/25 mb-1">Region</p>
                      <p className="font-jost text-sm text-offwhite/70">Ratnapura</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-5">
                  <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-3">Certification</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-jost text-[10px] tracking-wider uppercase text-offwhite/25 mb-1">Laboratory</p>
                      <p className="font-jost text-sm text-offwhite/70">GRS (Gem Research Swisslab)</p>
                    </div>
                    <div>
                      <p className="font-jost text-[10px] tracking-wider uppercase text-offwhite/25 mb-1">Certificate No.</p>
                      <p className="font-jost text-sm text-offwhite/70">GRS2024-XXXXXX</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-5">
                  <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-3">Treatment Status</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-green-500/20 bg-green-500/5">
                    <span className="w-2 h-2 rounded-full bg-green-500/60" />
                    <span className="font-jost text-xs text-green-400/80 uppercase tracking-wider">Unheated — No Treatment Detected</span>
                  </div>
                </div>
              </div>

              {/* Passport Footer */}
              <div className="bg-dark border-t border-teal/15 px-6 py-4 flex items-center justify-between">
                <p className="font-jost text-[10px] text-offwhite/20">Serendib Gemstones (Pvt) Ltd</p>
                <p className="font-jost text-[10px] text-offwhite/20">Status: Active</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="font-jost text-xs text-offwhite/30 text-center mt-6 italic">
              This is an illustrative example. Actual CGI Passports will include high-resolution imagery and direct links to laboratory certificates.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-dark-card py-20 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FadeUp>
              <Link href="/cgi/verification" className="group block bg-dark border border-white/6 hover:border-teal/25 transition-colors p-7">
                <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-2">Next</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">
                  Verification Portal
                </h3>
                <p className="font-jost text-xs text-offwhite/35 leading-relaxed">
                  How buyers verify a gemstone&apos;s identity using the CGI system.
                </p>
              </Link>
            </FadeUp>
            <FadeUp delay={0.06}>
              <Link href="/cgi/how-gin-works" className="group block bg-dark border border-white/6 hover:border-teal/25 transition-colors p-7">
                <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-2">Previous</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">
                  How GIN Works
                </h3>
                <p className="font-jost text-xs text-offwhite/35 leading-relaxed">
                  Understand the structure and purpose of the Gem Identity Number.
                </p>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark overflow-hidden py-28 px-6 text-center border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.35) 0%, rgba(107,45,139,0.3) 100%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-cormorant italic text-2xl text-offwhite/60 mb-5">
              Every gemstone deserves a documented identity.
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
