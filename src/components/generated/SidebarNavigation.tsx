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
  mpid: "b7e17d63-d89e-4781-9f1b-d3a27f5bb5b2"
}, {
  id: 'alerts',
  label: 'Alerts',
  icon: Bell,
  isPrimary: true,
  mpid: "539598e5-7826-4a5d-97f8-dd110d9bc52c"
}, {
  id: 'content',
  label: 'Content Creator',
  icon: PenTool,
  isPrimary: true,
  mpid: "02b23b7d-8168-4550-8917-43fd70ca3dfb"
}, {
  id: 'planner',
  label: 'Post Planner',
  icon: Calendar,
  isPrimary: true,
  mpid: "3a4f8d75-b569-4e93-8963-c81ab4bde6d6"
}, {
  id: 'analytics',
  label: 'Analytics',
  icon: BarChart3,
  isPrimary: true,
  mpid: "de878ab4-09c9-43f5-8640-f6e178e1d1ae"
}, {
  id: 'preferences',
  label: 'Preferences',
  icon: Settings,
  isPrimary: true,
  mpid: "d03b1652-f45b-4b3e-a31b-32ea99ff1e31"
}, {
  id: 'connections',
  label: 'Connections',
  icon: Link,
  isPrimary: true,
  mpid: "54645742-8a17-400c-bc4a-83df54aaf781"
}, {
  id: 'content-hub',
  label: 'Content Hub',
  icon: FolderOpen,
  isPrimary: false,
  mpid: "4fa87517-939d-4055-948d-3e1c8be30732"
}, {
  id: 'audience',
  label: 'Audience Analytics',
  icon: Users,
  isPrimary: false,
  mpid: "b065e0e1-9f98-4266-aa18-6624f6a1fa72"
}, {
  id: 'hashtags',
  label: 'Hashtag Organizer',
  icon: Hash,
  isPrimary: false,
  mpid: "b0086d2b-8976-408a-83a9-e503c71f02c2"
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