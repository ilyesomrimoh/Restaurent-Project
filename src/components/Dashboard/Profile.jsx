import NavBar from './NavBar'
import  { useRef , useState , useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { db } from '../../config/firebase_config';
import { setDoc , doc, updateDoc } from 'firebase/firestore';


const Profile = () => {
    const {user, restau, getRestau} = useContext(UserContext);
     const [isButtonClicked, setIsButtonClicked] = useState(false);
     const [name , setName] = useState(restau?.name);
     const [phone , setPhone] = useState(restau?.phone);
     const [description , setDescription] = useState(restau?.description);
     const [delevryPrice , setdelevryPrice] = useState(restau?.deliveryPrice);
     const [mapAddress , setmapAddress] = useState(restau?.mapAddress);
     const nav = useNavigate();
     const handleButtonClick = () => {
      setIsButtonClicked(true);
      setTimeout(() => {
        nav('/dashboard');
      }, 2000);
    };
    const handleImageClick = () => {
      fileInputRef.current.click();
    };
    const handleImageChange = (event) => {
      //const file = event.target.files[0];

      // Process the selected file here
    };
    const [isHovered, setIsHovered] = useState(false);
    const fileInputRef = useRef(null);
    // add to data base function
    function AddRestrant(e){
      e.preventDefault();
      if (restau) {
        updateDoc(doc(db, "Restaurents", user.uid), {
          name: name,
          mapAddress:mapAddress,
          description:description,
          phone:phone,
          deliveryPrice:delevryPrice,
        }).then(()=>{
          getRestau(user.uid, nav);
          handleButtonClick();
        });

      }else {
        setDoc(doc(db, "Restaurents", user.uid), {
          name: name,
          mapAddress:mapAddress,
          activeOrders:0,
          description:description,
          phone:phone,
          deliveryPrice:delevryPrice,
          email:user.email,
          gallery:[""],
          isActive:true,
          pendingOrders:0,
          photoId:"",
          reviews:[""],
        }).then(()=>{
          getRestau(user.uid, nav);

          handleButtonClick();
        });
      }
      
      
    } 
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
     <form className='m-7 w-full p-3 pt-16 '  onSubmit={(e)=>AddRestrant(e)}>

 <div className='flex flex-wrap gap-0 items-center justify-center xl:justify-start  xl:gap-20 w-full'>
 <div className='mr-5'>
 <div className="mb-6 mt-8">
      <label htmlFor="restaurentname" className="block mb-2 font-medium text-gray-900 ">Restaurent Name</label>
      <input type="text" id="restaurentname"   onChange={e => setName(e.target.value)} value={name} className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product name" required />
    </div>
  
    <div className="mb-6 mt-8">
      <label htmlFor="restaurentprice" className="block mb-2  font-medium text-gray-900 ">Delivery Price</label>
      <input type="number" id="restaurentprice"   onChange={e => setdelevryPrice(e.target.value)}  value={delevryPrice} className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product name" required />
    </div>
 </div>
  <div>
  <div className="mb-6 mt-8">
      <label htmlFor="restaurentphone" className="block mb-2  font-medium text-gray-900 ">Phone</label>
      <input type="text" id="restaurentphone" onChange={e => setPhone(e.target.value)}  value={phone} className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 "  placeholder="Enter product price" required />
    </div> 
    <div className="mb-6 mt-8">
      <label htmlFor="restaurentgooglemap" className="block mb-2  font-medium text-gray-900 ">Google Map</label>
      <input type="text" id="restaurentgooglemap" onChange={e => setmapAddress(e.target.value)}    value={mapAddress} className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 "  placeholder="Enter product price" required />
    </div> 
  </div>
 </div>
 
    
    <div className="mb-6 mt-8">
      <label htmlFor="restaurentDescription" className="block mb-2  font-medium text-gray-900 ">Description</label>
      <textarea  id="restaurentDescription" rows="9"  onChange={e => setDescription(e.target.value)}  value={description} className="bg-gray-50 border h-[166px] text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product description"></textarea>
  
    </div>
  

  {isButtonClicked && (<div className="p-4  text-xl text-green-800 rounded-lg bg-green-200 w-[50%] " role="alert">
    <span className=" text-2xl font-medium">Success alert!</span> Your Profile Is Updated !
  </div>)}
  
  <button type="submit" className="  text-white border  bg-[var(--primary-color)]  font-medium rounded-lg text-lg px-8 py-2 text-center w-fit  block mt-8">Save</button>
  </form>
    </div>
  )
}

export default Profile
