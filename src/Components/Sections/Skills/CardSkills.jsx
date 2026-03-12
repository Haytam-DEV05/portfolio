// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function CardSkills({ skill }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="p-8 rounded-2xl bg-(--card-bg) border border-(--border-color) shadow-xl"
    >
      <div className="text-4xl mb-4 text-(--accent-color)">{skill.icon}</div>
      <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
      <ul className="space-y-2">
        {skill.skills.map((s, index) => (
          <li key={index} className="opacity-80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-(--accent-color)" />
            {s}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
