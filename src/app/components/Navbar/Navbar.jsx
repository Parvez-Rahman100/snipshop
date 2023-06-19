"use client";

import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHandbagFill, BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#1E66FF] h-[78px] flex justify-center items-center">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <a href=" /">
            <Image src={logo} alt="logo" className=" w-36" />
          </a>
        </div>
        <div className="navbar-center">
          <div className="flex justify-center items-center">
            <div className="relative">
              <input
                type="text"
                name="search"
                className=" rounded-xl w-[593px] pl-2 h-[28px] py-5"
                placeholder="Search SnipShop.com"
              />
              <div className="absolute top-0 right-[-6px]">
                <button className=" bg-[#4FA8E8] rounded rounded-l-full rounded-r-full flex justify-center items-center text-white w-[75px] h-[40px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center items-center text-white">
            <BsFillPersonFill />
            <p className="mx-3">Account</p>
          </div>
          <div className="flex justify-center items-center text-white">
            <AiOutlineHeart />
            <p className="mx-3">My Items</p>
          </div>
          <div className="text-white">
            <BsFillHandbagFill />
          </div>
          <div className="dropdown text-white">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <GiHamburgerMenu size={20} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-700 text-black rounded-box w-52"
            >
              <li>
                <a href=" #">Acount</a>
              </li>
              <li>
                <a href=" #">My Items</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
