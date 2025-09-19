"use client";

import { motion } from "framer-motion";

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Tính năng nổi bật</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            N8N cung cấp các công cụ mạnh mẽ giúp tự động hóa quy trình làm việc một cách dễ dàng
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card shadow-xl shadow-indigo-500/20 hover:shadow-blue-500/20 transition p-6"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">Tự động hóa không code</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Xây dựng quy trình làm việc phức tạp mà không cần viết code với giao diện kéo thả trực quan.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="card shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition p-6"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">Kết nối hơn 200+ dịch vụ</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Tích hợp dễ dàng với hơn 200 ứng dụng và dịch vụ phổ biến như Google, Slack, Trello và nhiều hơn nữa.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition p-6 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4 sm:mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">Bảo mật dữ liệu</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Dữ liệu của bạn luôn được bảo vệ với các tiêu chuẩn bảo mật cao nhất và mã hóa đầu cuối.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}