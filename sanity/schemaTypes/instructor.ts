import { defineType, defineField } from "sanity";

export default defineType({
  name: "instructor",
  title: "Instructor",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(), 
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
     
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text", 
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true }, 
    }),
  ],
});
