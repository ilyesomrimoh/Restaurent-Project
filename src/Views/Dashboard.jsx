import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect , useContext } from 'react';
import { auth } from '../config/firebase_config';
import { onAuthStateChanged } from 'firebase/auth';
import Sidebar from '../components/Dashboard/Sidebar';
import { db } from '../config/firebase_config';
import { collection, getDoc, query , where, doc, onSnapshot } from 'firebase/firestore';
import { UserContext } from '../contexts/UserContext';


const Dashboard = () => {
    const navigate = useNavigate();
    const {setOrders, setRestau ,  user ,getReviews, getMenuItems,setComplOrd ,setCanceledOrd ,setActiveOrd , setPendingOrd} = useContext(UserContext);

    

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(user) => {
        if (!user) {
          navigate('/login');
        }
      });
      if (user) {
        
        const restRef = doc(db,"Restaurents",user.uid);
        getDoc(restRef).then((doc) => {
          if (doc.exists()) {
            setRestau(doc.data());
            const ordersRef = collection(db,"Orders");
            const q = query(ordersRef, where("restaurentId", "==", (user && user.uid)));
            onSnapshot(q, (snapshot) => {
              let ord = []
              setActiveOrd(0);
              setComplOrd(0);
              setCanceledOrd(0);
              setPendingOrd(0);


              snapshot.docs.forEach((doc)=>{
                ord.push({
                  id: doc.id,
                  ...doc.data()
                })
                let stat = doc.data()["status"]
                if (stat === "completed") {
                  setComplOrd ((old) => old+= 1)
                  
                }else if (stat === "pending") {
                  setPendingOrd ((old) => old+= 1)
                }else if(stat ==="active") {
                  setActiveOrd((old) => old += 1)
                }else {
                  setCanceledOrd((old)=> old+=1 )
                }
                
              })
              
              setOrders(ord);

            })
            //getting items

            getMenuItems();
            getReviews();
            // getDocs(q).then((docs) => {
            //   const data = docs.docs.map((doc) => ({
            //     id: doc.id,
            //     ...doc.data()
            //   }))
            //   setOrders(data);
            // })
          } else {
            navigate('/dashboard/profile');
          }
          })
      }

      return unsubscribe;
      },[user]);
  return (
     <div className='flex h-screen bg-[var(--serve-section-color)] overflow-y-auto'>

    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default Dashboard