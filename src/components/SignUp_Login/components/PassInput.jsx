import { useState } from "react";

const PassInput = ({pass}) => {
  const [open, setOpen] = useState(false);
  const [passValid, setPassValid] = useState(false);

  const checkPass = (e) => {
    if (e.target.value.length > 8) {
      setPassValid(true);
    } else {
      setPassValid(false);
    }
  };
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <label
        htmlFor="password"
        className="block mb-2 text-xl font-medium  text-zinc-500   "
      >
        Password
      </label>
      <input
        type={!open ? "password" : "text"}
        name="password"
        id="password"
        onChange={e=> {checkPass(e); pass.setPass(e.target.value)} }
        placeholder="***************"
        // className="bg-red-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-red-500  block w-full p-3 focus:border-red-500"
        className={
          passValid
          ? "bg-red-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-red-500  block w-full p-3 focus:border-green-600"
          : "bg-red-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-red-500  block w-full p-3 focus:border-red-500"
      
        }
        required
      />
      <img
        src="./images/Assets/show.png"
        alt=""
        onClick={toggle}
        className={
          open ? "absolute right-5 w-5 h-5 top-12 cursor-pointer" : "hidden"
        }
      />
      <img
        src="./images/Assets/hide.png"
        alt=""
        onClick={toggle}
        className={
          open ? "hidden" : "absolute right-5 w-5 h-5 top-12 cursor-pointer"
        }
      />
    </div>
  );
};

export default PassInput;
