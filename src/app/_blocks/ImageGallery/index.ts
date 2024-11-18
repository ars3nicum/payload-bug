import type { Block, Field } from 'payload'

export const ImageGallery: Block = {
  slug: 'imageGallery',
  fields: [
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
  ],
}
