import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Proyek',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Proyek',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Gambar Cover',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack (Contoh: React, Node.js)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'githubLink',
      title: 'Link GitHub (Opsional)',
      type: 'url',
    }),
    defineField({
      name: 'demoLink',
      title: 'Link Demo Website (Opsional)',
      type: 'url',
    }),
  ],
})
