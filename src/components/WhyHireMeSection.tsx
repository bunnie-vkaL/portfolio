'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/asset';
import { motion } from 'framer-motion';

export default function WhyHireMeSection() {
  return (
    <section id="about" className="py-10 px-4 sm:px-8 lg:px-[71px] bg-white">
      <div className="max-w-[1298px] mx-auto rounded-[40px] md:rounded-[50px] bg-[#F2F4F7] p-8 sm:p-12 md:p-16 overflow-hidden relative shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: profile portrait with floating effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[420px] aspect-[420/520]"
            >
              <Image
                src={assetPath('/assets/hanh-thao-profile.jpeg')}
                alt="Le Vu Hanh Thao"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top rounded-[35%]"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Introduction & Button */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-urbanist text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight text-[#171717] leading-[1.1]">
                Why <span className="text-[#FD853A]">Hire me</span>?
              </h2>

              <p className="text-gray-500 font-urbanist text-sm sm:text-base mt-6 leading-relaxed max-w-lg">
                I am an enthusiastic student who is passionate about Supply Chain and Logistics. I am eager to keep learning, contribute to a fast-moving team and grow through meaningful work in a leading company. I can support demand planning, organize information, analyze data, coordinate stakeholders and turn operational challenges into clear next steps. My commercial experience has also strengthened my communication, ownership and problem-solving mindset.
              </p>
            </motion.div>

            {/* Hire me Pill Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="mt-10"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white border border-[#171717]/80 text-[#171717] font-urbanist font-bold text-sm sm:text-base hover:bg-[#171717] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Hire me
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
