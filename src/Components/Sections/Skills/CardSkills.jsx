import { CiCircleCheck } from "react-icons/ci";

export default function CardSkills({ skill }) {
  return (
    <div
      className="
      group rounded-3xl p-8
      bg-(--bg-surface)
      shadow-xl hover:shadow-2xl
      hover:-translate-y-3
      transition duration-500
      animate-fadeIn
      "
    >
      {/* Icon */}
      <div
        className="
        text-4xl mb-6
        text-(--color-primary)
        group-hover:scale-110
        transition duration-300
        "
      >
        {skill.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-6">{skill.title}</h3>

      {/* Skills List */}
      <ul className="space-y-3">
        {skill.skills.map((ele, index) => (
          <li
            key={index}
            className="
            flex items-center gap-3
            text-(--text-secondary)
            "
          >
            <span className="text-(--color-primary) text-lg">
              <CiCircleCheck />
            </span>
            {ele}
          </li>
        ))}
      </ul>
    </div>
  );
}
