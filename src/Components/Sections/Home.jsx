// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleName = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const techStack = [
    { id: 1, name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { id: 2, name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { id: 3, name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { id: 4, name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { id: 5, name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { id: 6, name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { id: 7, name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { id: 8, name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { id: 9, name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { id: 10, name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  ];

  return (
    <section ref={ref} className="h-[200vh] bg-(--bg-primary)">
      <div className="sticky top-0 min-h-screen flex flex-col justify-center items-center text-center px-6 text-(--text-primary)">

        <motion.span
          style={{ opacity: opacityContent, y: yContent }}
          className="mb-6 px-4 py-2 rounded-full text-sm font-medium bg-(--color-primary)/10 text-(--color-primary)"
        >
          🚀 Open for New Projects
        </motion.span>

        <motion.h1
          style={{ scale: scaleName }}
          className="w-full text-4xl md:text-7xl font-bold leading-tight mb-6"
        >
          Hi, I'm <span className="text-(--color-primary)">Haytam Nefal</span>
        </motion.h1>

        <motion.p
          style={{ opacity: opacityContent, y: yContent }}
          className="max-w-2xl text-lg md:text-xl text-(--text-secondary) mb-8"
        >
          Full Stack Web Developer specializing in
          <span className="text-(--color-primary) font-medium">
            {" "}JavaScript & PHP
          </span>
          . I build high-performance web applications with modern technologies
          and clean, scalable code.
        </motion.p>

        <motion.div
          style={{ opacity: opacityContent, y: yContent }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-(--color-primary) hover:bg-(--color-primary-hover) text-white font-medium transition duration-300 shadow-lg"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary)/10 transition duration-300"
          >
            Let's Talk
          </a>
        </motion.div>

        <motion.div
          style={{ opacity: opacityContent }}
          className="relative w-full overflow-hidden mt-10 py-6 bg-(--bg-surface) border-y border-(--color-primary)/20"
        >
          <ul className="flex gap-5 md:gap-16 w-max animate-marquee">
            {[...techStack, ...techStack].map((ele, index) => (
              <li key={index} className="flex items-center justify-center">
                <img
                  src={ele.src}
                  alt={ele.name}
                  className="w-9 h-9 md:w-12 md:h-12 object-contain grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
                />
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}