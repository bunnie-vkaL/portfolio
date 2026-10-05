'use client';

import React from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/asset';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section className="py-6 sm:py-10 px-4 sm:px-8 lg:px-[71px] bg-white">
      <div className="max-w-[1298px] mx-auto rounded-[40px] md:rounded-[50px] bg-[#171717] text-white p-8 sm:p-12 md:p-16 overflow-hidden relative shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
        {/* Background silky texture with gentle drift */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 pointer-events-none"
        >
          <Image
            src={assetPath('/assets/service-bg.png')}
            alt="Abstract Background"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Floating stars with gentle twinkle */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-12 left-12 text-[#FD853A] hidden md:block"
        >
          <span className="text-xl">✦</span>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-16 right-16 text-[#FD853A] hidden md:block"
        >
          <span className="text-2xl">✦</span>
        </motion.div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <h2 className="font-urbanist text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight leading-[1.1]">
              My <span className="text-[#FD853A]">Skill Set</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-urbanist text-gray-400 text-xs sm:text-sm mt-4 leading-relaxed max-w-xl mx-auto"
          >
            A practical mix of commercial communication, data analysis, supply chain thinking and multilingual collaboration.
          </motion.p>
        </div>

        {/* Skills and languages from the CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 350, damping: 22 },
            }}
            className="relative w-full rounded-3xl p-8 bg-white/10 border border-white/10 cursor-default shadow-lg"
          >
            <p className="text-[#FD853A] text-sm font-bold uppercase tracking-wider">Sales & Commercial</p>
            <p className="mt-3 text-lg font-semibold">Prospecting, CRM and B2B outreach</p>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">Negotiation, market research, lead generation, sales presentation and partner management.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 350, damping: 22 },
            }}
            className="relative w-full rounded-3xl p-8 bg-white/10 border border-white/10 cursor-default shadow-lg"
          >
            <p className="text-[#FD853A] text-sm font-bold uppercase tracking-wider">Data & Business</p>
            <p className="mt-3 text-lg font-semibold">Excel, Power BI and demand forecasting</p>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">Market trend analysis, FMCG sales fundamentals, route-to-market, retail execution, inventory availability and demand planning.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative w-full rounded-3xl p-8 bg-white/10 border border-white/10 cursor-default shadow-lg md:col-span-2"
          >
            <p className="text-[#FD853A] text-sm font-bold uppercase tracking-wider">Languages</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-lg font-semibold">English</p>
                <p className="mt-1 text-sm text-gray-400">IELTS 7.5</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Chinese</p>
                <p className="mt-1 text-sm text-gray-400">Equivalent to HSK 4</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
