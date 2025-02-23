import { defineQuery } from "groq";
import { sanityFetch } from "../live";

const getCourseBySlug = async (slug: string) => {
  const getCoursesBySlugQuery = defineQuery(`
    *[_type=="course" && slug.current == $slug][0] {
      ...,
      "category": category->{...},
      "instructor": instructor->{...},
      "moduleOfCourse": moduleOfCourse[]->{
        ...,
        "lessons": lessons[]->{
          ...
        }
      }
    }
  `);

  const course = await sanityFetch({
    query: getCoursesBySlugQuery,
    params: { slug },
  });

  return course.data;
};

export default getCourseBySlug;
