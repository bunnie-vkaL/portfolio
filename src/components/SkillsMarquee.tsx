'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SkillsMarquee() {
  const items = [
    'Prospecting',
    'B2B Outreach',
    'Lead Generation',
    'Negotiation',
    'Excel & Power BI',
    'Demand Forecasting',
    'Market Research',
    'Partner Management',
    'Pipeline Tracking',
    'Stakeholder Mapping',
    'Presentation Design',
    'Campaign Planning',
    'Data Visualization',
    'Commercial Storytelling',
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[71px] my-10 overflow-hidden">
      {/* Orange Container matching Figma [24, 0, 24, 0] radius */}
      <div className="relative w-full py-8 sm:py-10 bg-[#FB6514] rounded-tl-[32px] rounded-br-[32px] overflow-hidden flex items-center justify-center shadow-lg">
        {/* Tilted White Strip running through */}
        <div className="w-[110%] -rotate-2 bg-white py-3 sm:py-4 shadow-md overflow-hidden group/strip">
          <div className="flex animate-marquee whitespace-nowrap items-center group-hover/strip:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
            {[...items, ...items, ...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 sm:gap-8 mx-4 sm:mx-6 select-none"
              >
                <motion.span
                  whileHover={{ scale: 1.1, color: '#FD853A' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="font-urbanist text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171717] tracking-tight cursor-pointer transition-colors duration-200"
                >
                  {item}
                </motion.span>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="text-[#FD853A] text-2xl sm:text-3xl select-none inline-block"
                >
                  ✦
                </motion.span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
