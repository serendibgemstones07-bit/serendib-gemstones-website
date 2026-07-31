'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import GemSVG from './GemSVG'

interface GemCardProps {
  title: string
  subtitle: string
  description: string
  accentColour: string
  borderColour: string
  bgClass: string
  index: number
}

export default function GemCard({
  title,
  subtitle,
  description,
  accentColour,
  bgClass,
  index,
}: GemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.025 }}
      className={`group relative ${bgClass} border border-white/5 p-8 flex flex-col gap-5 transition-all duration-300 hover:border-opacity-50`}
      style={{ '--accent': accentColour } as React.CSSProperties}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 40px 0 ${accentColour}25` }}
      />

      <GemSVG colour={accentColour} size={72} />

      <div>
        <p className="font-jost text-xs tracking-widest uppercase mb-1" style={{ color: accentColour }}>
          {subtitle}
        </p>
        <h3 className="font-cormorant text-2xl font-semibold text-offwhite mb-3">{title}</h3>
        <p className="font-jost text-sm text-offwhite/55 leading-relaxed">{description}</p>
      </div>

      <Link
        href="/gemstones"
        className="mt-auto inline-flex items-center gap-2 font-jost text-xs tracking-widest uppercase transition-colors"
        style={{ color: accentColour }}
      >
        View Collection
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </motion.div>
  )
}
