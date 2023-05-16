import NavBar from './NavBar'
import React  , { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
     const [isButtonClicked, setIsButtonClicked] = useState(false);
    const nav = useNavigate();
    const handleButtonClick = () => {
      setIsButtonClicked(true);
      setTimeout(() => {
        nav('/dashboard/menu');
      }, 2000);
    };
    const handleImageClick = () => {
      fileInputRef.current.click();
    };
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      // Process the selected file here
    };
    const [isHovered, setIsHovered] = useState(false);
    const fileInputRef = useRef(null);
  return (
    <div className='w-full'>
     < NavBar />
     <div className='w-full h-80 profile-back  relative'> <div className=' absolute bottom-[-80px] left-[calc(50%-80px)] w-40 cursor-pointer'>
     <img onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)}  onClick={handleImageClick} className="w-40 " src="/images/icons/avatar.png" alt="background" />
      {isHovered && (
          <div className=" absolute top-2/4 bg-black w-full z-10 h-1/2 profile-image flex items-center justify-center pointer-events-none ">
          <img src="/images/icons/icons8-edit-image-100.png" className='w-10' alt="" />
          <input type="file" ref={fileInputRef} accept="image/*" className='hidden'  onChange={handleImageChange} />

          </div>
        )}</div></div>
     <form className='m-7 w-full p-3 pt-16 '>

 <div className='flex flex-wrap  items-center justify-start lg:gap-40 w-full'>
 <div>
 <div className="mb-6 mt-8">
      <label for="restaurentname" className="block mb-2  font-medium text-gray-900 ">Restaurent Name</label>
      <input type="text" id="restaurentname" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product name" required />
    </div>
  
    <div className="mb-6 mt-8">
      <label for="restaurentemail" className="block mb-2  font-medium text-gray-900 ">Email</label>
      <input type="email" id="restaurentemail" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 "  placeholder="Enter product price" required />
    </div> 
 </div>
  <div>
  <div className="mb-6 mt-8">
      <label for="restaurentphone" className="block mb-2  font-medium text-gray-900 ">Phone</label>
      <input type="email" id="restaurentphone" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 "  placeholder="Enter product price" required />
    </div> 
    <div className="mb-6 mt-8">
      <label for="restaurentgooglemap" className="block mb-2  font-medium text-gray-900 ">Google map</label>
      <input type="email" id="restaurentgooglemap" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 "  placeholder="Enter product price" required />
    </div> 
  </div>
 </div>
    {/* <div className="form-group flex items-center gap-4 justify-start mt-8">
      <label for="productCategory" className="mb-2  font-medium text-gray-900 ">Category</label>
      <select id="productCategory" className="border border-gray-300 text-gray-900  rounded-lg  block w-32 p-1 px-4 ">
        <option value="Pizza">Pizza</option>
        <option value="Tacos">Tacos</option>
        <option value="Humburger">Humburger</option>
      </select>
    </div> */}
  
    <div className="mb-6 mt-8">
      <label for="restaurentDescription" className="block mb-2  font-medium text-gray-900 ">Description</label>
      <textarea  id="restaurentDescription" rows="9"  className="bg-gray-50 border h-[166px] text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product description"></textarea>
  
    </div>
  
  {/* <label className="block mb-2  font-medium " for="user_avatar">restaurentemail Image</label>
  <input className="block w-[500px] min-w-[250px] h-[45px]   border border-gray-300 rounded-lg cursor-pointer bg-gray-50 text-gray-400 outline-none  placeholder-gray-400 " aria-describedby="user_avatar_help" id="user_avatar"  type="file" />
   */}
  
    {/* <label className="relative inline-flex items-center mb-4 cursor-pointer mt-8">
    <input type="checkbox" value="" className="sr-only peer"/>
    <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-[var(--primary-color)]"></div>
    <span className="ml-3 font-medium ">Available</span>
  </label> */}
  {isButtonClicked && (<div class="p-4 mb-10 text-sm text-green-800 rounded-lg bg-green-200  w-[40%] ml-8 mr-auto" role="alert">
    <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
  </div>)}
  
  <button onClick={handleButtonClick} type="submit" className="  text-white border  bg-[var(--primary-color)]  font-medium rounded-lg text-lg px-8 py-2 text-center w-fit  block mt-8">Save</button>
  </form>
    </div>
  )
}

export default Profile
