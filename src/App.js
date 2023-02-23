import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Serve from './components/Serve';
import Faq from './components/Faq';
import Testmonials from './components/Testimonials';

function App() {
  return (
    <>
     <div className ='container'>
       <Navbar />
       <Hero /> 
     </div>
     <Serve />
     <Faq />
     <Testmonials />
     </>

  );
}

export default App;
