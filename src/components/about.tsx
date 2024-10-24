"use client"
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-x-20 bg-black text-white tracking-normal p-6 md:p-12 md:h-[50vh] md:flex-row md:justify-between">
      {/* Left Side - Small Heading */}
      <div className='flex flex-col mb-5 font-bold text-medium sm:w-[9vw] text-white/90 md:w-1/7'>
        <h2 className="text-md md:text-md">About Me</h2>
      </div>

      {/* Right Side - Large Heading and Text */}
      <div className="flex flex-col md:w-full">
        {/* Bari Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-semibold leading-tight"
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, ease: 'easeInOut' }} 
          viewport={{ once: false }} 
        >
          TRANSFORMING YOUR VISION INTO A DYNAMIC WEB EXPERIENCE THROUGH METICULOUSLY CRAFTED DESIGNS, INTUITIVE USER INTERFACES, AND ROBUST FUNCTIONALITY.
        </motion.h1>

        {/* Content below heading */}
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          {/* Pehla Paragraph */}
          <motion.div
            className="md:w-[60%] text-base md:text-lg  text-white/60"
            initial={{ y: 20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
            viewport={{ once: false }} 
          >
            <p>
              Hi there! I&apos;m Moiz, a web designer with a passion for creating exceptional digital experiences. With over 15 years in the industry, I have skills in designing websites that are not only visually appealing but also functional and user-friendly.
            </p>
          </motion.div>

          {/* Doosra Paragraph */}
          <motion.div
            className="md:w-[60%] text-base md:text-lg  text-white/60"
            initial={{ y: 20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, ease: 'easeInOut' }} 
            viewport={{ once: false }} 
          >
            <p>
              I specialize in crafting bespoke websites using the latest technologies and design trends, including HTML5, CSS3, JavaScript, and popular content management systems like WordPress, Joomla, and Shopify.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

