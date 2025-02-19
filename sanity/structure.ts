import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Admin Dashboard")
    // S.documentTypeListItems()
    .items([
      S.listItem()
        .title("Course Content")
        .child(
          S.documentTypeList("course")
            .title("Courses")
            .child((courseId) => S.list().title("Course Options").items([
              S.listItem().title("Edit Course Content").child(S.document().schemaType("course").documentId(courseId)),
              S.listItem().title("View Student").child(S.documentList().title("Course Enrollment").filter(`_type == "enrollment" && course._ref == $courseId`).params({courseId}))
            ]))
        ),
    ]);
