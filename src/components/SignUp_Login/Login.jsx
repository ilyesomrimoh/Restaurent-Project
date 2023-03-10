import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="flex  h-screen flex-col lg:flex-row relative">
      <div className="flex lg:hidden absolute top-3 left-3 cursor-pointer space-x-3 bg-black  px-4 py-2 pl-5 rounded-md">
        <img
          src="./images/Assets/Arrow 1.png"
          alt=""
          className="w-4 h-4 self-center"
        />
        <p className="text-white">Back</p>
      </div>

      <div className="w-1/2 relative hidden lg:block">
        <img
          src="./images/Assets/food.jpg"
          alt=""
          className="w-full block h-screen object-cover "
        />
        <div className="flex absolute top-4 left-2 cursor-pointer space-x-3 bg-white  bg-opacity-30  px-4 py-2 pl-5 rounded-md">
          <img
            src="./images/Assets/Arrow 1.png"
            alt=""
            className="w-4 h-4 self-center"
          />
          <p className="text-white">Back</p>
        </div>
      </div>
      <div className="flex flex-col space-y-7 lg:w-1/2 xl:p-56 lg:p-12 lg:pt-24 p-24 ">
        <p className="text-5xl font-medium ">Login</p>
        <div className="flex space-x-7 justify-center">
          <div className="flex px-4 py-2 space-x-5 border-orange-300  border rounded-md cursor-pointer">
            <img
              src="./images/Assets/google.png"
              alt=""
              className="lg:w-7 lg:h-7 w-9 h-9 sm:my-auto"
            />
            <p className="hidden sm:block sm:my-auto">Sign in with Google</p>
          </div>
          <div className="flex px-4 py-2 space-x-5 border-orange-300  border rounded-md cursor-pointer">
            <img
              src="./images/Assets/facebook.png"
              alt=""
              className="lg:w-7 lg:h-7 w-9 h-9 sm:my-auto"
            />
            <p className="hidden sm:block sm:my-auto">Sign in with facebook</p>
          </div>
        </div>
        <div className="relative flex  items-center">
          <div className="flex-grow border-t border-black"></div>
          <span className="flex-shrink mx-auto text-black">
            Or Use Your Email
          </span>
          <div className="flex-grow border-t border-black"></div>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-xl font-medium  text-zinc-500   dark:text-white">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-red-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="relative">
            <label className="block mb-2 text-xl font-medium  text-zinc-500   dark:text-white ">
              Password
            </label>
            <input
              type={open === false ? "password" : "text"}
              name="password"
              id="password"
              placeholder="***************"
              className="bg-red-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-red-500  block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:border-red-500"
              required
            />
            <img
              src="./images/Assets/show.png"
              alt=""
              onClick={toggle}
              className={
                open
                  ? "absolute right-5 w-5 h-5 top-12 cursor-pointer"
                  : "hidden"
              }
            />
            <img
              src="./images/Assets/hide.png"
              alt=""
              onClick={toggle}
              className={
                open
                  ? "hidden"
                  : "absolute right-5 w-5 h-5 top-12 cursor-pointer"
              }
            />
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border accent-red-600  border-gray-300 rounded bg-gray-50 focus:ring-3    dark:border-gray-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree to the{" "}
              <span className="decoration-1 underline ">Terms of Service</span>{" "}
              and <span className="decoration-1 underline">Privacy Policy</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full text-white  bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Login
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
              {" "}
              <a className="text-red-500 hover:underline dark:text-red-500 cursor-pointer" href="null">
                {"  "}
                Signup
              </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
