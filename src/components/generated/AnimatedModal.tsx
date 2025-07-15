import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  isDarkMode?: boolean;
  maxWidth?: string;
  mpid?: string;
}
const AnimatedModal: React.FC<AnimatedModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  isDarkMode = false,
  maxWidth = 'max-w-md'
}) => {
  // Handle escape key press
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  const overlayVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  };
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };
  return <AnimatePresence data-magicpath-id="0" data-magicpath-path="AnimatedModal.tsx">
      {isOpen && <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-magicpath-id="1" data-magicpath-path="AnimatedModal.tsx">
          {/* Backdrop */}
          <motion.div variants={overlayVariants} initial="hidden" animate="visible" exit="hidden" className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" data-magicpath-id="2" data-magicpath-path="AnimatedModal.tsx" />

          {/* Modal */}
          <motion.div variants={modalVariants} initial="hidden" animate="visible" exit="exit" className={`relative w-full ${maxWidth} bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden`} role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()} data-magicpath-id="3" data-magicpath-path="AnimatedModal.tsx">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700" data-magicpath-id="4" data-magicpath-path="AnimatedModal.tsx">
              <h2 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-white" data-magicpath-id="5" data-magicpath-path="AnimatedModal.tsx">
                {title}
              </h2>
              <motion.button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} aria-label="Close modal" data-magicpath-id="6" data-magicpath-path="AnimatedModal.tsx">
                <X size={20} className="text-gray-500 dark:text-gray-400" data-magicpath-id="7" data-magicpath-path="AnimatedModal.tsx" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6" data-magicpath-id="8" data-magicpath-path="AnimatedModal.tsx">
              {children}
            </div>

            {/* Footer (optional, can be added via children) */}
          </motion.div>
        </div>}
    </AnimatePresence>;
};
export default AnimatedModal;