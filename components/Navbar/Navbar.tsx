import React from "react";
import { ModeToggle } from "../DarkThemeController/DarkThemeController";
import Link from "next/link";
import { BookMarkedIcon, BookOpen } from "lucide-react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SearchInput from "../SearchInput/SearchInput";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex  items-center justify-between">
          {/* left */}
          <div className="flex items-center gap-4">
            <Link
              href={"/"}
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <BookOpen className="h-6 w-6 text-primary"></BookOpen>
              <span className="text-sm sm:text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                KhanDevs
              </span>
            </Link>
            <SearchInput></SearchInput>
          </div>
          {/* right */}
          <div className=" flex items-center space-x-2 md:space-x-4">
            <nav>
              {/* className="flex items-center text-sm space-x-2 text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-2 md:py-2" */}
              <SignedIn>
                <Link href={"/my-courses"}>
                  <Button variant={"outline"}>
                    <BookMarkedIcon className="h-4 w-4 text-primary"></BookMarkedIcon>
                    <span className="hidden md:block">My Courses</span>
                  </Button>
                </Link>
              </SignedIn>
            </nav>
            <ModeToggle></ModeToggle>

            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button className="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
