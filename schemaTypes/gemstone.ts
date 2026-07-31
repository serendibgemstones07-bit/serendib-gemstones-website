import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gemstone',
  title: 'Gemstone',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Sapphires', value: 'Sapphires' },
          { title: 'Rubies', value: 'Rubies' },
          { title: 'Chrysoberyl', value: 'Chrysoberyl' },
          { title: 'Spinel', value: 'Spinel' },
          { title: 'Rare', value: 'Rare' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'species',
      title: 'Species',
      type: 'string',
      description: 'e.g. Corundum, Chrysoberyl, Spinel',
    }),
    defineField({
      name: 'variety',
      title: 'Variety',
      type: 'string',
      description: 'e.g. Blue Sapphire, Padparadscha',
    }),
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'string',
      description: 'e.g. Ratnapura, Sri Lanka',
    }),
    defineField({
      name: 'caratWeight',
      title: 'Carat Weight',
      type: 'string',
      description: 'e.g. 3.42 ct',
    }),
    defineField({
      name: 'certification',
      title: 'Certification',
      type: 'string',
      options: {
        list: [
          { title: 'GIA', value: 'GIA' },
          { title: 'GRS', value: 'GRS' },
          { title: 'No-Heat', value: 'No-Heat' },
          { title: 'GIA + No-Heat', value: 'GIA + No-Heat' },
          { title: 'GRS + No-Heat', value: 'GRS + No-Heat' },
        ],
      },
    }),
    defineField({
      name: 'colour',
      title: 'Accent Colour (hex)',
      type: 'string',
      description: 'Hex colour for the gem icon, e.g. #1a5f9e',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: { accept: 'video/*' },
    }),
    defineField({
      name: 'available',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'caratWeight',
      media: 'photos.0',
    },
  },
})
