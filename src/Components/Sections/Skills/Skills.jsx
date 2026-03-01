import CardSkills from "./CardSkills";
import HeaderSection from "../../Templates/HeaderSection";
// =======================================================
import { AiFillMacCommand } from "react-icons/ai";
import { AiFillCode } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa6";
// =======================================================

export default function Skills() {
  const skills = [
    {
      id: 1,
      icon: <AiFillMacCommand />,
      title: "Frontend Architecture",
      skills: [
        "HTML / CSS",
        "Tailwind / Bootstrap",
        "Modern JavaScript (ES6+) / React",
        "Responsive UI/UX",
      ],
    },
    {
      id: 2,
      icon: <AiFillCode />,
      title: "Backend & Logic",
      skills: [
        "PHP 8.x Ecosystem",
        "Laravel Framework",
        "API Development",
        "Supabase",
      ],
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: "Infrastructure",
      skills: ["MySQL & MongoDB", "Git / GitHub", "REST APIs"],
    },
  ];

  return (
    <section
      id="skills"
      className="
      py-24 px-6
      bg-(--bg-primary)
      text-(--text-primary)
      "
    >
      <HeaderSection title="My Toolkit" description="Mastery" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <CardSkills skill={skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
}
