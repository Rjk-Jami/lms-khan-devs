import getCourses from "@/sanity/lib/courses/getCourses";

const CourseContainer = async () => {
  const courses = await getCourses();

  return (
    <div className="container m-auto px-4">
      <div className="flex items-center gap-4 py-8">
        <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0"></div>
        <span className="text-sm font-semibold text-muted-foreground">
          Featured Courses
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {courses.map((course)=>(
            <p key={course._id}>{course.title}</p>
        ))}
      </div>
    </div>
  );
};

export default CourseContainer;
