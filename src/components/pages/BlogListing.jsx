import { ArticleCard } from "@/components/blog-post/ArticleCard";
import { Suport } from "@/components/svg/Suport";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogListing() {
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
    <div>
      <div className="container  flex-wrap flex ml-64  w-full  gap-5 ">
        <Suport />
        {articles.map((article) => {
          return (
            <div>
              <Link href={`/blog-list/${article.id}`}>
                <ArticleCard article={article} kye={article.id} />
                <div className="flex text-[#97989F] gap-3 ">
                  <img
                    src={article.user.profile_image_90}
                    className="rounded-full w-[36px] "
                  />
                  {article?.user.name}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center pt-10">
        <button
          className="border-2 border-grey-500 md:w-[123px] md:h-[48px]  rounded-lg"
          onClick={handlePerPage}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
