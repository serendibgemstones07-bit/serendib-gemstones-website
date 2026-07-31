'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface LogoMarkAnimatedProps {
  size?: number
}

const draw = (delay = 0) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.0, delay, ease: 'easeInOut' as const },
  },
})

/*
  Animated stroke version — same geometry as LogoMark.
  Draws each pentagon edge in sequence: teal outer → teal inner → purple outer → purple inner.
*/
export default function LogoMarkAnimated({ size = 200 }: LogoMarkAnimatedProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const sw = Math.max(2, size * 0.044)

  return (
    <motion.svg
      ref={ref}
      width={size}
      height={Math.round(size * 1.0625)}
      viewBox="0 0 96 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Teal gem — outer pentagon */}
      <motion.path
        d="M14,8 L65,8 L78,28 L40,83 L3,28 Z"
        stroke="#c9a84c"
        strokeWidth={sw}
        strokeLinejoin="miter"
        fill="none"
        variants={draw(0)}
      />
      {/* Teal gem — inner pentagon (creates the hollow frame look) */}
      <motion.path
        d="M20,15 L62,15 L71,28 L40,76 L11,28 Z"
        stroke="#c9a84c"
        strokeWidth={sw * 0.65}
        strokeLinejoin="miter"
        fill="none"
        variants={draw(0.35)}
      />
      {/* Purple gem — outer pentagon */}
      <motion.path
        d="M26,22 L77,22 L90,42 L52,97 L15,42 Z"
        stroke="#6b2d8b"
        strokeWidth={sw}
        strokeLinejoin="miter"
        fill="none"
        variants={draw(0.7)}
      />
      {/* Purple gem — inner pentagon */}
      <motion.path
        d="M32,29 L73,29 L83,42 L52,90 L23,42 Z"
        stroke="#6b2d8b"
        strokeWidth={sw * 0.65}
        strokeLinejoin="miter"
        fill="none"
        variants={draw(1.05)}
      />
    </motion.svg>
  )
}
