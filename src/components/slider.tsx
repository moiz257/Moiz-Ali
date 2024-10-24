"use client";
import React from 'react';
import { motion } from 'framer-motion';

const words = [
  'FRONT-END DEVELOPEMENT',
  'BACK-END DEVELOPEMENT',
  'LANDING PAGE DESIGNER',
  'CUSTOM WEBSITE DESIGNER',
  'CONTENT MANAGEMENT SYSTEM',
];

const TextSlider: React.FC = () => {
  return (
    <div className="overflow-hidden bg-black py-6">
      <motion.div
        className="whitespace-nowrap flex"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 20, 
          ease: 'linear',
          repeat: Infinity, 
        }}
        style={{ width: '600%' }} 
      >
        {/* Loop the words once, but large enough to fill the space */}
        {words.map((word, index) => (
          <span
            key={index}
            className={`text-8xl font-semibold inline-block ${
              index % 2 === 0 ? 'text-white' : 'text-transparent'
            }`}
            style={{
              WebkitTextStroke: index % 2 === 0 ? '0' : '1px white', 
              padding: 0, 
              margin: 0,  
            }}
          >
            {word}
          </span>
        ))}
        {/* Duplicate the words to ensure a smooth scroll, add space between last and first word */}
        {words.map((word, index) => (
          <span
            key={index + words.length} 
            className={`text-8xl font-semibold inline-block ${
              index % 2 === 0 ? 'text-white' : 'text-transparent'
            }`}
            style={{
              WebkitTextStroke: index % 2 === 0 ? '0' : '1px white', 
              padding: 0, 
              marginLeft: index === 0 ? '3rem' : '0',  
            }}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextSlider;
