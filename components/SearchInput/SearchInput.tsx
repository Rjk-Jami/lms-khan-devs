"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full flex-1 max-w-[300px]"
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search course.."
        className=" w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></Search>
    </form>
  );
};

export default SearchInput;
