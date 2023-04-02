import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useEffect, useContext } from 'react';
import { auth } from '../config/firebase_config';
import { onAuthStateChanged } from 'firebase/auth';

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
    <div>
        {user && <div style={{textAlign : 'center', width: '100%', height: '100vh',paddingTop: '20vh'}}>Welcome to your Dashboard <span className='red-text' >{user.email}</span> {user.displayName && `your name is ${user.displayName}`}</div>}
    </div>
  )
}

export default Dashboard