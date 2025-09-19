"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ToastProps {
  id: string;
  type: "success" | "error" | "info" | "warning";
  title: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

export default function Toast({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case "error":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case "warning":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case "info":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getColors = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-500/90",
          border: "border-green-400",
          icon: "text-green-100",
          text: "text-green-50"
        };
      case "error":
        return {
          bg: "bg-red-500/90",
          border: "border-red-400",
          icon: "text-red-100",
          text: "text-red-50"
        };
      case "warning":
        return {
          bg: "bg-yellow-500/90",
          border: "border-yellow-400",
          icon: "text-yellow-100",
          text: "text-yellow-50"
        };
      case "info":
        return {
          bg: "bg-blue-500/90",
          border: "border-blue-400",
          icon: "text-blue-100",
          text: "text-blue-50"
        };
    }
  };

  const colors = getColors();

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative max-w-sm w-full ${colors.bg} backdrop-blur-sm
        border ${colors.border} rounded-xl shadow-2xl
        p-4 mb-4 cursor-pointer group
        hover:scale-105 transition-transform duration-200
      `}
      onClick={() => onClose(id)}
    >
      {/* Progress bar */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
        className="absolute top-0 left-0 h-1 bg-white/30 rounded-t-xl"
      />

      <div className="flex items-start">
        <div className={`flex-shrink-0 ${colors.icon} mr-3`}>
          {getIcon()}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className={`text-sm font-semibold ${colors.text} mb-1`}>
            {title}
          </h4>
          <p className={`text-sm ${colors.text} opacity-90`}>
            {message}
          </p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose(id);
          }}
          className={`
            flex-shrink-0 ml-2 ${colors.text} opacity-60 
            hover:opacity-100 transition-opacity duration-200
          `}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export interface ToastContextType {
  showToast: (toast: Omit<ToastProps, "id" | "onClose">) => void;
  showSuccess: (title: string, message: string) => void;
  showError: (title: string, message: string) => void;
  showInfo: (title: string, message: string) => void;
  showWarning: (title: string, message: string) => void;
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const addToast = (toast: Omit<ToastProps, "id" | "onClose">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastProps = {
      ...toast,
      id,
      onClose: removeToast
    };
    setToasts(prev => [...prev, newToast]);
  };

  // Expose methods globally
  useEffect(() => {
    (window as any).showToast = addToast;
    (window as any).showSuccess = (title: string, message: string) => 
      addToast({ type: "success", title, message });
    (window as any).showError = (title: string, message: string) => 
      addToast({ type: "error", title, message });
    (window as any).showInfo = (title: string, message: string) => 
      addToast({ type: "info", title, message });
    (window as any).showWarning = (title: string, message: string) => 
      addToast({ type: "warning", title, message });
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
    </div>
  );
}