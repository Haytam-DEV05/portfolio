export default function HeaderSection({ title, description }) {
  return (
    <div
      className="text-center mb-16"
      data-aos="fade-up"
      data-aos-duration="1500"
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
        animate-slideUp
        "
      >
        {title}
      </h3>

      <div
        className="
        mt-6 h-1 w-20 mx-auto
        bg-(--color-primary)
        rounded-full
        animate-fadeIn
        "
      />
    </div>
  );
}
