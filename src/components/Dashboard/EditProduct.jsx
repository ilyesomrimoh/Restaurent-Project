import React from 'react'
import NavBar from './NavBar'
import ProductForm from './ProductForm'

const EditProduct = () => {
  return (
    <div className='w-full'>
     <NavBar />
     <h2 className='font-bold m-4 mb-7 mt-7'>Edit Product</h2>
    
     <ProductForm BtnTitle = "Update" />
   
    </div>
  )
}

export default EditProduct
