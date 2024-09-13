import Link from "next/link";

export const SearchDropDwon = ({ filteredArticles, searchValue }) => {
  filteredArticles.lenght = 5;
  return (
    <div
      className={`${
        searchValue ? "h-[200px]" : "h-0"
      } flex w-[180px] flex-col justify-end rounded-[5px] items-end transition-all duration-200 overflow-hidden absolute top-[25px] right-2 bg-white border border-blue-600 z-40`}
    >
      {filteredArticles?.map((article) => {
        return (
          <Link href={`/blog-list/${article.id}`}>
            <div className="border-b border-red-300">{article?.title}</div>
          </Link>
        );
      })}
    </div>
  );
};
