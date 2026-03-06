import Header from "./Components/Templates/Header";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false,
      });

      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default App;
