// ===========================================
import Navbar from "./Navbar";
import Home from "../Sections/Home";
import Contact from "../Sections/Contact";
import About from "../Sections/About";
import Skills from "../Sections/Skills";
// ===========================================
const Header = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
};

export default Header;
