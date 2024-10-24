"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 
import Link from "next/link"; 

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
  {
    title: "Next Gen AI",
    year: "2024",
    description: "LANDING PAGE DESIGN",
    imgSrc: "/capture4.png",
    link: "https://next-gen-ai-nine.vercel.app/", 
  },
  {
    title: "Nexus AI",
    year: "2023",
    description: "FULLSTACK WEBSITE",
    imgSrc: "/capture5.png",
    link: "https://dynamic-resume-builder-three.vercel.app/", 
  },
  {
    title: "Prime Plate",
    year: "2022",
    description: "FRONT-END DEVELOPMENT",
    imgSrc: "/capture6.png",
    link: "https://protfolio-moiz.vercel.app/", 
  },
];

// Animation variants for heading, paragraph, and images
const headingVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
};

// Image variant with fast and right-to-left motion
const imageVariant = {
  hidden: { opacity: 0, x: 150 }, 
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } 
  },
};

const MyWork = () => {
  return (
    <div className="w-full bg-black text-white py-10 px-6">
      {/* Top Section */}
      <motion.div
        className="flex flex-col items-center mb-10"
        initial="hidden"
        animate="visible"
        variants={headingVariant}
      >
        <motion.h2 className="text-sm tracking-widest">WORKS</motion.h2>
        <motion.h1
          className="text-5xl font-bold text-start w-[88vw] mt-4"
          variants={headingVariant}
        >
          EXPLORE THE PROJECTS BELOW TO SEE HOW I BRING IDEAS TO LIFE THROUGH
          THOUGHTFUL DESIGN AND METICULOUS EXECUTION.
        </motion.h1>
      </motion.div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} passHref>
            <motion.div
              className="relative group overflow-hidden"
              variants={imageVariant} 
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.div className="w-full h-96 relative">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-4xl font-bold">{project.title}</h2>
              </motion.div>
              <div className="absolute bottom-5 left-5">
                <span className="text-white border border-white/40 px-3 py-1 rounded-full text-sm">
                  {project.description}
                </span>
              </div>
              <div className="absolute bottom-5 right-5 text-lg font-semibold">
                {project.year}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col gap-6">
        {projects.map((project, index) => (
          <Link href={project.link} key={index} passHref>
            <motion.div
              className="w-full relative group overflow-hidden"
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
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
              <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-3xl font-bold">{project.title}</h2>
              </motion.div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-white border border-white px-3 py-1 rounded-full text-sm">
                  {project.description}
                </span>
                <span className="text-lg font-semibold">{project.year}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
