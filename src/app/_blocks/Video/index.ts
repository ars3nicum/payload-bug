import type { Block } from 'payload'

export const Video: Block = {
  fields: [
    {
      name: 'service',
      type: 'select',
      label: 'Service',
      required: true,
      options: [
        {
          label: 'RuTube',
          value: 'rutube',
        },
        {
          label: 'YouTube',
          value: 'youtube',
        },
      ], // Add options property here
    },
    {
      name: 'videoId',
      type: 'text',
      label: 'Video ID',
      required: true,
    },
  ],
  labels: {
    plural: 'Videos',
    singular: 'Video',
  },
  slug: 'videoExternal',
}
