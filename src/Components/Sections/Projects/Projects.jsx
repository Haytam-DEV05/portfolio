import HeaderSection from "../../Templates/HeaderSection";
import CardProject from "./CardProject";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "/images/haitam.jpeg",
      stack: ["MySQL", "PHP"],
      title: "Guestbook App",
      description:
        "A high-performance real-time messaging application featuring data persistence and custom admin controls.",
    },
    {
      id: 2,
      image: "/images/haitam.jpeg",
      stack: ["MySQL", "Laravel"],
      title: "HR Management System",
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
