import { generatMonth } from "../util/generatMonth";

export const ArticleCard = ({ article }) => {
  const publishedDate = new Date(article.published_at);
  console.log("publishedDate", publishedDate);
  return (
    <div className="w-[400px] h-[475px] border-[#E8E8EA] rounded-xl border p-4 flex flex-col justify-between mt-20">
      {/* <div>
        <h1 className="text-[24px] font-bold pl-40">All Blog Post</h1>
        <div className=" pl-40 mt-9 flex">
          <div className="w-[500px]">
            <button className="text-[#D4A373] "> All</button>
            <button className="text-[#495057] ml-5">Deign</button>
            <button className="text-[#495057] ml-5">Travel</button>
            <button className="text-[#495057] ml-5">Fashion</button>
            <button className="text-[#495057] ml-5">Technology</button>
            <button className="text-[#495057] ml-5">Branding</button>
          </div>
          <div className="flex justify-end mr-40 text-end w-[860px]">
            <button className="text-[#495057] ">View All</button>
          </div>
        </div>
      </div> */}
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
        {publishedDate.getFullYear()}-{generatMonth(publishedDate.getMonth())}-
        {publishedDate.getDay()}
      </p>
    </div>
  );
};
