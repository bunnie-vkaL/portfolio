'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('LOGage 2026');
  const [activeDot, setActiveDot] = useState(0);

  const filterTabs = [
    'LOGage 2026',
    'SCMISSION 2026',
  ];

  const portfolioProjects: Record<string, { title: string; desc: string; href: string; image: string }> = {
    'LOGage 2026': {
      title: 'LOGage 2026 · UnLog',
      desc: 'Round 2 case answer focused on supply chain strategy, demand planning and practical recommendations. Open the submitted case deck to review the full analysis.',
      href: '/projects/logage-2026-round-2.pdf',
      image: '/projects/logage-bg.png',
    },
    'SCMISSION 2026': {
      title: 'SCMISSION 2026 · LadyLogi',
      desc: '72-hour Round 2.2 case answer covering supply chain problem solving, data interpretation and route-to-market thinking. Open the submitted case answer to view the work.',
      href: '/projects/scmission-2026-round-2-2.pdf',
      image: '/projects/scmission-bg.png',
    },
  };

  const currentProject = portfolioProjects[activeFilter] || portfolioProjects['LOGage 2026'];

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-[71px] bg-white">
      <div className="max-w-[1298px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-urbanist text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight text-[#171717] leading-[1.1]">
              Case Competition <span className="text-[#FD853A]">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FD853A] text-white font-urbanist font-medium text-base hover:bg-[#fa7521] transition-all shadow-md hover:shadow-orange-500/25 self-start sm:self-auto"
            >
              View Case Decks
            </Link>
          </motion.div>
        </div>

        {/* Case competition project preview */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -4 }}
          className="relative w-full aspect-[1290/434] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 cursor-pointer group"
        >
          <div
            className="absolute inset-0 bg-[#171717] bg-cover bg-center p-8 sm:p-12 flex flex-col justify-end"
            style={{ backgroundImage: `linear-gradient(90deg, rgba(23,23,23,0.9) 0%, rgba(23,23,23,0.62) 55%, rgba(23,23,23,0.35) 100%), url(${currentProject.image})` }}
          >
            <p className="text-[#FD853A] font-urbanist text-sm font-bold uppercase tracking-[0.2em]">Submitted case answer</p>
            <p className="mt-3 text-white font-urbanist text-3xl sm:text-5xl font-bold">{currentProject.title}</p>
            <p className="mt-3 text-white/60 font-urbanist text-sm max-w-xl">Open the case deck below to review the full submission.</p>
          </div>
        </motion.div>

        {/* Interactive Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => {
            const isActive = activeDot === dot;
            return (
              <motion.button
                key={dot}
                onClick={() => setActiveDot(dot)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  width: isActive ? 32 : 10,
                  backgroundColor: isActive ? '#FD853A' : '#D1D5DB',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className="h-2.5 rounded-full cursor-pointer focus:outline-none"
                aria-label={`Go to slide ${dot + 1}`}
              />
            );
          })}
        </div>

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

        {/* Project Title & Description Below with smooth transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-10 text-left max-w-2xl flex flex-col"
          >
            <div className="inline-flex items-center gap-3 group/title cursor-pointer">
              <h3 className="font-urbanist text-3xl sm:text-4xl font-bold text-[#171717] group-hover/title:text-[#FD853A] transition-colors duration-200">
                {currentProject.title}
              </h3>
              <Link
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#FD853A] text-white flex items-center justify-center shadow-md transition-transform hover:scale-110 hover:rotate-45 shrink-0"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="mt-4 font-urbanist text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
              {currentProject.desc}
            </p>
            <Link
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white hover:bg-[#FD853A] transition-colors"
            >
              Open PDF case deck <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
