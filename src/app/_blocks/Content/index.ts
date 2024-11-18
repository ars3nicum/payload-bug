import type { Block, Field } from 'payload'
import {
  BlocksFeature,
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'
import { Columns } from '../Columns'

export const Content: Block = {
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          // The HTMLConverter Feature is the feature which manages the HTML serializers.
          // If you do not pass any arguments to it, it will use the default serializers.
          BlocksFeature({
            blocks: [Columns],
          }),
          HTMLConverterFeature(),
        ],
      }),
      // required: true,
    },
    lexicalHTML('content', { name: 'content_html' }),
  ],
  slug: 'content',
}
