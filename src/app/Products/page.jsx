"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className=" text-6xl font-spectral font-bold text-center my-32">
        Our All Products
      </h1>
      <div className=" grid lg:grid-cols-3 grid-cols-col gap-10  ">
        {products.map((product, index) => {
          return (
            <div key={index} className="card  h-96 bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  width={400}
                  height={400}
                  src={product?.images[0]}
                  alt="product"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title mt-3">{product?.title}</h2>
                <p className="mt-3">{product?.brand}</p>
                <div className="card-actions">
                  <p className=" mt-3">{product?.price}</p>
                  <p className=" mt-3">{product?.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        href="/"
        className=" font-bold p-3 flex justify-center mt-14 mb-2 bg-emerald-500 text-white w-2/4 mx-auto  border-8 "
      >
        Back To Home
      </Link>
    </div>
  );
};

export default Products;
