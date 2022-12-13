import React from "react";
import { notFound } from "next/navigation";
import Article from "../Article";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound;
  }
  const article: Article = searchParams;

  return (
    <article>
      <section className=" flex flex-col lg:flex-grow pb-24 px-0 lg:px-10">
        {article.image && (
          <img
            className=" h-40 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.image}
            alt={article.title}
          />
        )}

        <div className=" px-10">
          <h1 className=" px-0 underline pb-2 title">{article.title}</h1>

          <div className=" flex divide-x-2 space-x-4">
            <h2 className=" tracking-widest text-[12px] font-semibold">
              Author : {article.author || "Anonymous"}
            </h2>
            <h2 className=" tracking-widest text-[12px] font-semibold pl-5">
              Source : {article.source}
            </h2>
            <p className=" tracking-widest text-[12px] pl-5">
              {article.published_at}
            </p>
          </div>

          <p className=" pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
