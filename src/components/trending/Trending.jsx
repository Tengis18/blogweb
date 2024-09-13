import { useEffect, useState } from "react";
import Link from "next/link";
import { TreandingCard } from "./TreandingCard";

export const Trending = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/latest?per_page=4`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-col  items-center pt-20 ">
      <div className="container mx-auto flex-col flex  ">
        <div className=" pl-40">
          <h1 className="text-[24px] font-bold ">Trending</h1>
        </div>
        <div className="container  flex  w-[1230px] h-[390px]  gap-5 ">
          {articles?.map((article) => {
            return (
              <Link href={`/blog-list/${article.id}`}>
                <TreandingCard article={article} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
