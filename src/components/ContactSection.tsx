'use client';

import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSent(true);
        setEmail('');
        setTimeout(() => setSent(false), 3500);
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-[71px] bg-white">
      <div className="max-w-[1298px] mx-auto flex flex-col items-center text-center">
        {/* Main Heading matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-urbanist text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight text-[#171717] leading-[1.1] max-w-3xl">
            Have an opportunity<br />
            to discuss? <span className="text-[#FD853A]">Let’s Connect</span>
          </h2>
        </motion.div>

        {/* Elongated Input Pill with Send button inside */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="mt-10 sm:mt-12 w-full max-w-[680px] relative flex items-center p-2 rounded-full border border-gray-300 bg-white shadow-sm focus-within:border-[#FD853A] focus-within:ring-4 focus-within:ring-[#FD853A]/15 focus-within:shadow-lg transition-all duration-300"
        >
          <div className="pl-3 sm:pl-4 text-gray-400">
            <div className="w-10 h-10 rounded-full bg-[#FFF2EA] flex items-center justify-center text-[#FD853A] transition-transform duration-300 group-focus-within:scale-110">
              <Mail className="w-5 h-5" />
            </div>
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            className="w-full px-4 py-3 bg-transparent font-urbanist text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none"
          />
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className={`px-8 sm:px-10 py-3.5 rounded-full text-white font-urbanist font-medium text-base transition-all duration-300 shadow-md shrink-0 flex items-center gap-2 ${
              sent
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'bg-[#FD853A] hover:bg-[#fa7521]'
            }`}
          >
            {sent ? (
              <>
                <Check className="w-4 h-4" />
                <span>Sent!</span>
              </>
            ) : isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <span>Send</span>
            )}
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
}
