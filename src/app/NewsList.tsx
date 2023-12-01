import { NewsResponse } from "../../typings";
import Article from "./Article";

type Props = {
  news: NewsResponse;
};

const NewsList = ({ news }: Props) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.news?.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
};

export default NewsList;
