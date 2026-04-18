import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

export const CustomModal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-2xl' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`fixed inset-0 m-auto w-full ${maxWidth} h-fit max-h-[90vh] bg-[#1e293b] rounded-2xl shadow-2xl border border-gray-700 z-50 overflow-hidden flex flex-col font-sans`}
          >
            {/* Header */}
            {title && (
              <div className="flex items-center justify-between p-5 border-b border-gray-800 bg-[#1e293b]">
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
            )}

            {/* Content area */}
            <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
