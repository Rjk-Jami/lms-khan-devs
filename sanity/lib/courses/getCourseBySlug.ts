import { defineQuery } from "groq";
import { sanityFetch } from "../live";

const getCourseBySlug = async (slug: string) => {
  // get all course function
  const getCoursesBySlugQuery =
    //   query
    defineQuery(`*[_type=="course" && slug.current ==$slug] [0]{
          ...,
          
          "category": category->{...},
          "instructor": instructor->{...},
          "modules": modules->{..., "lesson":lesson->{...}
          }
       }`);

  const course = await sanityFetch({
    query: getCoursesBySlugQuery,
    params: { slug },
  });

  return course.data;
};

export default getCourseBySlug;
