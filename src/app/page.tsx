"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                N8N
              </div>
            </motion.div>
            <span className="text-xl font-bold">n8n</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Tính năng</Link>
            <Link href="#workflows" className="text-gray-300 hover:text-white transition-colors">Workflows</Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">Bảng giá</Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Liên hệ</Link>
          </nav>
          
          <div>
            <button className="btn-primary">Dùng thử miễn phí</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-[20%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-[10%] w-56 h-56 md:w-72 md:h-72 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                Tự động hóa quy trình làm việc với <span className="gradient-text">N8N</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-6 md:mb-8">
                Nền tảng tự động hóa quy trình làm việc mạnh mẽ, kết nối các ứng dụng, dịch vụ và API mà không cần viết code
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                <button className="btn-primary w-full sm:w-auto">
                  Bắt đầu miễn phí
                </button>
                <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium transition-all hover:bg-gray-700 w-full sm:w-auto">
                  Xem demo
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16"
            >
              <div className="relative w-full h-[400px] bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-900 to-background opacity-80"></div>
                <div className="relative z-10 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-sm text-gray-400">N8N Workflow Editor</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h3 className="text-sm font-medium mb-2">Triggers</h3>
                      <div className="space-y-2">
                        <div className="bg-gray-700/50 p-2 rounded text-xs">Webhook</div>
                        <div className="bg-gray-700/50 p-2 rounded text-xs">Schedule</div>
                        <div className="bg-gray-700/50 p-2 rounded text-xs">Database</div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <h3 className="text-sm font-medium mb-2">Workflow</h3>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-16 h-16 rounded bg-primary/20 flex items-center justify-center">
                          <div className="w-10 h-10 rounded bg-primary/40 flex items-center justify-center text-xs">Start</div>
                        </div>
                        <div className="w-6 h-0.5 bg-gray-600"></div>
                        <div className="w-16 h-16 rounded bg-accent/20 flex items-center justify-center">
                          <div className="w-10 h-10 rounded bg-accent/40 flex items-center justify-center text-xs">Process</div>
                        </div>
                        <div className="w-6 h-0.5 bg-gray-600"></div>
                        <div className="w-16 h-16 rounded bg-secondary/20 flex items-center justify-center">
                          <div className="w-10 h-10 rounded bg-secondary/40 flex items-center justify-center text-xs">End</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tính năng nổi bật</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              N8N cung cấp các công cụ mạnh mẽ giúp tự động hóa quy trình làm việc một cách dễ dàng
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Tự động hóa không code</h3>
              <p className="text-gray-300">
                Xây dựng quy trình làm việc phức tạp mà không cần viết code với giao diện kéo thả trực quan.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Kết nối hơn 200+ dịch vụ</h3>
              <p className="text-gray-300">
                Tích hợp dễ dàng với hơn 200 ứng dụng và dịch vụ phổ biến như Google, Slack, Trello và nhiều hơn nữa.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bảo mật và riêng tư</h3>
              <p className="text-gray-300">
                Triển khai trên máy chủ riêng của bạn để đảm bảo dữ liệu luôn được bảo mật và kiểm soát.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflows Section */}
      <section id="workflows" className="py-20 relative bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Workflows mẫu</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Khám phá các mẫu workflow có sẵn để bắt đầu nhanh chóng
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card hover:border-primary/30"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Tự động hóa Email Marketing</h3>
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">Marketing</span>
              </div>
              <p className="text-gray-300 mb-4">
                Tự động gửi email marketing dựa trên hành vi của người dùng và phân đoạn khách hàng.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>5 nodes</span>
                <span>•</span>
                <span>2 triggers</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card hover:border-accent/30"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Đồng bộ dữ liệu CRM</h3>
                <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">Sales</span>
              </div>
              <p className="text-gray-300 mb-4">
                Đồng bộ dữ liệu khách hàng giữa các hệ thống CRM và công cụ marketing.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>8 nodes</span>
                <span>•</span>
                <span>3 triggers</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card hover:border-secondary/30"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Theo dõi mạng xã hội</h3>
                <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">Social</span>
              </div>
              <p className="text-gray-300 mb-4">
                Theo dõi và phân tích dữ liệu từ các nền tảng mạng xã hội, tự động tạo báo cáo.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>6 nodes</span>
                <span>•</span>
                <span>2 triggers</span>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="btn-primary">Xem tất cả workflows</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                  N8N
                </div>
                <span className="text-xl font-bold">n8n</span>
              </div>
              <p className="text-gray-400">
                Nền tảng tự động hóa quy trình làm việc mạnh mẽ, kết nối các ứng dụng, dịch vụ và API.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Sản phẩm</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tính năng</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Workflows</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tích hợp</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bảng giá</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Tài nguyên</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tài liệu</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cộng đồng</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hỗ trợ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Email: contact@n8n.io</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter: @n8n_io</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub: n8n-io/n8n</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 N8N. Tất cả các quyền được bảo lưu.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Điều khoản</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Chính sách</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
