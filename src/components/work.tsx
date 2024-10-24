"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link'; 

const projects = [
  {
    title: "PrimeVault",
    year: "2024",
    description: "E-COMMERCE WEBSITE",
    imgSrc: "/capture1.png",
    link: "https://ecom-prime.vercel.app/", 
  },
  {
    title: "Nexus AI",
    year: "2023",
    description: "LANDING PAGE DESIGN",
    imgSrc: "/capture2.png",
    link: "https://ai-nexus-moizali.vercel.app/", 
  },
  {
    title: "Prime Plate",
    year: "2022",
    description: "FRONT-END DEVELOPMENT",
    imgSrc: "/capture3.png",
    link: "https://prime-plate.vercel.app/", 
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const Work: React.FC = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-14">
      {/* Desktop View */}
      <motion.div
        className="hidden md:grid md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden"
            variants={projectVariants}
            whileHover="hover"
          >
            {/* Increase Height Here */}
            <motion.div className="w-full h-96 relative">
              <Image
                src={project.imgSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
            {/* Title and Description as a Link */}
            <Link href={project.link} passHref>
              <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                <h2 className="text-4xl font-bold">{project.title}</h2>
              </motion.div>
            </Link>
            {/* Description and Year */}
            <div className="absolute bottom-5 left-5">
              <span className="text-white border border-white/40 px-3 py-1 rounded-full text-sm">
                {project.description}
              </span>
            </div>
            <div className="absolute bottom-5 right-5 text-lg font-semibold">
              {project.year}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile View */}
      <motion.div
        className="md:hidden flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full relative group overflow-hidden"
            variants={projectVariants}
            whileHover="hover"
          >
            {/* Increase Height Here */}
            <motion.div className="w-full h-96 relative">
              <Image
                src={project.imgSrc}
                alt={project.title}
                objectFit="cover"
                className="transition-transform duration-500"
                width={700}
                height={700}
              />
            </motion.div>
            {/* Title and Description as a Link */}
            <Link href={project.link} passHref>
              <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer">
                <h2 className="text-3xl font-bold">{project.title}</h2>
              </motion.div>
            </Link>
            {/* Description and Year */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-white border border-white px-3 py-1 rounded-full text-sm">
                {project.description}
              </span>
              <span className="text-lg font-semibold">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
