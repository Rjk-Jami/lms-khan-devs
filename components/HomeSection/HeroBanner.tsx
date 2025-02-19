const HeroBanner = () => {
  return (
    <div className="w-full relative ">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/15 dark:from-white/15 dark:to-black/40 "></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20  "></div>
      <div className="relative container mx-auto px-4 py-10 h-full flex flex-col justify-center">

        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground  to-foreground/80 bg-clip-text text-transparent">
            Expand Your Knowledge with Our Courses
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Discover a wide range of expert-led courses designed to help you
            expand your knowledge and enhance your skills. Whether you are
            looking to upskill, switch careers, or deepen your expertise, our
            courses provide the guidance and resources you need to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
