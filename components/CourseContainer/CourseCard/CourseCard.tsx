import { Skeleton } from "@/components/ui/skeleton";
import { GetCoursesQueryResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// type safty
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
          {course.image ? (
            <Image
              src={urlFor(course.image).url()}
              alt={course.title || "Course image"}
              fill
              className="object-fill"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center ">
              <Skeleton className="w-full h-full " />
            </div>
          )}
          <div className="absolute z-10 bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="rounded-full backdrop-blur-sm text-sm px-3 bg-black/50 text-white">
              {course?.category?.name}
            </span>
            {"price" in course && typeof course.price === "number" && (
              <span className="rounded-full backdrop-blur-sm text-sm px-3 bg-black/50 text-white">
                {course?.price === 0 ? "Free" : `৳ ${course.price}`}
              </span>
            )}
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold mb-2  group-hover:text-primary transition-colors duration-300 truncate">
            {course.title}
          </h3>
          <p className="text-muted-foreground mb-2 line-clamp-2 flex-1">
            {course.description}
          </p>
          {progress !== undefined && <div className=""></div>}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
