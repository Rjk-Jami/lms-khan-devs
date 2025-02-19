import HeroBanner from "@/components/HomeSection/HeroBanner";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <HeroBanner></HeroBanner>
      <Button>Click Me</Button>
    </div>
  );
}

