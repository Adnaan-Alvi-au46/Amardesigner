import React, { useState } from "react";
import Topsection from "./Topsection";
import { Blogdata } from "./Blogdata";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";


const MainProduct = () => {
  const [blog, setblog] = useState(Blogdata);
  return (
    <>
      <section>
        <div className="bg-[#ffffff] md:w-[100%] relative md:px-0 px-[16px] font-[Poppins]">
          <div className="">
            <Topsection />
          </div>
          <div className="md:flex hidden justify-center items-center md:w-[1230px] w-[100%] mx-auto  md:m-auto pb-[31px]">
            <div className=" grid gap-1  sm:grid-cols-2 md:grid-cols-4  md:gap-4 ">
              {blog.map((data, index) => {
                return (
                  <div
                    className=" blogs-content w-full h-[340px] rounded-[10.3802px] bg-white "
                    key={index}
                  >
                    <div className=" relative z-10 w-full overflow-hidden bg-slate-50 rounded-[10.3802px] mb-5">
                      <img src={data.image} className="w-full" />
                      <div className=" absolute bottom-[15px] left-[15px] z-30">
                        <img
                          src={data.customer}
                          alt=""
                          className=" rounded-[50%] h-[55px] w-[55px] border-[3px] border-white z-30 "
                        />
                      </div>
                      <div className=" text-white absolute top-[15px] right-[15px] z-30">
                        <AiOutlineHeart size={25} />
                      </div>
                    </div>
                    <div className=" not-italic font-normal md:text-[18px] xl:text-[20.3426px] leading-[23px] tracking-[0.226028px] text-[#180048] font-[Roboto]">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4>{data.title}</h4>
                        </div>
                        <div className="flex justify-center items-center">
                          <AiFillStar />
                          <span className="text-gray-500 pl-2">4.56</span>
                        </div>
                      </div>
                      <p className="text-[13px] font-[400] pt-[10px]">
                        {data.location}
                      </p>
                      <p className="text-[13px] font-[400] pt-[10px]">
                        Designed By{" "}
                        <span className="text-red-600"> {data.designed}</span>
                      </p>
                    </div>
                    <p className="module overflow sm:before:right-10 md:before:right-16 before:right-4 not-italic h-[50px]  overflow-hidden text-ellipsis font-normal md:text-[15px] xl:text-[15.822px] leading-[25px] tracking-[0.226028px] text-[#180048] font-[Roboto]">
                      {data.para}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainProduct;
