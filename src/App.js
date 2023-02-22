import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Serve from './components/Serve';
import Faq from './components/Faq';

function App() {
  return (
    <>
     <div className ='container'>
       <Navbar />
       <Hero /> 
     </div>
     <Serve />
     <Faq />
     </>

  );
}

export default App;
