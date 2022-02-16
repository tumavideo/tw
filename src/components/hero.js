import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/flex-circle-green.svg";
import circle from "../assets/circle3-yellow.svg";
import dots from "../assets/dots3-blue.svg";
import header from "../assets/Woman-in-tech-copy.jpeg";

export default function Hero() {
  return (
    <>
      <div className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                Tuma Work: Opportunities for all Zambian Youths
              </h1>
              <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
                Your one-stop platform for accessing skills, job opportunites,
                funding, business and career development.
              </p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <Link
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                    to="/"
                  >
                    Explore Talent
                  </Link>
                </div>
                <div className="w-full md:w-auto py-1 md:py-0">
                  <Link
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                    to="/"
                  >
                    Find Jobs
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                <img
                  className="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                  src={circle}
                  alt=""
                />
                <img
                  className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                  src={dots}
                  alt=""
                />
                <img className="relative rounded-7xl" src={header} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
