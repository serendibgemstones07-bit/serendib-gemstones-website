'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import GemSVG from './GemSVG'
import type { Gem } from '@/lib/gems'

interface StoneCardProps {
  gem: Gem
  index: number
}

const certColours: Record<string, string> = {
  'GIA': '#1a5f9e',
  'GRS': '#2e8b57',
  'No-Heat': '#8b4513',
  'GIA + No-Heat': '#1a5f9e',
  'GRS + No-Heat': '#2e8b57',
}

export default function StoneCard({ gem, index }: StoneCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group bg-dark-card border border-white/6 hover:border-teal/30 transition-all duration-300 flex flex-col"
    >
      {/* Gem illustration area */}
      <div className="relative bg-dark/60 flex items-center justify-center py-10 border-b border-white/5">
        <GemSVG colour={gem.colour} size={96} />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at center, ${gem.colour}12 0%, transparent 70%)` }}
        />
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-cormorant text-xl font-semibold text-offwhite">{gem.name}</h3>
          <p className="font-jost text-xs text-offwhite/45 mt-0.5">{gem.species} · {gem.variety}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-jost">
          <div>
            <span className="text-offwhite/35 uppercase tracking-wider">Origin</span>
            <p className="text-offwhite/70 mt-0.5">{gem.origin}</p>
          </div>
          <div>
            <span className="text-offwhite/35 uppercase tracking-wider">Weight</span>
            <p className="text-offwhite/70 mt-0.5">{gem.caratWeight}</p>
          </div>
        </div>

        <p className="font-jost text-xs text-offwhite/50 leading-relaxed">{gem.description}</p>

        {/* Certification badge */}
        <div className="flex items-center gap-2 mt-1">
          <span
            className="px-2.5 py-1 text-xs font-jost tracking-wider border"
            style={{
              color: certColours[gem.certification],
              borderColor: certColours[gem.certification] + '60',
              background: certColours[gem.certification] + '12',
            }}
          >
            {gem.certification}
          </span>
        </div>

        <Link
          href="/contact"
          className="mt-auto w-full py-2.5 text-center font-jost text-xs tracking-widest uppercase border border-teal/30 text-teal/70 hover:bg-teal hover:text-white hover:border-teal transition-all duration-300"
        >
          Enquire About This Stone
        </Link>
      </div>
    </motion.article>
  )
}
