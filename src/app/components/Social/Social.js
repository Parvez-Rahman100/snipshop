import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.svg";
import shoe from "../../../assets/shoe.png";
import socialPerson from "../../../assets/social.png";
import sunglass from "../../../assets/sunglass.png";
import twitter from "../../../assets/twitter.png";
import watch from "../../../assets/watch.png";

const Social = () => {
  return (
    <div className=" container mx-auto pt-48 pb-48 bg-[#F4FCFF]">
      <div className="lg:flex lg:flex-row flex-col justify-around items-center">
        <div className=" mr-10">
          <h1 className=" font-bold text-4xl">Sell Easily on Socialmedia</h1>
          <p className=" font-normal text-lg  text-[#585858] mt-6">
            Life is hard enough already. Let us make it a little easier.
          </p>
          <div className="cursor-pointer mt-20 font-medium text-base  flex justify-start items-center">
            <p>See All</p>
            <BsArrowRight className="ml-3" />
          </div>
        </div>
        <div className="relative">
          <Image src={socialPerson} alt="socialPerson" />
          <div className=" absolute bottom-[-100px] left-[-60px] gap-5 flex items-center">
            <div className="relative">
              <Image src={sunglass} alt="Sunglass" />
              <div className=" absolute top-[10px] left-[10px]">
                <Image src={facebook} alt="facebook logo" />
              </div>
              <div className=" absolute bottom-[10px] left-[10px]">
                <p className=" font-medium text-xs">$12</p>
              </div>
            </div>
            <div className=" relative">
              <Image src={shoe} alt="Shoe" />
              <div className=" absolute top-[10px] left-[10px]">
                <Image
                  className=" w-4 h-4"
                  src={instagram}
                  alt="instagram logo"
                />
              </div>
              <div className=" absolute bottom-[10px] left-[10px]">
                <p className=" font-medium text-xs">$35</p>
              </div>
            </div>
            <div className="relative">
              <Image src={watch} alt="watch" />
              <div className=" absolute top-[10px] left-[10px]">
                <Image className=" w-4 h-4" src={twitter} alt="twitter logo" />
              </div>
              <div className=" absolute bottom-[10px] left-[10px]">
                <p className=" font-medium text-xs">$22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
