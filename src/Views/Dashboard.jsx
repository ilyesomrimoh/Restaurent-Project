import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useEffect, useContext } from 'react';
import { auth } from '../config/firebase_config';
import { onAuthStateChanged } from 'firebase/auth';
import Sidebar from '../components/Dashboard/Sidebar';

const Dashboard = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
          if (!user) {
            navigate('/login');
          }
        });
        return unsubscribe;
      });
  return (
    <div className='flex h-screen bg-gray-200'>
     
        <Sidebar />
        <div className="flex-1 p-4">
          {user && <h1 className='text-center text-lg p-20'>Welcome to your Dashboard <span className='red-text' >{user.email}</span> {user.displayName && `your name is ${user.displayName}`}</h1>}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris quis velit consequat aliquam. Donec tincidunt malesuada dui ut venenatis. Proin commodo luctus lorem ut porttitor. Suspendisse bibendum commodo enim, at interdum sapien dapibus eget. Nam vel erat sapien. Duis convallis nisi eget velit luctus, ut suscipit nunc convallis. Nullam dignissim, arcu eget blandit pulvinar, velit velit vehicula enim, vel lobortis risus tortor non magna. Suspendisse potenti. Nam pretium consectetur tellus, in varius odio lobortis eu. Donec eget felis et augue eleifend ultricies in eu dolor. Pellentesque sit amet augue ut ante placerat laoreet. Nulla facilisi.</p>
        </div>

    </div>
  )
}

export default Dashboard