import { ArticleCard } from "@/components/blog-post/ArticleCard";
import { useEffect, useState } from "react";

export default function BlogListing() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(12);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  // handleLoadomre => page+6
  return (
    <div className="container  flex-wrap flex ml-64 justify-center w-full  gap-5 ">
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}

      {/* <button onClick={}>LoadMore</button> */}
    </div>
  );
}
