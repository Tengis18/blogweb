import Link from "next/link";
export const ArticalSuport = () => {
  return (
    <div className="w-full m-auto">
      <div className="container mx-auto  mt-32  ">
        <div className=" pl-40 mt-9 flex">
          <div className="w-[500px]">
            <h1 className="text-[24px] font-bold">All Blog Post</h1>

            <button className="text-[#D4A373] mt-5 "> All</button>
            <button className="text-[#495057] ml-5">Deign</button>
            <button className="text-[#495057] ml-5">Travel</button>
            <button className="text-[#495057] ml-5">Fashion</button>
            <button className="text-[#495057] ml-5">Technology</button>
            <button className="text-[#495057] ml-5">Branding</button>
          </div>
          <div className="flex justify-end mr-40  pt-10 text-end w-[860px]">
            <Link href={`/blog-list`}>
              <button className="text-[#495057] ">View All</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
