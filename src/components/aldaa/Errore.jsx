import { LineIcon } from "../svg/Line";
import Link from "next/link";

export const Errore = () => {
  return (
    <div className="w-full m-auto ">
      <div
        div
        className="container mx-auto h-[350px] flex justify-center mt-40"
      >
        <div className="w-[642px] h-[208px]  flex justify-center items-center ">
          <div>
            <h1 className="text-[72px]">404</h1>
          </div>
          <div className="ml-20">
            <LineIcon />
          </div>
          <div className="pl-20">
            <h1 className="text-[24px] font-bold">Page Not Found</h1>
            <p className="text-[18px] mt-5">
              We're sorry, This page is unknown or does not exist the page you
              are looking for
            </p>
            <div className="px-[10px] py-[4px] bg-[#4B6BFB] w-[130px] h-[40px] mt-3 text-center rounded-[6px]">
              <Link href={`/`}>
                <button className="text-[14px] font-[500] text-center text-white">
                  Back to home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
