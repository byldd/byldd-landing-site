import type { CollectionConfig } from 'payload'

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedAt', '_status', 'updatedAt'],
  },
  access: {
    read: ({ req }) =>
      req.user
        ? true
        : {
            _status: {
              equals: 'published',
            },
          },
  },
  versions: {
    drafts: true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.title && !data.slug) {
          data.slug = slugify(data.title)
        }

        return data
      },
    ],
    beforeChange: [
      ({ data }) => {
        if (data?._status === 'published' && !data.publishedAt) {
          data.publishedAt = new Date().toISOString()
        }

        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Generated from the title when left empty. Keep it stable after publishing.',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 240,
      admin: {
        description: 'Used on the Insights index and as the default SEO description.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'author',
          type: 'text',
          required: true,
          defaultValue: 'Ayush Singhvi',
        },
        {
          name: 'readingTime',
          type: 'number',
          required: true,
          defaultValue: 5,
          min: 1,
          admin: {
            description: 'Estimated reading time in minutes.',
          },
        },
        {
          name: 'publishedAt',
          type: 'date',
          defaultValue: () => new Date().toISOString(),
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
      ],
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          maxLength: 70,
        },
        {
          name: 'description',
          type: 'textarea',
          maxLength: 160,
        },
      ],
    },
  ],
}
