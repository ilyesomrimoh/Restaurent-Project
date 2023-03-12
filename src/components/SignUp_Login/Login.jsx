import { Link } from "react-router-dom";
import React from "react";
import PassInput from "./components/PassInput";

const Login = () => {
  return (
    <div className="flex  h-screen flex-col lg:flex-row relative">
        <Link to="/signup">
      <div className="flex lg:hidden absolute top-3 left-3 cursor-pointer space-x-3 bg-black  px-4 py-2 pl-5 rounded-md">
        <img
          src="./images/Assets/Arrow 1.png"
          alt=""
          className="w-4 h-4 self-center"
        />
          <p className="text-white">Back</p>
      </div>
        </Link>

      <div className="w-1/2 relative hidden lg:block">
        <img
          src="./images/Assets/food.jpg"
          alt=""
          className="w-full block h-screen object-cover "
        />
          <Link to="/signup">
        <div className="flex absolute top-4 left-2 cursor-pointer space-x-3 bg-white  bg-opacity-30  px-4 py-2 pl-5 rounded-md">
          <img
            src="./images/Assets/Arrow 1.png"
            alt=""
            className="w-4 h-4 self-center"
          />
            <p className="text-white">Back</p>
        </div>
          </Link>
      </div>
      <div className="flex flex-col space-y-7 lg:w-1/2 xl:p-28 2xl:p-18  lg:p-12 lg:pt-24 p-24 ">
        <p className="text-5xl font-medium ">Login</p>
        <div className="flex space-x-7 justify-center">
          <div className="flex pr-4 relative  py-2 space-x-5 hover:border-orange-300  border rounded-md cursor-pointer hover:bg-red-50">
          <span class="absolute -top-3 -right-2 h-3 w-3">
              <span class="animate-ping absolute -right-1 -top-0 inline-flex h-5 w-5 rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <img
              src="./images/Assets/google.png"
              alt=""
              className="lg:w-7 lg:h-7 w-9 h-9 sm:my-auto"
            />
            <p className="hidden sm:block sm:my-auto">Sign in with Google</p>
          </div>
          <div className="flex pr-4 relative py-2 space-x-5 border-gray-300  hover:border-blue-400  border rounded-md cursor-pointer hover:bg-gray-100">
            
            <span class="absolute -top-3 -right-2 h-3 w-3">
              <span class="animate-ping absolute -right-1 -top-0 inline-flex h-5 w-5 rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-800"></span>
            </span>
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
            <label className="block mb-2 text-xl font-medium  text-zinc-500   ">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-red-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3  "
              placeholder="name@company.com"
              required
            />
          </div>
          <PassInput></PassInput>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border accent-red-600  border-gray-300 rounded bg-gray-50 focus:ring-3    "
                required
              />
            </div>
            <label className="ml-2 text-sm font-medium text-gray-900 ">
              I agree to the{" "}
              <span className="decoration-1 underline ">Terms of Service</span>{" "}
              and <span className="decoration-1 underline">Privacy Policy</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full text-white  bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center "
          >
            Login
          </button>
          <div className="text-sm font-medium text-gray-500 ">
            Not registered?{" "}
            <Link to="/signup">
              <p className="text-red-500 hover:underline inline ">
                {"  "}
                Signup
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
