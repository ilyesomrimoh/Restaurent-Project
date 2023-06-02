import Login from "./components/SignUp_Login/Login";
import ErrorPage from "./Views/ErrorPage";
import SignUp from "./components/SignUp_Login/SignUp";
import LandingPage from "./Views/LandingPage";
import Dashboard from "./Views/Dashboard";
import { doc, getDoc, query,collection,where,getDocs  } from "firebase/firestore";
import { db } from "./config/firebase_config";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useState, useEffect} from "react";
import { auth } from "./config/firebase_config";
import {signOut, onAuthStateChanged} from "firebase/auth";
import Profile from './components/Dashboard/Profile';
import Orders from './components/Dashboard/Orders';
import Menu from './components/Dashboard/Menu';
import Analytics from './components/Dashboard/Analytics';
import AddProduct from "./components/Dashboard/AddProduct";
import PasswordForgot from "./components/SignUp_Login/PasswordForgot";
import EditProduct from "./components/Dashboard/EditProduct";
function App() {
  const [user, setUser] = useState(null);
  const [isAuth,setIsAuth] = useState(false);
  const [restau, setRestau] = useState(null);
  const [orders, setOrders] = useState([])
  const [menuItems, setMenuItems] = useState([])

  const getRestau = (uuid ) => {
    const restRef = doc(db,"Restaurents",uuid);
    getDoc(restRef).then((doc) => {
      if (doc.exists()) {
        const data =  doc.data();
        setRestau(data);
       
      }
    }).catch((error) => { 
      console.log(error);
      setRestau(null);
    })
  }
  const getMenuItems = () => {
    const itemsRef = collection(db,"Items");
    if (user) {
      const q = query(itemsRef, where("restaurentId", "==",  user.uid));
      getDocs(q).then((docs) => {
        const data = docs.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          setMenuItems(data);
      }).catch((error) => {
        console.log(error);
      })

    }
  }
  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
      setIsAuth(false);
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setUser(user);
        setIsAuth(true);
      }
    });
    return unsubscribe;
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children :[
        {
          path: "/dashboard",    
           element: <Analytics />,
        },
        {
          path: "/dashboard/profile",
           element: <Profile />,
        },
        {
          path: "/dashboard/menu",
           element: <Menu />,
          errorElement: <ErrorPage />,
    
        },
        {
          path: "/dashboard/orders",
           element: <Orders />,
          errorElement: <ErrorPage />,
    
        },{
          path: "/dashboard/addproduct",
           element: <AddProduct />,
          errorElement: <ErrorPage />,
    
        },
        {
          path: "/dashboard/editproduct",
           element: <EditProduct />,
          errorElement: <ErrorPage />,
    
        },
      ]
    },
    {
      path: "signup",
      element: <SignUp />,
      errorElement: <ErrorPage />,

    },
    {
      path: "reset-password",
      element: <PasswordForgot />,
      errorElement: <ErrorPage />,

    },
    {
      path: "login",
      element: <Login />,
      errorElement: <ErrorPage />,

    },
        
  ]);
 
  return (
    <>
      <UserContext.Provider value={{user,setUser,isAuth,setIsAuth,menuItems , getMenuItems,orders,restau,setRestau, setOrders,getRestau, logOut}}>
        <RouterProvider router={router} /> 
      </UserContext.Provider>
    </>
  );
}

export default App;
