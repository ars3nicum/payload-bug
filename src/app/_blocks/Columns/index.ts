import type { Block, Field } from 'payload'

export const Columns: Block = {
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'column',
          type: 'richText',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
  slug: 'columns',
}
