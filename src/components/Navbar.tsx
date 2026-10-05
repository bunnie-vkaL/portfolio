'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/asset';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const leftLinks: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Service', href: '#services', id: 'services' },
];

const rightLinks: NavItem[] = [
  { label: 'Resume', href: '#experience', id: 'experience' },
  { label: 'Project', href: '#portfolio', id: 'portfolio' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'experience', 'about', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLink = (item: NavItem) => {
    const isActive = activeTab === item.id;
    const isHovered = hoveredTab === item.id;

    return (
      <Link
        key={item.label}
        href={item.href}
        onMouseEnter={() => setHoveredTab(item.id)}
        onMouseLeave={() => setHoveredTab(null)}
        onClick={() => setActiveTab(item.id)}
        className="relative px-6 py-2.5 sm:px-7 sm:py-3 rounded-full font-urbanist font-medium text-[16px] transition-colors duration-200 select-none z-10"
      >
        {/* Animated Active Pill Indicator */}
        {isActive && (
          <motion.div
            layoutId="navbar-active-pill"
            className="absolute inset-0 bg-[#FD853A] rounded-full shadow-md z-[-1]"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}

        {/* Subtle Hover Highlight for inactive tabs */}
        {!isActive && isHovered && (
          <motion.div
            layoutId="navbar-hover-pill"
            className="absolute inset-0 bg-white/10 rounded-full z-[-1]"
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          />
        )}

        <span
          className={`transition-colors duration-200 ${
            isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
          }`}
        >
          {item.label}
        </span>
      </Link>
    );
  };

  return (
    <header className="w-full pt-6 sm:pt-8 md:pt-10 pb-2 px-4 sm:px-8 lg:px-[71px] relative z-50">
      {/* Floating Dark Pill Navbar with subtle entrance animation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1298px] h-[72px] sm:h-[86px] mx-auto bg-[#171717] rounded-full px-4 sm:px-6 md:px-8 flex items-center justify-between relative shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/10 backdrop-blur-md"
      >
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-start">
          {leftLinks.map(renderNavLink)}
        </div>

        {/* Center Logo - Perfectly Centered with spring hover */}
        <motion.div
          whileHover={{ scale: 1.06, rotate: [-1, 1, 0] }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <Link href="#home" className="flex items-center gap-2 group p-2">
            <Image
              src={assetPath('/assets/figma/navbar-logo.svg')}
              alt="Hanh Thao logo"
              width={130}
              height={40}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300"
              priority
            />
          </Link>
        </motion.div>

        {/* Right Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-end">
          {rightLinks.map(renderNavLink)}
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-full text-white hover:text-[#FD853A] hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 max-w-[1298px] mx-auto bg-[#171717] rounded-3xl p-5 border border-white/10 shadow-2xl flex flex-col gap-2"
          >
            {[...leftLinks, ...rightLinks].map((item) => {
              const isActive = activeTab === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-full font-urbanist font-medium text-sm text-center transition-all ${
                    isActive
                      ? 'bg-[#FD853A] text-white shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
