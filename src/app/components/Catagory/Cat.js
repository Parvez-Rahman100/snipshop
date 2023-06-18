"use client";
import Image from "next/image";
import { BsPlusCircleDotted } from "react-icons/bs";

const Cat = ({ cat }) => {
  console.log(cat);
  return (
    <div className=" ml-8">
      <Image src={cat?.img} className=" w-72 h-40" alt="slider" />
      <h3 className=" mt-[22px] font-semibold text-lg">{cat?.name}</h3>
      <div className=" font-light text-lg  flex  items-center mt-14">
        <p>{cat?.price}</p>
        <p
          className={`${
            cat?.discount !== "20% OFF" && "line-through"
          }  text-[#FF4516] ml-4`}
        >
          {cat?.discount}{" "}
        </p>
        <BsPlusCircleDotted className="text-[#223E3F] ml-28" size={26} />
      </div>
    </div>
  );
};

export default Cat;
