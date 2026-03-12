// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";

export default function CardEducation({ info, index }) {
  // Even index (0) = Left side, Odd index (1) = Right side
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}
      className={`relative flex items-center justify-between w-full ${isLeft ? "md:flex-row-reverse" : ""}`}
    >
      {/* Spacer for the line */}
      <div className="hidden md:block w-5/12"></div>

      {/* The Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-(--color-primary) border-4 border-(--bg-primary) z-10 -translate-x-1/2"></div>

      {/* The Card */}
      <div className="w-[calc(100%-3rem)] md:w-5/12 ml-12 md:ml-0 p-6 rounded-2xl bg-(--bg-surface) shadow-lg border-l-4 border-(--color-primary) hover:shadow-2xl transition-all duration-500">
        <span className="text-sm text-(--color-primary) font-bold">
          {info.date}
        </span>
        <h3 className="text-lg font-semibold mt-2">{info.title}</h3>
        <p className="text-(--text-secondary) mt-2 text-sm leading-relaxed">
          {info.description}
        </p>
        <div className="flex items-center gap-2 mt-4 text-(--text-secondary) text-sm">
          <CiLocationOn className="text-(--color-primary)" />
          {info.lieu}
        </div>
      </div>
    </motion.div>
  );
}
