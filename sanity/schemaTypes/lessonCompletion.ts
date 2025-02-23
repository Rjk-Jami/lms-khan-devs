import { defineField, defineType } from "sanity";

export default defineType({
  name: "lessonCompletion",
  title: "Lesson Completion",
  type: "document",
  fields: [
    defineField({
      name: "student",
      title: "Student",
      type: "reference",
      to: [{ type: "student" }],
      description: "Reference to the student who completed the lesson",
    }),
    defineField({
      name: "lesson",
      title: "Lesson",
      type: "reference",
      to: [{ type: "lesson" }],
      description: "Reference to the lesson that was completed",
    }),
    defineField({
      name: "module",
      title: "Module",
      type: "reference",
      to: [{ type: "modules" }],
      description: "Reference to the module containing the lesson",
    }),
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: [{ type: "course" }],
      description: "Reference to the course containing the module",
    }),
    defineField({
      name: "completedAt",
      title: "Completed At",
      type: "datetime",
      description: "Timestamp when the lesson was completed",
    }),
  ],
  preview: {
    select: {
      title: "lesson.title",
      subtitle: "course.title",
      media: "course.image",
      completedAt: "completedAt",
    },
    prepare(selection) {
      const { title, subtitle, media, completedAt } = selection;
      return {
        title: title,
        subtitle:
          subtitle +
          (completedAt
            ? ` - Completed on ${new Date(completedAt).toLocaleDateString()}`
            : ""),
        media: media,
      };
    },
  },
});
