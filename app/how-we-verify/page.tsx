import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

export const metadata: Metadata = {
  title: 'How We Verify Authenticity — Serendib Gemstones',
  description: 'Every significant Serendib gemstone is independently certified by GIA or GRS. Learn how we verify treatment status, geographic origin, and gemstone identity before a stone enters our collection.',
  alternates: { canonical: 'https://serendibgemstones.com/how-we-verify' },
}

const verificationSteps = [
  {
    title: 'Visual & Loupe Examination',
    icon: '⌖',
    description: 'Every stone is examined under 10x magnification using a jeweller\'s loupe and a gemological microscope. We look for natural inclusions that confirm the stone is genuine, check for signs of treatment, and assess overall quality.',
    checks: [
      'Natural inclusion patterns consistent with claimed species',
      'No surface-reaching fractures filled with glass or resin',
      'Colour distribution and zoning consistent with natural formation',
      'Cut quality, symmetry, and proportions',
    ],
  },
  {
    title: 'Treatment Detection',
    icon: '◎',
    description: 'Detecting treatment in coloured gemstones requires expertise and instrumentation. We look for telltale signs of heating, diffusion, filling, and coating before sending stones for laboratory confirmation.',
    checks: [
      'Dissolved rutile silk or altered inclusions (signs of heating)',
      'Flux residues or glass-filled cavities (signs of fracture filling)',
      'Colour concentrations at facet junctions (signs of diffusion treatment)',
      'Surface coatings or thin-film enhancements',
    ],
  },
  {
    title: 'Laboratory Certification',
    icon: '◆',
    description: 'Every significant stone is submitted to an independent, internationally accredited gemological laboratory for formal certification. We use GIA (Gemological Institute of America) and GRS (GemResearch SwissLab) — two of the world\'s most respected authorities.',
    checks: [
      'Gemstone identification (species and variety confirmed)',
      'Treatment determination ("no indications of heating" for unheated stones)',
      'Country of origin determination where possible',
      'Colour grade assessment (GRS assigns standardised colour names)',
    ],
  },
  {
    title: 'Origin Determination',
    icon: '⊕',
    description: 'Geographic origin affects both value and authenticity claims. Laboratories determine origin using trace element chemistry (measured by LA-ICP-MS or EDXRF) and inclusion analysis — matching a stone\'s internal fingerprint to known geological deposits.',
    checks: [
      'Trace element ratios (iron, titanium, vanadium, chromium, gallium)',
      'Inclusion suites characteristic of specific localities',
      'Spectroscopic signatures matching reference databases',
      'Cross-referencing multiple lines of evidence for confidence',
    ],
  },
  {
    title: 'Documentation & Photography',
    icon: '▣',
    description: 'Once certified, each stone is photographed and filmed under controlled, standardised conditions. The laboratory certificate, photographs, and any relevant video become part of the stone\'s permanent documentation.',
    checks: [
      'Standardised daylight-equivalent photography',
      'Indoor and natural lighting images for colour accuracy',
      'Video showing the stone\'s play of light and any phenomena',
      'Laboratory certificate scanned and stored digitally',
    ],
  },
]

const labs = [
  {
    name: 'GIA',
    full: 'Gemological Institute of America',
    description: 'The world\'s most widely recognised gemological authority. GIA set the standard for diamond grading and is equally authoritative for coloured stones. A GIA report is accepted by every major auction house, dealer, and insurer worldwide.',
    strengths: ['Gold standard for identification and treatment disclosure', 'Universally recognised and accepted', 'Consistent and conservative grading methodology'],
  },
  {
    name: 'GRS',
    full: 'GemResearch SwissLab',
    description: 'A Swiss laboratory founded by Dr. Adolf Peretti, specialising in coloured gemstones. GRS is particularly valued for its colour grading system (assigning trade names like "Royal Blue" and "Pigeon Blood") and its expertise in origin determination.',
    strengths: ['Industry-leading colour grading with standardised trade names', 'Exceptional origin determination methodology', 'Deep expertise in sapphires, rubies, and emeralds'],
  },
]

export default function HowWeVerifyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark pt-36 pb-20 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(107,45,139,0.35) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 font-jost text-xs text-offwhite/30 mb-8">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <span className="text-offwhite/60">How We Verify</span>
          </nav>
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-purple-mid/80 mb-4">Authenticity</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-tight mb-6">
              How We Verify<br />Every Stone
            </h1>
            <p className="font-jost text-sm text-offwhite/50 max-w-xl leading-relaxed">
              No stone enters our collection without independent verification. Here is exactly what that process involves — and why it matters for every buyer.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Verification Steps */}
      <section className="bg-dark px-6 lg:px-10 py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {verificationSteps.map((step, i) => (
            <FadeUp key={step.title} delay={i * 0.08}>
              <div className="border border-white/6 bg-dark-card p-8 sm:p-10">
                <div className="flex items-start gap-5 mb-5">
                  <span className="font-cormorant text-3xl text-teal/40 shrink-0 mt-1">{step.icon}</span>
                  <div>
                    <h2 className="font-cormorant text-2xl sm:text-3xl text-offwhite font-semibold mb-3">{step.title}</h2>
                    <p className="font-jost text-sm text-offwhite/55 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <div className="ml-0 sm:ml-[3.75rem] grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {step.checks.map((check) => (
                    <div key={check} className="flex items-start gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 shrink-0">
                        <circle cx="7" cy="7" r="5" stroke="rgba(201,168,76,0.4)" strokeWidth="1" />
                        <path d="M4.5 7l2 2 3-3" stroke="rgba(201,168,76,0.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="font-jost text-xs text-offwhite/40 leading-relaxed">{check}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Our Laboratories */}
      <section className="bg-dark-card border-t border-teal/10 py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="mb-12">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Our Laboratories</p>
            <h2 className="font-cormorant text-4xl text-offwhite font-semibold">Who certifies our stones</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labs.map((lab, i) => (
              <FadeUp key={lab.name} delay={i * 0.1}>
                <div className="border border-white/6 bg-dark p-8 h-full">
                  <div className="w-14 h-14 border-2 border-teal/40 rounded-full flex items-center justify-center mb-5">
                    <span className="font-cormorant font-semibold text-teal text-base">{lab.name}</span>
                  </div>
                  <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">{lab.full}</h3>
                  <p className="font-jost text-xs text-offwhite/50 leading-relaxed mb-5">{lab.description}</p>
                  <ul className="space-y-2">
                    {lab.strengths.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="block w-1 h-1 rounded-full bg-teal/50 mt-1.5 shrink-0" />
                        <span className="font-jost text-xs text-offwhite/40">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What a certificate tells you */}
      <section className="bg-dark py-20 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="mb-12">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50 mb-3">Understanding Your Certificate</p>
            <h2 className="font-cormorant text-4xl text-offwhite font-semibold mb-5">What a laboratory report tells you</h2>
            <p className="font-jost text-sm text-offwhite/55 leading-relaxed max-w-2xl">
              A gemological certificate is not a valuation — it is an independent factual statement about the stone&apos;s identity, treatment history, and origin. Here are the key fields:
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { field: 'Identification', explanation: 'Confirms the stone\'s species and variety — e.g. "Natural Corundum, variety: Sapphire." This rules out synthetics, simulants, and misidentified species.' },
              { field: 'Treatment', explanation: 'States whether the stone shows signs of enhancement. The most important statement for unheated stones: "No indications of heating." Other possible disclosures include heated, diffusion-treated, or fracture-filled.' },
              { field: 'Origin', explanation: 'Geographic origin based on trace element chemistry and inclusion analysis — e.g. "Sri Lanka (Ceylon)." Origin affects value significantly. Some labs give origin with stated confidence levels.' },
              { field: 'Colour Grade', explanation: 'GRS assigns standardised colour names (Royal Blue, Cornflower Blue, Pigeon Blood, Vivid Pink). GIA describes colour but does not use trade-grade terminology for sapphires.' },
              { field: 'Measurements & Weight', explanation: 'Precise dimensions (length × width × depth in mm) and carat weight measured to two decimal places. These allow independent verification of the stone\'s identity.' },
              { field: 'Comments', explanation: 'Additional observations — e.g. "the colour of this stone may be referred to as \'Royal Blue\' in the trade." Comments can significantly influence value and marketability.' },
            ].map((item, i) => (
              <FadeUp key={item.field} delay={i * 0.06}>
                <div className="border border-white/6 bg-dark-card p-6">
                  <h3 className="font-cormorant text-lg text-offwhite font-semibold mb-2">{item.field}</h3>
                  <p className="font-jost text-xs text-offwhite/45 leading-relaxed">{item.explanation}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate review CTA */}
      <section className="bg-dark-card py-20 px-6 text-center border-t border-teal/10">
        <FadeUp>
          <p className="font-cormorant italic text-2xl text-offwhite/60 mb-4">
            Need help reading a certificate?
          </p>
          <p className="font-jost text-sm text-offwhite/40 mb-8 max-w-lg mx-auto leading-relaxed">
            If you have a laboratory report and aren&apos;t sure what it says, send it to us. We&apos;ll explain every field in plain language — no charge, no obligation.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
            Request a Certificate Review
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
