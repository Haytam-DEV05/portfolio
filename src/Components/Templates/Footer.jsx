import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      pt-16 pb-8 px-6
      bg-(--bg-surface)
      text-(--text-primary)
      border-t border-(--text-secondary)/20
      "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left - Logo & Bio */}
        <div className="space-y-4">
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

          <p className="text-(--text-secondary) text-sm leading-relaxed">
            Full Stack Developer focused on building high-performance, scalable,
            and modern web applications.
          </p>
        </div>

        {/* Middle - Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>

          <ul className="space-y-2 text-(--text-secondary)">
            <li>
              <a
                href="#about"
                className="hover:text-(--color-primary) transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-(--color-primary) transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-(--color-primary) transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-(--color-primary) transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Social */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>

          <div className="flex gap-4">
            <a
              href="#"
              className="
              p-3 rounded-full
              bg-(--bg-primary)
              shadow-md
              hover:bg-(--color-primary)
              hover:text-white
              hover:-translate-y-2
              transition duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="
              p-3 rounded-full
              bg-(--bg-primary)
              shadow-md
              hover:bg-(--color-primary)
              hover:text-white
              hover:-translate-y-2
              transition duration-300
              "
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="
        text-center mt-12 pt-6
        border-t border-(--text-secondary)/20
        text-sm text-(--text-secondary)
        "
      >
        © {new Date().getFullYear()} Haitam Nefal. All rights reserved.
      </div>
    </footer>
  );
}
