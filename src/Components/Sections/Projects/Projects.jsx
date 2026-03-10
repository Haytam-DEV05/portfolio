import HeaderSection from "../../Templates/HeaderSection";
import CardProject from "./CardProject";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "/images/taskFlow.png",
      stack: ["React JS", "Supabase"],
      title: "Task Managment",
      github: "https://github.com/Haytam-DEV05/taskFlow",
      demo: "https://task-flow-blush-five.vercel.app/",
      description:
        "A high-performance real-time messaging application featuring data persistence and custom admin controls.",
    },
    {
      id: 2,
      image: "/images/learning.webp",
      stack: ["React JS", "Supabase"],
      title: "Platform for Learning",
      github: "https://github.com/Haytam-DEV05/learnHub",
      demo: "https://learn-hub-ruddy.vercel.app/",
      description:
        "Scalable corporate solution for tracking resources, employee absences, and automated reporting workflows.",
    },
  ];

  return (
    <section
      id="projects"
      className="
      py-24 px-6
      bg-(--bg-primary)
      text-(--text-primary)
      "
    >
      <HeaderSection title="Selected Works" description="Portfolio" />

      {/* Explore Link */}
      <div className="text-center mb-12">
        <a
          href="#"
          className="
          inline-block
          text-(--color-primary)
          font-medium
          hover:-translate-x-2
          transition duration-300
          "
        >
          Explore All Projects →
        </a>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
