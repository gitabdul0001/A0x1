import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Bell, PenTool, Calendar, Settings, Link, BarChart3, Users, Hash, FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react';
interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
  isPrimary: boolean;
  mpid?: string;
}
interface SidebarNavigationProps {
  activeSection: string;
  isCollapsed: boolean;
  isMobileMenuOpen: boolean;
  accentColor: string;
  onSectionChange: (section: string) => void;
  onToggleCollapse: () => void;
  onToggleMobileMenu: () => void;
  mpid?: string;
}
const navigationItems: NavigationItem[] = [{
  id: 'home',
  label: 'Dashboard',
  icon: Home,
  isPrimary: true,
  mpid: "f7e01288-982a-4caa-815f-b9a43fd367e9"
}, {
  id: 'alerts',
  label: 'Alerts',
  icon: Bell,
  isPrimary: true,
  mpid: "c0f8c4c4-98b6-4ce5-907c-0522f8ce5c17"
}, {
  id: 'content',
  label: 'Content Creator',
  icon: PenTool,
  isPrimary: true,
  mpid: "1028d448-85fb-4faf-8eed-24773a3e0a8e"
}, {
  id: 'planner',
  label: 'Post Planner',
  icon: Calendar,
  isPrimary: true,
  mpid: "19cc8aa6-1ec9-4388-98e4-22e1d1025cc2"
}, {
  id: 'analytics',
  label: 'Analytics',
  icon: BarChart3,
  isPrimary: true,
  mpid: "7ec1fb70-5ff6-4155-aed6-2060fba1b9e9"
}, {
  id: 'preferences',
  label: 'Preferences',
  icon: Settings,
  isPrimary: true,
  mpid: "0e940f16-0da8-4346-b399-f382b7ab265f"
}, {
  id: 'connections',
  label: 'Connections',
  icon: Link,
  isPrimary: true,
  mpid: "313a7fc3-6395-4299-a97b-d413d476198e"
}, {
  id: 'content-hub',
  label: 'Content Hub',
  icon: FolderOpen,
  isPrimary: false,
  mpid: "3c3bc79d-27c1-44a2-9a26-785eb3e01127"
}, {
  id: 'audience',
  label: 'Audience Analytics',
  icon: Users,
  isPrimary: false,
  mpid: "34bc1eb2-f745-4c86-bada-09235845716d"
}, {
  id: 'hashtags',
  label: 'Hashtag Organizer',
  icon: Hash,
  isPrimary: false,
  mpid: "fcc320c7-8ff3-41d9-b044-14cf397f062e"
}];
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  activeSection,
  isCollapsed,
  isMobileMenuOpen,
  accentColor,
  onSectionChange,
  onToggleCollapse,
  onToggleMobileMenu
}) => {
  const sidebarVariants = {
    expanded: {
      width: '16rem'
    },
    collapsed: {
      width: '4rem'
    }
  };
  const mobileSidebarVariants = {
    open: {
      x: 0
    },
    closed: {
      x: '-100%'
    }
  };
  const handleItemClick = (itemId: string) => {
    onSectionChange(itemId);
    if (window.innerWidth < 1024) {
      onToggleMobileMenu();
    }
  };
  const SidebarContent = () => <div className="flex flex-col h-full" data-magicpath-id="0" data-magicpath-path="SidebarNavigation.tsx">
      {/* Logo Section */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700" data-magicpath-id="1" data-magicpath-path="SidebarNavigation.tsx">
        <AnimatePresence mode="wait" data-magicpath-id="2" data-magicpath-path="SidebarNavigation.tsx">
          {!isCollapsed && <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -20
        }} className="flex items-center space-x-2" data-magicpath-id="3" data-magicpath-path="SidebarNavigation.tsx">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold" style={{
            backgroundColor: accentColor
          }} data-magicpath-id="4" data-magicpath-path="SidebarNavigation.tsx">
                R
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white" data-magicpath-id="5" data-magicpath-path="SidebarNavigation.tsx">Reaxo</h1>
            </motion.div>}
        </AnimatePresence>
        
        <button onClick={onToggleCollapse} className="hidden lg:flex p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'} data-magicpath-id="6" data-magicpath-path="SidebarNavigation.tsx">
          {isCollapsed ? <ChevronRight size={16} className="text-gray-600 dark:text-gray-400" data-magicpath-id="7" data-magicpath-path="SidebarNavigation.tsx" /> : <ChevronLeft size={16} className="text-gray-600 dark:text-gray-400" data-magicpath-id="8" data-magicpath-path="SidebarNavigation.tsx" />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto" data-magicpath-id="9" data-magicpath-path="SidebarNavigation.tsx">
        {/* Primary Items */}
        <div className="space-y-1" data-magicpath-id="10" data-magicpath-path="SidebarNavigation.tsx">
          {navigationItems.filter(item => item.isPrimary).map(item => <NavigationItem key={item.id} item={item} isActive={activeSection === item.id} isCollapsed={isCollapsed} accentColor={accentColor} onClick={() => handleItemClick(item.id)} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="SidebarNavigation.tsx" />)}
        </div>

        {/* Secondary Items */}
        {!isCollapsed && <div className="pt-4" data-magicpath-id="12" data-magicpath-path="SidebarNavigation.tsx">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2" data-magicpath-id="13" data-magicpath-path="SidebarNavigation.tsx">
              More Tools
            </div>
            <div className="space-y-1" data-magicpath-id="14" data-magicpath-path="SidebarNavigation.tsx">
              {navigationItems.filter(item => !item.isPrimary).map(item => <NavigationItem key={item.id} item={item} isActive={activeSection === item.id} isCollapsed={isCollapsed} accentColor={accentColor} onClick={() => handleItemClick(item.id)} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="SidebarNavigation.tsx" />)}
            </div>
          </div>}
      </nav>
    </div>;
  return <>
      {/* Desktop Sidebar */}
      <motion.aside variants={sidebarVariants} animate={isCollapsed ? 'collapsed' : 'expanded'} className="hidden lg:flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-30" style={{
      minHeight: '100vh'
    }} data-magicpath-id="16" data-magicpath-path="SidebarNavigation.tsx">
        <SidebarContent data-magicpath-id="17" data-magicpath-path="SidebarNavigation.tsx" />
      </motion.aside>

      {/* Mobile Sidebar */}
      <motion.aside variants={mobileSidebarVariants} animate={isMobileMenuOpen ? 'open' : 'closed'} className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 lg:hidden" data-magicpath-id="18" data-magicpath-path="SidebarNavigation.tsx">
        <SidebarContent data-magicpath-id="19" data-magicpath-path="SidebarNavigation.tsx" />
      </motion.aside>
    </>;
};
interface NavigationItemProps {
  item: NavigationItem;
  isActive: boolean;
  isCollapsed: boolean;
  accentColor: string;
  onClick: () => void;
  mpid?: string;
}
const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  isCollapsed,
  accentColor,
  onClick
}) => {
  return <motion.button onClick={onClick} className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${isActive ? 'text-white shadow-lg' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`} style={{
    backgroundColor: isActive ? accentColor : 'transparent'
  }} whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} aria-label={item.label} data-magicpath-id="20" data-magicpath-path="SidebarNavigation.tsx">
      <item.icon size={20} className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'}`} data-magicpath-id="21" data-magicpath-path="SidebarNavigation.tsx" />
      
      <AnimatePresence mode="wait" data-magicpath-id="22" data-magicpath-path="SidebarNavigation.tsx">
        {!isCollapsed && <motion.span initial={{
        opacity: 0,
        x: -10
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: -10
      }} className="font-medium truncate" data-magicpath-id="23" data-magicpath-path="SidebarNavigation.tsx">
            {item.label}
          </motion.span>}
      </AnimatePresence>
    </motion.button>;
};
export default SidebarNavigation;