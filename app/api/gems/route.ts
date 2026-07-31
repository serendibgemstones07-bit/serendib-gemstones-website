import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export async function GET() {
  try {
    const gems = await client.fetch(`
      *[_type == "gemstone" && available == true] | order(_createdAt desc) {
        _id,
        name,
        category,
        species,
        variety,
        origin,
        caratWeight,
        certification,
        colour,
        description,
        "photoUrl": photos[0].asset->url,
        "videoUrl": video.asset->url,
      }
    `)

    const formatted = gems.map((g: any) => ({
      id: g._id,
      name: g.name,
      category: g.category,
      species: g.species,
      variety: g.variety,
      origin: g.origin,
      caratWeight: g.caratWeight,
      certification: g.certification,
      colour: g.colour ?? '#c9a84c',
      description: g.description,
      photoUrl: g.photoUrl ?? null,
      videoUrl: g.videoUrl ?? null,
    }))

    return NextResponse.json(formatted)
  } catch (err) {
    console.error('Sanity fetch error:', err)
    return NextResponse.json([], { status: 500 })
  }
}
