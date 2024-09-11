import { useEffect, useState } from "react";
import { LogoIcon } from "../svg/LogoIcon";
import Link from "next/link";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [articlesForSearch, setArticlesForSearch] = useState([]);

  const fetchSearchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };
  useEffect(() => {
    fetchSearchData();
  }, []);
  const filteredArticles = articlesForSearch?.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <main className=" w-full m-auto reltaive">
      <div className="container mx-auto pt-10  ">
        <div className=" container flex  items-cente justify-center">
          <LogoIcon />
          <div className="flex md:w-[854px] md:h-[36px]   ">
            <div className="w-[667px] h-[36px] flex gap-10 justify-center">
              <Link href={`/`}>
                <button>Home</button>
              </Link>
              <Link href={`/blog-list`}>
                <button>Blog</button>
              </Link>

              <Link href={`/contact-us`}>
                <button>Contact</button>
              </Link>
            </div>
            <div>
              <input
                type="text"
                className="border border-red-950 "
                onChange={handleInputChange}
              />
            </div>
            <SearchDropDwon
              searchValue={searchValue}
              filteredArticles={filteredArticles}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
const SearchDropDwon = ({ filteredArticles, searchValue }) => {
  filteredArticles.lenght = 5;
  return (
    <div
      className={`${
        searchValue ? "h-[200px]" : "h-0"
      } flex flex-col justify-end items-end gap-2 transition-all duration-200 overflow-hidden absolute `}
    >
      {filteredArticles?.map((article) => {
        return (
          <Link href={`blogs/${article.id}`}>
            <div>{article?.title}</div>;
          </Link>
        );
      })}
    </div>
  );
};
