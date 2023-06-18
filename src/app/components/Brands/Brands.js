import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import brand1 from "../../../assets/brand1.png";
import brand2 from "../../../assets/brand2.svg";
import brand3 from "../../../assets/brand3.png";
import brand4 from "../../../assets/brand4.png";
import brand5 from "../../../assets/brand5.svg";
import brand6 from "../../../assets/brand6.svg";
import brandBg from "../../../assets/brandBg.png";

const Brands = () => {
  return (
    <div className="container mx-auto mt-24">
      <div className="flex justify-evenly items-center">
        <div
          style={{
            backgroundImage: `url(${brandBg})`,
            opacity: 1,
          }}
          className="grid grid-cols-3 gap-20 w-2/4"
        >
          <Image src={brand1} alt="brands logo" className=" w-28 h-24" />
          <Image src={brand2} alt="brands logo" className=" w-28 h-24" />
          <Image src={brand3} alt="brands logo" className=" w-28 h-24" />
          <Image src={brand4} alt="brands logo" className=" w-28 h-24" />
          <Image src={brand5} alt="brands logo" className=" w-28 h-24" />
          <Image src={brand6} alt="brands logo" className=" w-28 h-24" />
        </div>
        <div>
          <h1 className=" font-bold text-4xl mb-6">
            Explore Most Popular Brands
          </h1>
          <p className=" font-normal text-lg text-[#585858] mb-16">
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
