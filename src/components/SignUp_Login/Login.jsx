import { Link ,useNavigate } from "react-router-dom";
import PassInput from "./components/PassInput";
import { googleProvider, auth } from "../../config/firebase_config";
import { useState, useEffect, useContext } from "react";
import {signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { setIsAuth, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [password , setPass] = useState('');
  const [email , setEmail] = useState('');
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setUser(user);
        setIsAuth(true);
        navigate("/");
      }
    });
    return unsubscribe;
  });
  const signInEmail =  (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert("Please fill all the fields");
      console.log("Please fill all the fields");
      return;
    }
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setUser(user);
      setIsAuth(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  }
  const SignInGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth,googleProvider)
    .then((result) => {
      setUser(result.user)
      setIsAuth(true);
      navigate("/");
    })
    .catch((error) => {
      console.log(error)
    })
  };
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
          src="./images/Assets/food2.jpg"
          alt=""
          className="w-full block h-screen object-cover  object-right-bottom     "
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
      <div className="p-8 pt-16 flex flex-col justify-center space-y-9  lg:w-1/2 xl:p-28 2xl:p-18 lg:p-12 lg:pt-24 ">
        <p className="text-5xl font-medium ">Login</p>
        <div className="flex space-x-7 justify-center ">
          <div onClick={SignInGoogle} className="flex pr-4 relative justify-center py-2  space-x-5 hover:border-orange-300  border rounded-md cursor-pointer hover:bg-red-50 w-1/2">
            <span className="absolute -top-3 -right-2 h-3 w-3">
              <span className="animate-ping absolute -right-1 -top-0 inline-flex h-5 w-5 rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <img
              src="./images/Assets/google.png"
              alt=""
              className="lg:w-7 lg:h-7 w-9 h-9 sm:my-auto"
            />
            <p className="hidden my-auto  md:block  md:my-auto ">
              Sign in with Google
            </p>
          </div>
          
        </div>
        <div className="relative flex  items-center">
          <div className="flex-grow border-t border-black"></div>
          <span className="flex-shrink mx-auto text-black">
            Or Use Your Email
          </span>
          <div className="flex-grow border-t border-black"></div>
        </div>
        <form onSubmit={signInEmail} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium  text-zinc-500     "
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={e => setEmail(e.target.value)}
              className="bg-red-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3  "
              placeholder="name@company.com"
              required
            />
          </div>
          <PassInput pass={{password , setPass}}></PassInput>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border self-center accent-red-600  border-gray-300 rounded bg-gray-50 focus:ring-3    "
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2   text-sm  sm:text-base font-medium text-gray-900 "
              >
                Keep me logged in
              </label>
            </div>
            <Link to="/reset-password">
            <span className="cursor-pointer text-sm  sm:text-base hover:text-red-600 hover:animate-pulse">
              Forgot Password{" "}
            </span>
            </Link>
          </div>

          <button
            type="submit"
            className="w-full text-white  bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center "
          >
            Login
          </button>
          <div className="text-sm font-medium text-gray-500 ">
            Not registered?
            <Link to="/signup">
              <p className="text-red-500 hover:underline inline">
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
