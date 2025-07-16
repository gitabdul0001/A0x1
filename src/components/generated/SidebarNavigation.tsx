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
}
interface SidebarNavigationProps {
  activeSection: string;
  isCollapsed: boolean;
  isMobileMenuOpen: boolean;
  accentColor: string;
  onSectionChange: (section: string) => void;
  onToggleCollapse: () => void;
  onToggleMobileMenu: () => void;
}
const navigationItems: NavigationItem[] = [{
  id: 'home',
  label: 'Dashboard',
  icon: Home,
  isPrimary: true
}, {
  id: 'alerts',
  label: 'Alerts',
  icon: Bell,
  isPrimary: true
}, {
  id: 'content',
  label: 'Content Creator',
  icon: PenTool,
  isPrimary: true
}, {
  id: 'planner',
  label: 'Post Planner',
  icon: Calendar,
  isPrimary: true
}, {
  id: 'analytics',
  label: 'Analytics',
  icon: BarChart3,
  isPrimary: true
}, {
  id: 'preferences',
  label: 'Preferences',
  icon: Settings,
  isPrimary: true
}, {
  id: 'connections',
  label: 'Connections',
  icon: Link,
  isPrimary: true
}, {
  id: 'content-hub',
  label: 'Content Hub',
  icon: FolderOpen,
  isPrimary: false
}, {
  id: 'audience',
  label: 'Audience Analytics',
  icon: Users,
  isPrimary: false
}, {
  id: 'hashtags',
  label: 'Hashtag Organizer',
  icon: Hash,
  isPrimary: false
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
  const SidebarContent = () => <div className="flex flex-col h-full">
      {/* Logo Section */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <AnimatePresence mode="wait">
          {!isCollapsed && <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -20
        }} className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.2">
                  <defs>
                    <clipPath id="7a447a7b48"><path d="M 109.125 181.933594 L 161.625 181.933594 L 161.625 234.433594 L 109.125 234.433594 Z M 109.125 181.933594 " /></clipPath>
                    <clipPath id="69a4bb68e6"><path d="M 109.125 130.183594 L 161.625 130.183594 L 161.625 182.683594 L 109.125 182.683594 Z M 109.125 130.183594 " /></clipPath>
                    <clipPath id="1346d79464"><path d="M 213.375 181.933594 L 265.875 181.933594 L 265.875 234.433594 L 213.375 234.433594 Z M 213.375 181.933594 " /></clipPath>
                    <clipPath id="e0afa5629e"><path d="M 213.375 208.183594 C 213.375 201.21875 216.140625 194.542969 221.0625 189.621094 C 225.984375 184.699219 232.664062 181.933594 239.625 181.933594 C 246.585938 181.933594 253.265625 184.699219 258.1875 189.621094 C 263.109375 194.542969 265.875 201.21875 265.875 208.183594 C 265.875 215.144531 263.109375 221.820312 258.1875 226.742188 C 253.265625 231.667969 246.585938 234.433594 239.625 234.433594 C 232.664062 234.433594 225.984375 231.667969 221.0625 226.742188 C 216.140625 221.820312 213.375 215.144531 213.375 208.183594 Z M 213.375 208.183594 " /></clipPath>
                    <clipPath id="7e559bee84"><path d="M 161.625 181.933594 L 214.125 181.933594 L 214.125 234.433594 L 161.625 234.433594 Z M 161.625 181.933594 " /></clipPath>
                    <clipPath id="497bfb539c"><path d="M 109.125 69.617188 L 214.125 69.617188 L 214.125 122.117188 L 109.125 122.117188 Z M 109.125 69.617188 " /></clipPath>
                    <clipPath id="14ca239f8c"><path d="M 214.125 95.867188 C 214.125 102.828125 211.359375 109.507812 206.4375 114.429688 C 201.515625 119.351562 194.835938 122.117188 187.875 122.117188 L 135.375 122.117188 C 128.414062 122.117188 121.734375 119.351562 116.8125 114.429688 C 111.890625 109.507812 109.125 102.828125 109.125 95.867188 C 109.125 88.90625 111.890625 82.230469 116.8125 77.304688 C 121.734375 72.382812 128.414062 69.617188 135.375 69.617188 L 187.875 69.617188 C 194.835938 69.617188 201.515625 72.382812 206.4375 77.304688 C 211.359375 82.230469 214.125 88.90625 214.125 95.867188 Z M 214.125 95.867188 " /></clipPath>
                    <clipPath id="f1bf27afc0"><path d="M 213.375 69.617188 L 265.875 69.617188 L 265.875 122.117188 L 213.375 122.117188 Z M 213.375 69.617188 " /></clipPath>
                    <clipPath id="8af721dc9c"><path d="M 213.375 121.367188 L 265.875 121.367188 L 265.875 173.867188 L 213.375 173.867188 Z M 213.375 121.367188 " /></clipPath>
                    <clipPath id="ae7f69b539"><path d="M 213.375 181.933594 L 239.625 181.933594 L 239.625 234.433594 L 213.375 234.433594 Z M 213.375 181.933594 " /></clipPath>
                    <clipPath id="f74768e930"><path d="M 132.058594 69.617188 L 214.125 69.617188 L 214.125 122.117188 L 132.058594 122.117188 Z M 132.058594 69.617188 " /></clipPath>
                  </defs>
                  <g>
                    <rect x="0" width="375" y="0" height="374.999991" style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "none"
                }} />
                    <rect x="0" width="375" y="0" height="374.999991" style={{
                  fill: "#ffffff",
                  fillOpacity: 1,
                  stroke: "none"
                }} />
                    <g clipPath="url(#7a447a7b48)">
                      <path style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#fc7557",
                    fillOpacity: 1
                  }} d="M 109.125 181.933594 L 161.625 181.933594 L 161.625 234.433594 L 109.125 234.433594 Z M 109.125 181.933594 " />
                    </g>
                    <g clipPath="url(#69a4bb68e6)">
                      <path style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#989cfc",
                    fillOpacity: 1
                  }} d="M 161.625 130.183594 C 132.628906 130.183594 109.125 153.6875 109.125 182.683594 L 161.625 182.683594 Z M 161.625 130.183594 " />
                    </g>
                    <g clipPath="url(#1346d79464)">
                      <g clipPath="url(#e0afa5629e)">
                        <path style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "#f9c558",
                      fillOpacity: 1
                    }} d="M 213.375 234.433594 L 213.375 181.933594 L 265.875 181.933594 L 265.875 234.433594 Z M 213.375 234.433594 " />
                      </g>
                    </g>
                    <g clipPath="url(#7e559bee84)">
                      <path style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#989cfc",
                    fillOpacity: 1
                  }} d="M 161.625 181.933594 C 161.625 210.925781 185.128906 234.433594 214.125 234.433594 L 214.125 181.933594 Z M 161.625 181.933594 " />
                    </g>
                    <g clipPath="url(#497bfb539c)">
                      <g clipPath="url(#14ca239f8c)">
                        <path style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "#fc7557",
                      fillOpacity: 1
                    }} d="M 214.125 69.617188 L 214.125 122.117188 L 109.125 122.117188 L 109.125 69.617188 Z M 214.125 69.617188 " />
                      </g>
                    </g>
                    <g clipPath="url(#f1bf27afc0)">
                      <path style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#989cfc",
                    fillOpacity: 1
                  }} d="M 265.875 122.117188 C 265.875 93.121094 242.371094 69.617188 213.375 69.617188 L 213.375 122.117188 Z M 265.875 122.117188 " />
                    </g>
                    <g clipPath="url(#8af721dc9c)">
                      <path style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#f9c558",
                    fillOpacity: 1
                  }} d="M 213.375 173.867188 C 242.371094 173.867188 265.875 150.363281 265.875 121.367188 L 213.375 121.367188 Z M 213.375 173.867188 " />
                    </g>
                    <g clipPath="url(#ae7f69b539)">
                      <path style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#fc7557",
                    fillOpacity: 1
                  }} d="M 213.375 234.433594 L 213.375 181.933594 L 239.625 181.933594 L 239.625 234.433594 Z M 213.375 234.433594 " />
                    </g>
                    <g clipPath="url(#f74768e930)">
                      <path style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "#f9c558",
                    fillOpacity: 1
                  }} d="M 214.125 69.617188 L 214.125 122.117188 L 132.09375 122.117188 L 132.09375 69.617188 Z M 214.125 69.617188 " />
                    </g>
                  </g>
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white" style={{
            paddingLeft: "",
            paddingRight: "0px",
            marginLeft: "",
            marginRight: "",
            marginBottom: "8px"
          }}><em>R</em>eaxo</h1>
            </motion.div>}
        </AnimatePresence>
        
        <button onClick={onToggleCollapse} className="hidden lg:flex p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
          {isCollapsed ? <ChevronRight size={16} className="text-gray-600 dark:text-gray-400" /> : <ChevronLeft size={16} className="text-gray-600 dark:text-gray-400" />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {/* Primary Items */}
        <div className="space-y-1">
          {navigationItems.filter(item => item.isPrimary).map(item => <NavigationItem key={item.id} item={item} isActive={activeSection === item.id} isCollapsed={isCollapsed} accentColor={accentColor} onClick={() => handleItemClick(item.id)} />)}
        </div>

        {/* Secondary Items */}
        {!isCollapsed && <div className="pt-4">
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              More Tools
            </div>
            <div className="space-y-1">
              {navigationItems.filter(item => !item.isPrimary).map(item => <NavigationItem key={item.id} item={item} isActive={activeSection === item.id} isCollapsed={isCollapsed} accentColor={accentColor} onClick={() => handleItemClick(item.id)} />)}
            </div>
          </div>}
      </nav>
    </div>;
  return <>
      {/* Desktop Sidebar */}
      <motion.aside variants={sidebarVariants} animate={isCollapsed ? 'collapsed' : 'expanded'} className="hidden lg:flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-30" style={{
      minHeight: '100vh'
    }}>
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar */}
      <motion.aside variants={mobileSidebarVariants} animate={isMobileMenuOpen ? 'open' : 'closed'} className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 lg:hidden">
        <SidebarContent />
      </motion.aside>
    </>;
};
interface NavigationItemProps {
  item: NavigationItem;
  isActive: boolean;
  isCollapsed: boolean;
  accentColor: string;
  onClick: () => void;
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
  }} aria-label={item.label}>
      <item.icon size={20} className={`flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'}`} />
      
      <AnimatePresence mode="wait">
        {!isCollapsed && <motion.span initial={{
        opacity: 0,
        x: -10
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: -10
      }} className="font-medium truncate">
            {item.label}
          </motion.span>}
      </AnimatePresence>
    </motion.button>;
};
export default SidebarNavigation;