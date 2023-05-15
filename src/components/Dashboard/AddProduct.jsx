import React from 'react'
import NavBar from './NavBar'
import ProductForm from './ProductForm'

const AddProduct = () => {


  return (
    <div className='w-full'>
     <NavBar />
     <h2 className='font-bold m-4 mb-7 mt-7'>Add Product</h2>
    
     <ProductForm BtnTitle = "Add Product" />
   
    </div>
  )
}

export default AddProduct
