import type { Block } from 'payload'

export const Equipment: Block = {
  fields: [
    {
      name: 'equipment',
      type: 'relationship',
      relationTo: 'equipment',
      hasMany: true,
    },
  ],
  slug: 'equipment',
}
