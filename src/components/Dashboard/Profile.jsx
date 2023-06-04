import NavBar from './NavBar'
import  { useRef ,useEffect, useState , useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { db } from '../../config/firebase_config';
import { setDoc , doc, updateDoc } from 'firebase/firestore';
import { storage } from '../../config/firebase_config';
import { getDownloadURL,uploadBytesResumable,ref } from 'firebase/storage';

const Profile = () => {
  const {user, restau, getRestau} = useContext(UserContext);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
     const [name , setName] = useState(restau?.name);
     const [phone , setPhone] = useState(restau?.phone);
     const [description , setDescription] = useState(restau?.description);
     const [delevryPrice , setdelevryPrice] = useState(restau?.deliveryPrice);
     const [mapAddress , setmapAddress] = useState(restau?.mapAddress);
     const [msg , setMsg] = useState('');
     const [showMsg , setShowMsg] = useState(false);
     const nav = useNavigate();
     const [isHovered, setIsHovered] = useState(false);
     const fileInputRef = useRef(null);
     const [err , setErr] = useState(false);
     

     useEffect(() => {
        if (user) {
          if (restau) {
            setName(restau.name);
            setPhone(restau.phone);
            setDescription(restau.description);
            setdelevryPrice(restau.deliveryPrice);
            setmapAddress(restau.mapAddress);
            setShowMsg(false);
            setErr(false);
          }else {
            setMsg("You don't have a restaurent yet, Please Complete your profile");
            setErr(true);
            setShowMsg(true);
          }
        }
     }, [restau])
     
     
   
    const handleImageClick = () => {
      fileInputRef.current.click();
    };
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      const preview = document.getElementById('profile-img');
      const reader = new FileReader();
      reader.onload =  function () {
        preview.src = reader.result;
      }
        if (file) {
          reader.readAsDataURL(file);
        }

    };


    // add to data base function
    function AddRestrant(e){
      e.preventDefault();
      if (restau) {
        if (fileInputRef.current.files[0]) {
            const restauRef = ref(storage, `Restaurents/${user.uid}/profile`);
            const uploadTask = uploadBytesResumable(restauRef, fileInputRef.current.files[0]);
            setMsg("Updating your profile please wait ...");
            setErr(false);
            setShowMsg(true);
            uploadTask.on('state_changed', 
              (snapshot) => {
                console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // const prgrs = document.getElementById('progressBar');
                // prgrs.style.width = progress + "%";
                
              }, 
              (error) => {
                setMsg(error.message);
                setErr(true);
                setShowMsg(true);

            }, 
            () => {
              getDownloadURL(restauRef).then((newurl) => {
                updateDoc(doc(db, "Restaurents", user.uid), {
                  name: name,
                  mapAddress:mapAddress,
                  description:description,
                  phone:phone,
                  rating: 4.1,
                  deliveryPrice:delevryPrice,
                  photoId:newurl,
                  TotalIncome:restau.TotalIncome,
                }).then(()=>{
                  setErr(false)
                  setMsg("Done");
                  getRestau(user.uid);
                  setShowMsg(false);
                  //setIsUploading(false);
                  setIsButtonClicked(true);
                  nav('/dashboard');
               
                });
            });
            })
          }else{
            setMsg("Updating your profile please wait ...");
            setErr(false);
            setShowMsg(true);
            updateDoc(doc(db, "Restaurents", user.uid), {
              name: name,
              mapAddress:mapAddress,
              description:description,
              phone:phone,
              deliveryPrice:parseInt(delevryPrice),
              photoId:restau.photoId,
              TotalIncome:restau.TotalIncome,
            }).then(()=>{
              getRestau(user.uid);
              //setIsUploading(false);
              setIsButtonClicked(true);
              nav('/dashboard');
         
            });
          }
          
      
      }else {

        if (!fileInputRef.current.files[0]) {
          setMsg("Please upload a photo");
          setErr(true);
          setShowMsg(true);
          return;
        }
        const restauRef = ref(storage, `Restaurents/${user.uid}/profile`);

        const uploadTask = uploadBytesResumable(restauRef, fileInputRef.current.files[0]);
        //setIsUploading(true);
        uploadTask.on('state_changed', 
          (snapshot) => {
            console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // const prgrs = document.getElementById('progressBar');
            // prgrs.style.width = progress + "%";
            
          }, 
          (error) => {
            //setIsUploading(false)
            setMsg(error.message);
            setErr(true);
            setShowMsg(true);

        }, 
        () => {
          getDownloadURL(restauRef).then((url) => {
            setDoc(doc(db, "Restaurents", user.uid), {
              name: name,
              mapAddress:mapAddress,
              description:description,
              rating: 4.1,
              phone:phone,
              deliveryPrice:parseInt(delevryPrice),
              email:user.email,
              isActive:true,
              TotalIncome:0,
              photoId:url,
            }).then(()=>{
              setErr(false);
              setMsg("Done !");
              getRestau(user.uid);
              setShowMsg(false);
              setIsButtonClicked(true);
              nav('/dashboard');
          
            });
        });
        }
      );
        
      }
      
      
    } 
  return (
    <>
    {showMsg && (<div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-black bg-opacity-40 z-40">
    <div className='absolute top-2/4 left-2/4 -translate-x-2/4 p-10 -translate-y-2/4 z-10 w-96 h-40'>
      <div className={!err ? "bg-blue-100 border border-blue-400 text-xl text-blue-700 p-8 rounded relative ":"bg-red-100 border border-red-400 text-xl text-red-700 p-8 rounded relative " } role="alert">
        <span className='pb-10'><strong className="font-bold text-2xl mb-8">Wait Please !<br></br></strong></span>
        <span className="block sm:inline">{msg}</span>
        {err && (<span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={()=> setShowMsg(false)}>
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>)}
      </div>  
      </div>
    </div>)}
    {/* {isUplaoding && (<>
            <div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-black bg-opacity-40 z-40">
              <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 w-96 h-40'>
                <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div id='progressBar' className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"></div>
                </div>
              </div>
            </div>
</>)}   */}
    <div className='w-full relative'>
      < NavBar />
      
     
      <div className='w-full h-80 profile-back  relative'>
        <div className='absolute bottom-[-80px] left-[calc(50%-80px)] w-40 h-40 rounded-full cursor-pointer overflow-hidden '>
          <img id="profile-img" onMouseEnter={() => setIsHovered(true)} accept="image/png, image/gif, image/jpeg" onMouseLeave={() => setIsHovered(false)}  onClick={handleImageClick} className="w-full object-cover  " src={restau?.photoId || "/images/icons/avatar.png"} alt="background" />
          {isHovered && (
              <div className=" absolute top-2/4 bg-black w-full z-10 h-1/2 profile-image flex items-center justify-center pointer-events-none ">
              <img  src="/images/icons/icons8-edit-image-100.png" className='w-10 ' alt="" />
              </div>
            )}
            
            <input type="file" ref={fileInputRef} accept="image/*" hidden  onChange={handleImageChange} />
            
        </div>
        
      </div>
      <form className='m-7 w-full p-3 pt-16 '  onSubmit={(e)=>AddRestrant(e)}>
        <div className='flex flex-wrap gap-0 items-center justify-center xl:justify-start  xl:gap-20 w-full'>
          <div className='mr-5'>
            <div className="mb-6 mt-8">
                  <label htmlFor="restaurentname" className="block mb-2 font-medium text-gray-900 ">Restaurent  Name</label>
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
    </>
  )
}

export default Profile
