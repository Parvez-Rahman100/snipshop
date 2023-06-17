"use client";
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from "react-icons/bs";

const TrendProducts = () => {
  return (
    <div className=" mt-32 container mx-auto">
      <h1 className=" font-bold text-4xl text-center">
        Shop Our Trending Products
      </h1>
      <p className="text-center font-normal text-lg mt-6 mb-[46px]">
        Life is hard enough already. Let us make it a little easier.
      </p>
      <div className="relative">
        <div className="flex justify-center items-center">
          <p className=" ml-[18px] font-medium text-xs border-b-2 border-[#041318]">
            Fashion
          </p>
          <p className=" ml-[18px] font-medium text-xs">Technology</p>
          <p className=" ml-[18px] font-medium text-xs">Interiors</p>
          <p className=" ml-[18px] font-medium text-xs">Food and Drink</p>
        </div>
        <div className="absolute top-0 right-0 flex justify-center items-center ">
          <BsArrowLeftCircle size={18} className="bg-white text-black mr-2 " />
          <BsFillArrowRightCircleFill size={18} className="text-[#2B2B2B]" />
        </div>
      </div>
    </div>
  );
};

export default TrendProducts;
