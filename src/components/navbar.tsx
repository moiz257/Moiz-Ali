"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

interface NavbarProps {
  name: string; // Name as a prop
  size: string; // Size as a prop
}

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: -50 }, // Hidden state: above the screen
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Duration of the animation
      staggerChildren: 0.2, // Stagger effect for children elements
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Navbar: React.FC<NavbarProps> = ({ name, size }) => {
  return (
    <motion.div
      className="bg-black text-white w-full h-[40vh] mt-3 sm:mt-6 md:mt-10 "
      initial="hidden"
      animate="visible"
      variants={containerVariants} 
    >
      {/* Logo Section */}
      <motion.div
        className="h-[20vh] sm:h-[40vh] w-full flex justify-center items-center overflow-hidden "
        variants={itemVariants} 
      >
        <h1 className={`font-bold tracking-tighter text-center w-full ${size}`}>
          <span className="block w-full whitespace-nowrap">
            {name} {/* Dynamic Name */}
          </span>
        </h1>
      </motion.div>

      {/* Navigation Links Section */}
      <motion.nav
        className="grid grid-cols-3 gap-4 md:flex md:justify-start tracking-normal md:space-x-4 text-base font-[700]  px-7 py-4 w-full"
        variants={containerVariants}
      >
        {/* Links */}
        {[
          { label: 'HOME', href: '/' },
          { label: 'ABOUT ME', href: '/about' },
          { label: 'WHAT I DO', href: '/what-i-do' },
          { label: 'WORKS', href: '/works' },
          { label: 'HIRE ME', href: '/contact' },
        ].map((link, idx) => (
          <motion.div key={idx} className="relative group" variants={itemVariants}> 
            <Link href={link.href} className="tracking-tight relative z-10">
              <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 sm:mt-6">
                {link.label}
              </span>
              <span className="absolute left-0 transition-transform duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                {link.label}
              </span>
            </Link>
            {/* Underline effect */}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out" />
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
