import type { Block } from 'payload'


export const NewsSlider: Block = {
  fields: [
    {
      name: 'slider',
      type: 'relationship',
      relationTo: 'sliders',
    },

  ],
  slug: 'newsSlider',
  labels: {
    singular: 'Slider',
    plural: 'Sliders',
  },
}
