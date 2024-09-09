import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { useEffect, useState } from "react";
import { ArticleCard } from "../blog-post/ArticleCard";
import { Carucel } from "../carousel/Carusel.jsx";
import { TrendingCard } from "../trending/Trending";
import { ArticalSuport } from "../svg/ArticalSuport";
import { Artsuport } from "../svg/Artsuport";

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
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Carucel />
      <TrendingCard />
      <ArticalSuport />
      <div className="container flex flex-wrap justify-between gap-5 max-w-[1280px]">
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </div>
      <Artsuport />
      <Footer />
    </div>
  );
};
