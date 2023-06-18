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
          <h3 className="font-bold text-[22px] mb-[30px]">Shop</h3>
          <p className="mt-[10px] font-normal text-base">Gift cards</p>
          <p className="mt-[10px] font-normal text-base">SnipShop blog</p>
        </div>
        <div className=" h-72">
          <h3 className="font-bold text-[22px] mb-[30px]">Sell</h3>
          <p className="mt-[10px] font-normal text-base">Sell on SnipShop</p>
          <p className="mt-[10px] font-normal text-base">Terms</p>
          <p className="mt-[10px] font-normal text-base">Forums</p>
          <p className="mt-[10px] font-normal text-base">Affiliates</p>
        </div>
        <div className=" h-72">
          <h3 className="font-bold text-[22px] mb-[30px]">About</h3>
          <p className="mt-[10px] font-normal text-base">SnipShop, Inc.</p>
          <p className="mt-[10px] font-normal text-base">Policies</p>
          <p className="mt-[10px] font-normal text-base">Investors</p>
          <p className="mt-[10px] font-normal text-base">Careers</p>
          <p className="mt-[10px] font-normal text-base">Press</p>
          <p className="mt-[10px] font-normal text-base">Impact</p>
        </div>
        <div className=" h-72">
          <h3 className="font-bold text-[22px] mb-[30px]">Help</h3>
          <p className="mt-[10px] font-normal text-base">Help center</p>
          <p className="mt-[10px] font-normal text-base">Trust and safety</p>
          <p className="mt-[10px] font-normal text-base">Privacy settings</p>
          <div className="mt-[10px] px-2 flex justify-center items-center border-white border rounded-2xl">
            <Image src={union} alt="union logo" />
            <p className="font-normal text-base ml-1">
              Download the SnipShop App
            </p>
          </div>
          <div className=" flex justify-start items-center mt-[10px]">
            <BsInstagram className=" ml-5" />
            <BsFacebook className=" ml-5" />
            <AiFillTwitterCircle className=" ml-5" />
            <BsDribbble className=" ml-5" />
            <BsPinterest className=" ml-5" />
          </div>
        </div>
      </div>
      <div className="bg-[#232347] lg:flex lg:flex-row flex-col justify-center lg:justify-around items-center h-full text-white">
        <div>
          <p>© 2021-2023 SnipShop.com</p>
        </div>
        <div className="lg:flex lg:flex-row flex-col  justify-between items-center">
          <p className=" m-3">Terms of use</p>
          <p className=" m-3">Privacy</p>
          <p className=" m-3">Interest-based ads</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
