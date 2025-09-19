"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface WorkflowTemplate {
  id: number;
  name: string;
  description: string;
  category: string;
  tags: string[];
  nodes: number;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<WorkflowTemplate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Mock data for demonstration (replace with actual API call)
  const mockTemplates: WorkflowTemplate[] = [
    {
      id: 1,
      name: "Email Marketing Automation",
      description: "Tự động gửi email marketing dựa trên hành vi người dùng và trigger events",
      category: "Marketing",
      tags: ["email", "automation", "marketing", "crm"],
      nodes: 8,
      createdAt: "2024-01-15",
      updatedAt: "2024-01-20"
    },
    {
      id: 2,
      name: "Data Sync Between Systems",
      description: "Đồng bộ dữ liệu giữa CRM, ERP và các hệ thống khác một cách tự động",
      category: "Data Management",
      tags: ["sync", "database", "crm", "erp"],
      nodes: 12,
      createdAt: "2024-01-10",
      updatedAt: "2024-01-18"
    },
    {
      id: 3,
      name: "Social Media Content Scheduler",
      description: "Lập lịch và đăng nội dung tự động trên các nền tảng mạng xã hội",
      category: "Social Media",
      tags: ["social", "content", "scheduler", "automation"],
      nodes: 6,
      createdAt: "2024-01-12",
      updatedAt: "2024-01-22"
    },
    {
      id: 4,
      name: "Invoice Processing Automation",
      description: "Tự động xử lý hóa đơn từ email, trích xuất dữ liệu và cập nhật hệ thống",
      category: "Finance",
      tags: ["invoice", "finance", "ocr", "automation"],
      nodes: 10,
      createdAt: "2024-01-08",
      updatedAt: "2024-01-25"
    },
    {
      id: 5,
      name: "Customer Support Ticket Routing",
      description: "Tự động phân loại và chuyển tiếp ticket hỗ trợ khách hàng",
      category: "Customer Support",
      tags: ["support", "ticket", "routing", "ai"],
      nodes: 7,
      createdAt: "2024-01-14",
      updatedAt: "2024-01-21"
    },
    {
      id: 6,
      name: "E-commerce Order Processing",
      description: "Tự động xử lý đơn hàng từ website đến fulfillment và shipping",
      category: "E-commerce",
      tags: ["ecommerce", "order", "fulfillment", "shipping"],
      nodes: 15,
      createdAt: "2024-01-11",
      updatedAt: "2024-01-19"
    }
  ];

  const categories = ["all", "Marketing", "Data Management", "Social Media", "Finance", "Customer Support", "E-commerce"];

  useEffect(() => {
    // Simulate API call
    const fetchTemplates = async () => {
      try {
        setLoading(true);
        // In real implementation, replace with actual n8n API call
        // const response = await fetch('https://api.n8n.io/templates');
        // const data = await response.json();
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setTemplates(mockTemplates);
        setError(null);
      } catch (err) {
        setError("Không thể tải templates. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const filteredTemplates = selectedCategory === "all" 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Marketing": "bg-pink-100 text-pink-800",
      "Data Management": "bg-blue-100 text-blue-800",
      "Social Media": "bg-purple-100 text-purple-800",
      "Finance": "bg-green-100 text-green-800",
      "Customer Support": "bg-yellow-100 text-yellow-800",
      "E-commerce": "bg-indigo-100 text-indigo-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                ← Quay lại trang chủ
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">Workflow Templates</h1>
              <p className="text-gray-600 mt-1">Khám phá và sử dụng các mẫu workflow được thiết kế sẵn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Danh mục</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category === "all" ? "Tất cả" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Templates Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                      {template.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(template.category)}`}>
                      {template.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {template.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      {template.nodes} nodes
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(template.updatedAt).toLocaleDateString('vi-VN')}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {template.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        +{template.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                      Sử dụng template
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy template</h3>
            <p className="mt-1 text-sm text-gray-500">Không có template nào trong danh mục này.</p>
          </div>
        )}
      </div>
    </div>
  );
}