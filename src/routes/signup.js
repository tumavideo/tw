import React from "react";
import { Link } from "react-router-dom";

import bgImage from "../assets/black-businesscopy.jpeg";
import logo from "../assets/flex-circle-green.svg";

export default function SignUp() {
  return (
    <div className="signup">
      <section
        className="relative pt-16 pb-0 md:py-32 bg-white"
        style={{ backgroundImage: bgImage, backgroundPosition: "center" }}
      >
        <div className="container px-4 mx-auto mb-16">
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="max-w-sm mx-auto">
              <div className="mb-6 text-center">
                <Link className="inline-block mb-6" to="#">
                  <img className="h-16" src={logo} alt="" />
                </Link>
                <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                  Register for an account
                </h3>
                <p className="text-lg text-coolGray-500 font-medium">
                  Start your job search
                </p>
              </div>
              <form action="">
                <div className="mb-6">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="email"
                    placeholder="dev@shuffle.dev"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-coolGray-800 font-medium"></label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-coolGray-800 font-medium"></label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="number"
                    name="age"
                    placeholder="Age"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-coolGray-800 font-medium"></label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="text"
                    name="gender"
                    placeholder="Gender"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-coolGray-800 font-medium"></label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="text"
                    name="city"
                    placeholder="City/Town"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-coolGray-800 font-medium"></label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="text"
                    name="education"
                    placeholder="Education"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-coolGray-800 font-medium"></label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="text"
                    name="income"
                    placeholder="Income"
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-coolGray-800 font-medium"></label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="text"
                    name="experience"
                    placeholder="Experience"
                  />
                </div>
                {/* <Textarea
                  name="message"
                  placeholder="Tell us about yourself..."
                /> */}
                <div className="mb-4">
                  <label
                    className="block mb-2 text-coolGray-800 font-medium"
                    htmlFor=""
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type="password"
                    placeholder="************"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between mb-6">
                  <div className="w-full md:w-1/2">
                    <label className="relative inline-flex items-center">
                      <input
                        className="form-checkbox appearance-none"
                        type="checkbox"
                      />
                      <img
                        className="absolute top-1/2 transform -translate-y-1/2 left-0"
                        src="flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                        alt=""
                      />
                      <span className="ml-7 text-xs text-coolGray-800 font-medium">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <div className="w-full md:w-auto mt-1">
                    <Link
                      className="inline-block text-xs font-medium text-green-500 hover:text-green-600"
                      href="#"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                <Link
                  className="inline-block py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  href="#"
                >
                  Register
                </Link>
                <p className="text-center">
                  <span className="text-xs font-medium">Have an account? </span>
                  <Link
                    className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                    href="login"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <img
          class="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
          src={bgImage}
          alt=""
        />
      </section>
    </div>
  );
}
