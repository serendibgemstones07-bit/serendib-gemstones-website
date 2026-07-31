'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

type GemProps = { colour: string; size: number }

// ── 1. Classic Brilliant (front elevation) ────────────────────────────────────
function ClassicBrilliant({ colour: c, size }: GemProps) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 100 110" fill="none">
      {/* Outer silhouette */}
      <path d="M22,22 L78,22 L98,46 L50,106 L2,46 Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
      {/* Table */}
      <line x1="22" y1="22" x2="78" y2="22" stroke={c} strokeWidth="2.2" />
      {/* Girdle */}
      <line x1="2" y1="46" x2="98" y2="46" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      {/* Crown star facets */}
      <line x1="22" y1="22" x2="50" y2="46" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="78" y1="22" x2="50" y2="46" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="50" y1="22" x2="2"  y2="46" stroke={c} strokeWidth="1"   strokeOpacity="0.55" />
      <line x1="50" y1="22" x2="98" y2="46" stroke={c} strokeWidth="1"   strokeOpacity="0.55" />
      {/* Pavilion facets */}
      <line x1="2"  y1="46" x2="50" y2="106" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="98" y1="46" x2="50" y2="106" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="26" y1="46" x2="50" y2="106" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="74" y1="46" x2="50" y2="106" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="50" y1="46" x2="50" y2="106" stroke={c} strokeWidth="0.9" strokeOpacity="0.4" />
    </svg>
  )
}

// ── 2. Cushion / Square (front elevation) ─────────────────────────────────────
function CushionFront({ colour: c, size }: GemProps) {
  return (
    <svg width={size * 0.9} height={size * 1.1} viewBox="0 0 90 110" fill="none">
      {/* Outer silhouette — squarish with pointed bottom */}
      <path d="M12,20 L78,20 L86,44 L45,106 L4,44 Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
      {/* Table */}
      <line x1="12" y1="20" x2="78" y2="20" stroke={c} strokeWidth="2.2" />
      {/* Girdle */}
      <line x1="4" y1="44" x2="86" y2="44" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      {/* Crown facets */}
      <line x1="12" y1="20" x2="45" y2="44" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="78" y1="20" x2="45" y2="44" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="45" y1="20" x2="4"  y2="44" stroke={c} strokeWidth="1"   strokeOpacity="0.5" />
      <line x1="45" y1="20" x2="86" y2="44" stroke={c} strokeWidth="1"   strokeOpacity="0.5" />
      {/* Pavilion facets */}
      <line x1="4"  y1="44" x2="45" y2="106" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="86" y1="44" x2="45" y2="106" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="23" y1="44" x2="45" y2="106" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="67" y1="44" x2="45" y2="106" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
    </svg>
  )
}

// ── 3. Round Brilliant (circular front view) ──────────────────────────────────
function RoundFront({ colour: c, size }: GemProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Circle outline */}
      <circle cx="50" cy="50" r="46" stroke={c} strokeWidth="2.2" />
      {/* Table flat line */}
      <line x1="18" y1="25" x2="82" y2="25" stroke={c} strokeWidth="2" />
      {/* Crown left/right */}
      <line x1="18" y1="25" x2="4"  y2="50" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="82" y1="25" x2="96" y2="50" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      {/* Girdle */}
      <line x1="4"  y1="50" x2="96" y2="50" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      {/* Crown inner */}
      <line x1="18" y1="25" x2="50" y2="50" stroke={c} strokeWidth="1"   strokeOpacity="0.6" />
      <line x1="82" y1="25" x2="50" y2="50" stroke={c} strokeWidth="1"   strokeOpacity="0.6" />
      <line x1="50" y1="25" x2="4"  y2="50" stroke={c} strokeWidth="0.9" strokeOpacity="0.5" />
      <line x1="50" y1="25" x2="96" y2="50" stroke={c} strokeWidth="0.9" strokeOpacity="0.5" />
      {/* Pavilion */}
      <line x1="4"  y1="50" x2="50" y2="94" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="96" y1="50" x2="50" y2="94" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="24" y1="50" x2="50" y2="94" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="76" y1="50" x2="50" y2="94" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="50" y1="50" x2="50" y2="94" stroke={c} strokeWidth="0.9" strokeOpacity="0.4" />
    </svg>
  )
}

// ── 4. Emerald (rectangular front elevation) ──────────────────────────────────
function EmeraldFront({ colour: c, size }: GemProps) {
  return (
    <svg width={size * 0.75} height={size * 1.1} viewBox="0 0 75 110" fill="none">
      {/* Outer silhouette — chamfered rectangle */}
      <path d="M12,8 L63,8 L73,22 L73,78 L63,92 L12,92 L2,78 L2,22 Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
      {/* Table */}
      <line x1="12" y1="8" x2="63" y2="8" stroke={c} strokeWidth="2.2" />
      {/* Inner step 1 */}
      <path d="M18,20 L57,20 L65,30 L65,70 L57,80 L18,80 L10,70 L10,30 Z" stroke={c} strokeWidth="1.3" strokeOpacity="0.8" strokeLinejoin="round" />
      {/* Inner table */}
      <rect x="22" y="36" width="31" height="28" stroke={c} strokeWidth="1.8" strokeOpacity="0.9" />
      {/* Corner connectors outer→step */}
      <line x1="12" y1="8"  x2="18" y2="20" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      <line x1="63" y1="8"  x2="57" y2="20" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      <line x1="73" y1="22" x2="65" y2="30" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      <line x1="73" y1="78" x2="65" y2="70" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      <line x1="63" y1="92" x2="57" y2="80" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      <line x1="12" y1="92" x2="18" y2="80" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      <line x1="2"  y1="78" x2="10" y2="70" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      <line x1="2"  y1="22" x2="10" y2="30" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
    </svg>
  )
}

// ── 5. Pear (teardrop front elevation) ───────────────────────────────────────
function PearFront({ colour: c, size }: GemProps) {
  return (
    <svg width={size * 0.72} height={size * 1.15} viewBox="0 0 72 115" fill="none">
      {/* Outer teardrop */}
      <path d="M36,108 C14,108 2,88 2,66 C2,44 12,24 26,14 C30,11 33,6 36,6 C39,6 42,11 46,14 C60,24 70,44 70,66 C70,88 58,108 36,108 Z"
        stroke={c} strokeWidth="2.2" />
      {/* Table */}
      <line x1="20" y1="24" x2="52" y2="24" stroke={c} strokeWidth="2" strokeOpacity="0.9" />
      {/* Girdle */}
      <line x1="2" y1="66" x2="70" y2="66" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      {/* Crown */}
      <line x1="20" y1="24" x2="36" y2="66" stroke={c} strokeWidth="1.1" strokeOpacity="0.65" />
      <line x1="52" y1="24" x2="36" y2="66" stroke={c} strokeWidth="1.1" strokeOpacity="0.65" />
      <line x1="36" y1="24" x2="2"  y2="66" stroke={c} strokeWidth="0.9" strokeOpacity="0.5" />
      <line x1="36" y1="24" x2="70" y2="66" stroke={c} strokeWidth="0.9" strokeOpacity="0.5" />
      {/* Pavilion */}
      <line x1="2"  y1="66" x2="36" y2="108" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="70" y1="66" x2="36" y2="108" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="18" y1="66" x2="36" y2="108" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="54" y1="66" x2="36" y2="108" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="36" y1="66" x2="36" y2="108" stroke={c} strokeWidth="0.9" strokeOpacity="0.4" />
    </svg>
  )
}

// ── 6. Marquise (pointed oval, front elevation) ───────────────────────────────
function MarquiseFront({ colour: c, size }: GemProps) {
  return (
    <svg width={size * 0.55} height={size * 1.3} viewBox="0 0 55 130" fill="none">
      {/* Outer pointed oval */}
      <path d="M27,4 C40,4 52,34 52,65 C52,96 40,126 27,126 C14,126 2,96 2,65 C2,34 14,4 27,4 Z"
        stroke={c} strokeWidth="2.2" />
      {/* Table */}
      <line x1="12" y1="34" x2="42" y2="34" stroke={c} strokeWidth="2" strokeOpacity="0.9" />
      {/* Girdle */}
      <line x1="2" y1="65" x2="52" y2="65" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      {/* Crown */}
      <line x1="12" y1="34" x2="27" y2="65" stroke={c} strokeWidth="1.1" strokeOpacity="0.65" />
      <line x1="42" y1="34" x2="27" y2="65" stroke={c} strokeWidth="1.1" strokeOpacity="0.65" />
      <line x1="27" y1="34" x2="2"  y2="65" stroke={c} strokeWidth="0.9" strokeOpacity="0.5" />
      <line x1="27" y1="34" x2="52" y2="65" stroke={c} strokeWidth="0.9" strokeOpacity="0.5" />
      {/* Pavilion */}
      <line x1="2"  y1="65" x2="27" y2="126" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="52" y1="65" x2="27" y2="126" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="14" y1="65" x2="27" y2="126" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="40" y1="65" x2="27" y2="126" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="27" y1="65" x2="27" y2="126" stroke={c} strokeWidth="0.9" strokeOpacity="0.4" />
    </svg>
  )
}

// ── 7. Hexagon / Old Mine (front view) ────────────────────────────────────────
function HexagonCut({ colour: c, size }: GemProps) {
  return (
    <svg width={size} height={size * 1.05} viewBox="0 0 100 105" fill="none">
      {/* Outer hexagon */}
      <polygon points="50,4 92,28 92,72 50,96 8,72 8,28" stroke={c} strokeWidth="2.2" />
      {/* Table */}
      <line x1="24" y1="16" x2="76" y2="16" stroke={c} strokeWidth="2" strokeOpacity="0.95" />
      {/* Girdle */}
      <line x1="8" y1="50" x2="92" y2="50" stroke={c} strokeWidth="1.1" strokeOpacity="0.6" />
      {/* Crown facets */}
      <line x1="24" y1="16" x2="8"  y2="50" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="76" y1="16" x2="92" y2="50" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="24" y1="16" x2="50" y2="50" stroke={c} strokeWidth="1"   strokeOpacity="0.55" />
      <line x1="76" y1="16" x2="50" y2="50" stroke={c} strokeWidth="1"   strokeOpacity="0.55" />
      <line x1="50" y1="16" x2="8"  y2="50" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="50" y1="16" x2="92" y2="50" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      {/* Pavilion facets */}
      <line x1="8"  y1="50" x2="50" y2="96" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="92" y1="50" x2="50" y2="96" stroke={c} strokeWidth="1.2" strokeOpacity="0.7" />
      <line x1="28" y1="50" x2="50" y2="96" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="72" y1="50" x2="50" y2="96" stroke={c} strokeWidth="0.9" strokeOpacity="0.45" />
      <line x1="50" y1="50" x2="50" y2="96" stroke={c} strokeWidth="0.9" strokeOpacity="0.4" />
    </svg>
  )
}

const CUTS = [ClassicBrilliant, CushionFront, RoundFront, EmeraldFront, PearFront, MarquiseFront, HexagonCut]

interface FloatingGem {
  id: number; x: number; size: number
  duration: number; delay: number
  colour: string; rotate: number; cutIndex: number
}

export default function HeroGems() {
  const gems: FloatingGem[] = useMemo(() => {
    const colours = ['#c9a84c', '#e0bc6e', '#a88835', '#c9a84c', '#e0bc6e', '#a88835', '#c9a84c']
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: 3 + (i * 7.3) % 91,
      size: 32 + (i * 11) % 36,
      duration: 12 + (i * 3.3) % 12,
      delay: -(i * 2.4) % 18,
      colour: colours[i % colours.length],
      rotate: (i * 41) % 140 - 70,
      cutIndex: i % CUTS.length,
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {gems.map((gem) => {
        const Shape = CUTS[gem.cutIndex]
        return (
          <motion.div
            key={gem.id}
            className="absolute"
            style={{ left: `${gem.x}%`, bottom: '-12%', opacity: 0.13 }}
            animate={{
              y: [0, -(typeof window !== 'undefined' ? window.innerHeight * 1.35 : 950)],
              rotate: [gem.rotate, gem.rotate + 20],
            }}
            transition={{
              duration: gem.duration,
              delay: gem.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Shape colour={gem.colour} size={gem.size} />
          </motion.div>
        )
      })}
    </div>
  )
}
