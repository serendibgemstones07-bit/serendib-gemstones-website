'use client'

import { useEffect, useRef, useState } from 'react'
import { client, fileUrlFor, sanityConfigured, urlFor } from '@/lib/sanity'

// Drop a file at public/hero-sapphire.mp4 (or .webm) to use it as the hero video.
// If missing, we fall back to a Sanity-managed video, then to the animated gems.
const STATIC_VIDEO = '/HP%20AZ.mp4'

export default function HeroVideo() {
  const [videoUrl, setVideoUrl] = useState<string | null>(STATIC_VIDEO)
  const [posterUrl, setPosterUrl] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!sanityConfigured || videoUrl !== STATIC_VIDEO) return
    // Only consult Sanity if the local file fails (see onError below)
  }, [videoUrl])

  const handleError = async () => {
    setLoaded(false)
    if (!sanityConfigured) {
      setVideoUrl(null)
      return
    }
    try {
      const data = await client.fetch<{
        heroVideo?: { asset?: { _ref?: string } }
        heroPoster?: any
      }>(`*[_type == "siteSettings"][0]{heroVideo, heroPoster}`)
      const url = fileUrlFor(data?.heroVideo?.asset?._ref)
      setVideoUrl(url)
      setPosterUrl(data?.heroPoster ? urlFor(data.heroPoster).width(1920).url() : null)
    } catch {
      setVideoUrl(null)
    }
  }

  if (!videoUrl) return null

  const softEdgeMask =
    'radial-gradient(ellipse 40% 50% at 50% 50%, black 0%, black 20%, transparent 85%)'

  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
      {/* Video fills the hero, zoomed in on the sapphire.
          A radial mask fades the video into transparency at the edges,
          so it dissolves into the dark background instead of ending on a hard line. */}
      <video
        ref={videoRef}
        key={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterUrl ?? undefined}
        onCanPlay={() => setLoaded(true)}
        onError={handleError}
        disablePictureInPicture
        disableRemotePlayback
        style={{
          willChange: 'opacity, transform',
          backfaceVisibility: 'hidden',
          transform: 'scale(0.80)',
          transformOrigin: 'center center',
          WebkitMaskImage: softEdgeMask,
          maskImage: softEdgeMask,
        }}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          loaded ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <source src={videoUrl} />
      </video>

      {/* Subtle centre wash so headline stays legible over the brightest highlights. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 45% 35% at 50% 45%, rgba(15,28,46,0.70) 0%, rgba(15,28,46,0.35) 60%, rgba(15,28,46,0) 100%)',
        }}
      />
      {/* Bottom fade so the section blends into the marquee below. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-dark pointer-events-none" />
    </div>
  )
}
