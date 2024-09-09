export const Contact = () => {
  return (
    <div className="w-full m-auto pt-20 ">
      <div className="container mx-auto flex justify-center ">
        <div className="w-[895px] h-[895px] flex flex-col pl-32 pt-20">
          <div className="w-[624px] h-[163px]">
            <h1 className="text-[36px] font-bold">Contact Us</h1>
            <p className="text-[16px] text-[#696A75] mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="w-[638px] h-[153px]  pt-10">
            <button className="w-[294px] h-[133px] rounded-md drop-shadow-md	bg-[#FFFFFF]">
              <h1 className="text-[24px] font-bold w-[94px] h-[40px]  ml-4">
                Address
              </h1>
              <p className="text-[18px] text-[#696A75]  w-[260px] h-[52px]">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </button>
            <button className="w-[294px] h-[133px] rounded-md drop-shadow-md ml-10	bg-[#FFFFFF]">
              <h1 className="text-[24px] font-bold w-[94px] h-[40px]  ml-4">
                Contact
              </h1>
              <p className="text-[18px] text-[#696A75] w-[160px] h-[52px]">
                313-332-8662 info@email.com
              </p>
            </button>
          </div>

          <div className="w-[643px] h-[440px] pt-10 pl-10 bg-[#F6F6F7] rounded-md mt-20">
            <h1 className="text-[18px] font-bold">Leave a Message</h1>
            <input
              type="text"
              className="bg-[#FFFFFF] drop-shadow-sm text-center rounded-md mt-5"
              style={{ width: "225px", height: "35px" }}
              placeholder="Your Name"
            />
            <input
              type="text"
              className="bg-[#FFFFFF] drop-shadow-sm text-center rounded-md ml-8 "
              style={{ width: "225px", height: "35px" }}
              placeholder="Your Email"
            />
            <div className="pt-5 gap-3 items-center rounded-md bg-[#F4F4F5] flex">
              <input
                type="text"
                className="bg-[#FFFFFF]  drop-shadow-sm text-center rounded-md"
                style={{ width: "478px", height: "35px" }}
                placeholder="Subject"
              />
            </div>

            <div className="pt-5  rounded-md bg-[#F4F4F5]">
              <input
                type="text"
                className="bg-[#FFFFFF]  drop-shadow-sm rounded-md"
                style={{ width: "478px", height: "134px" }}
                placeholder="Write a message"
              />
            </div>

            <div className=" text-center pt-2 mt-5 bg-[#4B6BFB]  w-[130px] h-[40px]   rounded-[6px]">
              <h1 className="text-[14px] font-[500] text-center text-white">
                {" "}
                Send Message
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
