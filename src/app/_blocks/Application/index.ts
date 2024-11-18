import type { Block } from 'payload'

export const Application: Block = {
  fields: [
    {
      name: 'application',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'textarea',
        },
      ],
    },
  ],

  slug: 'application',
}
