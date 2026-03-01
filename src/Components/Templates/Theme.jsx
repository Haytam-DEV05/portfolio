import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("theme", theme);
  }, [theme]);
  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <FaRegMoon /> : <IoSunnyOutline />}
    </div>
  );
}
