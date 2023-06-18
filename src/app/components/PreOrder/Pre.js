import Image from "next/image";

const Pre = ({ pre }) => {
  console.log(pre);
  return (
    <div>
      <div className="card w-96 h-4/5 bg-base-100 ">
        <figure className="px-10 pt-10 ">
          <Image
            width={290}
            height={262}
            src={pre.images[1]}
            alt="perfumes"
            className="rounded-xl  "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title uppercase text-[#3B3849] font-semibold text-2xl mb-3">
            {pre?.title}
          </h2>
          <p className=" font-semibold text-lg text-[#3B3849] mb-7">
            {pre?.brand} <span className=" font-medium text-xs"> -Men</span>
          </p>
          <p className=" font-semibold text-lg text-[#0E4B80] tracking-widest">
            ${pre?.price} USD
          </p>
          <div className="card-actions">
            <button className="btn btn-primary text-white mt-[70px] hover:text-[#001439] bg-[#001439] w-[200px] h-[54px] ">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pre;
