"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[100px] py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg relative overflow-hidden">
              {/* Artistic F letter with custom design */}
              <div className="relative z-10">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-sm sm:w-5 sm:h-6"
                >
                  {/* Main F structure with artistic curves */}
                  <path
                    d="M3 2 L3 22 L6 22 L6 14 L14 14 L14 11 L6 11 L6 5 L16 5 L16 2 Z"
                    fill="white"
                    fillOpacity="0.95"
                  />
                  {/* Decorative flowing elements */}
                  <path
                    d="M16 2 Q18 3 17 5 Q16.5 6 16 5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.7"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 11 Q16 12 15 14 Q14.5 15 14 14"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeOpacity="0.6"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Artistic dots */}
                  <circle cx="17.5" cy="3.5" r="1" fill="white" fillOpacity="0.8"/>
                  <circle cx="15.5" cy="12.5" r="0.8" fill="white" fillOpacity="0.7"/>
                </svg>
              </div>
              
              {/* Enhanced animated background elements */}
              <motion.div
                className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-white/15 rounded-full blur-sm"
                style={{ top: '5%', left: '15%' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.div
                className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-white/20 rounded-full blur-sm"
                style={{ bottom: '10%', right: '20%' }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.8,
                }}
              />
              <motion.div
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/25 rounded-full blur-sm"
                style={{ top: '70%', left: '75%' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1.5,
                }}
              />
            </div>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Flowly
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
          >
            Tính năng
          </button>
          <button
            onClick={() => scrollToSection("workflows")}
            className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
          >
            Workflows
          </button>
          <Link
            href="/templates"
            className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
          >
            Templates
          </Link>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
          >
            Giá cả
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
          >
            Liên hệ
          </button>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden sm:block">
          <button
            onClick={() => {
              window.open("https://zalo.me/0329735727", "_blank");
            }}
            className="btn-primary hover:scale-105 transition-transform duration-200 shiny-btn bg-gradient-to-r from-blue-500 to-purple-600 text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3"
          >
            Tư vấn miễn phí
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-gray-800"
        >
          <nav className="px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Tính năng
            </button>
            <button
              onClick={() => scrollToSection("workflows")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Workflows
            </button>
            <Link
              href="/templates"
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Giá cả
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Liên hệ
            </button>
            <button
              onClick={() => {
                window.open("https://zalo.me/0329735727", "_blank");
                setIsMenuOpen(false);
              }}
              className="w-full btn-primary bg-gradient-to-r from-blue-500 to-purple-600 mt-4"
            >
              Tư vấn miễn phí
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
