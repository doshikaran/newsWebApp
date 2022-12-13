"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className=" max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        placeholder=" SEARCH HERE"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className=" flex-1 w-full h-14 rounded-md placeholder-gray-500 placeholder:text-xs outline-none bg-transparent text-gray-700 dark:text-cyan-400"
      />
      <button
        disabled={!input}
        type="submit"
        className=" text-cyan-600 disabled:text-gray-700 uppercase tracking-wider text-xs cursor-pointerrounded-full"
      >
        search
      </button>
    </form>
  );
}

export default SearchBox;
