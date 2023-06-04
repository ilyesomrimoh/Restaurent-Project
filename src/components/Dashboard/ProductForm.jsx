import React from 'react'

const ProductForm = ({BtnTitle , formData , setFormData , AddItem ,fileRef ,isButtonClicked }) => {
  const { name, price, category, description, photoId, available } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (e.target.type === 'file') {
      const file = e.target.files[0];
      setFormData((prevData) => ({ ...prevData, [name]: file }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload =  function () {
      setFormData((prevData) => ({ ...prevData, photoId: reader.result }));
    }
      if (file) {
        reader.readAsDataURL(file);
      }
  };
    const handleButtonClick = (e) => {
      e.preventDefault();
      AddItem();
      
    };
  return (
    <form className='m-7 w-1/2 p-7'>

    <div className="mb-6 mt-8">
      <label htmlFor="name" className="block mb-2  font-medium text-gray-900 ">Product Name</label>
      <input type="text" id="name"  name='name' onChange={handleInputChange} className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product name" required />
    </div>
  
    <div className="mb-6 mt-8">
      <label htmlFor="price" className="block mb-2  font-medium text-gray-900 ">Price</label>
      <input type="number" id="price"  name='price' onChange={handleInputChange}className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 "  placeholder="Enter product price" required />
    </div> 
    <div className="form-group flex items-center gap-4 justify-start mt-8">
      <label htmlFor="category" className="mb-2  font-medium text-gray-900 ">Category</label>
      <select defaultValue={"Pizza"} id="category"  name='category' onChange={handleInputChange} className="border  border-gray-300 text-gray-900  rounded-lg  block w-32 p-1 px-4 ">
        <option value="Pizza">Pizza</option>
        <option value="Tacos">Tacos</option>
        <option value="Humburger">Humburger</option>
      </select>
    </div>
  
    <div className="mb-6 mt-8">
      <label htmlFor="description"  className="block mb-2  font-medium text-gray-900 ">Description</label>
      <textarea  id="description" name='description' onChange={handleInputChange} rows="9"  className="bg-gray-50 border h-[166px] text-gray-900 text-sm rounded-lg  block w-[500px] min-w-[250px] p-2.5  border-gray-300 outline-none focus:border-gray-400 placeholder-gray-400 " placeholder="Enter product description"></textarea>
  
    </div>
  
  <label className="block mb-2  font-medium " htmlFor="user_avatar">Product Image</label>
  <input ref={fileRef} name='photoId' onChange={handleImage} className="block w-[500px] min-w-[250px] h-[45px]   border border-gray-300 rounded-lg cursor-pointer bg-gray-50 text-gray-400 outline-none  placeholder-gray-400 " aria-describedby="user_avatar_help" id="user_avatar" accept="image/*" type="file" />
  
  
    <label className="relative inline-flex items-center mb-4 cursor-pointer mt-8">
    <input type="checkbox" value="" className="sr-only peer"/>
    <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-[var(--primary-color)]"></div>
    <span className="ml-3 font-medium ">Available</span>
  </label>
  {isButtonClicked && (<div className="p-4 mb-10 text-sm text-green-800 rounded-lg bg-green-200  w-[40%] ml-8 mr-auto" role="alert">
    <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
  </div>)}
  
  <button onClick={(e)=>handleButtonClick(e)} type="submit" className="  text-white border  bg-[var(--primary-color)]  font-medium rounded-lg text-lg px-8 py-2 text-center w-fit  block mt-8">{BtnTitle}</button>
  </form>
  )
}

export default ProductForm
