import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full animate-scale-in max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - positioned outside the content area */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
          aria-label="閉じる"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Header with gradient accent */}
        <div className="relative px-8 pt-8 pb-6 border-b border-gray-100">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-cyan-500 rounded-t-2xl"></div>
          <h3 className="text-xl font-bold text-primary pr-4 leading-relaxed">{title}</h3>
        </div>
        
        {/* Content */}
        <div className="text-gray-700 flex-1 min-h-0 overflow-y-auto px-8 py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
