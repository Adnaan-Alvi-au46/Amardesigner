import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import logo from "../../assets/Images/logo.png";

const Footer2 = () => {
  return (
    <>
      <section>
        <div className="bg-black w-[100%] p-5  relative">
          <div className="md:max-w-[1240px] md:mx-auto py-[50px]  text-[#FFFFFF] text-[15px] ">
            <div className="block md:flex">
              <div className="md:w-[50%] w-[100%]">
                <div>
                  <img src={logo} alt="" />
                </div>
                <p className="md:pt-[45px] tracking-[0.4px] leading-[1.5] ">
                  Bizdateup stands firmly on the pillars of trust,
                  accountability, diversity, quality and reliability. Our
                  platform aims to bring retail investors into the game of
                  startup investments to increase funding opportunities for
                  deserving startups to boost the economy while creating great
                  returns and profitability for the investors.
                </p>
                <div className="md:flex my-9">
                  <div className="flex md:justify-between justify-around md:w-[25%] w-[100%] cursor-pointer ">
                    <a
                      target="_black"
                      href="https://www.facebook.com/bizdateupindia"
                      className=" hover:text-red-600"
                    >
                      <FaFacebookSquare size={30} />
                    </a>
                    <a
                      target="_black"
                      href="https://www.instagram.com/bizdateup "
                      className=" hover:text-red-600"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      target="_black"
                      href="https://www.twitter.com/date_biz"
                      className=" hover:text-red-600"
                    >
                      <FaTwitterSquare size={30} />
                    </a>
                  </div>
                </div>
              </div>
              <div className=" md:flex md:justify-around  md:w-[50%] w-[100%] grid grid-cols-2 gap-6  ">
                <div>
                  <h6 className=" text-[#FFFFFF] font-bold">About</h6>
                  <ul className="py-2 cursor-pointer">
                    <li className="py-2 text-sm  hover:text-red-600">Home</li>
                    <li className="py-2 text-sm  hover:text-red-600">Invest</li>
                    <li className="py-2 text-sm  hover:text-red-600">Raise Funds</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-bold text-[#FFFFFF]">Support</h6>
                  <ul className="py-2 cursor-pointer">
                    <li className="py-2 text-sm hover:text-red-600">Contact Us</li>
                    <li className="py-2 text-sm hover:text-red-600">Privacy Policy</li>
                    <li className="py-2 text-sm hover:text-red-600">Risk of Investment</li>
                    <li className="py-2 text-sm hover:text-red-600">Terms of Use</li>
                    <li className="py-2 text-sm hover:text-red-600">Refund Policy</li>
                    <li className="py-2 text-sm hover:text-red-600">Cancellation Policy</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-bold text-[#FFFFFF]">Investments</h6>
                  <ul className="py-2 cursor-pointer">
                    <li className="py-2 text-sm hover:text-red-600">Invest</li>
                    <li className="py-2 text-sm hover:text-red-600">Raise Fund</li>
                    <li className="py-2 text-sm hover:text-red-600">News</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer2;
