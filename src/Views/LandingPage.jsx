import "../App.css";
import LP from "../imports/LandingPageImports";

function LandingPage() {
  return (
    <>
      <div className="container">
        <LP.Navbar />
        <LP.Hero />
      </div>
      <LP.Serve />
      <LP.Faq />
      <LP.Testmonials />
      <LP.Download />

    </>
    
  );
}

export default LandingPage;
