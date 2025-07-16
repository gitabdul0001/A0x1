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
    mpid: "15f257b2-b4d7-48b0-8bfb-51b2d34546e1"
  }, {
    icon: Settings,
    label: 'Account Settings',
    action: () => {},
    mpid: "2020db80-c7d7-4695-a283-87e6137dd8f5"
  }, {
    icon: LogOut,
    label: 'Sign Out',
    action: () => {},
    mpid: "0b340435-10db-45c3-9564-c8599d110608"
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
              <div className="w-8 h-8 rounded-full bg-[#FDE9D6] flex items-center justify-center overflow-hidden" data-magicpath-id="31" data-magicpath-path="DashboardHeader.tsx">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 400 400" className="w-full h-full" data-magicpath-id="32" data-magicpath-path="DashboardHeader.tsx">
                  <path d="M0 0 C132 0 264 0 400 0 C400 132 400 264 400 400 C268 400 136 400 0 400 C0 268 0 136 0 0 Z " fill="#FDE9D6" transform="translate(0,0)" data-magicpath-id="33" data-magicpath-path="DashboardHeader.tsx" />
                  <path d="M0 0 C0.66 0 1.32 0 2 0 C4.62920621 4.58533563 4.6639212 8.82759065 4 14 C2.91881291 16.92390596 1.59962783 19.30062804 0 22 C2.72977064 22.08126109 5.4571017 22.14061663 8.1875 22.1875 C8.95642578 22.21263672 9.72535156 22.23777344 10.51757812 22.26367188 C15.17971663 22.32369941 18.24757668 22.0803475 22 19 C23.39962481 17.2348064 23.39962481 17.2348064 24.3125 15.3125 C24.869375 14.219375 25.42625 13.12625 26 12 C26.66 12 27.32 12 28 12 C28.34572104 17.53153671 27.78838645 22.11777025 25 27 C23.11615026 28.98451347 21.24688277 30.4022167 19 32 C19.76183594 32.37511719 20.52367187 32.75023437 21.30859375 33.13671875 C22.34113281 33.64847656 23.37367188 34.16023438 24.4375 34.6875 C25.53578125 35.23019531 26.6340625 35.77289063 27.765625 36.33203125 C30.49912169 37.74169681 33.07534666 39.25861433 35.6875 40.875 C39.99581285 43.32004616 44.11301533 43.98152969 49 43 C51.18331689 41.23863645 51.18331689 41.23863645 51.1953125 39.0546875 C51.17210937 38.33539063 51.14890625 37.61609375 51.125 36.875 C51.08375 35.59625 51.0425 34.3175 51 33 C51.99 33.33 52.98 33.66 54 34 C54.88679226 37.46655157 55.24875233 39.39193874 53.875 42.75 C51.7510624 45.29872512 50.14569587 46.06479312 47 47 C47 47.66 47 48.32 47 49 C48.258125 48.855625 49.51625 48.71125 50.8125 48.5625 C51.52019531 48.48128906 52.22789062 48.40007812 52.95703125 48.31640625 C55.19396393 48.02829265 55.19396393 48.02829265 58 47 C58.33 44.69 58.66 42.38 59 40 C59.66 40 60.32 40 61 40 C60.7589852 46.14587738 60.7589852 46.14587738 58.59765625 48.578125 C57.11953029 49.78844931 55.56352047 50.90220903 54 52 C54.56267578 52.63615234 54.56267578 52.63615234 55.13671875 53.28515625 C66.18490221 65.947432 66.18490221 65.947432 66.0625 75.25 C66.05347656 76.14203125 66.04445313 77.0340625 66.03515625 77.953125 C66.01775391 78.96632812 66.01775391 78.96632812 66 80 C65.34 80 64.68 80 64 80 C63.92523438 80.88300781 63.85046875 81.76601562 63.7734375 82.67578125 C62.56470809 93.70839972 59.1298176 101.53334159 52 110 C47.88811202 115.67869727 47.88811202 115.67869727 45 122 C46.11375 121.95875 47.2275 121.9175 48.375 121.875 C52 122 52 122 54 124 C54.26991906 126.68839385 54.08737357 129.29141936 54 132 C52.35 132.33 50.7 132.66 49 133 C49.03480469 133.71285156 49.06960938 134.42570313 49.10546875 135.16015625 C49.14607422 136.59681641 49.14607422 136.59681641 49.1875 138.0625 C49.22230469 139.00222656 49.25710938 139.94195312 49.29296875 140.91015625 C49 144 49 144 47.4921875 147.15625 C45.2099895 152.07056056 45.75665617 157.13161037 45.9375 162.4375 C46.14848331 169.39097136 46.06221913 175.32511404 44 182 C43.73960937 182.85207031 43.47921875 183.70414063 43.2109375 184.58203125 C39.825851 193.61420131 34.15970582 201.53880207 27 208 C26.34386719 208.62519531 25.68773437 209.25039062 25.01171875 209.89453125 C18.17738722 216.25671552 12.30635374 220.44894104 3 222 C2.01 233.88 2.01 233.88 1 246 C4.3 246.99 7.6 247.98 11 249 C30.055861 256.35597215 48.85177907 265.91066808 66 277 C66.79277344 277.495 67.58554687 277.99 68.40234375 278.5 C81.71659572 287.49542551 85.91817705 302.60315209 89.5 317.375 C89.80043213 318.59783691 90.10086426 319.82067383 90.41040039 321.08056641 C92.20840869 328.48675201 93.91523188 335.90708204 95.4375 343.375 C95.60121094 344.1695459 95.76492188 344.9640918 95.93359375 345.78271484 C96.07796875 346.52215332 96.22234375 347.2615918 96.37109375 348.0234375 C96.49411865 348.65169434 96.61714355 349.27995117 96.74389648 349.92724609 C97.07403538 352.59919959 97 355.30772825 97 358 C8.89 358 -79.22 358 -170 358 C-169.36867279 349.79274633 -168.80464181 342.71904319 -166.75 334.9375 C-166.53037598 334.08188477 -166.31075195 333.22626953 -166.08447266 332.34472656 C-164.29658813 325.61311861 -161.86948791 319.34307853 -159 313 C-158.50899784 311.62918179 -158.02868015 310.25445705 -157.5625 308.875 C-150.24186256 289.23128953 -132.6536501 278.19226811 -115.92041016 267.26757812 C-113.97778741 265.98533845 -112.05546783 264.67702924 -110.13671875 263.359375 C-101.80686386 257.65966623 -93.41426474 252.40839017 -83.91015625 248.83984375 C-79.92574475 246.32083997 -78.58982639 243.37090173 -77 239 C-76.51350228 236.12716759 -76.50511956 233.35696911 -76.57421875 230.44921875 C-76.57750687 229.66859573 -76.58079498 228.88797272 -76.58418274 228.08369446 C-76.59979152 225.61770838 -76.64379429 223.15312975 -76.6875 220.6875 C-76.69900553 219.01498502 -76.70878649 217.34245724 -76.71679688 215.66992188 C-76.73021079 214.07550695 -76.74513094 212.48110382 -76.76171875 210.88671875 C-76.76910568 210.13984299 -76.77649261 209.39296722 -76.78410339 208.62345886 C-76.84189097 205.49574333 -77.00387147 202.98838559 -78 200 C-80.05637494 198.39638009 -80.05637494 198.39638009 -82.5 196.9375 C-86.8989667 194.20206659 -86.8989667 194.20206659 -88 192 C-89.84961364 191.30837012 -89.84961364 191.30837012 -92.0625 190.75 C-103.53069353 187.12174799 -109.59487576 178.18916278 -115 168 C-115.87130797 166.41463195 -116.74623669 164.83124776 -117.625 163.25 C-118.23988281 162.12851562 -118.23988281 162.12851562 -118.8671875 160.984375 C-120.03376314 158.87028328 -120.03376314 158.87028328 -121.75 156.5 C-123.04502574 153.90994851 -123.22674606 152.34751992 -123.4375 149.5 C-123.79821677 145.11368406 -125.07500113 143.34285585 -128 140 C-129.09888853 137.80646575 -130.04581857 135.57739055 -130.98828125 133.3125 C-131.92847721 131.16348067 -133.016749 129.2162382 -134.1875 127.1875 C-136.40848635 122.88273109 -136.41655894 118.75057683 -136.65234375 113.98046875 C-137.10110939 110.13318577 -138.40096707 107.16039851 -140.16015625 103.7421875 C-141 102 -141 102 -141 100 C-141.66 100 -142.32 100 -143 100 C-144.28265642 87.6009879 -141.41378637 79.504527 -135 69 C-134.34257812 67.92234375 -133.68515625 66.8446875 -133.0078125 65.734375 C-128.96246059 60.22514088 -122.24083837 56.61244397 -116 54 C-114.68 54 -113.36 54 -112 54 C-112.32226562 53.28585938 -112.64453125 52.57171875 -112.9765625 51.8359375 C-114.81493958 46.74180864 -115.00449031 41.00804126 -113.27734375 35.8359375 C-111.27287236 32.02176117 -108.99737267 29.59894907 -105 28 C-102.6875 28.3125 -102.6875 28.3125 -101 29 C-101.66 29 -102.32 29 -103 29 C-102.505 30.98 -102.505 30.98 -102 33 C-96.2799241 33.45760607 -93.44703273 32.63848132 -89 29 C-87.97676564 27.68441297 -86.96873032 26.35622245 -86 25 C-85.34 25 -84.68 25 -84 25 C-83.01 26.98 -83.01 26.98 -82 29 C-80.02 29 -78.04 29 -76 29 C-75.7525 27.948125 -75.505 26.89625 -75.25 25.8125 C-73.94357397 21.40442304 -72.24526529 18.30900203 -68.13818359 15.91455078 C-62.34374217 13.16872106 -57.56328547 12.39442347 -51.1875 12.5625 C-50.3123877 12.5728125 -49.43727539 12.583125 -48.53564453 12.59375 C-42.61715123 12.74256033 -37.30001954 13.63118231 -31.61328125 15.3203125 C-26.20328443 16.72739687 -21.04297191 17.02148596 -16 14.5 C-15.01 13.7575 -15.01 13.7575 -14 13 C-13.34 13 -12.68 13 -12 13 C-11.01 9.04 -10.02 5.08 -9 1 C-4.64202189 3.17898905 -3.85621162 3.66883956 -2 8 C-1.46406266 11.658803 -1.18749883 15.30821268 -1 19 C1.78164909 12.75503288 1.70375298 6.60204281 0 0 Z " fill="#242128" transform="translate(231,42)" data-magicpath-id="34" data-magicpath-path="DashboardHeader.tsx" />
                  <path d="M0 0 C1.32 0 2.64 0 4 0 C7.97539303 6.89068124 7.21793297 15.07328794 7.24023438 22.77563477 C7.24992477 24.79680798 7.28099596 26.81695585 7.3125 28.83789062 C7.34519417 37.06456039 7.24652918 44.633978 2.1875 51.4375 C-0.41368456 53.29548897 -2.96580407 54.04379364 -6 55 C6.64635768 71.61743618 25.32883415 85.26465971 46 90 C49.29692089 90.29324761 52.5666012 90.32497511 55.875 90.3125 C56.72191406 90.32861328 57.56882813 90.34472656 58.44140625 90.36132812 C68.03803895 90.36867624 76.02913449 87.720327 83 81 C88.8990158 74.13370909 93 65.11350078 93 56 C89.535 54.515 89.535 54.515 86 53 C86 52.67 86 52.34 86 52 C97.06478001 50.74263864 108.24412462 58.44154521 117.8125 63.25 C119.5138208 64.10380249 119.5138208 64.10380249 121.24951172 64.97485352 C129.75127677 69.28281117 138.00993009 73.80485441 146 79 C146.79019531 79.49371094 147.58039063 79.98742187 148.39453125 80.49609375 C161.7152513 89.48694304 165.91784614 104.6017874 169.5 119.375 C169.80043213 120.59783691 170.10086426 121.82067383 170.41040039 123.08056641 C172.20840869 130.48675201 173.91523188 137.90708204 175.4375 145.375 C175.60121094 146.1695459 175.76492188 146.9640918 175.93359375 147.78271484 C176.07796875 148.52215332 176.22234375 149.2615918 176.37109375 150.0234375 C176.49411865 150.65169434 176.61714355 151.27995117 176.74389648 151.92724609 C177.07403538 154.59919959 177 157.30772825 177 160 C88.89 160 0.78 160 -90 160 C-89.36867279 151.79274633 -88.80464181 144.71904319 -86.75 136.9375 C-86.42056396 135.65407715 -86.42056396 135.65407715 -86.08447266 134.34472656 C-84.29658813 127.61311861 -81.86948791 121.34307853 -79 115 C-78.50899784 113.62918179 -78.02868015 112.25445705 -77.5625 110.875 C-70.24186256 91.23128953 -52.6536501 80.19226811 -35.92041016 69.26757812 C-33.97778741 67.98533845 -32.05546783 66.67702924 -30.13671875 65.359375 C-21.80686386 59.65966623 -13.41426474 54.40839017 -3.91015625 50.83984375 C0.07425525 48.32083997 1.41017361 45.37090173 3 41 C3.48649772 38.12716759 3.49488044 35.35696911 3.42578125 32.44921875 C3.42249313 31.66859573 3.41920502 30.88797272 3.41581726 30.08369446 C3.40020848 27.61770838 3.35620571 25.15312975 3.3125 22.6875 C3.30099447 21.01498502 3.29121351 19.34245724 3.28320312 17.66992188 C3.26978921 16.07550695 3.25486906 14.48110382 3.23828125 12.88671875 C3.23089432 12.13984299 3.22350739 11.39296722 3.21589661 10.62345886 C3.18054628 4.72788575 3.18054628 4.72788575 0 0 Z " fill="#252229" transform="translate(151,240)" data-magicpath-id="35" data-magicpath-path="DashboardHeader.tsx" />
                  {/* Additional paths from the SVG - truncated for brevity but would include all paths */}
                </svg>
              </div>
              <div className="hidden sm:block text-left" data-magicpath-id="36" data-magicpath-path="DashboardHeader.tsx">
                <p className="text-sm font-medium text-gray-900 dark:text-white" data-magicpath-id="37" data-magicpath-path="DashboardHeader.tsx">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-id="38" data-magicpath-path="DashboardHeader.tsx">{user.role}</p>
              </div>
              <ChevronDown size={14} className={`text-gray-400 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} data-magicpath-id="39" data-magicpath-path="DashboardHeader.tsx" />
            </motion.button>

            {/* Profile Dropdown Menu */}
            <AnimatePresence data-magicpath-id="40" data-magicpath-path="DashboardHeader.tsx">
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
            }} className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50" data-magicpath-id="41" data-magicpath-path="DashboardHeader.tsx">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700" data-magicpath-id="42" data-magicpath-path="DashboardHeader.tsx">
                    <p className="text-sm font-medium text-gray-900 dark:text-white" data-magicpath-id="43" data-magicpath-path="DashboardHeader.tsx">{user.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-id="44" data-magicpath-path="DashboardHeader.tsx">{user.email}</p>
                  </div>
                  
                  {profileMenuItems.map((item, index) => <motion.button key={index} onClick={() => {
                item.action();
                setIsProfileMenuOpen(false);
              }} className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" whileHover={{
                x: 4
              }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="45" data-magicpath-path="DashboardHeader.tsx">
                      <item.icon size={16} className="text-gray-500 dark:text-gray-400" data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-id="46" data-magicpath-path="DashboardHeader.tsx" />
                      <span data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="47" data-magicpath-path="DashboardHeader.tsx">{item.label}</span>
                    </motion.button>)}
                </motion.div>}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden mt-3" data-magicpath-id="48" data-magicpath-path="DashboardHeader.tsx">
        <div className="relative" data-magicpath-id="49" data-magicpath-path="DashboardHeader.tsx">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-magicpath-id="50" data-magicpath-path="DashboardHeader.tsx">
            <Search size={16} className="text-gray-400" data-magicpath-id="51" data-magicpath-path="DashboardHeader.tsx" />
          </div>
          <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search posts, analytics..." className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" style={{
          '--tw-ring-color': accentColor
        } as React.CSSProperties} data-magicpath-id="52" data-magicpath-path="DashboardHeader.tsx" />
        </div>
      </div>

      {/* Click outside handler for profile menu */}
      {isProfileMenuOpen && <div className="fixed inset-0 z-40" onClick={() => setIsProfileMenuOpen(false)} data-magicpath-id="53" data-magicpath-path="DashboardHeader.tsx" />}
    </header>;
};
export default DashboardHeader;