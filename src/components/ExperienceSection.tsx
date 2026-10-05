'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const experiences = [
    {
      company: 'MSH Group',
      period: '2023 - 2024 | Hanoi',
      role: 'Real Estate Sales & Content Marketing',
      description: 'Generated and engaged prospective clients through direct outreach, market updates and content-led lead generation. Presented property insights as clear value propositions and supported post-sale relationships.',
      color: 'orange',
    },
    {
      company: 'RUNWAY Community',
      period: '2024 - 2025 | Hanoi',
      role: 'Vice President',
      description: 'Directed cross-functional activities across campaigns, events and external relations. Coached team members on ownership, execution discipline and KPI follow-through.',
      color: 'dark',
    },
    {
      company: 'RUNWAY Community',
      period: '2023 - 2024 | Hanoi',
      role: 'External Department Member',
      description: 'Pitched partnership proposals, managed sponsor relationships and developed outreach materials to improve response and partnership conversion.',
      color: 'orange',
    },
    {
      company: 'LOGAGE Supply Chain Competition',
      period: '2026 | Top 10 finalist',
      role: 'Supply Chain Strategy Competitor',
      description: 'Applied demand planning, sales forecasting and supply-demand balancing to a case competition, turning raw data into practical inventory and route-to-market recommendations.',
      color: 'dark',
    },
    {
      company: 'SCMISSION Supply Chain Competition',
      period: 'May 2026 | Top 20 / 1000+ participants',
      role: 'Supply Chain Case Competitor',
      description: 'Cleaned and analyzed raw data in Excel to forecast demand patterns, support product availability decisions and connect analysis with out-of-stock prevention.',
      color: 'orange',
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-[71px] bg-white">
      <div className="max-w-[1298px] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-urbanist text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight text-[#171717]">
            My <span className="text-[#FD853A]">Experience</span>
          </h2>
        </motion.div>

        {/* 3-Row Timeline Grid matching Figma */}
        <div className="relative max-w-4xl mx-auto flex flex-col gap-12 sm:gap-16">
          {experiences.map((exp, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isHovered ? 'bg-[#F2F4F7]/60 shadow-sm translate-x-1' : ''
                }`}
              >
                {/* Left Column: Company & Period */}
                <div className="md:col-span-5 md:text-left">
                  <h3
                    className={`font-urbanist text-2xl sm:text-3xl font-bold transition-colors duration-200 ${
                      isHovered ? 'text-[#FD853A]' : 'text-[#171717]'
                    }`}
                  >
                    {exp.company}
                  </h3>
                  <p className="font-urbanist text-sm font-medium text-gray-400 mt-1">
                    {exp.period}
                  </p>
                </div>

                {/* Center Timeline Node */}
                <div className="hidden md:flex md:col-span-2 justify-center relative">
                  {/* Connecting Dotted Line to next item */}
                  {idx < experiences.length - 1 && (
                    <div className="absolute top-8 bottom-[-50px] w-0.5 border-l-2 border-dashed border-gray-300 pointer-events-none" />
                  )}

                  {/* Badge Node */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.3 : 1,
                      rotate: isHovered ? 90 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className={`w-8 h-8 rounded-full border-2 border-dashed flex items-center justify-center bg-white z-10 transition-colors ${
                      exp.color === 'orange' || isHovered
                        ? 'border-[#FD853A]'
                        : 'border-[#171717]'
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full transition-colors ${
                        exp.color === 'orange' || isHovered
                          ? 'bg-[#FD853A]'
                          : 'bg-[#171717]'
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Right Column: Role & Description */}
                <div className="md:col-span-5 text-left">
                  <h4 className="font-urbanist text-2xl sm:text-3xl font-bold text-[#171717]">
                    {exp.role}
                  </h4>
                  {exp.description && (
                    <p className="font-urbanist text-sm text-gray-500 mt-2 leading-relaxed max-w-sm">
                      {exp.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
