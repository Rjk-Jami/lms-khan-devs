import { defineField, defineType } from "sanity";

export default defineType({
  name: "lesson",
  title: "Lesson",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "media",
      title: "Media",
      type: "object",
      fields: [
        defineField({
          name: "videoUrl",
          title: "Video URL",
          type: "url",
        }),
        defineField({
          name: "pdfFile",
          title: "PDF File",
          type: "file",
        }),
        defineField({
          name: "textContent",
          title: "Text Content",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array", // Content is an array
      of: [{ type: "block" }], 
    }),
  ],
});
