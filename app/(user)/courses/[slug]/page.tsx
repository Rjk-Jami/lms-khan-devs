import getCourseBySlug from "@/sanity/lib/courses/getCourseBySlug";
import { urlFor } from "@/sanity/lib/image";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

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

  return <div className="min-h-screen">
    <div className="relative h-[50dvh] w-full">
        {
            course?.image &&(
                <Image src={urlFor(course.image).url() || ""} alt={course.title || "Course title" } fill  className=" object-cover" priority/>
            )
        }
    </div>
  </div>;
};

export default CoursePage;
