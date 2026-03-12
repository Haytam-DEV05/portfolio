/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
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

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-(--bg-primary) text-(--text-primary)"
    >
      <HeaderSection title="Selected Works" description="Portfolio" />

      <div className="text-center mb-12">
        <a
          href="#"
          className="inline-block text-(--color-primary) font-medium hover:-translate-x-2 transition duration-300"
        >
          Explore All Projects →
        </a>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <CardProject project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}