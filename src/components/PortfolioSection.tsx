'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { assetPath } from '@/lib/asset';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('LOGage 2026');

  const filterTabs = [
    'LOGage 2026',
    'SCMISSION 2026',
  ];

  const portfolioProjects: Record<
    string,
    {
      badge: string;
      title: string;
      desc: string;
      image: string;
      tags: string[];
    }
  > = {
    'LOGage 2026': {
      badge: 'LOGage 2026 · Top 10 Finalist',
      title: 'LOGage 2026 · UnLog',
      desc: 'Round 2 case answer focused on supply chain strategy, demand planning and practical recommendations. Turned raw competition data into inventory allocation, demand forecasting and route-to-market optimization.',
      image: '/projects/logage-bg.png',
      tags: ['Supply Chain Strategy', 'Demand Planning', 'Inventory Allocation'],
    },
    'SCMISSION 2026': {
      badge: 'SCMISSION 2026 · Top 20 / 1000+',
      title: 'SCMISSION 2026 · LadyLogi',
      desc: '72-hour Round 2.2 case answer covering supply chain problem solving, data interpretation and route-to-market thinking. Cleaned and analyzed raw dataset in Excel to forecast demand patterns and prevent out-of-stock.',
      image: '/projects/scmission-bg.png',
      tags: ['Problem Solving', 'Data Forecasting', 'Route-to-Market'],
    },
  };

  const currentProject = portfolioProjects[activeFilter] || portfolioProjects['LOGage 2026'];

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-[71px] bg-white">
      <div className="max-w-[1298px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-urbanist text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight text-[#171717] leading-[1.1]">
              <span className="text-[#FD853A]">Projects</span>
            </h2>
          </motion.div>
        </div>

        {/* Project Card with Title & Description directly on the Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.99 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative w-full min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col justify-end group"
          >
            {/* Background Image with layered gradient scrim for optimal contrast */}
            <div
              className="absolute inset-0 bg-[#171717] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(23,23,23,0.15) 0%, rgba(23,23,23,0.65) 45%, rgba(23,23,23,0.92) 100%), linear-gradient(90deg, rgba(23,23,23,0.85) 0%, rgba(23,23,23,0.5) 60%, rgba(23,23,23,0.15) 100%), url(${assetPath(currentProject.image)})`,
              }}
            />

            {/* Content overlaid directly on the image */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-14 flex flex-col justify-end max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD853A]/20 border border-[#FD853A]/40 backdrop-blur-md w-fit">
                <span className="w-2 h-2 rounded-full bg-[#FD853A] animate-pulse" />
                <span className="text-[#FD853A] font-urbanist text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {currentProject.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 font-urbanist text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {currentProject.title}
              </h3>

              {/* Description */}
              <p className="mt-4 font-urbanist text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed">
                {currentProject.desc}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {currentProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 font-urbanist text-xs sm:text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Filter Pills with animated sliding indicator */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-full max-w-fit mx-auto">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className="relative px-6 py-2.5 rounded-full font-urbanist text-sm sm:text-base font-semibold transition-colors duration-200 select-none focus:outline-none cursor-pointer"
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolio-tab-pill"
                    className="absolute inset-0 bg-[#171717] rounded-full shadow-md z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
