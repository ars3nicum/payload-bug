import type { Block } from 'payload'

export const Button: Block = {
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Label',
      required: true,
    },
    {
      name: 'link',
      type: 'text',
      label: 'Link',
      required: true,
    },
  ],
  labels: {
    plural: 'Buttons',
    singular: 'Button',
  },
  slug: 'button',
}
