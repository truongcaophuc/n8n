"use client";

import { motion } from "framer-motion";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1);
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
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bảng giá</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chọn gói phù hợp với nhu cầu của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col card relative overflow-hidden h-[100%] transition-all duration-300 
               ${
                 activeIndex === 0
                   ? ""
                   : "hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
               }`}
              onClick={() => setActiveIndex(0)}
            >
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-gray-400 mb-6">Dành cho người mới bắt đầu</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">999.000₫</span>
                <span className="text-gray-400">/tháng</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckIcon className="h-[20px] w-[20px] text-green-500 mr-2" />
                  <span>Số lượng workflow: 1</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-[20px] w-[20px] text-green-500 mr-2" />
                  <span>Hỗ trợ kĩ thuật</span>
                </li>
                <li className="flex items-center">
                  <XMarkIcon className="h-5 w-5 text-red-500 mr-2" />
                  <span>Có các tính năng AI</span>
                </li>
                <li className="flex items-center">
                  <XMarkIcon className="h-5 w-5 text-red-500 mr-2" />
                  <span>Hosting nền riêng</span>
                </li>
              </ul>

              <button
                className="mt-auto w-full py-3 bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:scale-105 hover:shadow-lg"
                onClick={() => scrollToSection("contact")}
              >
                Liên hệ
              </button>
            </motion.div>
            {activeIndex === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="gradient-border"
              ></motion.div>
            )}
          </div>

          {/* Pro Plan */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col card relative overflow-hidden h-[100%] transition-all duration-300 
               ${
                 activeIndex === 1
                   ? ""
                   : "hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
               }`}
              onClick={() => setActiveIndex(1)}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-accent"></div>
              <div className="absolute top-6 right-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white text-xs py-1 px-3 rounded-full">
                Phổ biến
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced</h3>
              <p className="text-gray-400 mb-6">Dành cho doanh nghiệp nhỏ</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">3.000.000₫</span>
                <span className="text-gray-400">/tháng</span>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckIcon className="h-[20px] w-[20px] text-green-500 mr-2" />
                  <span>Số lượng workflow: 2</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-[20px] w-[20px] text-green-500 mr-2" />
                  <span>Hỗ trợ kĩ thuật</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-[20px] w-[20px] text-green-500 mr-2" />
                  <span>Có các tính năng AI</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-[20px] w-[20px] text-green-500 mr-2" />
                  <span>Hosting nền riêng trên VPS chia sẻ</span>
                </li>
              </ul>

              <button
                className="mt-auto w-full py-3 bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:scale-105 hover:shadow-lg"
                onClick={() => scrollToSection("contact")}
              >
                Liên hệ
              </button>
            </motion.div>
            {activeIndex === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="gradient-border"
              ></motion.div>
            )}
          </div>

          {/* Enterprise Plan */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col card relative overflow-hidden h-[100%] transition-all duration-300 
               ${
                 activeIndex === 2
                   ? ""
                   : "hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
               }`}
              onClick={() => setActiveIndex(2)}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-secondary"></div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">Dành cho doanh nghiệp lớn</p>
              <div className="flex mb-6 justify-center">
                <span className="text-4xl font-bold">Thỏa thuận</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span>Triển khai riêng</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span>Số lượng workflow: Không giới hạn</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span>Truy cập không giới hạn vào các tính năng AI</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span>Hỗ trợ 24/7</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span>Hosting nền riêng: VPS riêng / server riêng</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span>
                    Lưu trữ & bảo mật dữ liệu: mã hóa + backup định kỳ
                  </span>
                </li>
              </ul>

              <button
                className="mt-auto w-full py-3 bg-gray-800 text-white rounded-lg font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:scale-105 hover:shadow-lg"
                onClick={() => scrollToSection("contact")}
              >
                Liên hệ
              </button>
            </motion.div>
            {activeIndex === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="gradient-border"
              ></motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
