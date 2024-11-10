'use client';

import React from 'react';
import { motion } from 'framer-motion'; 
const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => {
  const barVariant = {
    hidden: { width: '0%' }, 
    visible: {
      width: `${percentage}%`,
      transition: { duration: 1, ease: 'easeOut' }, 
    },
  };

  return (
    <div className="w-full mb-4  ">
      <div className="flex justify-between">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      {/* Motion div for the skill bar with right-side animation */}
      <div className="w-[32vw] bg-white/20 rounded-full h-2">
        <motion.div
          className="bg-white h-2 rounded-full"
          variants={barVariant} 
          initial="hidden"
          animate="visible"
        ></motion.div>
      </div>
    </div>
  );
};

const CodingSkills: React.FC = () => {
  // Variants for heading (bottom to top)
  const headingVariant = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } }, 
  };

  return (
    <section className="w-full h-auto bg-black text-white py-10 px-10 mt-3 sm:mt-6 md:mt-12">
      <div className="container mx-auto">
        {/* Flex container for heading and skills */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          {/* Heading with Framer Motion */}
          <motion.h2
            className="text-md text-white/90 font-semibold mb-6 md:mb-20 md:w-1/4"
            variants={headingVariant} 
            initial="hidden"
            animate="visible"
          >
            CODING SKILLS
          </motion.h2>

          {/* Skills bars next to the heading */}
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-20 md:mr-16 p-6">
            <SkillBar skill="HTML" percentage={80} />
            <SkillBar skill="CSS" percentage={70} />
            <SkillBar skill="Bootstrap" percentage={82} />
            <SkillBar skill="JavaScript" percentage={62} />
            <SkillBar skill="PHP" percentage={90} />
            <SkillBar skill="React" percentage={85} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingSkills;
