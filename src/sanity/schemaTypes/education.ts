import { defineField, defineType } from 'sanity'

export const educationType = defineType({
  name: 'education',
  title: 'Pendidikan',
  type: 'document',
  fields: [
    defineField({
      name: 'institution',
      title: 'Nama Institusi / Universitas',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Gelar / Jurusan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Tahun Masuk',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'Tahun Lulus (Kosongkan jika masih menempuh)',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Catatan (Opsional: IPK, Judul Skripsi, dll)',
      type: 'text',
    }),
  ],
})
