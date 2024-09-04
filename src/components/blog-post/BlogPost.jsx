import { Button } from "../svg/Button"
import { LeftButton } from "../svg/LeftButton"

export const BlogPostCard = () => {
    return (<div className="w-full m-auto pt-[100px] flex flex-col justify-center" >
      <div className="container mx-auto"> 
        <div className="flex justify-center flex-col items-center">
        <div className="relative flex items-end ">
            <div className="md:w-[598px] md:h-[252px] bg-white absolute ml-[11px] mb-[13px] flex  justify-start rounded-[12px]">
              <div className="mt-10 ml-5">
                   <div className="px-[10px] py-[4px] bg-[#4B6BFB] md:w-[97px] md:h-[28px]  text-center rounded-[6px]">
                       <h1 className="text-[14px] font-[500] text-center text-white"> Technology</h1>
                    </div>
                    <h1 className="text-[36px] font-bold flex">Grid system for better Design User Interface</h1>
                    <h1 className=" font-bold text-[16px] pt-[24px] text-[#97989F]">August 20, 2022</h1>
              </div>
            </div>
            <div className="container bg-center md:w-[1216px] md:h-[600px] rounded-xl bg-[url('https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat"> </div>
        </div>
       </div> 
       <div className="flex justify-end mr-40 gap-[9px] pt-[15px]">
            <button>
               <Button/>
            </button>
            <button>
                <LeftButton/>
            </button>
            </div>
            </div>
      </div>
    )}