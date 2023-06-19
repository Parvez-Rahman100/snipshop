import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import brand1 from "../../../assets/brand1.png";
import brand2 from "../../../assets/brand2.svg";
import brand3 from "../../../assets/brand3.png";
import brand4 from "../../../assets/brand4.png";
import brand5 from "../../../assets/brand5.svg";
import brand6 from "../../../assets/brand6.svg";

const Brands = () => {
  return (
    <div className="container mx-auto pt-24 bg-[#F4FCFF]">
      <div className="lg:flex flex-col lg:flex-row justify-evenly items-center">
        <div className="brand bg-[#e4dffe41] rounded-2xl w-1/4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-14 mx-auto lg:mx-0">
          <Image
            src={brand1}
            alt="brands logo"
            className=" bg-white p-4 shadow-xl rounded-2xl w-28 h-24"
          />
          <Image
            src={brand2}
            alt="brands logo"
            className=" bg-white p-4 shadow-xl rounded-2xl w-28 h-24"
          />
          <Image
            src={brand3}
            alt="brands logo"
            className=" bg-white p-4 shadow-xl rounded-2xl w-28 h-24"
          />
          <Image
            src={brand4}
            alt="brands logo"
            className=" bg-white p-4 shadow-xl rounded-2xl w-28 h-24"
          />
          <Image
            src={brand5}
            alt="brands logo"
            className=" bg-white p-4 shadow-xl rounded-2xl w-28 h-24"
          />
          <Image
            src={brand6}
            alt="brands logo"
            className=" bg-white p-4 shadow-xl rounded-2xl w-28 h-24"
          />
        </div>
        <div>
          <h1 className="font-bold text-4xl mb-6">
            Explore Most Popular Brands
          </h1>
          <p className="font-normal text-lg text-[#585858] mb-16">
            Life is hard enough already. Let us make it a little easier.
          </p>
          <div className="cursor-pointer font-medium text-base  flex justify-center items-center">
            <p>See All</p>
            <BsArrowRight className="ml-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
