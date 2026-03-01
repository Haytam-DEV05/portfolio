import HeaderSection from "../Templates/HeaderSection";

export default function About() {
  return (
    <section>
      <HeaderSection
        title="Crafting code with passion and precision"
        description="The Developer"
      />
      <div className="content">
        <p>
          I am Haytam Nefal, a dedicated Full Stack Developer based in Tangier.
          My approach combines technical rigor with a deep understanding of user
          needs to deliver seamless digital experiences.
        </p>
        <p>
          Specializing in the TALL stack and modern PHP/JS ecosystems, I enjoy
          tackling complex architectural challenges while ensuring every pixel
          is perfectly placed. Whether it's a small utility or a large-scale
          corporate application, I bring the same level of commitment to
          quality.
        </p>
      </div>
    </section>
  );
}
