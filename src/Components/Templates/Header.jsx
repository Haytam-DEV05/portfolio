// ===========================================
import Navbar from "./Navbar";
import Home from "../Sections/Home";
import Contact from "../Sections/Contact";
import About from "../Sections/About";
import Skills from "../Sections/Skills/Skills";
import Projects from "../Sections/Projects/Projects";
import Educations from "../Sections/Educations/Educations";
import Footer from "./Footer";
// ===========================================
const Header = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Educations />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Header;
