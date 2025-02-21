import { CourseProgress } from "@/components/CourseProgress/CourseProgress";
import { Skeleton } from "@/components/ui/skeleton";
import { GetCoursesQueryResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// type safety
interface CourseCardProps {
  course: GetCoursesQueryResult[number];
  progress?: number;
  href: string;
}

const CourseCard = ({ course, progress, href }: CourseCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-x-1">
        <div className="relative h-52">
          {/* card image */}
          {course.image ? (
            <Image
              src={urlFor(course.image).url()}
              alt={course.title || "Course image"}
              fill
              className="object-fill"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center ">
              {/* if no card image, skeleton show up  */}
              <Skeleton className="w-full h-full " />
            </div>
          )}
          {/* course name */}
          <div className="absolute z-10 bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="rounded-full backdrop-blur-sm text-sm px-3 bg-black/50 text-white">
              {course?.category?.name}
            </span>
            {/* course price */}
            {"price" in course && typeof course.price === "number" && (
              <span className="rounded-full backdrop-blur-sm text-sm px-3 bg-black/50 text-white">
                {course?.price === 0 ? "Free" : `৳ ${course.price}`}
              </span>
            )}
          </div>
        </div>
        {/* course title */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2  group-hover:text-primary transition-colors duration-300 truncate">
            {course.title}
          </h3>
          {/* course description */}
          <p className="text-muted-foreground mb-2 line-clamp-2 flex-1">
            {course.description}
          </p>

          {/* instructor Details */}
          <div className="mt-2">
            <div className="flex items-center justify-between">
              {course.instructor && (
                <div className="flex items-center ">
                  <div className="relative h-8 w-8 ">
                    {/*instructor image */}
                    {course.instructor.photo ? (
                      <Image
                        src={urlFor(course.instructor.photo).url() || ""}
                        alt={course.title || "Course image"}
                        fill
                        className="rounded-full border-2 border-secondary"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center ">
                        {/* if no card image, skeleton show up  */}
                        <Skeleton className="w-full h-full rounded-full" />
                      </div>
                    )}
                  </div>
                  {/* instructor name */}
                  <span className="text-sm text-muted-foreground">
                    by {course.instructor.name}
                  </span>
                </div>
              )}
              <BookOpen className="h-4 w-4 text-muted-foreground"></BookOpen>
            </div>
          </div>

          {/* progress */}
          {progress !== undefined && (
            <CourseProgress progress={progress}
            variant="default"
            size="sm"
            label="Course Progress"
             />
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
