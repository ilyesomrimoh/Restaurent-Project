import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
function PasswordForgot() {
    const [email, setEmail] = useState('');
    const [isAlert, setIsAlert] = useState(true);
    const [errMsg, setErrMsg] = useState("");
    const [errCode, setErrCode] = useState('');

    const resetPass = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(email).then(() => {
                setErrMsg("Password reset email sent!");
                setIsAlert(true);
            }).catch((error) => {
            
                setErrCode(error.code);
                setErrMsg(error.message);
                setIsAlert(true);
            });
    }
  return (
    <div className='w-full h-screen flex flex-col justify-start items-center pt-32'>
        {isAlert && (<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Error {errCode}: <br/></strong>
  <span className="block sm:inline">{errMsg}.</span>
  <span onClick={()=> setIsAlert(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>)}
        <h2 className='mb-10'>Password Reset: {email}</h2>
        <form onSubmit={(e)=> resetPass(e)} className='flex flex-col justify-center items-center gap-5' action=''>
            <input onChange={(e)=> setEmail(e.target.value) } value={email} type="email" placeholder='Email' className='border-2 border-gray-300 rounded-md p-2 w-80' />
            <button  className='bg-blue-500 text-white rounded-md p-2 w-80'>Reset Password</button>
        </form>
    </div>
  )
}

export default PasswordForgot