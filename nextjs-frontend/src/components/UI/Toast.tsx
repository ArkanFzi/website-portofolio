"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export const Toast = ({ message, type = 'success', isVisible, onClose }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-10 right-4 md:right-10 z-[10000] flex items-center gap-3 px-6 py-4 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          {type === 'success' ? (
            <CheckCircle2 className="text-green-500 w-6 h-6" />
          ) : (
            <XCircle className="text-red-500 w-6 h-6" />
          )}
          
          <div className="flex flex-col">
            <span className={`font-semibold ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {type === 'success' ? 'Success' : 'Error'}
            </span>
            <span className="text-sm text-gray-300">{message}</span>
          </div>

          {/* Progress Bar */}
          <motion.div 
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 4, ease: "linear" }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary origin-left" 
            style={{ borderRadius: '0 0 10px 10px' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
