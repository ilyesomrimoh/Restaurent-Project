import React from 'react'

const PopUp = ({setcategoryPopUp}) => {
  return (
        <div className='absolute w-[100vw] h-[100vh] top-0 left-0 bg-black bg-opacity-50 z-40'>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 z-50 ">
                <div className="relative bg-white rounded-lg shadow ">
                    <button type="button"  onClick={()=>setcategoryPopUp(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platfo</h3>
                        <form className="space-y-6" action="#">
                            <div>
                                <label for="category-name" className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                                <input type="category-name" name="category-name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="category name" required />
                            </div>
                            <button type="submit" onClick={()=>{}} className="w-full text-white bg-[var(--green-ghost)] hover:bg-[var(--green-color)] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add category</button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>


  )
}

export default PopUp
