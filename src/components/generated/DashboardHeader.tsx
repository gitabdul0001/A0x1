import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Moon, Sun, Menu, ChevronDown, Settings, LogOut, User } from 'lucide-react';
import { User as UserType } from './ReaxoDashboardApp';
interface DashboardHeaderProps {
  user: UserType;
  notifications: number;
  isDarkMode: boolean;
  isMobileMenuOpen: boolean;
  accentColor: string;
  onToggleDarkMode: () => void;
  onToggleMobileMenu: () => void;
  onShowNotification: (title: string, content: React.ReactNode) => void;
  mpid?: string;
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  user,
  notifications,
  isDarkMode,
  isMobileMenuOpen,
  accentColor,
  onToggleDarkMode,
  onToggleMobileMenu,
  onShowNotification
}) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const handleNotificationClick = () => {
    onShowNotification('Notifications', <div className="space-y-3" data-magicpath-id="0" data-magicpath-path="DashboardHeader.tsx">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500" data-magicpath-id="1" data-magicpath-path="DashboardHeader.tsx">
          <p className="font-medium text-blue-900 dark:text-blue-100" data-magicpath-id="2" data-magicpath-path="DashboardHeader.tsx">New follower on Instagram</p>
          <p className="text-sm text-blue-700 dark:text-blue-300" data-magicpath-id="3" data-magicpath-path="DashboardHeader.tsx">@johndoe started following your account</p>
        </div>
        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500" data-magicpath-id="4" data-magicpath-path="DashboardHeader.tsx">
          <p className="font-medium text-green-900 dark:text-green-100" data-magicpath-id="5" data-magicpath-path="DashboardHeader.tsx">Post scheduled successfully</p>
          <p className="text-sm text-green-700 dark:text-green-300" data-magicpath-id="6" data-magicpath-path="DashboardHeader.tsx">Your LinkedIn post is scheduled for 2:00 PM</p>
        </div>
        <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500" data-magicpath-id="7" data-magicpath-path="DashboardHeader.tsx">
          <p className="font-medium text-yellow-900 dark:text-yellow-100" data-magicpath-id="8" data-magicpath-path="DashboardHeader.tsx">Content approval needed</p>
          <p className="text-sm text-yellow-700 dark:text-yellow-300" data-magicpath-id="9" data-magicpath-path="DashboardHeader.tsx">Review pending posts in your queue</p>
        </div>
      </div>);
  };
  const profileMenuItems = [{
    icon: User,
    label: 'Profile Settings',
    action: () => {},
    mpid: "511ae1dc-84a7-45ce-97ee-f554aa99a42f"
  }, {
    icon: Settings,
    label: 'Account Settings',
    action: () => {},
    mpid: "b62d0c8b-3eaa-41ff-b971-1007427c6dec"
  }, {
    icon: LogOut,
    label: 'Sign Out',
    action: () => {},
    mpid: "ec81a7c9-2a88-4809-a033-ca42470a4293"
  }] as any[];
  return <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3" data-magicpath-id="10" data-magicpath-path="DashboardHeader.tsx">
      <div className="flex items-center justify-between" data-magicpath-id="11" data-magicpath-path="DashboardHeader.tsx">
        {/* Left Section */}
        <div className="flex items-center space-x-4" data-magicpath-id="12" data-magicpath-path="DashboardHeader.tsx">
          {/* Mobile Menu Button */}
          <button onClick={onToggleMobileMenu} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle mobile menu" data-magicpath-id="13" data-magicpath-path="DashboardHeader.tsx">
            <Menu size={20} className="text-gray-600 dark:text-gray-400" data-magicpath-id="14" data-magicpath-path="DashboardHeader.tsx" />
          </button>

          {/* Search Bar */}
          <div className="relative hidden sm:block" data-magicpath-id="15" data-magicpath-path="DashboardHeader.tsx">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-magicpath-id="16" data-magicpath-path="DashboardHeader.tsx">
              <Search size={16} className="text-gray-400" data-magicpath-id="17" data-magicpath-path="DashboardHeader.tsx" />
            </div>
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search posts, analytics..." className="w-64 pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" style={{
            '--tw-ring-color': accentColor
          } as React.CSSProperties} data-magicpath-id="18" data-magicpath-path="DashboardHeader.tsx" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3" data-magicpath-id="19" data-magicpath-path="DashboardHeader.tsx">
          {/* Dark Mode Toggle */}
          <motion.button onClick={onToggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} data-magicpath-id="20" data-magicpath-path="DashboardHeader.tsx">
            <AnimatePresence mode="wait" data-magicpath-id="21" data-magicpath-path="DashboardHeader.tsx">
              {isDarkMode ? <motion.div key="sun" initial={{
              rotate: -90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: 90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="22" data-magicpath-path="DashboardHeader.tsx">
                  <Sun size={18} className="text-yellow-500" data-magicpath-id="23" data-magicpath-path="DashboardHeader.tsx" />
                </motion.div> : <motion.div key="moon" initial={{
              rotate: 90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: -90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }} data-magicpath-id="24" data-magicpath-path="DashboardHeader.tsx">
                  <Moon size={18} className="text-gray-600" data-magicpath-id="25" data-magicpath-path="DashboardHeader.tsx" />
                </motion.div>}
            </AnimatePresence>
          </motion.button>

          {/* Notifications */}
          <motion.button onClick={handleNotificationClick} className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} aria-label={`${notifications} notifications`} data-magicpath-id="26" data-magicpath-path="DashboardHeader.tsx">
            <Bell size={18} className="text-gray-600 dark:text-gray-400" data-magicpath-id="27" data-magicpath-path="DashboardHeader.tsx" />
            {notifications > 0 && <motion.span initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} className="absolute -top-1 -right-1 w-5 h-5 text-xs font-bold text-white rounded-full flex items-center justify-center" style={{
            backgroundColor: accentColor
          }} data-magicpath-id="28" data-magicpath-path="DashboardHeader.tsx">
                {notifications}
              </motion.span>}
          </motion.button>

          {/* User Profile Dropdown */}
          <div className="relative" data-magicpath-id="29" data-magicpath-path="DashboardHeader.tsx">
            <motion.button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} aria-label="User menu" data-magicpath-id="30" data-magicpath-path="DashboardHeader.tsx">
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/294643813987811328/assets/91dbfadf-b551-492d-8b04-f22767936c10.jpg" alt={`${user.name}'s avatar`} className="w-8 h-8 rounded-full object-cover" data-magicpath-id="31" data-magicpath-path="DashboardHeader.tsx" />
              <div className="hidden sm:block text-left" data-magicpath-id="32" data-magicpath-path="DashboardHeader.tsx">
                <p className="text-sm font-medium text-gray-900 dark:text-white" data-magicpath-id="33" data-magicpath-path="DashboardHeader.tsx">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-id="34" data-magicpath-path="DashboardHeader.tsx">{user.role}</p>
              </div>
              <ChevronDown size={14} className={`text-gray-400 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} data-magicpath-id="35" data-magicpath-path="DashboardHeader.tsx" />
            </motion.button>

            {/* Profile Dropdown Menu */}
            <AnimatePresence data-magicpath-id="36" data-magicpath-path="DashboardHeader.tsx">
              {isProfileMenuOpen && <motion.div initial={{
              opacity: 0,
              y: -10,
              scale: 0.95
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} exit={{
              opacity: 0,
              y: -10,
              scale: 0.95
            }} className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50" data-magicpath-id="37" data-magicpath-path="DashboardHeader.tsx">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700" data-magicpath-id="38" data-magicpath-path="DashboardHeader.tsx">
                    <p className="text-sm font-medium text-gray-900 dark:text-white" data-magicpath-id="39" data-magicpath-path="DashboardHeader.tsx">{user.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-id="40" data-magicpath-path="DashboardHeader.tsx">{user.email}</p>
                  </div>
                  
                  {profileMenuItems.map((item, index) => <motion.button key={index} onClick={() => {
                item.action();
                setIsProfileMenuOpen(false);
              }} className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" whileHover={{
                x: 4
              }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="DashboardHeader.tsx">
                      <item.icon size={16} className="text-gray-500 dark:text-gray-400" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="DashboardHeader.tsx" />
                      <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="43" data-magicpath-path="DashboardHeader.tsx">{item.label}</span>
                    </motion.button>)}
                </motion.div>}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden mt-3" data-magicpath-id="44" data-magicpath-path="DashboardHeader.tsx">
        <div className="relative" data-magicpath-id="45" data-magicpath-path="DashboardHeader.tsx">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-magicpath-id="46" data-magicpath-path="DashboardHeader.tsx">
            <Search size={16} className="text-gray-400" data-magicpath-id="47" data-magicpath-path="DashboardHeader.tsx" />
          </div>
          <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search posts, analytics..." className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" style={{
          '--tw-ring-color': accentColor
        } as React.CSSProperties} data-magicpath-id="48" data-magicpath-path="DashboardHeader.tsx" />
        </div>
      </div>

      {/* Click outside handler for profile menu */}
      {isProfileMenuOpen && <div className="fixed inset-0 z-40" onClick={() => setIsProfileMenuOpen(false)} data-magicpath-id="49" data-magicpath-path="DashboardHeader.tsx" />}
    </header>;
};
export default DashboardHeader;