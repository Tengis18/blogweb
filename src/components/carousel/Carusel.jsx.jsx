import { Button } from "../svg/Button";
import { LeftButton } from "../svg/LeftButton";
import React, { useState } from "react";

export const Carucel = () => {
  const slides = [
    {
      url: "https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg",
    },
    {
      url: "https://www.ittogo.co.uk/wp-content/uploads/2022/03/Gaming-PC-678x381.jpg",
    },
    {
      url: "https://m.economictimes.com/thumb/height-450,width-600,imgsize-74560,msid-104220855/gaming-computer-set.jpg",
    },
    {
      url: "https://www.slashgear.com/img/gallery/12-important-things-to-consider-before-buying-a-gaming-pc/intro-1654286079.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url}) ` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="flex pt-72">
          <div className="md:w-[598px] md:h-[252px] bg-white absolute ml-[11px]   rounded-[12px]">
            <div className="mt-10 ml-5">
              <div className="px-[10px] py-[4px] bg-[#4B6BFB] md:w-[97px] md:h-[28px]  text-center rounded-[6px]">
                <h1 className="text-[14px] font-[500] text-center text-white">
                  Technology
                </h1>
              </div>
              <h1 className="text-[36px] font-bold flex">
                Grid system for better Design User Interface
              </h1>
              <h1 className=" font-bold text-[16px] pt-[24px] text-[#97989F]">
                August 20, 2022
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-14">
        <div
          className=" top-[-100%] -translate-x-0 translate-y-[-100%] "
          onClick={prevSlide}
        >
          <Button />
        </div>
        <div
          className="  abslute top-[-100%] -translate-x-0 translate-y-[-100%]"
          onClick={nextSlide}
        >
          <LeftButton />
        </div>
      </div>
    </div>
  );
};
