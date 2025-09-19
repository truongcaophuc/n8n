"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const n8nRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (n8nRef.current) {
      // GSAP animation for N8N text
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(n8nRef.current, {
        duration: 2,
        scale: 1.1,
        color: "#6366f1",
        textShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
        ease: "power2.inOut",
      })
        .to(
          n8nRef.current,
          {
            duration: 1.5,
            rotation: 5,
            ease: "elastic.out(1, 0.3)",
          },
          "-=1"
        )
        .to(n8nRef.current, {
          duration: 1,
          rotation: -5,
          ease: "elastic.out(1, 0.3)",
        })
        .to(n8nRef.current, {
          duration: 1,
          rotation: 0,
          ease: "elastic.out(1, 0.3)",
        });
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-indigo-950 to-blue-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Tự động hóa doanh nghiệp với{" "}
            <span
              ref={n8nRef}
              className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
            >
              n8n
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Xây dựng các quy trình tự động hóa thông minh để chuyển đổi hoạt
            động của bạn, tiết kiệm thời gian và tăng lợi nhuận
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
          >
            Bắt đầu ngay
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:border-white/50 hover:shadow-lg">
            Xem demo
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[var(--background)]"></div>
    </section>
  );
}
