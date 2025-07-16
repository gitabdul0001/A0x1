import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SidebarNavigation from './SidebarNavigation';
import DashboardHeader from './DashboardHeader';
import DashboardContentRouter from './DashboardContentRouter';
import AnimatedModal from './AnimatedModal';
export interface User {
  name: string;
  email: string;
  avatar: string;
  role: string;
}
export interface DashboardState {
  activeSection: string;
  isDarkMode: boolean;
  isSidebarCollapsed: boolean;
  isMobileMenuOpen: boolean;
  user: User;
  notifications: number;
  accentColor: string;
}
const ReaxoDashboardApp: React.FC = () => {
  const [dashboardState, setDashboardState] = useState<DashboardState>({
    activeSection: 'home',
    isDarkMode: false,
    isSidebarCollapsed: false,
    isMobileMenuOpen: false,
    user: {
      name: 'Sarah Johnson',
      email: 'sarah@reaxo.com',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9c5e8e1?w=150&h=150&fit=crop&crop=face',
      role: 'Social Media Manager'
    },
    notifications: 3,
    accentColor: '#00B99A'
  });
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  }>({
    title: '',
    content: null
  });

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDashboardState(prev => ({
          ...prev,
          isMobileMenuOpen: false
        }));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Apply dark mode
  useEffect(() => {
    if (dashboardState.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dashboardState.isDarkMode]);
  const updateDashboardState = (updates: Partial<DashboardState>) => {
    setDashboardState(prev => ({
      ...prev,
      ...updates
    }));
  };
  const showNotification = (title: string, content: React.ReactNode) => {
    setModalContent({
      title,
      content
    });
    setShowModal(true);
  };
  return <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ${dashboardState.isDarkMode ? 'dark' : ''}`}>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <SidebarNavigation activeSection={dashboardState.activeSection} isCollapsed={dashboardState.isSidebarCollapsed} isMobileMenuOpen={dashboardState.isMobileMenuOpen} accentColor={dashboardState.accentColor} onSectionChange={section => updateDashboardState({
        activeSection: section
      })} onToggleCollapse={() => updateDashboardState({
        isSidebarCollapsed: !dashboardState.isSidebarCollapsed
      })} onToggleMobileMenu={() => updateDashboardState({
        isMobileMenuOpen: !dashboardState.isMobileMenuOpen
      })} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <DashboardHeader user={dashboardState.user} notifications={dashboardState.notifications} isDarkMode={dashboardState.isDarkMode} isMobileMenuOpen={dashboardState.isMobileMenuOpen} accentColor={dashboardState.accentColor} onToggleDarkMode={() => updateDashboardState({
          isDarkMode: !dashboardState.isDarkMode
        })} onToggleMobileMenu={() => updateDashboardState({
          isMobileMenuOpen: !dashboardState.isMobileMenuOpen
        })} onShowNotification={showNotification} />

          {/* Content Router */}
          <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
            <DashboardContentRouter activeSection={dashboardState.activeSection} isDarkMode={dashboardState.isDarkMode} accentColor={dashboardState.accentColor} user={dashboardState.user} onUpdateAccentColor={color => updateDashboardState({
            accentColor: color
          })} onShowNotification={showNotification} />
          </main>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {dashboardState.isMobileMenuOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => updateDashboardState({
        isMobileMenuOpen: false
      })} />}
      </AnimatePresence>

      {/* Modal */}
      <AnimatedModal isOpen={showModal} onClose={() => setShowModal(false)} title={modalContent.title} isDarkMode={dashboardState.isDarkMode}>
        {modalContent.content}
      </AnimatedModal>
    </div>;
};
export default ReaxoDashboardApp;