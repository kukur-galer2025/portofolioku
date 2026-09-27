import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Pengalaman (Kerja/Organisasi/Volunteer)',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Peran / Jabatan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'organization',
      title: 'Nama Perusahaan / Organisasi',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Kategori Pengalaman',
      type: 'string',
      options: {
        list: ['Kerja', 'Organisasi', 'Volunteer', 'Pendidikan'],
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Mulai',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'Selesai (Kosongkan jika masih aktif)',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Tanggung Jawab',
      type: 'text',
    }),
  ],
})
