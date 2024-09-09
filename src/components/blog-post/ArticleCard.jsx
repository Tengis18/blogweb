import { generatMonth } from "../util/generatMonth";

export const ArticleCard = ({ article }) => {
  const publishedDate = new Date(article.published_at);
  console.log("publishedDate", publishedDate);

  return (
    <div>
      <div className="w-[400px] h-[475px] border-[#E8E8EA] rounded-xl border p-4 flex flex-col justify-between mt-10">
        <div className="flex flex-col gap-4">
          <div
            style={{
              backgroundImage: `url(${article.cover_image})`,
              width: "100%",
              height: "240px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "6px",
            }}
          ></div>
          <div className="w-[100px] h-[30px] bg-[#4B6BFB0D] flex justify-center items-center rounded-md text-[#4B6BFB]">
            {article.tag_list[0]}
          </div>
          <div className="overflow-hidden h-[100px]">
            <p className="text-2xl font-semibold text-ellipsis ">
              {article.description}
            </p>
          </div>
        </div>

        <p className=" text-[#97989F]">
          {publishedDate.getFullYear()}-{generatMonth(publishedDate.getMonth())}
          -{publishedDate.getDay()}
        </p>
      </div>
    </div>
  );
};
