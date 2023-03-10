// import LandingPage from "./Views/LandingPage";
import Login from "./components/SignUp_Login/Login";

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
    {
      path:'login',
      element:<Login/>,
    },
  ])
  return (
    <>
      <Login />
    </>
  );
}

export default App;
