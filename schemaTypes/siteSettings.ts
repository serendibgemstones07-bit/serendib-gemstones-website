import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Label',
      type: 'string',
      initialValue: 'Site Settings',
      readOnly: true,
    }),
    defineField({
      name: 'heroVideo',
      title: 'Homepage Hero Video',
      type: 'file',
      options: { accept: 'video/mp4,video/webm' },
      description: 'MP4 or WebM. Plays muted, looped, autoplay behind the hero text.',
    }),
    defineField({
      name: 'heroPoster',
      title: 'Hero Video Poster (fallback image)',
      type: 'image',
      options: { hotspot: true },
      description: 'Shown while the video loads or if it cannot play.',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
