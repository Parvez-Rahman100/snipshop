"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BsArrowRight,
  BsArrowRightCircle,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import Pre from "./Pre";

const PreOrder = () => {
  const [preProduct, setPreProduct] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/fragrances")
      .then((res) => res.json())
      .then((data) => setPreProduct(data));
  }, []);

  return (
    <div className="container mx-auto mt-48">
      <div className="relative">
        <h1 className="font-bold font-spectral text-4xl text-center">
          Featured Product For <br /> Pre-Order
        </h1>
        <Link
          href="/Products"
          className=" absolute top-[10px] hover:bg-[#1E66FF] ease-in-out duration-200 rounded-2xl hover:text-white p-2 font-medium text-base right-0 flex justify-center items-center"
        >
          <p>Discover Our Products</p>
          <BsArrowRight className="ml-3" />
        </Link>
      </div>

      {/* cards here  */}

      <div className="carousel w-full">
        <div id="preOrder1" className="mt-16 carousel-item relative w-full">
          <div className="grid lg:grid-cols-4 gap-10 grid-cols-1">
            <div className="flex justify-center items-center">
              <a href="#preOrder1">
                <BsFillArrowLeftCircleFill size={30} className="mr-2" />
              </a>
              <a href="#preOrder2">
                <BsArrowRightCircle size={30} />
              </a>
            </div>
            {preProduct?.products
              ?.slice(0, 3)
              .reverse()
              .map((pre, index) => (
                <Pre key={index} pre={pre} />
              ))}
          </div>
        </div>
        <div id="preOrder2" className="mt-16 carousel-item relative w-full">
          <div className="grid lg:grid-cols-4 gap-10 grid-cols-1">
            <div className="flex justify-center items-center">
              <a href="#preOrder1">
                <BsFillArrowLeftCircleFill size={30} className="mr-2" />
              </a>
              <a href="#preOrder2">
                <BsArrowRightCircle size={30} />
              </a>
            </div>
            {preProduct?.products
              ?.slice(0, 3)
              .reverse()
              .map((pre, index) => (
                <Pre key={index} pre={pre} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
