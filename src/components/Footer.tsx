'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Send, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Profile', href: '#about' },
    { label: 'Strengths', href: '#services' },
    { label: 'Resume', href: '#experience' },
    { label: 'Project', href: '#portfolio' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#facebook',
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#instagram',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#dribbble',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
          <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
          <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: '#whatsapp',
      icon: (
        <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.586-.494-.506-.678-.515-.175-.008-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.579-.087 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.04 2C6.516 2 2.022 6.494 2.022 12.018c0 1.954.561 3.778 1.53 5.323L2 22l4.809-1.516a9.96 9.96 0 0 0 5.231 1.534h.004c5.523 0 10.017-4.494 10.017-10.018A10.018 10.018 0 0 0 12.04 2z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#twitter',
      icon: (
        <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full px-4 sm:px-8 lg:px-[71px] pt-8 sm:pt-10 pb-4 bg-white">
      <div className="max-w-[1298px] mx-auto rounded-t-[40px] md:rounded-t-[50px] bg-[#1E1E1E] text-white p-8 sm:p-12 md:p-16 shadow-2xl">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 sm:pb-12 border-b border-white/10">
          <h2 className="font-urbanist text-4xl sm:text-6xl md:text-[64px] font-bold tracking-tight">
            Lets Connect there
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <Link
              href="#contact"
              className="group/hire inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FD853A] text-white font-urbanist font-medium text-base hover:bg-[#fa7521] transition-all self-start sm:self-auto shadow-md hover:shadow-orange-500/25"
            >
              <span>Hire me</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/hire:translate-x-0.5 group-hover/hire:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* 4 Columns Grid */}
        <div className="py-12 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10">
          {/* Col 1: Logo, Bio & Socials */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link href="#home" className="inline-block group select-none">
              <span className="font-urbanist font-extrabold text-2xl tracking-tight text-white transition-colors duration-200">
                Hanh <span className="text-[#FD853A]">Thao</span>
              </span>
            </Link>
            <p className="font-urbanist text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mt-2">
              Le Vu Hanh Thao · International Economics student at Foreign Trade University. Open to sales management, partnerships and commercial growth opportunities.
            </p>
            {/* Social Icons row matching Figma with interactive spring pop */}
            <div className="flex items-center gap-3 mt-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  whileHover={{ scale: 1.18, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#FD853A] flex items-center justify-center text-white/80 hover:text-white transition-colors duration-200 cursor-pointer shadow-sm hover:shadow-orange-500/30"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 md:pl-4">
            <h4 className="font-urbanist text-base font-bold text-white mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-urbanist text-xs sm:text-sm text-gray-400 hover:text-[#FD853A] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="md:col-span-3">
            <h4 className="font-urbanist text-base font-bold text-white mb-5">Contact</h4>
            <div className="flex flex-col gap-3 font-urbanist text-xs sm:text-sm text-gray-400">
              <p className="hover:text-white transition-colors cursor-pointer">+84 766 079 308</p>
              <p className="hover:text-white transition-colors cursor-pointer">thaolvh.work@gmail.com</p>
              <p className="hover:text-white transition-colors cursor-pointer">Hanoi, Vietnam</p>
            </div>
          </div>

          {/* Col 4: Get latest info input pill */}
          <div className="md:col-span-3">
            <h4 className="font-urbanist text-base font-bold text-white mb-5">Get the latest information</h4>
            <form onSubmit={handleSubscribe} className="relative flex items-center bg-white rounded-full p-1 shadow-sm focus-within:ring-2 focus-within:ring-[#FD853A]">
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 font-urbanist text-xs sm:text-sm text-gray-900 bg-transparent placeholder-gray-400 focus:outline-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors duration-200 shrink-0 ${
                  subscribed ? 'bg-emerald-600' : 'bg-[#FD853A] hover:bg-[#fa7521]'
                }`}
                aria-label="Submit email"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-urbanist text-xs text-gray-500">
          <p>© 2026 Le Vu Hanh Thao. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gray-300 transition-colors">User Terms & Conditions</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
