import { ArticleCard } from "@/components/blog-post/ArticleCard";

import { Artsuport } from "@/components/svg/Artsuport";
import { Suport } from "@/components/svg/Suport";
import Link from "next/link";
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

  console.log(articles);
  // handleLoadomre => page+6
  return (
    <div className="container  flex-wrap flex ml-64 justify-center w-full  gap-5 ">
      <Suport />
      {articles.map((article) => {
        return (
          <Link href={`/blog-list/${article.id}`}>
            <ArticleCard article={article} />
          </Link>
        );
      })}
      {/* <button onClick={}>LoadMore</button> */}
      <Artsuport />
    </div>
  );
}
