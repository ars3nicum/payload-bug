import type { Block } from 'payload'
// import {
//   HTMLConverterFeature,
//   lexicalEditor,
//   lexicalHTML,
// } from '@payloadcms/richtext-lexical'

export const TestBlocks: Block = {
  slug: 'testBlocks',
  
  fields: [
    {
      name: 'blocks',
      localized: true,
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'textarea',
        },
        {
          name: 'text',
          type: 'textarea',
        },
        
      ],
      // required
    },

  ],
}
