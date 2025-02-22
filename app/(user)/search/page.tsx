import searchCourses from "@/sanity/lib/courses/searchCourses";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
// searchParams from next.js
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  // query name courseQuery
  const courseQuery = await (await searchParams).courseQuery;
  console.log(courseQuery);

  if(!courseQuery || typeof courseQuery !== "string"){
   return redirect('/')
  }
const courses = await searchCourses(courseQuery)
console.log(courses, "courses")
  return <div>Search Param: {courseQuery}</div>;
};

export default SearchPage;
