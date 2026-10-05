'use client';

import React from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/asset';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  return (
    <section id="services" className="py-6 sm:py-10 px-4 sm:px-8 lg:px-[71px] bg-white">
      <div className="max-w-[1298px] mx-auto rounded-[40px] md:rounded-[50px] bg-[#171717] text-white p-8 sm:p-12 md:p-16 overflow-hidden relative shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
        {/* Background 3D organic silky texture with slow breathing effect */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{
            duration: 9,
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

        {/* Section Header */}
        <div className="relative z-10 mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-urbanist text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight">
              About <span className="text-[#FD853A]">Me</span>
            </h2>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl font-urbanist text-sm sm:text-base leading-relaxed text-gray-300"
        >
          I am a senior student at Foreign Trade University, majoring in International Economics and graduating in 2027. I am passionate about pursuing a career in Supply Chain and Logistics, where I can combine market understanding, data analysis and commercial thinking to create impact in leading global corporations.
        </motion.p>
      </div>
    </section>
  );
}
