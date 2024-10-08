import { useEffect, useState } from "react";
import { ArticleCard } from "../blog-post/ArticleCard";
import { Carucel } from "../carousel/Carusel.jsx";
import { Trending } from "../trending/Trending";
import { ArticalSuport } from "../svg/ArticalSuport";
import Link from "next/link";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(9);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePerPage = () => {
    setPage(page + 6);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <Carucel />
      <Trending />
      <ArticalSuport />
      <div>
        <div className="container  flex-wrap flex ml-64  w-full  gap-5 ">
          {articles.map((article) => {
            return (
              <Link
                href={`/blog-list/${article.id}`}
                key={article.id.description}
              >
                <ArticleCard article={article} key={article.description} />
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center pt-10">
          <button
            className="border-2 border-grey-500 md:w-[123px] md:h-[48px] rounded-lg"
            onClick={handlePerPage}
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};
