"use client";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

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
          <p>Fashion</p>
          <p>Technology</p>
          <p>Interiors</p>
          <p>Food and Drink</p>
        </div>
        <div className="absolute top-0 right-0">
          <BsFillArrowLeftCircleFill />
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </div>
  );
};

export default TrendProducts;
