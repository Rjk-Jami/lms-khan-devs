import { Skeleton } from "@/components/ui/skeleton";
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
console.log(course)
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
      {/* hero section start */}
      <div className="relative h-[65dvh] md:h-[60dvh]  w-full">
        {course?.image ? (
          <Image
            src={urlFor(course.image).url() || ""}
            alt={course.title || "Course title"}
            fill
            className=" object-cover"
            priority
          />
        ) : (
          <Skeleton className="w-full h-full " />
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
          {/* course Details */}
          <div className="text-white mt-3">
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
              <div className="bg-white/10 backdrop-blur-sm md:p-6 p-4 md:max-w-[300px]  rounded-lg ">
                <div className="md:text-3xl text-2xl font-bold mb-2">
                  {course.price === 0 ? "Free" : `৳${course.price}`}
                </div>

                {/* enrollment Button */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-6 mb-4">
              <h2 className="text-2xl font-bold mb-4">Course Content</h2>
            </div>
            <div className="">
              {course.}
              {/* {course.modules?.map((module, moduleIndex)=>(
                <div key={moduleIndex} className="">
                  <h3>Module {moduleIndex + 1}: {module.title}</h3>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
