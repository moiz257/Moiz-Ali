"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Moiz from "../../public/IMG_4043.png";
import React from 'react';

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, 
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center gap-7 p-6 md:p-14"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Content */}
      <motion.div className="md:w-1/2 mb-8 md:mb-0 text-left p-3" variants={itemVariants}>
        <motion.h2 className="text-sm font-[700] text-white/90" variants={itemVariants}>
          AVAILABLE FOR WORK
        </motion.h2>
        <motion.h1 className="text-5xl w-full md:text-7xl font-[500]  mt-5 tracking-tighter " variants={itemVariants}>
          A WEBSITE DESIGNER FROM PAKISTAN
        </motion.h1>
        <motion.p className="mt-3 text-base md:text-lg font-semibold text-white/60 w-full md:w-[550px]" variants={itemVariants}>
          My journey into web design started with a love for both art and technology, which led me to pursue a career where I could blend these interests seamlessly.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="/about"
            className="inline-block text-sm font-bold mt-6 border border-white rounded-full px-8 md:px-10 py-3 transition-colors duration-300 hover:text-white/60"
          >
            About Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="w-full flex justify-center items-center" 
        variants={itemVariants}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <Image
            src={Moiz}
            alt="Image"
            className="w-[100%] md:w-[80%] lg:w-[600px] h-auto mx-auto"
            width={900}
            height={900}
            priority 
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
