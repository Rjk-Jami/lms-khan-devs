import CourseCard from "@/components/CourseContainer/CourseCard/CourseCard";
import searchCourses from "@/sanity/lib/courses/searchCourses";
import { Search } from "lucide-react";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
// searchParams from next.js
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  // get search params as courseQuery
  const courseQuery = await (await searchParams).courseQuery;
  console.log(courseQuery);
  // if to value redirect
  if (!courseQuery || typeof courseQuery !== "string") {
    return redirect("/");
  }
  // decodeURIComponent =courseQuery so that, get actual string
  const decodedCourseQuery = decodeURIComponent(courseQuery);

  // get Courses from searchCourses function
  const courses = await searchCourses(decodedCourseQuery);
  console.log(courses, "courses");
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* display search result amount with keywords */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Search className="h-8 w-8 text-primary"></Search>
          <div className="">
            <h1 className="text-3xl font-bold">Search Results</h1>
            <p className="text-muted-foreground">
              Found {courses.length} Result{courses.length === 1 ? "" : "s"} for
              &quot;{decodedCourseQuery}&quot;
            </p>
            <p></p>
          </div>
        </div>
        {/* if no results found */}
        {courses.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">No Courses Found!</h2>
            <p className="text-muted-foreground mb-8">
              Try with different keywords
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses?.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
                
                href={`/courses/${course.slug}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
