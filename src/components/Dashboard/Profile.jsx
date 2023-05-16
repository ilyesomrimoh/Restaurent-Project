import NavBar from './NavBar'
import  { useRef , useState , useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { db } from '../../config/firebase_config';
import { setDoc , doc } from 'firebase/firestore';
const Profile = () => {
    const {user} = useContext(UserContext);
     const [isButtonClicked, setIsButtonClicked] = useState(false);
     const [name , setName] = useState('');
     const [phone , setPhone] = useState();
     const [description , setDescription] = useState('');
     const [delevryPrice , setdelevryPrice] = useState();
     const [mapAddress , setmapAddress] = useState();
     const [email , setEmail] = useState('');
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
      const file = event.target.files[0];

      // Process the selected file here
    };
    const [isHovered, setIsHovered] = useState(false);
    const fileInputRef = useRef(null);
    // add to data base function
    function AddRestrant(e){
      e.preventDefault();
      setDoc(doc(db, "Restaurents", user.uid), {
        name: name,
        mapAddress:mapAddress,
        activeOrders:0,
        phone:phone,
        deliveryPrice:delevryPrice,
        email:user.email,
        gallery:[""],
        isActive:true,
        pendingOrders:0,
        photoId:"",
        reviews:[""],
      }).then(()=>{
        console.log('success!!');
        handleButtonClick();
      });
      
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

 <div className='flex flex-wrap  items-center justify-start lg:gap-40 w-full'>
 <div>
 <div className="mb-6 mt-8">
      <label htmlFor="restaurentname" className="block mb-2  font-medium text-gray-900 ">Restaurent Name</label>
      <input type="text" id="restaurentname"   onChange={e => setName(e.target.value)} value={name} className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product name" required />
    </div>
  
    <div className="mb-6 mt-8">
      <label htmlFor="restaurentemail" className="block mb-2  font-medium text-gray-900 ">Email</label>
      <input type="email" id="restaurentemail" onChange={e => setEmail(e.target.value)}  value={email} className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 "  placeholder="Enter product price" required />
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
      <label htmlFor="restaurentprice" className="block mb-2  font-medium text-gray-900 ">Delivery Price</label>
      <input type="number" id="restaurentprice"   onChange={e => setdelevryPrice(e.target.value)}  value={delevryPrice} className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product name" required />
    </div>
    
    <div className="mb-6 mt-8">
      <label htmlFor="restaurentDescription" className="block mb-2  font-medium text-gray-900 ">Description</label>
      <textarea  id="restaurentDescription" rows="9"  onChange={e => setDescription(e.target.value)}  value={description} className="bg-gray-50 border h-[166px] text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product description"></textarea>
  
    </div>
  

  {isButtonClicked && (<div className="p-4 mb-10 text-sm text-green-800 rounded-lg bg-green-200  w-[40%] ml-8 mr-auto" role="alert">
    <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
  </div>)}
  
  <button type="submit" className="  text-white border  bg-[var(--primary-color)]  font-medium rounded-lg text-lg px-8 py-2 text-center w-fit  block mt-8">Save</button>
  </form>
    </div>
  )
}

export default Profile
