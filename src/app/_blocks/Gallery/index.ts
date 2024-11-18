import type { Block } from 'payload'

export const NewsGallery: Block = {
  fields: [
    {
      name: 'gallery',
      type: 'relationship',
      relationTo: 'galleries-new',
    },
  ],
  slug: 'newsGallery',
  labels: {
    singular: 'Gallery',
    plural: 'Galleries',
  },
}
