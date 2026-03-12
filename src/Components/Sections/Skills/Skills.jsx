// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CardSkills from "./CardSkills";
import HeaderSection from "../../Templates/HeaderSection";
import { AiFillMacCommand, AiFillCode } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa6";

export default function Skills() {
  const skills = [
    {
      id: 1,
      icon: <AiFillMacCommand />,
      title: "Frontend Architecture",
      skills: [
        "HTML / CSS",
        "Tailwind / Bootstrap",
        "Modern JavaScript (ES6+) / React",
        "Responsive UI/UX",
      ],
    },
    {
      id: 2,
      icon: <AiFillCode />,
      title: "Backend & Logic",
      skills: [
        "PHP 8.x Ecosystem",
        "Laravel Framework",
        "API Development",
        "Supabase",
      ],
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: "Infrastructure",
      skills: ["MySQL & MongoDB", "Git / GitHub", "REST APIs"],
    },
  ];

  // Container variant to stagger the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each card animation
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-(--bg-primary) text-(--text-primary) overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // Changed once to false to repeat every scroll
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <HeaderSection title="My Toolkit" description="Mastery" />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // This ensures the staggered cards re-animate every time you scroll back
        viewport={{ once: false, amount: 0.2 }}
      >
        {skills.map((skill) => (
          <CardSkills skill={skill} key={skill.id} />
        ))}
      </motion.div>
    </section>
  );
}
