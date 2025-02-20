import CourseContainer from "@/components/CourseContainer/CourseContainer";
import HeroBanner from "@/components/HomeSection/HeroBanner";
import { Button } from "@/components/ui/button";


export default async function Home() {
  
  return (
    <div className=" min-h-screen">
      <HeroBanner></HeroBanner>
      <CourseContainer/>
      <Button>Click Me</Button>
    </div>
  );
}

