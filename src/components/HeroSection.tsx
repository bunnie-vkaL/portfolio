'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full pt-4 pb-0 overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[71px] relative flex flex-col items-center">
        {/* Hello! Badge with entrance pop and hover interaction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
          className="relative inline-flex items-center justify-center px-6 py-1.5 rounded-full border-[1.5px] border-[#171717] bg-white shadow-sm cursor-default"
        >
          <span className="font-urbanist font-medium text-[15px] sm:text-[16px] text-[#171717]">
            Hello!
          </span>
          {/* Top-right orange 3-spark lines from Figma with pulse */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3.5 -right-5 pointer-events-none"
          >
            <Image
              src={assetPath('/assets/figma/hero-spark.svg')}
              alt=""
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-3 text-center z-0"
        >
          {/* Decorative motion detail */}
          <motion.div
            animate={{ x: [0, -3, 0], y: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-12 lg:-left-16 bottom-3 pointer-events-none hidden md:block"
          >
            <Image
              src={assetPath('/assets/figma/hero-doodle.svg')}
              alt=""
              width={74}
              height={85}
              className="w-14 lg:w-[74px] h-auto"
            />
          </motion.div>

          <h1 className="font-urbanist font-bold text-5xl sm:text-7xl lg:text-[90px] leading-[1.05] tracking-[-0.02em] text-[#171717]">
            I’m <span className="text-[#FD853A] inline-block hover:scale-105 transition-transform duration-200">Hanh Thao</span>,<br />
            I'm openning for job!
          </h1>
        </motion.div>

        {/* Profile image and CV highlights */}
        <div className="relative w-full flex justify-center mt-4 sm:mt-6 lg:mt-8 z-10">
          {/* CV snapshot card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 },
              x: { duration: 0.6, delay: 0.2 },
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="hidden md:block absolute left-0 lg:left-0 top-[52%] -translate-y-1/2 z-20 w-[240px] lg:w-[280px] cursor-pointer"
          >
            <div className="rounded-3xl bg-white/95 p-5 shadow-xl border border-[#171717]/10 font-urbanist">
              <p className="text-xs uppercase tracking-[0.18em] text-[#FD853A] font-bold">Profile</p>
              <p className="mt-2 text-sm font-semibold text-[#171717]">International Economics student</p>
              <p className="mt-1 text-xs text-gray-500">Sales · Partnerships · Market analysis</p>
            </div>
          </motion.div>

          {/* Profile portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] sm:max-w-[680px] lg:max-w-[820px] flex flex-col items-center group"
          >
            <div className="relative w-full max-w-[520px] aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.015] rounded-[42%] overflow-hidden shadow-2xl ring-8 ring-white">
              <Image
                src={assetPath('/assets/hanh-thao-profile.jpeg')}
                alt="Le Vu Hanh Thao"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 700px, 820px"
                className="object-cover object-center pointer-events-none select-none"
              />
            </div>

            {/* Frosted Glass Pill: Portfolio ↗ & Hire me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-6 sm:bottom-10 lg:bottom-12 flex items-center p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.2)] z-30"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Link
                  href="#portfolio"
                  className="group/btn inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#FD853A] text-white font-urbanist font-medium text-sm sm:text-base hover:bg-[#fa7521] transition-all shadow-md hover:shadow-orange-500/30"
                >
                  <span>Portfolio</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center px-5 sm:px-7 py-2.5 sm:py-3 text-white font-urbanist font-medium text-sm sm:text-base hover:text-white/80 transition-colors"
                >
                  <span>Hire me</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right floating CV snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.25 },
              x: { duration: 0.6, delay: 0.25 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
            }}
            whileHover={{ scale: 1.08, y: -4 }}
            className="hidden md:block absolute right-0 lg:right-0 top-[52%] -translate-y-1/2 z-20 w-[140px] lg:w-[170px] cursor-pointer"
          >
            <div className="rounded-3xl bg-[#171717] text-white p-5 shadow-xl font-urbanist">
              <p className="text-3xl font-bold text-[#FD853A]">FTU</p>
              <p className="mt-1 text-xs leading-relaxed text-white/75">International Economics · 2023–2027</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
