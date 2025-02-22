import getCourseBySlug from "@/sanity/lib/courses/getCourseBySlug";
import { urlFor } from "@/sanity/lib/image";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// typescript interface
interface coursePageProps {
  params: Promise<{ slug: string }>;
}

const CoursePage = async ({ params }: coursePageProps) => {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  const { userId } = await auth();

  //todo : implement isEnrolledCourse

  if (!course) {
    return (
      <div className="container mx-auto px-4 mt-16">
        <h1 className="text-2xl  font-bold text-center">No Course Found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen ">
      <div className="relative h-[60dvh] w-full">
        {/* hero section */}
        {course?.image && (
          <Image
            src={urlFor(course.image).url() || ""}
            alt={course.title || "Course title"}
            fill
            className=" object-cover"
            priority
          />
        )}
        {/* black bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/60"></div>
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-12">
          {/* go home button */}
          <Link
            href={"/"}
            prefetch={false}
            className="flex items-center text-white hover:text-white/90 transition-colors w-fit"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Courses
          </Link>

          <div className="text-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="">
                <span className="px-3 py-1 text-sm backdrop-blur-sm bg-white/10 rounded-full">
                  {course.category?.name}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {course.title}
                </h1>
                <p className="text-sm md:text-base text-white/90 max-w-2xl">
                  {course.description}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 md:max-w-[300px] rounded-lg ">
                <div className="text-3xl font-bold mb-4">
                  {course.price === 0 ? "Free" : `৳${course.price}`}
                </div>

                {/* enrollment Button */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
