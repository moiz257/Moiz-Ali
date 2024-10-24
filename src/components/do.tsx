"use client";
import React from 'react';
import { motion } from 'framer-motion'; 

const WhatIDoSection: React.FC = () => {
  // Variants for individual animations
  const textVariants = (delay: number) => ({
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, delay }  
    }
  });

  return (
    <section className="relative flex flex-col justify-center items-center mt-24">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url("/IMG_4043.png")', backgroundAttachment: 'fixed' }} 
      >
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center p-6 bg-black bg-opacity-50 text-white w-full">
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">WHAT I DO</h2>

          {/* Right Side - Columns for Headings and Paragraphs */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {/* Left Column */}
            <div className="flex flex-col md:w-1/2 gap-6 p-6 bg-black/40 backdrop-blur-md rounded-md">  
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants(0)} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold">CUSTOM WEBSITE DESIGN</h3>
                <p className="mt-2 text-md font-medium text-white/60">Tailored websites to match your brand's unique identity and goals.</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants(0.3)} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mt-4">LANDING PAGE DESIGN</h3>
                <p className="mt-2 text-md font-medium text-white/60">High-conversion landing pages for specific marketing campaigns.</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants(0.6)} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mt-4">BACK-END DEVELOPMENT</h3>
                <p className="mt-2 text-md font-medium text-white/60">Building robust back-end systems using technologies like PHP and databases.</p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col md:w-1/2 gap-6 p-6 bg-black/40 backdrop-blur-md rounded-md"> 
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants(0)} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold">E-COMMERCE WEBSITE</h3>
                <p className="mt-2 text-md font-medium text-white/60">Creating user-friendly online stores with secure payment gateways.</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants(0.3)} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mt-4">FRONT-END DEVELOPMENT</h3>
                <p className="mt-2 text-md font-medium text-white/60">Implementing designs with clean and efficient code using HTML, CSS, JS, Next.JS, React, Tailwind CSS, TypeScript.</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants(0.6)} 
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mt-4">CONTENT MANAGEMENT SYSTEM</h3>
                <p className="mt-2 text-md font-medium text-white/60">Integrating and customizing CMS platforms for easy content management.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
