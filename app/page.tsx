import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsLists from "./NewsLists";
import response from "../response.json";

async function Homepage() {
  const news: NewsResponse =
    response || (await fetchNews(categories.join(",")));
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(news);

  return (
    <div>
      {/* news list */}
      <NewsLists news={news} />
    </div>
  );
}

export default Homepage;
