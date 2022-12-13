"use client";

import { useRouter } from "next/navigation";
import React from "react";
type Props = {
  article: Article;
};
function ReadMoreButton({ article }: Props) {
  const router = useRouter();
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className=" bg-cyan-600 h-10 rounded-b-full dark:text-gray-900 hover:bg-cyan-400 uppercase text-[12px] tracking-widest"
    >
      read more
    </button>
  );
}

export default ReadMoreButton;
