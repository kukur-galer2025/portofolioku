import { defineField, defineType } from 'sanity'

export const achievementType = defineType({
  name: 'achievement',
  title: 'Prestasi & Penghargaan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Prestasi / Penghargaan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Penyelenggara / Pemberi Penghargaan',
      type: 'string',
    }),
    defineField({
      name: 'level',
      title: 'Tingkat',
      type: 'string',
      options: {
        list: ['Universitas', 'Kota/Kabupaten', 'Provinsi', 'Nasional', 'Internasional'],
      },
    }),
    defineField({
      name: 'date',
      title: 'Tanggal / Tahun',
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Foto / Bukti (Opsional)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
    }),
  ],
})
