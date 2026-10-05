'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BlogSection() {
  const notes = [
    {
      id: 1,
      tag: 'Short-term plan',
      title: 'Build a strong foundation in supply chain operations',
      description: 'Graduate in 2027, gain hands-on experience through an internship or entry-level role, and strengthen my skills in demand planning, procurement, logistics coordination, Excel and Power BI.',
    },
    {
      id: 2,
      tag: 'Long-term plan',
      title: 'Grow into a supply chain and logistics professional',
      description: 'Develop broad operational and strategic experience, take ownership of complex projects and contribute to supply chain transformation in a leading global corporation.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-[71px] bg-white">
      <div className="max-w-[1298px] mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-urbanist text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight text-[#171717] leading-[1.1]">
              My <span className="text-[#FD853A]">Career Plan</span>
            </h2>
          </motion.div>
        </div>

        {/* CV-aligned notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {notes.map((note, idx) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 350, damping: 22 },
              }}
              className="group relative w-full min-h-[300px] rounded-3xl overflow-hidden cursor-default shadow-md hover:shadow-2xl transition-shadow duration-300 bg-[#F2F4F7] p-7 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FD853A]">{note.tag}</p>
                <h3 className="mt-5 font-urbanist text-2xl font-bold text-[#171717] leading-tight">{note.title}</h3>
              </div>
              <p className="mt-8 font-urbanist text-sm leading-relaxed text-gray-500">{note.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
