// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function HeaderSection({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <p
        className="
        text-sm tracking-widest uppercase mb-3
        text-(--color-primary)
        animate-fadeIn
        "
      >
        {description}
      </p>

      <h3
        className="
        text-3xl md:text-5xl font-bold
        text-(--text-primary)
        max-w-3xl mx-auto
        leading-tight
        "
      >
        {title}
      </h3>

      <div
        className="
        mt-6 h-1 w-20 mx-auto
        bg-(--color-primary)
        rounded-full
        "
      />
    </motion.div>
  );
}
