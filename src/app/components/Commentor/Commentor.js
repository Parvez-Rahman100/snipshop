import Image from "next/image";
import { BsArrowRightCircle, BsFillArrowLeftCircleFill } from "react-icons/bs";
import commentor from "../../../assets/commentor.png";
import emoji from "../../../assets/emoji.png";

const Commentor = () => {
  return (
    <div className=" container mx-auto mt-24">
      <div className=" lg:flex lg:flex-row flex-col justify-around items-center">
        <div>
          <Image src={commentor} alt="commentor" />
        </div>
        <div className=" w-3/6">
          <div className=" flex justify-start items-center">
            <h1 className=" font-semibold text-xl">Justin Pierre</h1>
            <Image src={emoji} alt="emoji" />
          </div>
          <p className=" font-normal text-xs mt-[2px] mb-10 text-[#7E7E7E]">
            Products Seller
          </p>
          <p className=" italic font-medium text-xl text-justify mb-[52px] ">
            “In 2 years, my business went from just me and my Shop site to 40
            employees, my own fulfillment center and over 22 million dollars in
            revenue.”
          </p>
          <div className="flex justify-start items-center">
            <BsFillArrowLeftCircleFill size={30} className=" mr-2  " />
            <BsArrowRightCircle size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commentor;