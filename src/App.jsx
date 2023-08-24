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
function App() {
  return (
    <>
      <NavProvider>
        <NavBar />
        <section className="mainSection">
          <div className="mainSection__wrapper">
            <Home />
            <About />
            <Resume />
            <Projects />
            <Contact />
          </div>
        </section>
      </NavProvider>
    </>
  );
}

export default App;
