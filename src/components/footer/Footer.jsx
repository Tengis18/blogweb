import { BigLogo, Face, In, Insdaa, Twi } from "../svg/FooterIcn";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full m-auto bg-[#F6F6F7] h-[495px] mt-20 ">
      <div div className="container mx-auto ">
        <div className="md:w-[1215px] md:h-[350px] flex gap-10 justify-center pl-20   pt-20">
          <div className="md:w-[289px] md:h-[300px] ">
            <h1 className="text-[18px] font-bold">About</h1>
            <p className="text-[#696A75] mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <h1 className="mt-7 text-[#696A75]">Email : info@jstemplate.net</h1>
            <h1 className="mt-2  text-[#696A75]">Phone : 880 123 456 789</h1>
          </div>

          <div className="flex flex-col items-center justify-center  md:w-[521px] md:h-[88px]">
            <button>Home</button>
            <button className="mt-2">Blog</button>
            <button className="mt-2">Contact</button>
          </div>
          <div className="md:w-[144px] md:h-[16px] flex items-center justify-center gap-5">
            <Face />
            <Twi />
            <Insdaa />
            <In />
          </div>
        </div>
        <div className="md:w-[1216px] md:h-[95px] flex pl-20 pt-10">
          <div className="md:w-[231px] md:h-[54px] ml-[10px]">
            <BigLogo />
          </div>
          <div className="md:w-[921px] md:h-[24px] flex justify-end gap-[20px]">
            <button className="flex">
              Terms of Use
              <p className="text-[#E8E8EA] ml-[10px]">|</p>
            </button>
            <button className="flex">
              Privacy Policy
              <p className="text-[#E8E8EA] ml-[10px]">|</p>
            </button>
            <button>Cookie Policy </button>
          </div>
        </div>
      </div>
    </div>
  );
};
