// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderSection from "../Templates/HeaderSection";

export default function About() {
  // Variants for the text container
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for the image container
  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="about"
      className="py-24 px-6 bg-(--bg-primary) text-(--text-primary) overflow-hidden"
    >
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <HeaderSection
          title="Crafting code with passion and precision"
          description="The Developer"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          className="space-y-6"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-lg text-(--text-secondary) leading-relaxed">
            I am{" "}
            <span className="text-(--color-primary) font-semibold">
              Haytam Nefal
            </span>
            , a dedicated Full Stack Developer based in Tangier. My approach
            combines technical rigor with a deep understanding of user needs to
            deliver seamless digital experiences.
          </p>

          <p className="text-lg text-(--text-secondary) leading-relaxed">
            Specializing in the TALL stack and modern PHP/JS ecosystems, I enjoy
            tackling complex architectural challenges while ensuring every pixel
            is perfectly placed.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="download-cv"
            download
            href="/CV/Haitam Nefal.pdf"
            className="inline-block max-w-fit py-3 rounded-full bg-(--color-primary) px-10 hover:bg-(--color-primary-hover) text-white font-medium transition duration-300 shadow-lg cursor-pointer"
          >
            Download Cv
          </motion.a>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-(--color-primary)/10">
            <img
              src="/images/haitam.jpeg"
              alt="Haitam Nefal"
              className="w-80 md:w-96 object-cover transition duration-500 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
