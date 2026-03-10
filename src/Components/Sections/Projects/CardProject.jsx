import { MdPreview } from "react-icons/md";

export default function CardProject({ project }) {
  return (
    <div
      className="
      group rounded-3xl overflow-hidden
      bg-(--bg-surface)
      shadow-xl hover:shadow-2xl
      transition duration-500
      hover:-translate-y-3
      animate-fadeIn
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full h-56 object-cover
          transition duration-700
          group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="
              text-xs px-3 py-1 rounded-full
              bg-(--color-primary)/10
              text-(--color-primary)
              font-medium
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold">{project.title}</h3>

        {/* Description */}
        <p className="text-(--text-secondary) text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Bottom */}
        <div className="flex justify-between items-center pt-4">
          <a
            target="_blank"
            href={project.demo}
            className="
            flex items-center gap-2
            text-(--color-primary)
            font-medium
            hover:gap-3
            transition-all duration-300
            "
          >
            <MdPreview />
            Demo
          </a>

          <a
            target="_blank"
            href={project.github}
            className="
            px-4 py-2 rounded-full
            border border-(--color-primary)
            text-(--color-primary)
            hover:bg-(--color-primary)/10
            transition duration-300
            text-sm
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
