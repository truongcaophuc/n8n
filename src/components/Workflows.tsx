"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "@/public/n8n.json";
export default function Workflows() {
  return (
    <section id="workflows" className="py-20 relative bg-gray-900/30">
      <div className="mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Workflows mạnh mẽ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto ">
            Tự động hóa quy trình làm việc của bạn với các workflows linh hoạt
            và mạnh mẽ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Tự động hóa quy trình làm việc
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Tạo các quy trình tự động hóa phức tạp mà không cần viết code. Kết
              nối các ứng dụng, dịch vụ và API một cách dễ dàng.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 hover:text-green-600 transition">
                  Giao diện kéo thả trực quan, dễ sử dụng
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 hover:text-green-600 transition">
                  Hỗ trợ hơn 200+ tích hợp với các dịch vụ phổ biến
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 hover:text-green-600 transition">
                  Tùy chỉnh linh hoạt với JavaScript và JSON
                </p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 hover:text-green-600 transition">Lập lịch và kích hoạt tự động</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-xl blur-xl"></div>
            <div className="relative bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden shadow-xl">
              <div className="col-span-2 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-[100%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
