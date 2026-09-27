import { defineField, defineType } from 'sanity'

export const workExperienceType = defineType({
  name: 'workExperience',
  title: 'Pengalaman Kerja',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Posisi / Jabatan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Nama Perusahaan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'employmentType',
      title: 'Tipe Pekerjaan',
      type: 'string',
      options: {
        list: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
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
      title: 'Deskripsi Pekerjaan',
      type: 'text',
    }),
  ],
})
