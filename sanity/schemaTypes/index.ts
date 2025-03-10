import { type SchemaTypeDefinition } from "sanity";
import student from "./student";
import category from "./category";
import course from "./course";
import enrollment from "./enrollment";
import instructor from "./instructor";
import lesson from "./lesson";
import lessonCompletion from "./lessonCompletion";
import moduleOfCourse from "./moduleOfCourse";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    student,
    category,
    course,
    enrollment,
    instructor,
    lesson,
    lessonCompletion,
    moduleOfCourse,
  ],
};
