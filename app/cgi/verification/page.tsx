import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'CGI Verification Portal — Verify a Gemstone Identity',
  description: 'The CGI Verification Portal allows buyers, jewellers, and trade professionals to verify a gemstone using its Gem Identity Number (GIN) — providing instant access to provenance, certification, and treatment data.',
  alternates: { canonical: 'https://www.serendibgemstones.com/cgi/verification' },
}

const verificationSteps = [
  {
    step: '01',
    title: 'Locate the GIN',
    description: 'Find the Gem Identity Number on the stone\'s accompanying documentation, CGI Passport, or the seller\'s listing. The GIN follows the format CGI-LK-XX-YYYY-NNNNN.',
    colour: '#6b2d8b',
  },
  {
    step: '02',
    title: 'Enter the GIN',
    description: 'Enter the complete Gem Identity Number into the verification portal search. The system accepts the full GIN with or without dashes.',
    colour: '#1a5f9e',
  },
  {
    step: '03',
    title: 'Review the Record',
    description: 'The portal displays the gemstone\'s complete CGI record — species, carat weight, origin, certification details, treatment status, and provenance documentation.',
    colour: '#c9a84c',
  },
  {
    step: '04',
    title: 'Compare & Verify',
    description: 'Compare the digital record against the physical stone and any certificates you have. Cross-reference the GRS or GIA certificate number, carat weight, and dimensions.',
    colour: '#2e8b57',
  },
]

const accessLevels = [
  {
    level: 'Public Verification',
    who: 'Anyone with a GIN',
    access: 'Basic identity confirmation — species, carat weight, origin, treatment status, and certification laboratory. Enough to verify that the stone exists in the CGI system and confirm key claims.',
  },
  {
    level: 'Buyer Access',
    who: 'Registered trade buyers',
    access: 'Full CGI Passport including detailed provenance record, chain of custody summary, high-resolution imagery, and direct links to laboratory certificates.',
  },
  {
    level: 'Trade Partner Access',
    who: 'Authorised dealers & institutions',
    access: 'Complete record access plus transaction history, custody transfer dates, and the ability to initiate ownership transfers within the CGI system.',
  },
]

const useCases = [
  {
    scenario: 'Pre-Purchase Verification',
    description: 'A jeweller in New York receives an offer for a 3ct unheated Ceylon sapphire. Before committing, they enter the GIN into the verification portal and confirm the stone\'s origin, certification, and treatment status match the seller\'s claims.',
    icon: '#1a5f9e',
  },
  {
    scenario: 'Insurance Documentation',
    description: 'A collector needs to update their insurance valuation. The CGI Passport provides a comprehensive, verifiable record that insurers can reference — including laboratory certification, provenance, and professional photography.',
    icon: '#c9a84c',
  },
  {
    scenario: 'Resale Provenance',
    description: 'A stone is being offered at auction five years after its original purchase. The CGI record provides documented provenance that travels with the stone, supporting the auction house\'s due diligence and the buyer\'s confidence.',
    icon: '#2e8b57',
  },
  {
    scenario: 'Supply Chain Compliance',
    description: 'A luxury brand sourcing sapphires for a collection needs to demonstrate ethical sourcing to their board. CGI verification provides the documented chain of custody from Sri Lankan mine to their workshop.',
    icon: '#6b2d8b',
  },
]

export default function VerificationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'CGI Verification Portal — Verify a Gemstone Identity',
            description: 'The CGI Verification Portal allows buyers and trade professionals to verify a gemstone using its Gem Identity Number.',
            url: 'https://www.serendibgemstones.com/cgi/verification',
            author: { '@type': 'Organization', name: 'Serendib Gemstones', url: 'https://www.serendibgemstones.com' },
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.serendibgemstones.com' },
              { '@type': 'ListItem', position: 2, name: 'Ceylon Gem Identity', item: 'https://www.serendibgemstones.com/cgi' },
              { '@type': 'ListItem', position: 3, name: 'Verification Portal', item: 'https://www.serendibgemstones.com/cgi/verification' },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-24 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(46,139,87,0.3) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-3 justify-center mb-6">
              <Link href="/cgi" className="font-jost text-xs tracking-[0.2em] uppercase text-purple-mid/60 hover:text-purple-mid transition-colors">
                Ceylon Gem Identity
              </Link>
              <span className="text-offwhite/20">/</span>
            </div>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-offwhite font-light leading-tight mb-6 text-center">
              Verification Portal
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-2xl mx-auto leading-relaxed text-center">
              Verify any CGI-registered gemstone instantly using its Gem Identity Number. Access provenance records, certification data, and treatment disclosure — the trust layer the gemstone industry has been missing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Verification Demo */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">Verify</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-12 text-center">
              Verify a Gemstone
            </h2>
          </FadeUp>

          <FadeUp delay={0.06}>
            <div className="bg-dark border border-teal/15 p-8">
              <p className="font-jost text-xs text-offwhite/40 mb-4 text-center">Enter a Gem Identity Number</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <div className="flex-1 bg-dark-card border border-white/10 px-5 py-3.5 flex items-center">
                  <span className="font-mono text-sm text-offwhite/25 tracking-wider">CGI-LK-__-____-_____</span>
                </div>
                <div className="px-8 py-3.5 bg-teal/20 border border-teal/30 text-center cursor-default">
                  <span className="font-jost text-xs tracking-widest uppercase text-teal/50">Verify</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-teal/15 bg-dark-card">
                  <span className="w-2 h-2 rounded-full bg-teal/40 animate-pulse" />
                  <span className="font-jost text-xs text-offwhite/30">Portal launching soon — register interest below</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* How Verification Works */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Process</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-16">
              How Verification Works
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {verificationSteps.map((s, i) => (
              <FadeUp key={s.step} delay={i * 0.06}>
                <div className="h-full bg-dark-card border border-white/6 p-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0" style={{ borderColor: `${s.colour}40` }}>
                      <span className="font-mono text-xs" style={{ color: s.colour }}>{s.step}</span>
                    </div>
                    <h3 className="font-cormorant text-lg text-offwhite font-semibold">{s.title}</h3>
                  </div>
                  <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{s.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Access Levels */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Access</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-6">
              Tiered Access
            </h2>
            <p className="font-jost text-sm text-offwhite/40 text-center max-w-xl mx-auto leading-relaxed mb-16">
              Different participants in the gemstone trade need different levels of information. The CGI verification system provides tiered access — balancing transparency with commercial confidentiality.
            </p>
          </FadeUp>

          <div className="space-y-5">
            {accessLevels.map((a, i) => (
              <FadeUp key={a.level} delay={i * 0.06}>
                <div className="bg-dark border border-white/6 p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                    <div className="sm:w-52 shrink-0">
                      <h3 className="font-cormorant text-lg text-teal-light font-semibold mb-1">{a.level}</h3>
                      <p className="font-jost text-[10px] tracking-wider uppercase text-offwhite/25">{a.who}</p>
                    </div>
                    <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{a.access}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3 text-center">Scenarios</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold text-center mb-16">
              Verification in Practice
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {useCases.map((uc, i) => (
              <FadeUp key={uc.scenario} delay={i * 0.06}>
                <div className="h-full bg-dark-card border border-white/6 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <GemSVG colour={uc.icon} size={28} />
                    <h3 className="font-cormorant text-lg text-offwhite font-semibold">{uc.scenario}</h3>
                  </div>
                  <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{uc.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Integrity */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">Trust</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-12 text-center">
              Security &amp; Integrity
            </h2>
          </FadeUp>

          <div className="space-y-5">
            {[
              { title: 'Tamper-Resistant Records', text: 'CGI records are designed to be tamper-resistant. Once registered, core data — origin, certification, and treatment status — cannot be altered without creating a visible audit trail.' },
              { title: 'Independent Verification', text: 'CGI records reference independent laboratory certificates. The verification portal links to external laboratory data where available, allowing cross-referencing against the laboratory\'s own records.' },
              { title: 'Controlled Registration', text: 'Only authorised CGI partners can register gemstones. This controlled entry point ensures that every stone in the system has been physically inspected, documented, and certified before receiving a GIN.' },
              { title: 'Fraud Prevention', text: 'The combination of unique GIN assignment, linked laboratory data, high-resolution imagery, and documented provenance creates multiple verification points — making it significantly harder to misrepresent a stone\'s identity or history.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <div className="bg-dark border border-white/6 p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <GemSVG colour="#2e8b57" size={24} />
                    <h3 className="font-cormorant text-lg text-offwhite font-semibold">{item.title}</h3>
                  </div>
                  <p className="font-jost text-xs text-offwhite/45 leading-[1.85]">{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-dark py-20 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FadeUp>
              <Link href="/cgi" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-7">
                <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-2">Overview</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">
                  Ceylon Gem Identity
                </h3>
                <p className="font-jost text-xs text-offwhite/35 leading-relaxed">
                  Return to the CGI overview — the four pillars, who benefits, and the full initiative.
                </p>
              </Link>
            </FadeUp>
            <FadeUp delay={0.06}>
              <Link href="/cgi/cgi-passport" className="group block bg-dark-card border border-white/6 hover:border-teal/25 transition-colors p-7">
                <p className="font-jost text-[10px] tracking-wider uppercase text-teal/50 mb-2">Previous</p>
                <h3 className="font-cormorant text-lg text-offwhite font-semibold group-hover:text-teal-light transition-colors mb-2">
                  The CGI Passport
                </h3>
                <p className="font-jost text-xs text-offwhite/35 leading-relaxed">
                  Explore the complete digital identity document for every CGI-registered gemstone.
                </p>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark-card overflow-hidden py-28 px-6 text-center border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'linear-gradient(135deg, rgba(46,139,87,0.35) 0%, rgba(201,168,76,0.3) 100%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-cormorant italic text-2xl text-offwhite/60 mb-5">
              Trust begins with verification.
            </p>
            <p className="font-jost text-sm text-offwhite/40 mb-10 max-w-md mx-auto leading-relaxed">
              Be among the first to use the CGI Verification Portal. Register your interest and we will notify you when the system goes live.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
              Register Interest
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
