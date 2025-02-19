import { defineType, defineField } from "sanity";

export default defineType({
  name: "enrollment",
  title: "Enrollment",
  type: "document",
  fields: [
    defineField({
      name: "student",
      title: "Student",
      type: "reference",
      to: [{ type: "student" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "course",
      title: "Course",
      type: "reference",
      to: [{ type: "course" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amount",
      title: "Amount",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "paymentId",
      title: "Payment ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "enrolledAt",
      title: "Enrolled At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      courseTitle: "course.title",
      studentFirstName: "student.firstName",
      studentLastName: "student.lastName",
      amount: "amount",
      enrolledAt: "enrolledAt",
      studentImage: "student.profileImageUrl", 
    },
    prepare(selection) {
      const { studentFirstName, studentLastName, courseTitle, amount, enrolledAt, studentImage } = selection;
      return {
        title: `${studentFirstName} ${studentLastName}`,
        subtitle: `${courseTitle} | Amount: $${amount} | Enrolled on: ${new Date(enrolledAt).toLocaleDateString()}`,
        media: studentImage ? { asset: { _ref: studentImage } } : null, 
      };
    },
  },
});
