export default function Home() {
  return (
    <section
      className="
      min-h-screen flex flex-col justify-center items-center
      text-center px-6
      bg-(--bg-primary)
      text-(--text-primary)
      overflow-hidden
      "
    >
      <span
        className="
        mb-6 px-4 py-2 rounded-full text-sm font-medium
        bg-(--color-primary)/10
        text-(--color-primary)
        animate-fadeIn
        "
      >
        🚀 Open for New Projects
      </span>

      <h1
        className="
        w-full text-4xl md:text-7xl font-bold
        leading-tight
        mb-6
        animate-slideUp
        "
      >
        Hi, I'm <span className="text-(--color-primary)">Haytam Nefal</span>
      </h1>

      <p
        className="
        max-w-2xl text-lg md:text-xl
        text-(--text-secondary)
        mb-8
        animate-fadeIn delay-200
        "
      >
        Full Stack Web Developer specializing in
        <span className="text-(--color-primary) font-medium">
          {" "}
          JavaScript & PHP
        </span>
        . I build high-performance web applications with modern technologies and
        a focus on clean, scalable code.
      </p>

      <div className="flex gap-4 animate-fadeIn delay-300">
        <a
          href="#projects"
          className="
          px-6 py-3 rounded-full
          bg-(--color-primary)
          hover:bg-(--color-primary-hover)
          text-white font-medium
          transition duration-300 shadow-lg
          "
        >
          View My Projects
        </a>

        <a
          href="#contact"
          className="
          px-6 py-3 rounded-full
          border border-(--color-primary)
          text-(--color-primary)
          hover:bg-(--color-primary)/10
          transition duration-300
          "
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
}
