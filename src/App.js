import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Serve from './components/Serve';
import Faq from './components/Faq';
import Testmonials from './components/Testimonials';
import Download from './components/Download';

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
     <Download/>
     </>

  );
}

export default App;
