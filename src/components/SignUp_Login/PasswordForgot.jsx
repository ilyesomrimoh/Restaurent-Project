import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import {  auth } from "../../config/firebase_config";
import {Link } from 'react-router-dom'

function PasswordForgot() {
    const [email, setEmail] = useState('');
    const [isAlert, setIsAlert] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [isSent, setIsSent] = useState(false);
    const resetPass = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth,email).then(() => {
                setIsSent(true);
                setIsAlert(false);
            }).catch((error) => {
                let errorMessage = "";
              switch (error.code) {
                case "auth/user-not-found":
                  errorMessage = "No user found with that email address.";
                  break;
                case "auth/invalid-email":
                  errorMessage = "The email address is invalid.";
                  break;
                default:
                  errorMessage = "An unknown error occurred. Please try again later.";
              }
                setErrMsg(errorMessage);
                setIsAlert(true);
            });
    }
  return (
    <div className='w-full h-screen flex flex-col justify-start items-center pt-32'>
        
        <Link to="/login">
          <div className="flex absolute top-4 left-2 cursor-pointer space-x-3 bg-[var(--primary-color)]  bg-opacity-40  px-4 py-2 pl-5 rounded-md">
            <img
              src="/images/Assets/Arrow 1.png"
              alt=""
              className="w-4 h-4 self-center"
            />
            <p className="text-white">Back</p>
          </div>
        </Link>
        <h2 className='mb-10'>Password Reset:</h2>
        {isSent &&(<div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success: </strong>
          <span className="block sm:inline pr-6">Email was sent to {email}.</span>
          <span onClick={()=> setIsSent(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>)}
        {isAlert && (<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline pr-6">{errMsg}</span>
          <span onClick={()=> setIsAlert(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
          </span>
        </div>)}
        <form onSubmit={(e)=> resetPass(e)} className='flex  mt-9 flex-col justify-center items-center gap-5' action=''>
            <input onChange={(e)=> setEmail(e.target.value) } value={email} type="email" placeholder='Email' className='border-2 border-gray-300 rounded-md p-2 w-80' />
            <div className='flex w-full justify-center gap-5 items-center'>
            <button  className={` bg-[var(--primary-color)]  text-white rounded-md p-3  w-80`}>{isSent ? 'Send Reset Password Email' : 'Resend Email'}</button>
           
            </div>
        </form>

    </div>
  )
}

export default PasswordForgot