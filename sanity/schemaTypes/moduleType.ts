import { defineType, defineField } from "sanity";

export default defineType({
  name: "module",
  title: "Module",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(), 
    }),
    defineField({
      name: "lessons",
      title: "Lessons",
      type: "array", 
      of: [{ type: "reference", to: [{ type: "lesson" }] }], 
      
    }),
  ],
});
