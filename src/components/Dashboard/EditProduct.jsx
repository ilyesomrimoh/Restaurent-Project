import NavBar from './NavBar'
import ProductForm from './ProductForm'
import FoodCard from './FoodCard'

import { useState , useContext  ,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../config/firebase_config';
import { updateDoc , doc, collection } from "firebase/firestore"; 
import { storage } from '../../config/firebase_config';
import { getDownloadURL,uploadBytesResumable, ref } from 'firebase/storage';
import { UserContext } from '../../contexts/UserContext';


const EditProduct = () => {

  const {user,getMenuItems, menuItems} = useContext(UserContext);
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('editProduct')));
  const [msg , setMsg] = useState("Hello there Loading ...")
  const [showMsg , setShowMsg] = useState(false);
  const [err , setErr] = useState(false);

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const nav = useNavigate();
  const fileInputRef = useRef(null);


  function editItem(e){
    const newItemRef = doc(collection(db, "Items") , formData.id);
    let catg;
    switch(formData.category) {
      case 'Humburger':
        catg ='/categories/t1WsG2IJPEEaqaPoixzg';
        break;
      case 'Tacos':
      catg ='/categories/T3K51fYLPKnjBFyEGw3j';
        break;
        case 'Pizza':
       catg='/categories/4FkGSdyp2cADywEl1ikk';
        break;
        default:
          catg=""
        
    }
    const names = menuItems.map((item)=> item.name );
    if (formData.name in names) {
      setMsg("Product with same name exists already !");
      setShowMsg(true);
      setErr(true);
      return;
    }
    if (!fileInputRef.current.files[0]) {
      console.log("no file");
      setErr(false);
      setMsg("Updating menu item ...");
      setShowMsg(true);
      updateDoc(newItemRef, {
        category:formData.category,
        description:formData.description,
        name:formData.name,
        price:formData.price,
        available:true,
        categoryRef:catg,
      }).then(()=>{
        setErr(false);

        setMsg("Done !");
        getMenuItems();
        setShowMsg(false);
        setIsButtonClicked(true);
        nav('/dashboard/menu');
        
      }).catch((error)=>{
        setMsg(error.message);
        setErr(true);
        setShowMsg(true);
      });
      return;

    }else{
    const names = menuItems.map((item)=> item.name );
    if (formData.name in names) {
      setMsg("Product with same name exists already !");
      setShowMsg(true);
      setErr(true);
      return;
    }
    const restauRef = ref(storage, `Restaurents/${user.uid}/items/${formData.name}`);

    const uploadTask = uploadBytesResumable(restauRef, fileInputRef.current.files[0]);
    setErr(false);
    setMsg("Updating menu item ...");
    setShowMsg(true);
    //setIsUploading(true);
    uploadTask.on('state_changed', 
      (snapshot) => {
        console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100); 
      }, 
      (error) => {
        //setIsUploading(false)
        setMsg(error.message);
        setErr(true);
        setShowMsg(true);

    }, 
    () => {
      getDownloadURL(restauRef).then((url) => {
        updateDoc(newItemRef, {
          category:formData.category,
          description:formData.description,
          name:formData.name,
          photoId:url,
          price:formData.price,
          restaurentId:user.uid,
          available:true,
          categoryRef:catg,
        }).then(()=>{
          setErr(false);

          setMsg("Done !");
          getMenuItems();
          setShowMsg(false);
          setIsButtonClicked(true);
          nav('/dashboard/menu');
          
        });
    });

    }
  );
  }
  
    }

  // useEffect(() => {
  //   document.title = "Edit Product";
  //   //get an element from local storage
  //   const product = JSON.parse(localStorage.getItem('editProduct'));
  //   //set the state of the form
  //   setFormData(product);

  // }, [])

  return (
    <div className='w-full'>
     <NavBar />
     {showMsg && (<div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-black bg-opacity-40 z-40">
    <div className='absolute top-2/4 left-2/4 -translate-x-2/4 p-10 -translate-y-2/4 z-10 w-96 h-40'>
      <div className={!err ? "bg-green-100 border border-green-400 text-xl text-green-700 p-8 rounded relative ":"bg-red-100 border border-red-400 text-xl text-red-700 p-8 rounded relative " } role="alert">
        <span className='pb-10'><strong className="font-bold text-2xl mb-8">Wait Please !<br></br></strong></span>
        <span className="block sm:inline">{msg}</span>
        {err && (<span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={()=> setShowMsg(false)}>
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>)}
      </div>
      </div>
    </div>)}
     <h2 className='font-bold m-4 mb-7 mt-7'>Edit Product</h2>
    
     <div className='flex justify-start '>
     <ProductForm fileRef={fileInputRef} formData={formData} setFormData={setFormData} AddItem={editItem} isButtonClicked={isButtonClicked} BtnTitle = "Update" />
      <div className='self-center '><FoodCard data={formData}  /> </div>
    </div>
    </div>
  )
}

export default EditProduct
