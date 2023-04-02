// import LandingPage from "./Views/LandingPage";
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
