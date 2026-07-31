import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import GemSVG from '@/components/GemSVG'

export const metadata: Metadata = {
  title: 'About Us — Sri Lankan Gemstone Exporter',
  description: 'Serendib Gemstones is a Sri Lankan gemstone sourcing and export company helping jewellers, collectors, luxury brands, and investors worldwide source certified natural Ceylon gemstones with transparency and trust.',
  alternates: { canonical: 'https://serendibgemstones.com/about' },
}

const founders = [
  {
    name: 'Thusira Ranasinghe',
    role: 'Founder & Director',
    photo: '/team/thusira.jpg.jpg',
    photoPosition: 'center 20%',
    bio: 'Thusira is an entrepreneur with a strong background in business leadership and international trade. He has completed multiple gemmological education programmes through the Ceylon Academy of Gemmological Science (CAGS) together with additional specialised gemstone training.',
    focus: 'His primary focus is international client relationships, gemstone sourcing, and ensuring every client receives professional guidance throughout the sourcing process.',
    areas: ['International Client Relations', 'Business Strategy', 'Gemstone Sourcing', 'Gemmological Education'],
  },
  {
    name: 'Meril Peiris',
    role: 'Founder & Director',
    photo: '/team/meril.jpg',
    photoPosition: 'center top',
    bio: 'Meril is an architect and entrepreneur whose appreciation for design, colour, proportion, and craftsmanship naturally complements the gemstone industry. He has completed multiple gemmological education programmes through the Ceylon Academy of Gemmological Science (CAGS) together with additional specialised gemstone training.',
    focus: 'He contributes to gemstone selection, quality evaluation, and maintaining the high standards that define Serendib Gemstones.',
    areas: ['Design & Aesthetics', 'Gemstone Selection', 'Quality Evaluation', 'Gemmological Education'],
  },
  {
    name: 'Rangana Silva',
    role: 'Founder & Director',
    photo: '/team/Rangana.png',
    photoPosition: 'center top',
    bio: "Rangana is an entrepreneur with a certificate in gemmology and practical experience within Sri Lanka's gemstone industry. He contributes to gemstone sourcing, quality assessment, and supporting the careful evaluation of gemstones before they are presented to clients.",
    focus: '',
    areas: ['Gemstone Sourcing', 'Quality Assessment', 'Client Support', 'Gemmological Education'],
  },
]

const credentials = [
  {
    title: 'National Gem & Jewellery Authority',
    description: "Serendib Gemstones is registered with the National Gem & Jewellery Authority (NGJA) of Sri Lanka, the national regulatory authority responsible for overseeing the country's gem and jewellery industry.",
    colour: '#c9a84c',
  },
  {
    title: 'Gemmological Education',
    description: 'Our founders have completed gemmological education through the Ceylon Academy of Gemmological Science (CAGS) together with additional specialised gemstone training. This education strengthens our understanding of gemstone identification, quality evaluation, treatments, and international industry practices.',
    colour: '#1a5f9e',
  },
  {
    title: 'International Buyer Focus',
    description: 'Our business is built around serving overseas jewellers, collectors, luxury brands, gemstone investors, and wholesale buyers through personalised sourcing and worldwide export support.',
    colour: '#9b5dc8',
  },
  {
    title: 'Transparent Treatment Disclosure',
    description: 'Whenever applicable, gemstone treatments are disclosed honestly and laboratory certification is recommended or provided according to client requirements.',
    colour: '#e0bc6e',
  },
  {
    title: 'Continuous Professional Development',
    description: 'The gemstone industry continues to evolve. We remain committed to ongoing education, research, and learning to better serve our international clients.',
    colour: '#6b2d8b',
  },
]

const values = [
  { title: 'Transparency', description: 'Full disclosure on every stone — origin, treatment, certification, and sourcing chain.', colour: '#c9a84c' },
  { title: 'Integrity', description: 'Honest representation. If a stone does not meet the standard, we say so.', colour: '#1a5f9e' },
  { title: 'Knowledge', description: 'Continuous gemmological education informs every evaluation and recommendation.', colour: '#9b5dc8' },
  { title: 'Long-term Relationships', description: 'We build partnerships, not one-time transactions. Our clients return because they trust us.', colour: '#e0bc6e' },
  { title: 'Continuous Learning', description: 'Expanding our expertise through education, research, and industry engagement.', colour: '#6b2d8b' },
  { title: 'Responsible Sourcing', description: "Ethical business practices and compliance with Sri Lanka's gemstone industry standards.", colour: '#c0392b' },
]

const processSteps = [
  { n: '01', title: 'Understand Your Requirements', body: 'We begin by understanding exactly what the client is looking for.' },
  { n: '02', title: 'Source Suitable Gemstones', body: 'Suitable gemstones are sourced through trusted networks within Sri Lanka.' },
  { n: '03', title: 'Internal Evaluation', body: 'Each gemstone is assessed for colour, clarity, cut, overall quality, and treatment disclosure.' },
  { n: '04', title: 'Photography & Video', body: 'Clients receive accurate photographs and videos to review before making a decision.' },
  { n: '05', title: 'Laboratory Certification', body: 'Where required, gemstones can be accompanied by reports from recognised gemological laboratories.' },
  { n: '06', title: 'Client Approval', body: 'The client reviews all information before confirming the purchase.' },
  { n: '07', title: 'Secure Worldwide Export', body: 'Gemstones are professionally packaged and shipped with the appropriate export documentation.' },
]

const atAGlance = [
  'Based in Sri Lanka',
  'International gemstone sourcing and export',
  'Registered with the National Gem & Jewellery Authority (NGJA)',
  'Founders with gemmological education through CAGS and additional specialised training',
  'Natural Ceylon gemstone specialists',
  'Transparent treatment disclosure',
  'Worldwide buyer support',
  'Developing CGI (Ceylon Gem Identity)',
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://serendibgemstones.com' },
        { '@type': 'ListItem', position: 2, name: 'About' },
      ],
    },
    {
      '@type': 'Organization',
      name: 'Serendib Gemstones (Pvt) Ltd',
      url: 'https://serendibgemstones.com',
      description: 'Sri Lankan gemstone sourcing and export company helping jewellers, collectors, luxury brands, and investors worldwide source certified natural Ceylon gemstones.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'LK',
        addressLocality: 'Kochchikade',
      },
      founder: [
        { '@type': 'Person', name: 'Thusira Ranasinghe', jobTitle: 'Founder & Director' },
        { '@type': 'Person', name: 'Meril Peiris', jobTitle: 'Founder & Director' },
        { '@type': 'Person', name: 'Rangana Silva', jobTitle: 'Founder & Director' },
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Government Registration',
        name: 'National Gem and Jewellery Authority Registration',
      },
      areaServed: 'Worldwide',
      knowsAbout: ['Ceylon Sapphires', 'Natural Gemstones', 'Gemstone Export', 'Gemstone Sourcing', 'Padparadscha Sapphire', 'Ruby', 'Alexandrite'],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative bg-dark pt-40 pb-28 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 55%, rgba(201,168,76,0.25) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ background: 'radial-gradient(ellipse 50% 40% at 30% 70%, rgba(107,45,139,0.2) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.35em] uppercase text-teal/50 mb-6">Sri Lankan Gemstone Exporter</p>
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl text-offwhite font-light leading-[1.08] mb-8">
              About Serendib Gemstones
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="font-jost text-base text-offwhite/50 max-w-2xl mx-auto leading-relaxed mb-12">
              Connecting the world with carefully sourced natural Ceylon gemstones through transparency, knowledge, and trusted international partnerships.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/custom-sourcing" className="px-9 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
                Request a Gemstone Search
              </Link>
              <Link href="/contact" className="px-9 py-4 border border-teal/40 text-teal-light hover:bg-teal/10 font-jost text-sm tracking-widest uppercase transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* AT A GLANCE — GEO / AI Optimisation */}
      <section className="bg-dark-card py-16 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="font-cormorant text-2xl text-offwhite font-semibold mb-8 text-center">Serendib Gemstones at a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {atAGlance.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="block w-1.5 h-1.5 rounded-full bg-teal/50 mt-2 shrink-0" />
                  <p className="font-jost text-sm text-offwhite/55 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">Our Story</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-12 text-center leading-tight">
              Our Story
            </h2>
          </FadeUp>
          <div className="space-y-7">
            <FadeUp>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                For more than two thousand years, Sri Lanka has been recognised as one of the world&apos;s most celebrated sources of natural coloured gemstones. From the legendary sapphires of Ratnapura to the remarkable treasures discovered across the island, Sri Lankan gemstones have earned the trust of jewellers, collectors, and royalty around the world.
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                Serendib Gemstones was founded to continue that legacy by helping international buyers source authentic Sri Lankan gemstones with confidence.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                Rather than operating as a traditional gemstone retailer, we work as a trusted sourcing and export partner. We help jewellers, collectors, investors, and luxury brands identify gemstones that meet their specific requirements while providing transparent communication, professional guidance, and long-term support throughout the sourcing process.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                The name <em className="text-offwhite/70 not-italic font-medium">Serendib</em> reflects the island&apos;s historic identity. Long before Sri Lanka became known by its modern name, it was recognised throughout the world as Serendib &mdash; a land admired for its extraordinary natural treasures and exceptional gemstones. We chose this name to honour that heritage while looking toward the future of the gemstone industry.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* OUR MISSION — Premium full-width */}
      <section className="relative overflow-hidden border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-15" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.35) 0%, rgba(26,95,158,0.15) 50%, rgba(107,45,139,0.3) 100%)' }} />
        <div className="relative z-10 py-28 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <FadeUp>
              <p className="font-jost text-xs tracking-[0.35em] uppercase text-teal/50 mb-6">Our Mission</p>
              <blockquote className="font-cormorant italic text-2xl sm:text-3xl lg:text-4xl text-offwhite leading-snug">
                To become one of Sri Lanka&apos;s most trusted gemstone sourcing and export partners by combining transparency, gemmological knowledge, ethical business practices, and exceptional client service.
              </blockquote>
            </FadeUp>
          </div>

          {/* VALUES */}
          <div className="max-w-7xl mx-auto">
            <FadeUp className="text-center mb-12">
              <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/50">Our Values</p>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <FadeUp key={v.title} delay={i * 0.06}>
                  <div className="bg-dark/50 border border-white/[0.04] p-8 h-full backdrop-blur-sm hover:border-teal/20 transition-colors duration-500">
                    <div className="mb-5">
                      <GemSVG colour={v.colour} size={42} />
                    </div>
                    <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-2">{v.title}</h3>
                    <p className="font-jost text-xs text-offwhite/40 leading-relaxed">{v.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL CREDENTIALS */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-5">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Credentials</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold">Professional Standards You Can Trust</h2>
          </FadeUp>
          <FadeUp className="text-center mb-16">
            <p className="font-jost text-sm text-offwhite/45 max-w-2xl mx-auto leading-relaxed">
              Trust is earned through knowledge, transparency, and professional responsibility. At Serendib Gemstones, we are committed to maintaining high professional standards while continuously improving our knowledge of gemstones and international trade.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((cred, i) => (
              <FadeUp key={cred.title} delay={i * 0.07}>
                <div className="bg-dark-card border border-white/[0.04] p-9 h-full hover:border-teal/20 transition-colors duration-500 group">
                  <div className="w-12 h-[2px] mb-7 transition-all duration-500 group-hover:w-16" style={{ backgroundColor: cred.colour }} />
                  <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-3">{cred.title}</h3>
                  <p className="font-jost text-xs text-offwhite/40 leading-[1.8]">{cred.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDERS */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Leadership</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold">Meet the Founders</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((f, i) => (
              <FadeUp key={f.name} delay={i * 0.1}>
                <div className="bg-dark border border-white/[0.04] h-full hover:border-teal/20 transition-colors duration-500">
                  <div className="p-9 pb-0">
                    <div className="w-32 h-32 mx-auto mb-7 relative rounded-full overflow-hidden border-2 border-teal/20 bg-dark-card">
                      {f.photo ? (
                        <Image
                          src={f.photo}
                          alt={f.name}
                          fill
                          className="object-cover"
                          style={{ objectPosition: f.photoPosition }}
                          sizes="128px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <GemSVG colour="#c9a84c" size={48} />
                        </div>
                      )}
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="font-cormorant text-xl text-offwhite font-semibold mb-1">{f.name}</h3>
                      <p className="font-jost text-xs tracking-widest uppercase text-teal/50">{f.role}</p>
                    </div>
                    <div className="space-y-3 mb-7">
                      <p className="font-jost text-xs text-offwhite/40 leading-[1.8]">{f.bio}</p>
                      {f.focus && <p className="font-jost text-xs text-offwhite/40 leading-[1.8]">{f.focus}</p>}
                    </div>
                  </div>
                  <div className="border-t border-white/[0.04] px-9 py-6">
                    <p className="font-jost text-[10px] tracking-[0.2em] uppercase text-teal/35 mb-3">Areas of Focus</p>
                    <div className="flex flex-wrap gap-2">
                      {f.areas.map((area) => (
                        <span key={area} className="font-jost text-[10px] text-offwhite/35 border border-white/[0.06] px-3 py-1.5 tracking-wider">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — Premium Timeline */}
      <section className="bg-dark py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-3">Our Process</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold">How We Work</h2>
          </FadeUp>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-teal/25 via-teal/10 to-transparent hidden sm:block" />

            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <FadeUp key={step.n} delay={i * 0.06}>
                  <div className="flex gap-7 items-start relative py-5">
                    {/* Timeline dot */}
                    <div className="relative shrink-0 w-10 flex justify-center">
                      <div className="absolute top-2.5 w-2.5 h-2.5 rounded-full border border-teal/30 bg-dark hidden sm:block" />
                      <span className="font-cormorant text-2xl text-teal/30 font-light leading-none sm:sr-only">{step.n}</span>
                    </div>
                    <div className="flex-1 pb-1">
                      <h4 className="font-cormorant text-lg text-offwhite font-semibold mb-1.5">{step.title}</h4>
                      <p className="font-jost text-sm text-offwhite/45 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="bg-dark-card py-28 px-6 lg:px-10 border-t border-teal/10">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-teal/60 mb-5 text-center">The Future</p>
            <h2 className="font-cormorant text-4xl sm:text-5xl text-offwhite font-semibold mb-12 text-center">Our Vision</h2>
          </FadeUp>
          <div className="space-y-7">
            <FadeUp>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                The future of the gemstone industry will be built on transparency, education, and trust.
              </p>
            </FadeUp>
            <FadeUp delay={0.06}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                At Serendib Gemstones, our vision extends beyond sourcing exceptional Sri Lankan gemstones. We are committed to helping strengthen confidence in the international gemstone trade through education, ethical sourcing, and innovation.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                As part of this long-term vision, we are developing <Link href="/cgi" className="text-teal-light hover:text-teal transition-colors"><strong className="font-semibold">CGI (Ceylon Gem Identity)</strong></Link> &mdash; an initiative designed to create a trusted digital identity for gemstones that supports provenance, transparency, and buyer confidence.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="font-jost text-sm text-offwhite/55 leading-[1.85]">
                CGI represents our belief that the next generation of gemstone trading should combine Sri Lanka&apos;s centuries-old gemstone heritage with modern technology and verifiable information.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark overflow-hidden py-28 px-6 text-center border-t border-teal/10">
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.35) 0%, rgba(107,45,139,0.3) 100%)' }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeUp>
            <p className="font-cormorant italic text-2xl text-offwhite/60 mb-5">Ready to source gemstones from Sri Lanka?</p>
            <p className="font-jost text-sm text-offwhite/40 mb-10 max-w-md mx-auto leading-relaxed">
              Whether you&apos;re a jeweller, collector, investor, or luxury brand &mdash; tell us what you need. Every enquiry receives a personal response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/custom-sourcing" className="inline-block px-10 py-4 bg-teal hover:bg-teal-light text-white font-jost text-sm tracking-widest uppercase transition-colors duration-300">
                Request a Gemstone Search
              </Link>
              <Link href="/contact" className="inline-block px-10 py-4 border border-teal/40 text-teal-light hover:bg-teal/10 font-jost text-sm tracking-widest uppercase transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
