import SignUp from "./components/SignUp_Login/SignUp";
import LandingPage from "./Views/LandingPage";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import ErrorPage from "./Views/ErrorPage";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<LandingPage/>,
      errorElement: <ErrorPage/>
    },
    {
      path:'signup',
      element:<SignUp/>,
    },
  ])
  return (
   <RouterProvider router={router} />
  );
}

export default App;
