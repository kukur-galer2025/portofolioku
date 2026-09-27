import { defineField, defineType } from 'sanity'

export const volunteerType = defineType({
  name: 'volunteer',
  title: 'Pengalaman Volunteer / Organisasi',
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
      title: 'Nama Organisasi',
      type: 'string',
      validation: (rule) => rule.required(),
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
      title: 'Deskripsi Kegiatan',
      type: 'text',
    }),
  ],
})
