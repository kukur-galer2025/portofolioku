import { defineField, defineType } from 'sanity'

export const certificateType = defineType({
  name: 'certificate',
  title: 'Sertifikat',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Sertifikat',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Penerbit (Issuer)',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Tanggal Didapat',
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Gambar Sertifikat (Jika format gambar)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'file',
      title: 'File Sertifikat (Jika format PDF)',
      type: 'file',
      options: {
        accept: 'application/pdf'
      }
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Keterangan Singkat',
      type: 'text',
    }),
  ],
})
