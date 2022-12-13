import fetchNews from "../../lib/fetchNews";
import NewsLists from "../NewsLists";
type Props = {
  searchParams?: { term: string };
};

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    "general, business, sports, technology",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className=" title">Result for : {searchParams?.term}</h1>
      <NewsLists news={news} />
    </div>
  );
}

export default SearchPage;
