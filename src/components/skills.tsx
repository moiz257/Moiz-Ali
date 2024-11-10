"use client"
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion"; 

const SkillsSection: React.FC = () => {
  // Variants for heading (bottom to top)
  const headingVariant = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } }, 
  };


  const iconVariant = {
    hidden: { opacity: 0, x: 100 }, 
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" }, 
    }),
  };

  const skills = [
    { Icon: FaReact, label: "REACT", color: "text-blue-500" },
    { Icon: SiNextdotjs, label: "NEXT.JS", color: "text-gray-400" },
    { Icon: SiTailwindcss, label: "TAILWIND CSS", color: "text-blue-400" },
    { Icon: SiTypescript, label: "TYPESCRIPT", color: "text-blue-600" },
  ];

  return (
    <section className="w-full h-auto bg-black text-white py-10 px-10 mt-6 sm:mt-36 sm:mb-6">
      <div className="container mx-auto">

        <div className="hidden md:flex items-center justify-between w-full">
          {/* Heading with Framer Motion */}
          <motion.h2
            className="text-md font-bold mb-6 md:mb-10 text-white/90"
            variants={headingVariant}
            initial="hidden"
            animate="visible"
          >
            MY SKILLS
          </motion.h2>

          {/* Icons Section */}
          <div className="flex space-x-40 px-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                className="flex flex-col items-center"
                variants={iconVariant} 
                initial="hidden"
                animate="visible"
                custom={index} 
              >
                <skill.Icon className={`text-6xl md:text-7xl ${skill.color}`} />
                <p className="text-center text-xl font-semibold mt-2">
                  {skill.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View - Adjust layout for smaller screens */}
        <motion.h2
          className="md:hidden text-md font-bold mb-6 md:mb-0"
          variants={headingVariant}
          initial="hidden"
          animate="visible"
        >
          MY SKILLS
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 justify-items-center md:hidden mt-4 sm:mt-10 md:mt-14">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              className="flex flex-col items-center"
              variants={iconVariant}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <skill.Icon className={`text-6xl ${skill.color}`} />
              <p className="text-center text-2xl font-semibold mt-2">
                {skill.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
