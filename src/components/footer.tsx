"use client";
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false }); // Check if the element is in view

  // Motion variants for the footer sections
  const leftTextVariants = {
    hidden: { y: 20, opacity: 0 }, // Start below and transparent
    visible: {
      y: 0, // Move to original position
      opacity: 1, // Fully visible
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const rightTextVariants = {
    hidden: { x: 20, opacity: 0 }, 
    visible: {
      x: 0,
      opacity: 1, 
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-black text-white py-8 md:px-6 ml-2 h-[30vh] mt-14" ref={ref}>
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between">
        
        {/* Social Links with animation */}
        <motion.div
          className="flex flex-col items-start order-2 md:order-1 gap-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={leftTextVariants}
        >
          <div className="flex space-x-4 md:space-x-8 font-bold tracking-tighter">
            <Link href="https://www.linkedin.com/in/moiz-ali-20b280274/" passHref className="hover:text-gray-400">
              LINKEDIN
            </Link>
            <Link href="https://github.com/moiz257" passHref className="hover:text-gray-400">
              GITHUB
            </Link>
            <Link href="#" passHref className="hover:text-gray-400">
              INSTAGRAM
            </Link>
          </div>
          <div className="mt-2 text-md text-start text-white/60">
            <p>All Rights Reserved</p>
            <p>Template By <strong className='text-white/80'>Moiz Ali Kamalshah</strong></p>
          </div>
        </motion.div>

        {/* Let's Talk Text as a Link with animation */}
        <motion.div
          className="order-3 md:order-3 mt-6 md:mt-0 text-start md:text-right"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={rightTextVariants}
        >
          <Link
            href="/contact"
            passHref
            className="text-6xl md:text-7xl font-[600] hover:text-gray-400 transition-colors duration-300"
          >
              LET&apos;S TALK
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
