'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoImage from './LogoImage'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/gemstones', label: 'Gemstones' },
    { href: '/for-jewellers', label: 'For Jewellers' },
    { href: '/custom-sourcing', label: 'Custom Sourcing' },
    { href: '/learn', label: 'Knowledge Centre' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 84,
              height: 84,
              background: 'radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(180,140,50,0.10) 45%, transparent 72%)',
            }}
          >
            <LogoImage size={74} />
          </div>
          <span className="font-jost text-sm font-medium tracking-widest uppercase text-offwhite group-hover:text-teal transition-colors">
            Serendib Gemstones
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-jost text-xs xl:text-sm tracking-[0.15em] uppercase whitespace-nowrap transition-colors ${
                pathname === href || (href !== '/' && pathname.startsWith(href))
                  ? 'text-teal-light'
                  : 'text-offwhite/70 hover:text-offwhite'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1 px-5 py-2 bg-dark border border-teal/40 text-teal-light font-jost text-xs xl:text-sm tracking-[0.15em] uppercase whitespace-nowrap hover:bg-teal hover:text-white hover:border-teal transition-all duration-300"
          >
            Enquire
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-offwhite transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-offwhite transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-offwhite transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass border-t border-teal/20 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-jost text-sm tracking-widest uppercase text-offwhite/80 hover:text-teal-light transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block w-max px-5 py-2 border border-teal/40 text-teal-light text-sm tracking-widest uppercase hover:bg-teal hover:text-white transition-all"
          >
            Enquire
          </Link>
        </div>
      )}
    </header>
  )
}
