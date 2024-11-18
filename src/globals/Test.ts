import { GlobalConfig } from 'payload'

import { TestBlocks } from '@/app/_blocks/TestBlocks'

export const Test: GlobalConfig = {
  slug: 'test',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      label: 'Title',
    },
    {
      name: 'layout',
      localized: true,
      blocks: [TestBlocks],
      type: 'blocks',
    },
  ],
}
