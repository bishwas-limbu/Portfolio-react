import "./App.scss";



// Importing component
import NavBar from "./components/navbar/NavBar";

//Importing pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Resume from "./pages/resume/Resume";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import NavProvider from "./context/NavContext";

import { useEffect } from "react";
/* For particles js */
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./helper/particles";


function App() {
  const handleInit = async (main) => {
    await loadFull(main);
  };
  
  // useEffect(() => {
  //   window.history.scrollRestoration = 'auto'
  // }, []);

  return (
    <>
      
      <Particles id="particles" init={handleInit} options={particles} />
      <NavProvider>

        <NavBar />
        <div className="container">
            <Home />
            <About />
            <Resume />
            <Projects />
            <Contact />
        </div>

      </NavProvider>
    </>
  );
}

export default App;
