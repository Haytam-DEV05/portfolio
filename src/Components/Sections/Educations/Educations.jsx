// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeaderSection from "../../Templates/HeaderSection";
import CardEducation from "./CardEducation";

export default function Educations() {
  const educations = [
    { id: 1, date: "2024 - 2026", title: "OFPPT - ISTA NTIC BENI MELLAL", description: "Formation technique, développement digital", lieu: "Beni Mellal" },
    { id: 2, date: "2023 - 2024", title: "Baccalauréat - Beni Mellal", description: "Sciences de la Vie et de la Terre (SVT)", lieu: "Beni Mellal" },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-(--bg-primary) text-(--text-primary) overflow-hidden">
      <HeaderSection title="Education" description="My Background" />
      
      <div className="max-w-4xl mx-auto relative mt-12">
        {/* The Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-(--color-primary)/30 -translate-x-1/2"></div>

        <div className="space-y-12">
          {educations.map((ele, index) => (
            <CardEducation info={ele} key={ele.id} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}