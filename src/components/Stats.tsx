"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  icon: string;
}

const StatItem = ({ value, label, suffix = "", icon }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-3xl sm:text-4xl mb-2">{icon}</div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-300 text-sm sm:text-base md:text-lg">{label}</div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    {
      value: 1500,
      label: "Dự án đã hoàn thành",
      suffix: "+",
      icon: "🚀"
    },
    {
      value: 5000,
      label: "Workflow đã tạo",
      suffix: "+",
      icon: "⚡"
    },
    {
      value: 4.9,
      label: "Đánh giá khách hàng",
      suffix: "/5",
      icon: "⭐"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#16161a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Thành tựu của chúng tôi
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Những con số ấn tượng thể hiện sự tin tưởng và hài lòng của khách hàng
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;