import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsLists from "../../NewsLists";

type Props = {
  params: { category: Category };
};
async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);
  return (
    <div>
      <h1 className=" title">{category}</h1>
      <NewsLists news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
