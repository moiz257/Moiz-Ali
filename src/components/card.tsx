"use client"
import React from 'react';
import CountUp from 'react-countup';

const Cards: React.FC = () => {
  const cards = [
    { number: 8240, text: 'Hours of Work' },
    { number: 315, text: 'Projects Done' },
    { number: 250, text: 'Satisfied Customers' },
    { number: 32, text: 'Awards Winning' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 py-8 mt-4 sm:mt-18 sm:mb-18">
      {cards.map((card, index) => (
        <div key={index} className="text-white p-6 rounded-lg flex flex-col items-center">
          {/* Animated Number */}
          <h2 className="text-6xl font-semibold">
            <CountUp
              start={0}
              end={card.number}
              duration={2} 
              delay={0.5} 
              separator="," 
            />
          </h2>
          {/* Text Below the Number */}
          <p className="mt-2 font-bold text-md text-white/60 text-center">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
