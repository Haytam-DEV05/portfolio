import { CiLocationOn } from "react-icons/ci";

export default function CardEducation({ info }) {
  return (
    <div
        data-aos={`${info.id % 2 === 0 
            ? "flip-right"
            : "flip-left"
        }`}
      className="
      relative md:w-1/2
      md:odd:ml-auto
      "
    >
      {/* Dot */}
      <div
        className="
        absolute -left-2 md:-left-3 top-3
        w-2 h-2 rounded-full
        bg-(--color-primary)
        shadow-md
        "
      ></div>

      <div
        className="
        border-l-5 border-(--color-primary)
        hover:border-(--color-primary)/30
        ml-10 md:ml-5 md:mr-5
        p-6 rounded-2xl
        bg-(--bg-surface)
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-700
        "
      >
        <span className="text-sm text-(--color-primary) font-medium">
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
    </div>
  );
}
