import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";

import { CgProfile } from "react-icons/cg";
// import { RiArrowDownSLine } from "react-icons/ri";

import Bizlogo from "../../assets/Images/Bizlogo.png";
// import Button from "../Button/Button";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [drop, setdrop] = useState(false);
  const [navbar, setNavbar] = useState(false);
  console.log("props navbare");
  console.log(props);
  const handelNav = () => {
    setOpen(!open);
  };

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <nav
        className={
          navbar
            ? "md:active md:bg-[#ffffff]  md:bg-opacity-60  md:backdrop-filter md:backdrop-blur-lg md:drop-shadow-md md:shadow md:sticky md:top-0 md:z-50 "
            : " bg-white  bg-opacity-60  md:sticky top-0 "
        }
      >
        <div className="flex items-center font-medium justify-around  border-b-2">
          <div className="p-5 md:w-auto w-full flex justify-between">
            <img src={Bizlogo} alt="logo" className="md:cursor-pointer h-9" />
          </div>

          <div className="relative  hidden border  border-gray-500 w-[35%] rounded-[10px] text-gray-600   md:block uppercase items-center  font-[Poppins]">
            <input
              type="search"
              name="serch"
              placeholder="Search here"
              className="bg-white h-[40px] w-full px-5 pr-12  rounded-[10px] text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-[12px] top-[6px] ">
              <div className=" w-9 h-7 rounded-[5px] bg-red-400 flex justify-center items-center ">
                <BsSearch className="text-[#ffffff] h-4 w-4 fill-current" />
              </div>
            </button>
          </div>

          <div className="md:flex justify-center items-center hidden ">
            <Link
              to="/joined_as_pro"
              className=" px-4  mr-2 flex justify-center items-center  "
            >
              <CiBookmarkCheck size={25} className="mt-[2px] mr-[2px]" />
              Joind as pro
            </Link>
            <div className=" border-[1px] border-gray-400 w-[80px] h-[40px] rounded-[10px] flex justify-center items-center  ">
              <AiOutlineMenu size={25} className=" mr-2" />
              <CgProfile size={25} className="" />
            </div>
          </div>

          {/* mobile view */}

          <div onClick={handelNav} className="block md:hidden">
            {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              open
                ? "fixed  left-0 top-0 w-[63%] h-full border-r bg-[#ffffff] ease-in-out z-[500] duration-500"
                : "fixed left-[-100%] "
            }
          >
            {/* <img
              src={Bizlogo}
              alt="logo"
              className="md:cursor-pointer h-9 m-4 mt-7"
            /> */}

            <ul className="p-4 uppercase">
              <li className="border-b border-gray-600">
                <Link to="/" className=" p-4 inline-block">
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-600">
                <Link to="/invest" className="p-4 inline-block">
                  Invest in startups
                </Link>
              </li>
              <li className="border-b border-gray-600">
                <Link to="/investor/dashboard" className="p-4 inline-block">
                  Raise funds
                </Link>
              </li>
            </ul>

            <div className="md:hidden px-4 flex flex-col">
              <Link to="/login" className=" p-4">
                Login
              </Link>
              <Link to="/signup" className="py-4">
                {/* <Button name="Register" /> */}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
