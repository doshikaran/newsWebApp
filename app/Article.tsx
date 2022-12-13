import React from "react";
import LiveTime from "./LiveTime";
import ReadMoreButton from "./ReadMoreButton";
type Props = {
  article: Article;
};
function Article({ article }: Props) {
  return (
    <article className=" bg-slate-100 dark:bg-slate-900 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className=" h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}

      <div className=" flex-1 flex flex-col">
        <div className=" flex-1 flex flex-col p-5">
          <h2 className=" font-extrabold font-serif">{article.title}</h2>
          <section className=" mt-2 flex-1">
            <p className=" text-sm line-clamp-6">{article.description}</p>
          </section>
          <footer className=" text-[10px] ml-auto text-right tracking-wider pt-5 flex space-x-3 itali text-gray-500">
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>

        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;
