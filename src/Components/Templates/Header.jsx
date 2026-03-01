// ===========================================
import Navbar from "./Navbar";
import Home from "../Sections/Home";
import Contact from "../Sections/Contact";
import About from "../Sections/About";
import Skills from "../Sections/Skills/Skills";
import Projects from "../Sections/Projects/Projects";
// ===========================================
const Header = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
    </>
  );
};

export default Header;
