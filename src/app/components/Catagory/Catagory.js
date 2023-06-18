"use client";
import catagory from "@/catagory";
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from "react-icons/bs";
import Cat from "./Cat";

const Catagory = () => {
  return (
    <div className="container mx-auto mt-[172px]">
      <h1 className=" font-bold text-4xl">Shop by Category</h1>

      <div className="relative mb-[76px]">
        <div>
          <p className=" font-normal text-lg text-[#000002] mt-6">
            Life is hard enough already. Let us make it a little easier.
          </p>
        </div>
        <div className="absolute top-0 right-0 flex justify-center items-center ">
          <a href="#slide1">
            <BsArrowLeftCircle
              size={18}
              className="bg-white text-black mr-2 "
            />
          </a>
          <a href="#slide2">
            <BsFillArrowRightCircleFill size={18} className="text-[#2B2B2B]" />
          </a>
        </div>
      </div>
      {/* Cards Here  */}
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-20"
        >
          {catagory.map((cat, index) => (
            <Cat key={index} cat={cat} />
          ))}
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-20"
        >
          {catagory.map((cat, index) => (
            <Cat key={index} cat={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagory;
