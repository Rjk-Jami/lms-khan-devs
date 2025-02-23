import { defineField, defineType } from "sanity";

export default defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "moduleOfCourse",
      title: "Module of Course",
      type: "array",
      of:[{type: "reference", to: [{ type: "moduleOfCourse" }]}],
      
    }),
    defineField({
        name: "instructor",
        title: "Instructor",
        type: "reference",
        to: [{ type: "instructor" }],
        validation: (Rule) => Rule.required(),
      }),

  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      categoryName: "category.name",
      instructorName: "instructor.name",
      image: "image",
    },
    prepare(selection) {
      const { title, price, categoryName, instructorName, image } = selection;
      return {
        title: title,
        subtitle: `${categoryName} | $${price} | Instructor: ${instructorName}`,
        media: image ? { asset: { _ref: image.asset._ref } } : null,
      };
    },
  },
  
});
