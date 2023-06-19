import Image from "next/image";
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from "react-icons/bs";
import product1 from "../../../assets/product1.png";
import product2 from "../../../assets/product2.png";
import product3 from "../../../assets/product3.png";
import product4 from "../../../assets/product4.png";
import product5 from "../../../assets/product5.png";

const TrendProducts = () => {
  return (
    <div className="mt-32 container mx-auto">
      <h1 className=" font-bold text-4xl text-center">
        Shop Our Trending Products
      </h1>
      <p className="text-center font-normal text-lg mt-6 mb-[46px]">
        Life is hard enough already. Let us make it a little easier.
      </p>
      <div className="relative mb-[76px]">
        <div className="flex justify-center items-center">
          <p className=" ml-[18px] font-medium text-xs border-b-2 border-[#041318] cursor-pointer">
            Fashion
          </p>
          <p className=" ml-[18px] font-medium text-xs cursor-pointer">
            Technology
          </p>
          <p className=" ml-[18px] font-medium text-xs cursor-pointer">
            Interiors
          </p>
          <p className=" ml-[18px] font-medium text-xs cursor-pointer">
            Food and Drink
          </p>
        </div>
        <div className="absolute top-0 right-0 flex justify-center items-center ">
          <BsArrowLeftCircle
            size={18}
            className="bg-white text-black mr-2  cursor-pointer"
          />
          <BsFillArrowRightCircleFill
            size={18}
            className="text-[#2B2B2B] cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:flex  lg:flex-row flex-col justify-between items-center ">
        <div className="pr-20 mb-5 lg:mb-0 pl-6 rounded-2xl bg-gradient-to-l from-[#C0D4FE] to-[#ECF1FD]">
          <div className="relative pb-20">
            <div className="mr-3">
              <p className=" font-semibold text-[22px]">Seven Zero Five</p>
              <p className=" font-medium text-base text-[#475E68]">Starting</p>
              <p className="text-[#FF4516] mt-[14px]">$10.00</p>
            </div>
            <div className=" absolute top-[-48px] right-[-100px]">
              <Image src={product1} alt="product1" />
            </div>
          </div>
        </div>
        <div className="pr-20 pl-6 mb-5 lg:mb-0 lg:mx-0 rounded-2xl bg-gradient-to-l from-[#E9EBF0] to-[#EDEDED]">
          <div className="relative pb-20">
            <div className="mr-10">
              <p className="font-semibold text-[22px]">Clock</p>
              <p className="font-medium text-base text-[#475E68]">Starting</p>
              <p className="text-[#FF4516] mt-[14px]">$25.00</p>
            </div>
            <div className=" absolute top-[-48px] right-[-100px]">
              <Image src={product2} alt="product2" />
            </div>
          </div>
        </div>
        <div className="pr-20 pl-6 mb-5 lg:mb-0 lg:mx-0 rounded-2xl bg-gradient-to-l from-[#EDEDED] to-[#F0EBFF]">
          <div className="relative pb-20">
            <div className="mr-3">
              <p className=" font-semibold text-[22px]">Curology</p>
              <p className=" font-medium text-base text-[#475E68]">Starting</p>
              <p className="text-[#FF4516] mt-[14px]">$12.00</p>
            </div>
            <div className=" absolute top-[-48px] right-[-100px]">
              <Image src={product3} alt="product3" />
            </div>
          </div>
        </div>
        <div className="pr-20 pl-6 mb-5 lg:mb-0 lg:mx-0 rounded-2xl bg-gradient-to-l from-[#EBF9FF] to-[#EDEDED]">
          <div className="relative pb-20">
            <div className="mr-10">
              <p className="font-semibold text-[22px]">Chair</p>
              <p className="font-medium text-base text-[#475E68]">Starting</p>
              <p className="text-[#FF4516] mt-[14px]">$16.00</p>
            </div>
            <div className=" absolute top-[-48px] right-[-100px]">
              <Image src={product4} alt="product4" />
            </div>
          </div>
        </div>
        <div className="pr-28 pl-6 mb-5 lg:mb-0 lg:mx-0 rounded-2xl bg-gradient-to-l from-[#E9F0FF] to-[#EDEDED]">
          <div className="relative pb-20 ">
            <div className="mr-3">
              <p className=" font-semibold text-[22px]">Curology</p>
              <p className=" font-medium text-base text-[#475E68]">Starting</p>
              <p className="text-[#FF4516] mt-[14px] flex items-end">$60.00</p>
            </div>
            <div className=" absolute top-[-30px] right-[-100px]">
              <Image src={product5} alt="product5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendProducts;
