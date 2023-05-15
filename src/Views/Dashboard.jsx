import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../config/firebase_config';
import { onAuthStateChanged } from 'firebase/auth';
import Sidebar from '../components/Dashboard/Sidebar';

const Dashboard = () => {
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
     <div className='flex h-screen bg-[var(--serve-section-color)]'>
      <Sidebar/>
      < Outlet/>
      

    </div>
  )
}

export default Dashboard