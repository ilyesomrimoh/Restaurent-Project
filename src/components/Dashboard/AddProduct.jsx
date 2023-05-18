import React from 'react'
import NavBar from './NavBar'
import ProductForm from './ProductForm'
import FoodCard from './FoodCard'
import { useState , useContext } from 'react'
import { db } from '../../config/firebase_config';
import { setDoc , doc, collection } from "firebase/firestore"; 

import { UserContext } from '../../contexts/UserContext';

const AddProduct = () => {
  const {user} = useContext(UserContext);
 console.log(user);
  const [formData, setFormData] = useState({
    productName: 'Product Name',
    price: 'price',
    category: 'category',
    description: 'description ...',
    imageUrl: '/images/Assets/food.jpg',
    available: false,
  });

  function AddItem(e){
    const newItemRef = doc(collection(db, "Items"));
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
    setDoc(newItemRef, {
        category:formData.category,
        description:formData.description,
        name:formData.productName,
        photoId:'',
        price:formData.price,
        restaurentId:user.uid,
        available:true,
        categoryRef:catg,
      }).then(()=>{
        console.log(' yesssss add sucssesfully !!')
      });
  
    }

  return (
    <div className='w-full'>
     <NavBar />
     <h2 className='font-bold m-4 mb-7 mt-7'>Add Product </h2>
    <div className='flex justify-start '>
    <ProductForm  BtnTitle = "Add Product" formData={formData} setFormData={setFormData} AddItem={AddItem} />
   <div className='self-center '><FoodCard data={formData}  /> </div>
    </div>
   
   
    </div>
  )
}

export default AddProduct
