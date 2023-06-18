import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";
import union from "../../../assets/Union.png";

const Footer = () => {
  return (
    <div className="mt-24 bg-[#0E4B80] pt-16 ">
      <div className=" lg:flex lg:flex-row flex-col justify-evenly items-center text-white">
        <div className=" h-72">
          <h3 className="font-bold text-[22px] mb-[30px] cursor-pointer">
            Shop
          </h3>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Gift cards
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            SnipShop blog
          </p>
        </div>
        <div className=" h-72">
          <h3 className="font-bold text-[22px] mb-[30px] cursor-pointer">
            Sell
          </h3>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Sell on SnipShop
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Terms
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Forums
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Affiliates
          </p>
        </div>
        <div className=" h-72">
          <h3 className="font-bold text-[22px] mb-[30px] cursor-pointer">
            About
          </h3>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            SnipShop, Inc.
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Policies
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Investors
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Careers
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Press
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Impact
          </p>
        </div>
        <div className=" h-72">
          <h3 className="font-bold text-[22px] mb-[30px] cursor-pointer">
            Help
          </h3>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Help center
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Trust and safety
          </p>
          <p className="mt-[10px] font-normal text-base cursor-pointer">
            Privacy settings
          </p>
          <div className="mt-[10px] px-2 flex justify-center items-center border-white border rounded-2xl cursor-pointer">
            <Image src={union} alt="union logo" />
            <p className="font-normal text-base ml-1">
              Download the SnipShop App
            </p>
          </div>
          <div className=" flex justify-start items-center mt-[10px]">
            <BsInstagram className=" ml-5 cursor-pointer" />
            <BsFacebook className=" ml-5 cursor-pointer" />
            <AiFillTwitterCircle className=" ml-5 cursor-pointer" />
            <BsDribbble className=" ml-5 cursor-pointer" />
            <BsPinterest className=" ml-5 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-[#232347] lg:flex lg:flex-row flex-col justify-center lg:justify-around items-center h-full py-4 text-white">
        <div>
          <p className="select-none">© 2021-2023 SnipShop.com</p>
        </div>
        <div className="lg:flex lg:flex-row flex-col  justify-between items-center">
          <p className=" m-3 cursor-pointer">Terms of use</p>
          <p className=" m-3 cursor-pointer">Privacy</p>
          <p className=" m-3 cursor-pointer">Interest-based ads</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
