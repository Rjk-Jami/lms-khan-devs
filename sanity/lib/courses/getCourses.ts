import { defineQuery } from "groq";
import { sanityFetch } from "../live";

const getCourses = async () => {
  // get all course function
  const getCoursesQuery = defineQuery(`*[_type=="course"]{
        // ...,
        // "slug":slug.current,
        // "category": category->{...},
        // "instructor": instructor->{...},
        
     }`);

  const course = await sanityFetch({
    query: getCoursesQuery,
  });

  return course.data;
};

export default getCourses;
