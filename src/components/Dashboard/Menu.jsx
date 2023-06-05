import React from 'react'
import FoodCard from './FoodCard'
import NavBar from './NavBar'
import { useState,useContext, useEffect } from 'react'
import DropDown from './DropDown'
import { Link } from 'react-router-dom'
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/firebase_config';
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import PopUp from './PopUp'
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [msg , setMsg] = useState("");
  const [showMsg , setShowMsg] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const nav = useNavigate();
  const { menuItems, restau,getMenuItems } = useContext(UserContext);
  const [finalitems , setFinalitems] = useState(menuItems);
  const [category , setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [categoryPopUp , setcategoryPopUp] = useState(false);
  
  const deleteItem = (id) => {
    const docRef = doc(db,"Items", id);
    setMsg(`Deleting Product ${id}...`);
    setShowMsg(true);
    deleteDoc(docRef).then(()=> {
        getMenuItems();
        setShowMsg(false); 
    })
  }
  useEffect(() => {
    if (restau === null) {
      nav('/dashboard/profile')
    }
  }, [restau, nav])



  useEffect(() => {
    let filtereditems = [];

    switch (category) {
      case 'All':
        filtereditems = menuItems;
        break;
 
        default:
          filtereditems = menuItems.filter((item) => item.category === category);
          break;
    }

    filtereditems = filtereditems.filter((item) =>{
      const itemName = item.name.toLowerCase();
      const query = searchQuery.toLowerCase();
      return itemName.includes(query) ;
    }
    
  );
    setFinalitems(filtereditems);
  }, [menuItems, category , searchQuery]);

  return (
    <div className='w-full mb-20 h-fit '>
      <NavBar />
      {showMsg && (<div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-black bg-opacity-40 z-40">
    <div className='absolute top-2/4 left-2/4 -translate-x-2/4 p-10 -translate-y-2/4 z-10 w-96 h-40'>
      <div className="bg-red-100 border border-red-400 text-xl text-red-700 p-8 rounded relative "  role="alert">
        <span className='pb-10'><strong className="font-bold text-2xl mb-8">Wait Please !<br></br></strong></span>
        <span className="block sm:inline">{msg}</span>
        
      </div>
      </div>
    </div>)}
      <h2 className='font-bold m-4 mb-7'>Menu</h2>
    <div className='flex justify-around items-center m-10 gap-3'>
      <div></div>
      <div className="flex  w-1/2 relative min-w-[400px]">
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0  w-[130px] lg:w-36 z-10 inline-flex items-center py-2 px-4  text-xs lg:text-sm font-medium text-center text-gray-900 border-gray-300 bg-gray-100 border  rounded-l-lg    " type="button" onClick={toggleMenu} >{category} <img  className="w-4 h-4 ml-auto -rotate-90" src="/images/icons/icons8-less-than-100 (2).png" alt="" /> </button>
        {showMenu && ( <DropDown  category ={category} setCategory = {setCategory} /> )}
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300  outline-none " placeholder="Search Products ..."  onChange={(e) => setSearchQuery(e.target.value)} required />
           
        </div>
    </div>
<Link to="/dashboard/addproduct"><button type="button" className="text-[var(--primary-color)] text-white border  bg-[var(--green-color)]  font-medium rounded-lg text-sm px-4 py-2 text-center ">Add New item</button>
</Link>    
<button  type="button" onClick={()=>setcategoryPopUp(true)} className="text-[var(--primary-color)] text-white border  bg-[var(--green-color)]  font-medium rounded-lg text-sm px-4 py-2 text-center ">Add New category</button>
   
</div>
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-fit gap-5 gap-y-10 ml-auto mr-auto'>
      {finalitems.length === 0 ? <div className='text-center'>No Items Yet</div> : (finalitems.map((item,ind) => (
        <FoodCard key={ind} data={item} deleteHandler={deleteItem}/>
      )))}
      
    </div>
     {categoryPopUp && (<PopUp setcategoryPopUp={setcategoryPopUp} /> )} 
    </div>
  )
}

export default Menu
