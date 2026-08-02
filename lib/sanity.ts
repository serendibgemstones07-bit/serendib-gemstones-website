import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const sanityConfigured = Boolean(projectId && dataset)

export const client = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : (null as any)

const builder = sanityConfigured ? createImageUrlBuilder(client) : null

export function urlFor(source: any) {
  if (!builder) throw new Error('Sanity not configured')
  return builder.image(source)
}

// Turn a Sanity file asset reference (e.g. "file-abc123-mp4") into a CDN URL.
export function fileUrlFor(assetRef: string | undefined | null): string | null {
  if (!assetRef) return null
  const [, id, ext] = assetRef.split('-')
  if (!id || !ext) return null
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${ext}`
}
