'use client'; 

import React from 'react';
import { motion } from 'framer-motion'; 

// Service Item with animation
const ServiceItem = ({ title, description, index }: { title: string; description: string; index: number }) => {
  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: 'easeInOut' }, 
    }),
  };

  return (
    <motion.div
      className="mb-8"
      variants={itemVariant} 
      custom={index} 
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-md font-medium text-white/60">{description}</p>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  
  const containerVariant = {
    visible: {
      transition: { staggerChildren: 0.2 }, 
    },
  };

  const services = [
    { title: 'CUSTOM WEBSITE DESIGN', description: "Tailored websites to match your brand's unique identity and goals." },
    { title: 'E-COMMERCE WEBSITE', description: 'Creating user-friendly online stores with secure payment gateways.' },
    { title: 'LANDING PAGE DESIGN', description: 'High-conversion landing pages for specific marketing campaigns.' },
    { title: 'FRONT-END DEVELOPMENT', description: 'Implementing designs with clean and efficient code using HTML, CSS, JS.' },
    { title: 'BACK-END DEVELOPMENT', description: 'Building robust back-end systems using technologies like PHP and databases.' },
    { title: 'CONTENT MANAGEMENT SYSTEM', description: 'Integrating and customizing CMS platforms for easy content management.' },
    { title: 'WEBSITE OPTIMIZATION', description: 'Enhancing website performance, speed, and search engine optimization.' },
    { title: 'WEBSITE AUDITS', description: 'Conducting audits to identify areas for improvement in design and performance.' },
    { title: 'CONTENT STRATEGY & CREATION', description: 'Developing effective content strategies and providing copywriting services.' },
    { title: 'SOCIAL MEDIA INTEGRATION', description: 'Integrating social media platforms to enhance engagement.' },
  ];

  return (
    <section className="min-h-screen flex md:justify-center md:items-center bg-black text-white md:p-28">
      <motion.div
        className="container px-6 md:px-0 grid grid-cols-1 md:w-[80%] md:grid-cols-2 gap-x-10 gap-y-5 md:p-10"
        variants={containerVariant} 
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <ServiceItem
            key={service.title}
            title={service.title}
            description={service.description}
            index={index} 
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesPage;
