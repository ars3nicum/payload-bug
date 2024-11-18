import type { Block, Field } from 'payload'

export const FeaturedProducts: Block = {
  fields: [
    {
      name: 'featuredProducts',
      type: 'array',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          // required: true,
        },
      ],
    },
  ],
  slug: 'featuredProducts',
}
