import React, { useState } from "react";
import { Button } from "../svg/Button";
import { LeftButton } from "../svg/LeftButton";

function Slide() {
  const slides = [
    {
      url: `https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg`,
    },
    {
      url: `https://www.ittogo.co.uk/wp-content/uploads/2022/03/Gaming-PC-678x381.jpg`,
    },
    {
      url: `https://m.economictimes.com/thumb/height-450,width-600,imgsize-74560,msid-104220855/gaming-computer-set.jpg`,
    },
    {
      url: `https://www.slashgear.com/img/gallery/12-important-things-to-consider-before-buying-a-gaming-pc/intro-1654286079.jpg`,
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
    <div className="max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative">
      <div
        style={{ backgroundImage: `url(${slides[0].url}) ` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div
          style={{ backgroundImage: `url (${slides[0]?.url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          <div className="abslute bottom-[100%] -translate-z-0 translate-y-[-100%] ">
            <Button onClick={prevSlide} />
          </div>
          <div className="abslute bottom-[100%] -translate-z-0 translate-y-[-100%] ">
            <LeftButton onClick={nextSlide} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slide;
