import Theme from "./Theme";

export default function Navbar() {
  return (
    <nav
      className="
      max-w-6xl mx-auto flex justify-between items-center min-h-16
      bg-(--bg-surface) 
      text-(--text-primary)
      fixed top-4 left-0 right-0
      backdrop-blur-xl shadow-lg rounded-full
      px-6 md:px-12 border
      border-(--text-secondary)
    "
    >
      {/* Logo */}
      <div className="flex items-center">
        <span
          className="
          bg-(--color-primary)
          text-white font-bold px-3 py-2
          rounded-lg shadow-md
        "
        >
          HN
        </span>
        <h2 className="ml-3 text-lg font-semibold">Haitam Nefal</h2>
      </div>

      {/* Links */}
      <ul
        className="
        hidden md:flex items-center space-x-6
        text-(--text-secondary) font-medium
      "
      >
        <li className="hover:text-(--color-primary) cursor-pointer transition">
          About
        </li>
        <li className="hover:text-(--color-primary) cursor-pointer transition">
          Projects
        </li>
        <li className="hover:text-(--color-primary) cursor-pointer transition">
          Skills
        </li>
        <li className="hover:text-(--color-primary) cursor-pointer transition">
          Contact
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="
          hidden md:block
          bg-(--color-primary)
          hover:bg-(--color-primary-hover)
          text-white px-4 py-2
          rounded-full transition shadow-md
        "
        >
          Hire Me
        </a>

        <Theme />
      </div>
    </nav>
  );
}
