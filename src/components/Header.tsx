"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
      <div className="px-[100px] py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg relative overflow-hidden">
              {/* Artistic F letter with custom design */}
              <div className="relative z-10">
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-sm"
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
                className="absolute w-4 h-4 bg-white/15 rounded-full blur-sm"
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
                className="absolute w-3 h-3 bg-white/20 rounded-full blur-sm"
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
                className="absolute w-2 h-2 bg-white/25 rounded-full blur-sm"
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
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Flowly
            </span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Tính năng
          </button>
          <button
            onClick={() => scrollToSection("workflows")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Workflows
          </button>
          <Link
            href="/templates"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Templates
          </Link>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Giá cả
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-white transition-colors"
          >
            Liên hệ
          </button>
        </nav>

        <div>
          <button
            onClick={() => {
              window.open("https://zalo.me/0329735727", "_blank");
            }}
            className="btn-primary hover:scale-105 transition-transform duration-200 shiny-btn bg-gradient-to-r from-blue-500 to-purple-600
"
          >
            Tư vấn miễn phí
          </button>
        </div>
      </div>
    </header>
  );
}
