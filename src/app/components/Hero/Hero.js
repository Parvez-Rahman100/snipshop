import Image from "next/image";
import { BsDot, BsFillArrowDownCircleFill } from "react-icons/bs";
import camera from "../../../assets/camera.png";
import cat from "../../../assets/catagory1.png";
import lens from "../../../assets/lens.png";
import stand from "../../../assets/stand.png";

const Hero = () => {
  return (
    <div className="carousel w-full">
      <div
        id="slide1"
        className="hero pb-36 pt-24 carousel-item relative w-full"
      >
        <div className=" container mx-auto flex justify-evenly items-center ">
          <div className=" w-1/3">
            <p className="font-medium text-xs ">
              100% QUALITY, 100% SATISFACTION
            </p>
            <h1 className="font-spectral font-extrabold text-[64px] mb-[26px]">
              Where the world comes to shop.
            </h1>
            <p className=" font-normal text-lg mb-[64px]">
              Life is hard enough already. Let us make it a little easier,
              Vision of Snipshop for a better outlook.
            </p>
            <div className="flex justify-between items-center">
              <button className=" w-[145px] h-[44px] rounded-[42px] btn hover:text-[#2B2B2B] hover:bg-white bg-[#2B2B2B] text-white">
                SHOP NOW
              </button>
              <p className="text-[#262626] font-medium text-sm">
                Start From <br />
                <span className=" font-semibold text-3xl">110.00$</span>
              </p>
            </div>
          </div>
          <div className=" relative">
            <Image
              src={camera}
              alt="Camera"
              className=" rounded-full border-[10px] border-[#2062ff66]"
            />
            <div className=" absolute bottom-[-70px] text-[#1D65FF] left-0 flex justify-evenly items-center w-full py-2 gap-2">
              <a href="#slide1">PREV</a>

              <a href="#slide1">
                <BsDot size={20} />
              </a>
              <a href="#slide2">
                <BsDot size={20} />
              </a>
              <a href="#slide1">
                <BsDot size={20} />
              </a>
              <a href="#slide2">
                <BsDot size={20} />
              </a>
              <a href="#slide1">
                <BsDot size={20} />
              </a>

              <a href="#slide2">NEXT</a>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div>
              <Image src={lens} alt="camera lens" />
              <p>Fuji 14mm Lens</p>
            </div>
            <div className="mt-4">
              <Image src={stand} alt="camera stand" />
              <p>Camera Stand</p>
            </div>
            <div className=" mt-4">
              <BsFillArrowDownCircleFill size={34} />
            </div>
          </div>
        </div>
      </div>
      <div
        id="slide2"
        className="slider pb-36 pt-24 carousel-item relative w-full"
      >
        <div className=" container mx-auto flex justify-evenly items-center ">
          <div className=" w-1/3">
            <p className="font-medium text-xs ">
              100% QUALITY, 100% SATISFACTION
            </p>
            <h1 className="font-spectral font-extrabold text-[64px] mb-[26px]">
              Where the world comes to shop.
            </h1>
            <p className=" font-normal text-lg mb-[64px]">
              Life is hard enough already. Let us make it a little easier,
              Vision of Snipshop for a better outlook.
            </p>
            <div className="flex justify-between items-center">
              <button className=" w-[145px] h-[44px] rounded-[42px] btn hover:text-[#2B2B2B] hover:bg-white bg-[#2B2B2B] text-white">
                SHOP NOW
              </button>
              <p className="text-[#262626] font-medium text-sm">
                Start From <br />
                <span className=" font-semibold text-3xl">110.00$</span>
              </p>
            </div>
          </div>
          <div className=" relative">
            <Image
              src={cat}
              alt="Camera"
              className=" rounded-full border-[10px] border-[#2062ff66]"
            />
            <div className=" absolute bottom-[-70px] text-[#1D65FF] left-0 flex justify-evenly items-center w-full py-2 gap-2">
              <a href="#slide1">PREV</a>

              <a href="#slide1">
                <BsDot size={20} />
              </a>
              <a href="#slide2">
                <BsDot size={20} />
              </a>
              <a href="#slide1">
                <BsDot size={20} />
              </a>
              <a href="#slide2">
                <BsDot size={20} />
              </a>
              <a href="#slide1">
                <BsDot size={20} />
              </a>

              <a href="#slide2">NEXT</a>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div>
              <Image src={lens} alt="camera lens" />
              <p>Fuji 14mm Lens</p>
            </div>
            <div className="mt-4">
              <Image src={stand} alt="camera stand" />
              <p>Camera Stand</p>
            </div>
            <div className=" mt-4">
              <BsFillArrowDownCircleFill size={34} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
