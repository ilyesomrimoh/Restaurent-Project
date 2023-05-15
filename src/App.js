import Login from "./components/SignUp_Login/Login";
import ErrorPage from "./Views/ErrorPage";
import SignUp from "./components/SignUp_Login/SignUp";
import LandingPage from "./Views/LandingPage";
import Dashboard from "./Views/Dashboard";

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
function App() {
  const [user, setUser] = useState(null);
  const [isAuth,setIsAuth] = useState(false);
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
      ]
    },
    {
      path: "signup",
      element: <SignUp />,
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
      <UserContext.Provider value={{user,setUser,isAuth,setIsAuth, logOut}}>
        <RouterProvider router={router} /> 
      </UserContext.Provider>
    </>
  );
}

export default App;
