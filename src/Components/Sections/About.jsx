import HeaderSection from "../Templates/HeaderSection";

export default function About() {
  return (
    <section
      className="
      py-24 px-6
      bg-(--bg-primary)
      text-(--text-primary)
      "
    >
      <HeaderSection
        title="Crafting code with passion and precision"
        description="The Developer"
      />

      <div
        className="
        max-w-6xl mx-auto
        grid md:grid-cols-2 gap-16
        items-center
        "
      >
        <div className="space-y-6 animate-slideLeft">
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
            is perfectly placed. Whether it's a small utility or a large-scale
            corporate application, I bring the same level of commitment to
            quality.
          </p>
        </div>

        <div className="flex justify-center animate-slideRight">
          <div
            className="
            relative rounded-3xl overflow-hidden
            shadow-2xl
            "
          >
            <img
              src="/images/haitam.jpeg"
              alt="Haitam Nefal"
              className="
              w-80 md:w-96 object-cover
              transition duration-500
              hover:scale-105
              "
            />

            <div
              className="
              absolute inset-0
              bg-(--color-primary)/10
              opacity-0 hover:opacity-100
              transition duration-500
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
