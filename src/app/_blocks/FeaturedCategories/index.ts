import type { Block, Field } from 'payload'

export const FeaturedCategories: Block = {
  fields: [
    {
      name: 'featuredCategories',
      type: 'array',
      fields: [
        {
          name: 'category',
          type: 'relationship',
          relationTo: 'categories',
          // required: true,
        },
      ],
    },
  ],
  slug: 'featuredCategories',
}
