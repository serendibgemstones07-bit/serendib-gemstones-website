import Link from 'next/link'
import LogoImage from './LogoImage'

export default function Footer() {
  const gemstoneLinks = [
    { href: '/gemstones/blue-sapphire', label: 'Blue Sapphire' },
    { href: '/gemstones/padparadscha-sapphire', label: 'Padparadscha' },
    { href: '/gemstones/yellow-sapphire', label: 'Yellow Sapphire' },
    { href: '/gemstones/pink-sapphire', label: 'Pink Sapphire' },
    { href: '/gemstones/star-sapphire', label: 'Star Sapphire' },
    { href: '/gemstones/ruby', label: 'Ruby' },
    { href: '/gemstones', label: 'View All' },
  ]

  const buyerLinks = [
    { href: '/for-jewellers', label: 'For Jewellers & Trade' },
    { href: '/custom-sourcing', label: 'Custom Sourcing' },
    { href: '/export-shipping', label: 'Export & Shipping' },
    { href: '/how-we-source', label: 'How We Source' },
    { href: '/how-we-verify', label: 'How We Verify' },
    { href: '/contact', label: 'Contact' },
  ]

  const cgiLinks = [
    { href: '/cgi', label: 'What is CGI?' },
    { href: '/cgi/why-digital-gem-identity', label: 'Why It Matters' },
    { href: '/cgi/how-gin-works', label: 'How GIN Works' },
    { href: '/cgi/cgi-passport', label: 'CGI Passport' },
    { href: '/cgi/verification', label: 'Verification Portal' },
  ]

  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Our Services' },
    { href: '/custom-jewellery', label: 'Custom Jewellery' },
    { href: '/learn', label: 'Knowledge Centre' },
    { href: '/learn/sapphires', label: 'Natural Sapphires' },
    { href: '/learn/buying-guide', label: 'Buying Guide' },
  ]

  return (
    <footer className="bg-dark border-t border-teal/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <LogoImage size={52} />
              <span className="font-cormorant text-lg font-semibold text-offwhite">
                Serendib Gemstones
              </span>
            </div>
            <p className="font-jost text-sm text-offwhite/50 leading-relaxed mb-3">
              Sri Lanka&apos;s trusted gemstone sourcing and export partner. Helping jewellers, collectors, luxury brands, and investors worldwide source certified natural Ceylon gemstones.
            </p>
            <p className="font-cormorant italic text-teal-light text-sm tracking-wide">
              Unheated. Untreated. Unmatched.
            </p>
          </div>

          {/* Gemstone Library */}
          <div>
            <h4 className="font-jost text-xs tracking-widest uppercase text-offwhite/40 mb-5">
              Gemstone Library
            </h4>
            <ul className="space-y-2.5">
              {gemstoneLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-jost text-sm text-offwhite/60 hover:text-teal-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* International Buyers */}
          <div>
            <h4 className="font-jost text-xs tracking-widest uppercase text-offwhite/40 mb-5">
              International Buyers
            </h4>
            <ul className="space-y-2.5">
              {buyerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-jost text-sm text-offwhite/60 hover:text-teal-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CGI */}
          <div>
            <h4 className="font-jost text-xs tracking-widest uppercase text-offwhite/40 mb-5">
              Ceylon Gem Identity
            </h4>
            <ul className="space-y-2.5">
              {cgiLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-jost text-sm text-offwhite/60 hover:text-teal-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Learn */}
          <div>
            <h4 className="font-jost text-xs tracking-widest uppercase text-offwhite/40 mb-5">
              Company & Learn
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-jost text-sm text-offwhite/60 hover:text-teal-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="border-t border-teal/10 pt-8 pb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="font-jost text-xs uppercase tracking-widest text-offwhite/25 mb-1">Email</p>
            <a href="mailto:gems@serendibgemstones.com" className="font-jost text-sm text-teal/80 hover:text-teal-light transition-colors">
              gems@serendibgemstones.com
            </a>
          </div>
          <div>
            <p className="font-jost text-xs uppercase tracking-widest text-offwhite/25 mb-1">Address</p>
            <p className="font-jost text-sm text-offwhite/50">Kochchikade, Sri Lanka</p>
          </div>
          <div>
            <p className="font-jost text-xs uppercase tracking-widest text-offwhite/25 mb-1">Social</p>
            <a
              href="https://instagram.com/serendibgemstones"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost text-sm text-offwhite/50 hover:text-purple-mid transition-colors"
            >
              @serendibgemstones
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-teal/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-jost text-xs text-offwhite/30">
            &copy; {new Date().getFullYear()} Serendib Gemstones (Pvt) Ltd. All rights reserved.
          </p>
          <p className="font-cormorant italic text-xs text-teal/50 tracking-wider">
            Unheated. Untreated. Unmatched.
          </p>
        </div>
      </div>
    </footer>
  )
}
