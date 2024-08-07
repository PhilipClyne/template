import React, { useState } from "react";
import banner1 from "../assets/Default_A_lone_knight_in_dark_impressive_armor_walks_across_a_1.jpg";
import banner2 from "../assets/Default_A_lone_knight_in_dark_impressive_armor_walks_across_a_3 (1).jpg";
import banner3 from "../assets/Default_A_lone_knight_in_dark_impressive_armor_walks_across_a_3.jpg";

const BannerList = [
  { id: 1, img: banner1 },
  { id: 2, img: banner2 },
  { id: 3, img: banner3 },
];

const Sliding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? BannerList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === BannerList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full  mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {BannerList.map((banner) => (
          <div key={banner.id} className="w-full flex-shrink-0">
            <img
              src={banner.img}
              alt={`Slide ${banner.id}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white px-4 py-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white px-4 py-2"
      >
        Next
      </button>
    </div>
  );
};

export default Sliding;
