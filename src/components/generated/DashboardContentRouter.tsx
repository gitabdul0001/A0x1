import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Calendar, Users, MessageSquare, BarChart3, PieChart, Activity, Plus, Filter, Download, Palette, Bell, Globe, Clock, Zap, Target, Heart, Share2, Eye, ArrowUp, ArrowDown, Minus } from 'lucide-react';
import { User } from './ReaxoDashboardApp';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell, AreaChart, Area, RadialBarChart, RadialBar, ComposedChart } from 'recharts';
interface DashboardContentRouterProps {
  activeSection: string;
  isDarkMode: boolean;
  accentColor: string;
  user: User;
  onUpdateAccentColor: (color: string) => void;
  onShowNotification: (title: string, content: React.ReactNode) => void;
  mpid?: string;
}
const DashboardContentRouter: React.FC<DashboardContentRouterProps> = ({
  activeSection,
  isDarkMode,
  accentColor,
  user,
  onUpdateAccentColor,
  onShowNotification
}) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeDashboard accentColor={accentColor} onShowNotification={onShowNotification} data-magicpath-id="0" data-magicpath-path="DashboardContentRouter.tsx" />;
      case 'content':
        return <ContentCreator accentColor={accentColor} onShowNotification={onShowNotification} data-magicpath-id="1" data-magicpath-path="DashboardContentRouter.tsx" />;
      case 'planner':
        return <PostPlanner accentColor={accentColor} onShowNotification={onShowNotification} data-magicpath-id="2" data-magicpath-path="DashboardContentRouter.tsx" />;
      case 'analytics':
        return <AnalyticsDashboard accentColor={accentColor} isDarkMode={isDarkMode} data-magicpath-id="3" data-magicpath-path="DashboardContentRouter.tsx" />;
      case 'preferences':
        return <Preferences accentColor={accentColor} onUpdateAccentColor={onUpdateAccentColor} user={user} data-magicpath-id="4" data-magicpath-path="DashboardContentRouter.tsx" />;
      case 'connections':
        return <Connections accentColor={accentColor} onShowNotification={onShowNotification} data-magicpath-id="5" data-magicpath-path="DashboardContentRouter.tsx" />;
      case 'alerts':
        return <AlertsPage accentColor={accentColor} data-magicpath-id="6" data-magicpath-path="DashboardContentRouter.tsx" />;
      default:
        return <HomeDashboard accentColor={accentColor} onShowNotification={onShowNotification} data-magicpath-id="7" data-magicpath-path="DashboardContentRouter.tsx" />;
    }
  };
  return <AnimatePresence mode="wait" data-magicpath-id="8" data-magicpath-path="DashboardContentRouter.tsx">
      <motion.div key={activeSection} variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{
      duration: 0.3
    }} className="p-6" data-magicpath-id="9" data-magicpath-path="DashboardContentRouter.tsx">
        {renderContent()}
      </motion.div>
    </AnimatePresence>;
};

// Enhanced Analytics Dashboard Component
const AnalyticsDashboard: React.FC<{
  accentColor: string;
  isDarkMode: boolean;
}> = ({
  accentColor,
  isDarkMode
}) => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('engagement');

  // Enhanced metrics with more detailed data
  const metrics = [{
    title: 'Total Reach',
    value: '2.4M',
    change: '+18.2%',
    changeType: 'increase',
    icon: Eye,
    color: '#00B99A',
    description: 'Unique accounts reached',
    trend: [120, 132, 145, 158, 172, 189, 205, 224, 240],
    mpid: "505e804d-3a25-418f-9913-33a50f01b87a"
  }, {
    title: 'Engagement Rate',
    value: '6.8%',
    change: '+2.4%',
    changeType: 'increase',
    icon: Heart,
    color: '#8B7FFF',
    description: 'Average engagement across platforms',
    trend: [4.2, 4.5, 4.8, 5.1, 5.6, 6.0, 6.3, 6.5, 6.8],
    mpid: "ac1b7be5-f502-4ae4-b1be-af58915581ac"
  }, {
    title: 'Follower Growth',
    value: '+3,247',
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
    color: '#FE8363',
    description: 'New followers this period',
    trend: [2100, 2250, 2400, 2650, 2800, 2950, 3100, 3200, 3247],
    mpid: "0e580868-294f-48b9-851d-c43c66dab61a"
  }, {
    title: 'Content Performance',
    value: '94.2',
    change: '-1.2%',
    changeType: 'decrease',
    icon: BarChart3,
    color: '#0D9488',
    description: 'Average performance score',
    trend: [92, 93, 94, 95, 96, 95, 94, 94, 94.2],
    mpid: "4355e611-a249-42d4-a89f-018d8f8e83e9"
  }, {
    title: 'Click-Through Rate',
    value: '3.4%',
    change: '+0.8%',
    changeType: 'increase',
    icon: Target,
    color: '#F59E0B',
    description: 'Link clicks per impression',
    trend: [2.1, 2.3, 2.6, 2.8, 3.0, 3.1, 3.2, 3.3, 3.4],
    mpid: "bcb57fff-ba5f-48ba-bbd6-ddcb88c45a6f"
  }, {
    title: 'Share Rate',
    value: '1.9%',
    change: '0.0%',
    changeType: 'neutral',
    icon: Share2,
    color: '#6366F1',
    description: 'Content sharing frequency',
    trend: [1.8, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9],
    mpid: "5cbc70e1-3f0c-4dbc-84c2-836da5e7915e"
  }] as any[];

  // Enhanced engagement data with more granular time periods
  const engagementData = [{
    name: 'Mon',
    engagement: 4200,
    reach: 28000,
    clicks: 890,
    shares: 245,
    comments: 156,
    likes: 3200,
    mpid: "9301b43a-ddfd-4e32-8cb0-16840031f067"
  }, {
    name: 'Tue',
    engagement: 3800,
    reach: 25000,
    clicks: 750,
    shares: 198,
    comments: 134,
    likes: 2900,
    mpid: "eb4c9012-f2c5-4923-b6b6-bf72de4a8e1e"
  }, {
    name: 'Wed',
    engagement: 5200,
    reach: 35000,
    clicks: 1200,
    shares: 320,
    comments: 210,
    likes: 4100,
    mpid: "312c28d0-4d08-4de2-bd24-9d6b2260ea65"
  }, {
    name: 'Thu',
    engagement: 4600,
    reach: 31000,
    clicks: 980,
    shares: 275,
    comments: 178,
    likes: 3600,
    mpid: "48be72e2-0af6-4c7c-a2d6-effaa49474d0"
  }, {
    name: 'Fri',
    engagement: 6800,
    reach: 42000,
    clicks: 1450,
    shares: 410,
    comments: 285,
    likes: 5200,
    mpid: "defd76b4-d6cd-46f5-90b0-6625e2571a86"
  }, {
    name: 'Sat',
    engagement: 7200,
    reach: 48000,
    clicks: 1680,
    shares: 485,
    comments: 320,
    likes: 5800,
    mpid: "b8f156ed-aaf6-4bac-a369-75e39fad2718"
  }, {
    name: 'Sun',
    engagement: 5900,
    reach: 38000,
    clicks: 1250,
    shares: 365,
    comments: 245,
    likes: 4500,
    mpid: "c57e6b76-8b22-42a4-a8aa-ccaf4e534cbe"
  }] as any[];

  // Platform performance with detailed metrics and real social media logos
  const platformPerformance = [{
    name: 'Instagram',
    followers: 45200,
    engagement: 7.2,
    reach: 890000,
    posts: 28,
    color: '#E4405F',
    growth: '+12.5%',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="10" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z" data-magicpath-id="11" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3" data-magicpath-id="12" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6" data-magicpath-id="13" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z" data-magicpath-id="14" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z" data-magicpath-id="15" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "f5b2fa1e-0886-490a-a098-2aa06b5341b5"
  }, {
    name: 'X (Twitter)',
    followers: 23800,
    engagement: 4.8,
    reach: 520000,
    posts: 45,
    color: '#000000',
    growth: '+8.3%',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="16" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="17" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.5v5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26" data-magicpath-id="18" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,18.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33" data-magicpath-id="19" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z" data-magicpath-id="20" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34" data-magicpath-id="21" data-magicpath-path="DashboardContentRouter.tsx"></polygon>
          <polygon fill="#18193f" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14" data-magicpath-id="22" data-magicpath-path="DashboardContentRouter.tsx"></polygon>
        </svg>,
    mpid: "31ff0802-b5ef-4acb-ae57-6d61b3e2d40d"
  }, {
    name: 'LinkedIn',
    followers: 18500,
    engagement: 6.1,
    reach: 340000,
    posts: 15,
    color: '#0077B5',
    growth: '+15.2%',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="23" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z" data-magicpath-id="24" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9" data-magicpath-id="25" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14" data-magicpath-id="26" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <circle cx="15.5" cy="15.5" r="2.5" fill="#18193f" data-magicpath-id="27" data-magicpath-path="DashboardContentRouter.tsx"></circle>
          <path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z" data-magicpath-id="28" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1  v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z" data-magicpath-id="29" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "37d5d1cf-4903-4c8e-8ac3-f8f0db5a3954"
  }, {
    name: 'TikTok',
    followers: 67300,
    engagement: 9.4,
    reach: 1200000,
    posts: 22,
    color: '#FF0050',
    growth: '+28.7%',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="30" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="31" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404" data-magicpath-id="32" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777" data-magicpath-id="33" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21,22.5  c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6" data-magicpath-id="34" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "9eddde9e-27a4-489d-9492-43a26cda6fdc"
  }, {
    name: 'YouTube',
    followers: 12400,
    engagement: 5.6,
    reach: 280000,
    posts: 8,
    color: '#FF0000',
    growth: '+6.1%',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="35" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#ffab91" d="M27.86,14c-6.144,0-11.916,0.469-14.989,1.125c-2.048,0.469-3.817,1.875-4.19,4.031  c-0.371,2.25-0.744,5.125-0.744,9.344s0.373,7,0.838,9.344c0.373,2.063,2.141,3.563,4.19,4.031C16.223,42.531,21.809,43,27.953,43  s11.73-0.469,14.989-1.125c2.048-0.469,3.817-1.875,4.19-4.031c0.373-2.344,0.838-5.219,0.931-9.438  c0-4.219-0.466-7.094-0.931-9.438c-0.373-2.063-2.141-3.563-4.19-4.031C39.684,14.469,34.005,14,27.86,14L27.86,14z" data-magicpath-id="36" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M28.79,10.093  C27.206,10.034,25.549,10,23.857,10l0,0c-6.278,0-12.176,0.469-15.316,1.125C6.448,11.594,4.641,13,4.26,15.156  C3.881,17.406,3.5,20.281,3.5,24.5s0.381,7,0.856,9.344c0.381,2.063,2.188,3.563,4.281,4.031c1.085,0.214,2.423,0.408,3.951,0.572" data-magicpath-id="37" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,38.881  C20.233,38.958,22.067,39,23.952,39c6.278,0,11.986-0.469,15.316-1.125c2.093-0.469,3.9-1.875,4.281-4.031  c0.381-2.344,0.856-5.219,0.951-9.438c0-4.219-0.476-7.094-0.951-9.438c-0.381-2.063-2.188-3.563-4.281-4.031  c-0.888-0.125-1.952-0.25-3.154-0.366" data-magicpath-id="38" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,24v4.514  c0,1.522,1.663,2.476,3,1.721l7.99-4.514c1.347-0.761,1.347-2.682,0-3.443l-7.99-4.514c-1.337-0.755-3,0.199-3,1.721" data-magicpath-id="39" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "3454aa1a-a654-4a65-b939-b0f284e515d4"
  }] as any[];

  // Audience demographics data
  const audienceDemographics = [{
    age: '18-24',
    percentage: 28,
    color: '#8B7FFF',
    mpid: "1150c8af-a4a0-474c-b851-b2415ef36a4e"
  }, {
    age: '25-34',
    percentage: 35,
    color: '#00B99A',
    mpid: "7d72af6e-6870-486b-bf19-f04463058c7e"
  }, {
    age: '35-44',
    percentage: 22,
    color: '#FE8363',
    mpid: "f0164433-aa7d-4d8c-ab78-a1140d9652fa"
  }, {
    age: '45-54',
    percentage: 12,
    color: '#F59E0B',
    mpid: "325103d2-032c-4e1f-85a9-47517789eeb5"
  }, {
    age: '55+',
    percentage: 3,
    color: '#6366F1',
    mpid: "330366bd-10e9-4d98-b160-af3661bb9c2a"
  }] as any[];

  // Content performance by type
  const contentTypeData = [{
    type: 'Images',
    posts: 45,
    engagement: 6.8,
    reach: 450000,
    mpid: "b370d541-d757-4e95-b59b-a2e43b07384c"
  }, {
    type: 'Videos',
    posts: 28,
    engagement: 9.2,
    reach: 680000,
    mpid: "17835acc-a42c-4879-b75b-f6902bc5a1c8"
  }, {
    type: 'Carousels',
    posts: 18,
    engagement: 7.5,
    reach: 320000,
    mpid: "47667819-6542-432d-9217-6aa756ecd065"
  }, {
    type: 'Stories',
    posts: 62,
    engagement: 4.2,
    reach: 280000,
    mpid: "52259ef2-940a-48f2-afad-74f716a2e433"
  }, {
    type: 'Reels',
    posts: 15,
    engagement: 12.4,
    reach: 890000,
    mpid: "c03a068f-3945-471b-b7ed-c864568d6dd5"
  }] as any[];

  // Top performing posts with social media logos
  const topPosts = [{
    platform: 'Instagram',
    type: 'Reel',
    content: 'Behind the scenes: Creating engaging content',
    engagement: 12.8,
    reach: 89000,
    likes: 8900,
    comments: 245,
    shares: 156,
    date: '2 days ago',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5" data-magicpath-id="40" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z" data-magicpath-id="41" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3" data-magicpath-id="42" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6" data-magicpath-id="43" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z" data-magicpath-id="44" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z" data-magicpath-id="45" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "4150a56e-aa1b-4cd7-a3f1-aeaa9fc91e42"
  }, {
    platform: 'TikTok',
    type: 'Video',
    content: 'Quick tips for social media growth',
    engagement: 15.2,
    reach: 125000,
    likes: 12400,
    comments: 380,
    shares: 290,
    date: '4 days ago',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5" data-magicpath-id="46" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="47" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404" data-magicpath-id="48" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777" data-magicpath-id="49" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21,22.5  c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6" data-magicpath-id="50" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "697b77cb-c012-4678-96c1-a561ca9d50ea"
  }, {
    platform: 'LinkedIn',
    type: 'Article',
    content: 'The future of digital marketing',
    engagement: 8.9,
    reach: 45000,
    likes: 2800,
    comments: 156,
    shares: 89,
    date: '1 week ago',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5" data-magicpath-id="51" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z" data-magicpath-id="52" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9" data-magicpath-id="53" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14" data-magicpath-id="54" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <circle cx="15.5" cy="15.5" r="2.5" fill="#18193f" data-magicpath-id="55" data-magicpath-path="DashboardContentRouter.tsx"></circle>
          <path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z" data-magicpath-id="56" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1  v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z" data-magicpath-id="57" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "5d43078b-550a-4ffa-9a96-a8f2c30ea324"
  }, {
    platform: 'X (Twitter)',
    type: 'Thread',
    content: 'How to build authentic connections online',
    engagement: 6.7,
    reach: 32000,
    likes: 1800,
    comments: 95,
    shares: 145,
    date: '3 days ago',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5" data-magicpath-id="58" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="59" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.5v5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26" data-magicpath-id="60" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,18.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33" data-magicpath-id="61" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z" data-magicpath-id="62" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34" data-magicpath-id="63" data-magicpath-path="DashboardContentRouter.tsx"></polygon>
          <polygon fill="#18193f" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14" data-magicpath-id="64" data-magicpath-path="DashboardContentRouter.tsx"></polygon>
        </svg>,
    mpid: "75227be3-fc4f-41a6-b572-9b8dfd232123"
  }] as any[];
  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case 'increase':
        return <ArrowUp size={14} className="text-green-500" data-magicpath-id="65" data-magicpath-path="DashboardContentRouter.tsx" />;
      case 'decrease':
        return <ArrowDown size={14} className="text-red-500" data-magicpath-id="66" data-magicpath-path="DashboardContentRouter.tsx" />;
      default:
        return <Minus size={14} className="text-gray-500" data-magicpath-id="67" data-magicpath-path="DashboardContentRouter.tsx" />;
    }
  };
  const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case 'increase':
        return 'text-green-600 dark:text-green-400';
      case 'decrease':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };
  return <div className="space-y-8" data-magicpath-id="68" data-magicpath-path="DashboardContentRouter.tsx">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4" data-magicpath-id="69" data-magicpath-path="DashboardContentRouter.tsx">
        <div data-magicpath-id="70" data-magicpath-path="DashboardContentRouter.tsx">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="71" data-magicpath-path="DashboardContentRouter.tsx">Analytics Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="72" data-magicpath-path="DashboardContentRouter.tsx">
            Comprehensive insights into your social media performance
          </p>
        </div>
        <div className="flex items-center space-x-3" data-magicpath-id="73" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1" data-magicpath-id="74" data-magicpath-path="DashboardContentRouter.tsx">
            {[{
            label: '7D',
            value: '7d',
            mpid: "9c44f69e-43bc-4358-8dfc-afc0a9c8b9ef"
          }, {
            label: '30D',
            value: '30d',
            mpid: "ceb80e6e-83d1-4f15-bc06-a6c79d4b1ba3"
          }, {
            label: '90D',
            value: '90d',
            mpid: "12c1771e-c47b-46c3-838a-b11e9e6cc6b9"
          }].map(range => <button key={range.value} onClick={() => setTimeRange(range.value)} className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${timeRange === range.value ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`} style={{
            backgroundColor: timeRange === range.value ? accentColor : 'transparent'
          }} data-magicpath-uuid={(range as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="75" data-magicpath-path="DashboardContentRouter.tsx">
                {range.label}
              </button>)}
          </div>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2" data-magicpath-id="76" data-magicpath-path="DashboardContentRouter.tsx">
            <Filter size={16} data-magicpath-id="77" data-magicpath-path="DashboardContentRouter.tsx" />
            <span data-magicpath-id="78" data-magicpath-path="DashboardContentRouter.tsx">Filter</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2" data-magicpath-id="79" data-magicpath-path="DashboardContentRouter.tsx">
            <Download size={16} data-magicpath-id="80" data-magicpath-path="DashboardContentRouter.tsx" />
            <span data-magicpath-id="81" data-magicpath-path="DashboardContentRouter.tsx">Export</span>
          </button>
        </div>
      </div>

      {/* Enhanced Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="82" data-magicpath-path="DashboardContentRouter.tsx">
        {metrics.map((metric, index) => <motion.div key={metric.title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-start justify-between mb-4" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center space-x-3" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="85" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="p-3 rounded-xl" style={{
              backgroundColor: `${metric.color}15`
            }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="86" data-magicpath-path="DashboardContentRouter.tsx">
                  <metric.icon size={24} style={{
                color: metric.color
              }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="DashboardContentRouter.tsx" />
                </div>
                <div data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="DashboardContentRouter.tsx">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="89" data-magicpath-path="DashboardContentRouter.tsx">
                    {metric.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:string" data-magicpath-id="90" data-magicpath-path="DashboardContentRouter.tsx">
                    {metric.value}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="changeType:string" data-magicpath-id="91" data-magicpath-path="DashboardContentRouter.tsx">
                {getChangeIcon(metric.changeType)}
                <span className={`text-sm font-medium ${getChangeColor(metric.changeType)}`} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="change:string" data-magicpath-id="92" data-magicpath-path="DashboardContentRouter.tsx">
                  {metric.change}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="93" data-magicpath-path="DashboardContentRouter.tsx">
              {metric.description}
            </p>
            
            {/* Mini trend chart */}
            <div className="h-12" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="DashboardContentRouter.tsx">
              <ResponsiveContainer width="100%" height="100%" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="95" data-magicpath-path="DashboardContentRouter.tsx">
                <LineChart data={metric.trend.map((value, i) => ({
              value,
              index: i
            }))} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="96" data-magicpath-path="DashboardContentRouter.tsx">
                  <Line type="monotone" dataKey="value" stroke={metric.color} strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>)}
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-magicpath-id="97" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Enhanced Engagement Chart */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="98" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex items-center justify-between mb-6" data-magicpath-id="99" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white" data-magicpath-id="100" data-magicpath-path="DashboardContentRouter.tsx">
              Weekly Performance Breakdown
            </h3>
            <div className="flex items-center space-x-4 text-sm" data-magicpath-id="101" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center" data-magicpath-id="102" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2 bg-blue-500" data-magicpath-id="103" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="104" data-magicpath-path="DashboardContentRouter.tsx">Engagement</span>
              </div>
              <div className="flex items-center" data-magicpath-id="105" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2 bg-green-500" data-magicpath-id="106" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="107" data-magicpath-path="DashboardContentRouter.tsx">Reach</span>
              </div>
              <div className="flex items-center" data-magicpath-id="108" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2 bg-purple-500" data-magicpath-id="109" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="110" data-magicpath-path="DashboardContentRouter.tsx">Clicks</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={320} data-magicpath-id="111" data-magicpath-path="DashboardContentRouter.tsx">
            <ComposedChart data={engagementData} data-magicpath-id="112" data-magicpath-path="DashboardContentRouter.tsx">
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} data-magicpath-id="113" data-magicpath-path="DashboardContentRouter.tsx" />
              <XAxis dataKey="name" stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} data-magicpath-id="114" data-magicpath-path="DashboardContentRouter.tsx" />
              <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} data-magicpath-id="115" data-magicpath-path="DashboardContentRouter.tsx" />
              <Tooltip contentStyle={{
              backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
              border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }} data-magicpath-id="116" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="engagement" fill="#3B82F6" radius={[4, 4, 0, 0]} data-magicpath-id="117" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="reach" fill="#10B981" radius={[4, 4, 0, 0]} data-magicpath-id="118" data-magicpath-path="DashboardContentRouter.tsx" />
              <Line type="monotone" dataKey="clicks" stroke="#8B5CF6" strokeWidth={3} />
            </ComposedChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Platform Performance with Real Logos */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="119" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="120" data-magicpath-path="DashboardContentRouter.tsx">
            Platform Performance
          </h3>
          <div className="space-y-4" data-magicpath-id="121" data-magicpath-path="DashboardContentRouter.tsx">
            {platformPerformance.map((platform, index) => <motion.div key={platform.name} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.6 + index * 0.1
          }} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="122" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-center space-x-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="123" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{
                backgroundColor: platform.color,
                background: "rgb(227 64 94 / 0)"
              }} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknwon" data-magicpath-id="124" data-magicpath-path="DashboardContentRouter.tsx">
                    {platform.logo}
                  </div>
                  <div data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="DashboardContentRouter.tsx">
                    <h4 className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="126" data-magicpath-path="DashboardContentRouter.tsx">
                      {platform.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="DashboardContentRouter.tsx">
                      {platform.followers.toLocaleString()} followers
                    </p>
                  </div>
                </div>
                <div className="text-right" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="flex items-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="129" data-magicpath-path="DashboardContentRouter.tsx">
                    <span className="text-sm font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="engagement:number" data-magicpath-id="130" data-magicpath-path="DashboardContentRouter.tsx">
                      {platform.engagement}%
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="growth:string" data-magicpath-id="131" data-magicpath-path="DashboardContentRouter.tsx">
                      {platform.growth}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="posts:number" data-magicpath-id="132" data-magicpath-path="DashboardContentRouter.tsx">
                    {platform.posts} posts
                  </p>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>

      {/* Additional Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-magicpath-id="133" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Audience Demographics */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="134" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="135" data-magicpath-path="DashboardContentRouter.tsx">
            Audience Demographics
          </h3>
          <ResponsiveContainer width="100%" height={200} data-magicpath-id="136" data-magicpath-path="DashboardContentRouter.tsx">
            <RechartsPieChart data-magicpath-id="137" data-magicpath-path="DashboardContentRouter.tsx">
              <Pie data={audienceDemographics} cx="50%" cy="50%" outerRadius={70} dataKey="percentage" label={({
              age,
              percentage
            }) => `${age}: ${percentage}%`} data-magicpath-id="138" data-magicpath-path="DashboardContentRouter.tsx">
                {audienceDemographics.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="139" data-magicpath-path="DashboardContentRouter.tsx" />)}
              </Pie>
              <Tooltip data-magicpath-id="140" data-magicpath-path="DashboardContentRouter.tsx" />
            </RechartsPieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Content Type Performance */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.8
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="141" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="142" data-magicpath-path="DashboardContentRouter.tsx">
            Content Performance
          </h3>
          <div className="space-y-4" data-magicpath-id="143" data-magicpath-path="DashboardContentRouter.tsx">
            {contentTypeData.map((content, index) => <div key={content.type} className="flex items-center justify-between" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="144" data-magicpath-path="DashboardContentRouter.tsx">
                <div data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="145" data-magicpath-path="DashboardContentRouter.tsx">
                  <p className="font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-field="type:string" data-magicpath-id="146" data-magicpath-path="DashboardContentRouter.tsx">
                    {content.type}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-field="posts:number" data-magicpath-id="147" data-magicpath-path="DashboardContentRouter.tsx">
                    {content.posts} posts
                  </p>
                </div>
                <div className="text-right" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="148" data-magicpath-path="DashboardContentRouter.tsx">
                  <p className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-field="engagement:number" data-magicpath-id="149" data-magicpath-path="DashboardContentRouter.tsx">
                    {content.engagement}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="150" data-magicpath-path="DashboardContentRouter.tsx">
                    {(content.reach / 1000).toFixed(0)}K reach
                  </p>
                </div>
              </div>)}
          </div>
        </motion.div>

        {/* Top Performing Posts */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.9
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="151" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="152" data-magicpath-path="DashboardContentRouter.tsx">
            Top Posts
          </h3>
          <div className="space-y-4" data-magicpath-id="153" data-magicpath-path="DashboardContentRouter.tsx">
            {topPosts.map((post, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 1.0 + index * 0.1
          }} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="154" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-start justify-between mb-2" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="155" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="flex items-center space-x-2" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="156" data-magicpath-path="DashboardContentRouter.tsx">
                    <div className="w-6 h-6 rounded text-white text-xs flex items-center justify-center font-bold" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknwon" data-magicpath-id="157" data-magicpath-path="DashboardContentRouter.tsx">
                      {post.logo}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="type:string" data-magicpath-id="158" data-magicpath-path="DashboardContentRouter.tsx">
                      {post.type}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="date:string" data-magicpath-id="159" data-magicpath-path="DashboardContentRouter.tsx">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-2" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="content:string" data-magicpath-id="160" data-magicpath-path="DashboardContentRouter.tsx">
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="161" data-magicpath-path="DashboardContentRouter.tsx">
                  <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="engagement:number" data-magicpath-id="162" data-magicpath-path="DashboardContentRouter.tsx">{post.engagement}% engagement</span>
                  <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="DashboardContentRouter.tsx">{(post.reach / 1000).toFixed(0)}K reach</span>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </div>;
};

// Home Dashboard Component (keeping existing implementation)
const HomeDashboard: React.FC<{
  accentColor: string;
  onShowNotification: (title: string, content: React.ReactNode) => void;
}> = ({
  accentColor,
  onShowNotification
}) => {
  const metrics = [{
    title: 'Total Posts',
    value: '1,247',
    change: '+12%',
    icon: MessageSquare,
    color: '#00B99A',
    mpid: "70179971-ca45-4048-b13d-c26d3be745a3"
  }, {
    title: 'Engagement Rate',
    value: '4.8%',
    change: '+0.3%',
    icon: Heart,
    color: '#8B7FFF',
    mpid: "1471e9f1-64a6-4f77-ba84-06cabd84fea4"
  }, {
    title: 'Followers',
    value: '23.5K',
    change: '+5.2%',
    icon: Users,
    color: '#FE8363',
    mpid: "06aa1b86-8edf-4352-b1d2-c3e9bd4ef501"
  }, {
    title: 'Reach',
    value: '156K',
    change: '+18%',
    icon: Eye,
    color: '#0D9488',
    mpid: "693be9a4-b928-4358-a6f5-e49806d092af"
  }] as any[];
  const weeklyEngagementData = [{
    name: 'Mon',
    posts: 12,
    engagement: 450,
    reach: 2400,
    mpid: "77dae406-f78e-4148-b42f-59c6edec50af"
  }, {
    name: 'Tue',
    posts: 8,
    engagement: 380,
    reach: 1800,
    mpid: "c2fa6347-2584-44b9-a7e7-6e77f37af0e6"
  }, {
    name: 'Wed',
    posts: 15,
    engagement: 620,
    reach: 3200,
    mpid: "29a08816-c7f1-460e-adf8-78dbeb9d699a"
  }, {
    name: 'Thu',
    posts: 10,
    engagement: 520,
    reach: 2800,
    mpid: "becb607d-f14f-4792-9661-8b7ef65b5cec"
  }, {
    name: 'Fri',
    posts: 18,
    engagement: 780,
    reach: 4100,
    mpid: "48d4ea2a-8975-4df8-9a82-15219247bf7b"
  }, {
    name: 'Sat',
    posts: 22,
    engagement: 890,
    reach: 4800,
    mpid: "f9691cab-0d1a-4425-9da8-394dbe28cd09"
  }, {
    name: 'Sun',
    posts: 16,
    engagement: 650,
    reach: 3600,
    mpid: "224b79ab-9096-4a0c-90cb-05ef4f7529d7"
  }] as any[];
  const platformData = [{
    name: 'Instagram',
    value: 35,
    color: '#E4405F',
    mpid: "0217937a-00cd-4b7e-8917-80e578ce35ea"
  }, {
    name: 'X (Twitter)',
    value: 25,
    color: '#000000',
    mpid: "78f0c4b8-0c35-4a1b-9207-9f653c5cdff9"
  }, {
    name: 'LinkedIn',
    value: 20,
    color: '#0077B5',
    mpid: "eedf456c-09f1-4a9d-8793-eaa5dc0671a9"
  }, {
    name: 'TikTok',
    value: 20,
    color: '#FF0050',
    mpid: "f2746937-3035-4246-b97a-45c1e0e324c2"
  }] as any[];
  const topPostsData = [{
    platform: 'Instagram',
    content: 'Morning motivation post',
    likes: 1247,
    comments: 89,
    shares: 34,
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5" data-magicpath-id="164" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z" data-magicpath-id="165" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3" data-magicpath-id="166" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6" data-magicpath-id="167" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z" data-magicpath-id="168" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z" data-magicpath-id="169" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "f1116149-df2f-4c6e-a8d7-d322d21f5dc3"
  }, {
    platform: 'X (Twitter)',
    content: 'Industry insights thread',
    likes: 892,
    comments: 156,
    shares: 78,
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5" data-magicpath-id="170" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="171" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.5v5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26" data-magicpath-id="172" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,18.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33" data-magicpath-id="173" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z" data-magicpath-id="174" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34" data-magicpath-id="175" data-magicpath-path="DashboardContentRouter.tsx"></polygon>
          <polygon fill="#18193f" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14" data-magicpath-id="176" data-magicpath-path="DashboardContentRouter.tsx"></polygon>
        </svg>,
    mpid: "7e2923ee-9841-47a9-b5db-ab1981f9b80c"
  }, {
    platform: 'LinkedIn',
    content: 'Professional tips article',
    likes: 634,
    comments: 45,
    shares: 92,
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5" data-magicpath-id="177" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z" data-magicpath-id="178" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9" data-magicpath-id="179" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14" data-magicpath-id="180" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <circle cx="15.5" cy="15.5" r="2.5" fill="#18193f" data-magicpath-id="181" data-magicpath-path="DashboardContentRouter.tsx"></circle>
          <path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z" data-magicpath-id="182" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1  v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z" data-magicpath-id="183" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "4712c4dc-d1a7-405c-bfa4-41ff775d2f0d"
  }, {
    platform: 'TikTok',
    content: 'Behind the scenes video',
    likes: 2156,
    comments: 234,
    shares: 145,
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5" data-magicpath-id="184" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="185" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404" data-magicpath-id="186" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777" data-magicpath-id="187" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21,22.5  c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6" data-magicpath-id="188" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "d25b316a-5852-481d-85b5-e8bb7ff6ca7b"
  }] as any[];
  return <div className="space-y-8" data-magicpath-id="189" data-magicpath-path="DashboardContentRouter.tsx">
      {/* Header Section */}
      <div className="flex items-center justify-between" data-magicpath-id="190" data-magicpath-path="DashboardContentRouter.tsx">
        <div data-magicpath-id="191" data-magicpath-path="DashboardContentRouter.tsx">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="192" data-magicpath-path="DashboardContentRouter.tsx">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="193" data-magicpath-path="DashboardContentRouter.tsx">
            Welcome back! Here's your social media overview.
          </p>
        </div>
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="px-6 py-3 text-white rounded-xl font-medium flex items-center space-x-2 shadow-lg" style={{
        backgroundColor: accentColor
      }} onClick={() => onShowNotification('Quick Action', <p data-magicpath-id="195" data-magicpath-path="DashboardContentRouter.tsx">Create new post feature coming soon!</p>)} data-magicpath-id="194" data-magicpath-path="DashboardContentRouter.tsx">
          <Plus size={18} data-magicpath-id="196" data-magicpath-path="DashboardContentRouter.tsx" />
          <span data-magicpath-id="197" data-magicpath-path="DashboardContentRouter.tsx">Create Post</span>
        </motion.button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="198" data-magicpath-path="DashboardContentRouter.tsx">
        {metrics.map((metric, index) => <motion.div key={metric.title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="199" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-center justify-between" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="DashboardContentRouter.tsx">
              <div data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="DashboardContentRouter.tsx">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="202" data-magicpath-path="DashboardContentRouter.tsx">
                  {metric.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:string" data-magicpath-id="203" data-magicpath-path="DashboardContentRouter.tsx">
                  {metric.value}
                </p>
                <div className="flex items-center mt-2" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="204" data-magicpath-path="DashboardContentRouter.tsx">
                  <TrendingUp size={14} className="text-green-500 mr-1" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="205" data-magicpath-path="DashboardContentRouter.tsx" />
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="change:string" data-magicpath-id="206" data-magicpath-path="DashboardContentRouter.tsx">
                    {metric.change}
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl" style={{
            backgroundColor: `${metric.color}15`
          }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="207" data-magicpath-path="DashboardContentRouter.tsx">
                <metric.icon size={28} style={{
              color: metric.color
            }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="208" data-magicpath-path="DashboardContentRouter.tsx" />
              </div>
            </div>
          </motion.div>)}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-magicpath-id="209" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Weekly Engagement Chart */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="210" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex items-center justify-between mb-6" data-magicpath-id="211" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white" data-magicpath-id="212" data-magicpath-path="DashboardContentRouter.tsx">
              Weekly Performance
            </h3>
            <div className="flex items-center space-x-4 text-sm" data-magicpath-id="213" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center" data-magicpath-id="214" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: '#00B99A'
              }} data-magicpath-id="215" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="216" data-magicpath-path="DashboardContentRouter.tsx">Engagement</span>
              </div>
              <div className="flex items-center" data-magicpath-id="217" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: '#8B7FFF'
              }} data-magicpath-id="218" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="219" data-magicpath-path="DashboardContentRouter.tsx">Reach</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280} data-magicpath-id="220" data-magicpath-path="DashboardContentRouter.tsx">
            <BarChart data={weeklyEngagementData} data-magicpath-id="221" data-magicpath-path="DashboardContentRouter.tsx">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" data-magicpath-id="222" data-magicpath-path="DashboardContentRouter.tsx" />
              <XAxis dataKey="name" stroke="#6B7280" data-magicpath-id="223" data-magicpath-path="DashboardContentRouter.tsx" />
              <YAxis stroke="#6B7280" data-magicpath-id="224" data-magicpath-path="DashboardContentRouter.tsx" />
              <Tooltip contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }} data-magicpath-id="225" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="engagement" fill="#00B99A" radius={[4, 4, 0, 0]} data-magicpath-id="226" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="reach" fill="#8B7FFF" radius={[4, 4, 0, 0]} data-magicpath-id="227" data-magicpath-path="DashboardContentRouter.tsx" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Platform Distribution */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="228" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="229" data-magicpath-path="DashboardContentRouter.tsx">
            Platform Distribution
          </h3>
          <ResponsiveContainer width="100%" height={280} data-magicpath-id="230" data-magicpath-path="DashboardContentRouter.tsx">
            <RechartsPieChart data-magicpath-id="231" data-magicpath-path="DashboardContentRouter.tsx">
              <Pie data={platformData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`} data-magicpath-id="232" data-magicpath-path="DashboardContentRouter.tsx">
                {platformData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="233" data-magicpath-path="DashboardContentRouter.tsx" />)}
              </Pie>
              <Tooltip data-magicpath-id="234" data-magicpath-path="DashboardContentRouter.tsx" />
            </RechartsPieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-magicpath-id="235" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Top Performing Posts */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }} className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="236" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="237" data-magicpath-path="DashboardContentRouter.tsx">
            Top Performing Posts
          </h3>
          <div className="space-y-4" data-magicpath-id="238" data-magicpath-path="DashboardContentRouter.tsx">
            {topPostsData.map((post, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.7 + index * 0.1
          }} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="239" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-center space-x-4" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="240" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknwon" data-magicpath-id="241" data-magicpath-path="DashboardContentRouter.tsx">
                    {post.logo}
                  </div>
                  <div data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="242" data-magicpath-path="DashboardContentRouter.tsx">
                    <p className="font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="content:string" data-magicpath-id="243" data-magicpath-path="DashboardContentRouter.tsx">{post.content}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="platform:string" data-magicpath-id="244" data-magicpath-path="DashboardContentRouter.tsx">{post.platform}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="245" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="flex items-center space-x-1" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="246" data-magicpath-path="DashboardContentRouter.tsx">
                    <Heart size={14} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="247" data-magicpath-path="DashboardContentRouter.tsx" />
                    <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="likes:number" data-magicpath-id="248" data-magicpath-path="DashboardContentRouter.tsx">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="249" data-magicpath-path="DashboardContentRouter.tsx">
                    <MessageSquare size={14} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="250" data-magicpath-path="DashboardContentRouter.tsx" />
                    <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="comments:number" data-magicpath-id="251" data-magicpath-path="DashboardContentRouter.tsx">{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="252" data-magicpath-path="DashboardContentRouter.tsx">
                    <Share2 size={14} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="253" data-magicpath-path="DashboardContentRouter.tsx" />
                    <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="shares:number" data-magicpath-id="254" data-magicpath-path="DashboardContentRouter.tsx">{post.shares}</span>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Quick Actions & Recent Activity */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7
      }} className="space-y-6" data-magicpath-id="255" data-magicpath-path="DashboardContentRouter.tsx">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="256" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="257" data-magicpath-path="DashboardContentRouter.tsx">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3" data-magicpath-id="258" data-magicpath-path="DashboardContentRouter.tsx">
              {[{
              label: 'Schedule Post',
              icon: Calendar,
              color: '#00B99A',
              mpid: "953ec5f9-9ed0-4716-991e-8eaa5de3f1ac"
            }, {
              label: 'Generate Content',
              icon: Zap,
              color: '#8B7FFF',
              mpid: "92d83406-cf3a-4215-a184-057611d33795"
            }, {
              label: 'View Analytics',
              icon: BarChart3,
              color: '#FE8363',
              mpid: "cb65c269-24b1-4cc3-b230-f38f6f2d376b"
            }, {
              label: 'Manage Connections',
              icon: Globe,
              color: '#0D9488',
              mpid: "f54fdb7f-c0ce-42e0-8984-fca0be190812"
            }].map((action, index) => <motion.button key={action.label} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group" onClick={() => onShowNotification('Quick Action', <p data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="260" data-magicpath-path="DashboardContentRouter.tsx">{action.label} feature coming soon!</p>)} data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="259" data-magicpath-path="DashboardContentRouter.tsx">
                  <action.icon size={24} style={{
                color: action.color
              }} className="mx-auto mb-2 group-hover:scale-110 transition-transform" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="261" data-magicpath-path="DashboardContentRouter.tsx" />
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="262" data-magicpath-path="DashboardContentRouter.tsx">
                    {action.label}
                  </p>
                </motion.button>)}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="263" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="264" data-magicpath-path="DashboardContentRouter.tsx">Recent Activity</h3>
            <div className="space-y-4" data-magicpath-id="265" data-magicpath-path="DashboardContentRouter.tsx">
              {[{
              action: 'Posted to Instagram',
              time: '2 hours ago',
              status: 'success',
              mpid: "f9e4d948-5fd7-46c3-92aa-1d4a78dadd18"
            }, {
              action: 'Scheduled LinkedIn post',
              time: '4 hours ago',
              status: 'pending',
              mpid: "e8c0e612-8da3-41c2-ae07-1f4ceb2d14cf"
            }, {
              action: 'Generated AI content',
              time: '6 hours ago',
              status: 'success',
              mpid: "6c967025-afbc-4313-877e-4894a42e7f18"
            }, {
              action: 'Updated profile settings',
              time: '1 day ago',
              status: 'success',
              mpid: "7daae0ba-96d1-4d21-b9a8-1f20d42d6680"
            }].map((activity, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.8 + index * 0.1
            }} className="flex items-center space-x-3" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-id="266" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : activity.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'}`} data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-id="267" data-magicpath-path="DashboardContentRouter.tsx" />
                  <div className="flex-1" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-id="268" data-magicpath-path="DashboardContentRouter.tsx">
                    <p className="text-sm font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-field="action:unknown" data-magicpath-id="269" data-magicpath-path="DashboardContentRouter.tsx">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="270" data-magicpath-path="DashboardContentRouter.tsx">{activity.time}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};

// Content Creator Component (keeping existing implementation)
const ContentCreator: React.FC<{
  accentColor: string;
  onShowNotification: (title: string, content: React.ReactNode) => void;
}> = ({
  accentColor,
  onShowNotification
}) => {
  const [formData, setFormData] = useState({
    topic: '',
    platform: 'instagram',
    tone: 'professional',
    contentType: 'post'
  });
  const [generatedContent, setGeneratedContent] = useState<string[]>([]);
  const handleGenerate = () => {
    const mockContent = ["🚀 Exciting news! We're launching our new social media management features that will revolutionize how you connect with your audience. Stay tuned for more updates! #SocialMedia #Innovation", "Transform your social media strategy with AI-powered content creation. Our latest tools help you craft engaging posts that resonate with your audience and drive meaningful engagement.", "Ready to take your social presence to the next level? Discover how our platform can help you schedule, analyze, and optimize your content for maximum impact across all channels."];
    setGeneratedContent(mockContent);
    onShowNotification('Content Generated', <p data-magicpath-id="271" data-magicpath-path="DashboardContentRouter.tsx">Successfully generated {mockContent.length} content variations!</p>);
  };
  return <div className="space-y-6" data-magicpath-id="272" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="273" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="274" data-magicpath-path="DashboardContentRouter.tsx">AI Content Creator</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="275" data-magicpath-path="DashboardContentRouter.tsx">
          Generate engaging content for your social media platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-magicpath-id="276" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="277" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="278" data-magicpath-path="DashboardContentRouter.tsx">Content Settings</h3>
          <div className="space-y-4" data-magicpath-id="279" data-magicpath-path="DashboardContentRouter.tsx">
            <div data-magicpath-id="280" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-magicpath-id="281" data-magicpath-path="DashboardContentRouter.tsx">
                Topic
              </label>
              <input type="text" value={formData.topic} onChange={e => setFormData({
              ...formData,
              topic: e.target.value
            })} placeholder="Enter your content topic..." className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} data-magicpath-id="282" data-magicpath-path="DashboardContentRouter.tsx" />
            </div>

            <div data-magicpath-id="283" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-magicpath-id="284" data-magicpath-path="DashboardContentRouter.tsx">
                Platform
              </label>
              <select value={formData.platform} onChange={e => setFormData({
              ...formData,
              platform: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} data-magicpath-id="285" data-magicpath-path="DashboardContentRouter.tsx">
                <option value="instagram" data-magicpath-id="286" data-magicpath-path="DashboardContentRouter.tsx">Instagram</option>
                <option value="twitter" data-magicpath-id="287" data-magicpath-path="DashboardContentRouter.tsx">X (Twitter)</option>
                <option value="linkedin" data-magicpath-id="288" data-magicpath-path="DashboardContentRouter.tsx">LinkedIn</option>
                <option value="facebook" data-magicpath-id="289" data-magicpath-path="DashboardContentRouter.tsx">Facebook</option>
              </select>
            </div>

            <div data-magicpath-id="290" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-magicpath-id="291" data-magicpath-path="DashboardContentRouter.tsx">
                Tone
              </label>
              <select value={formData.tone} onChange={e => setFormData({
              ...formData,
              tone: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} data-magicpath-id="292" data-magicpath-path="DashboardContentRouter.tsx">
                <option value="professional" data-magicpath-id="293" data-magicpath-path="DashboardContentRouter.tsx">Professional</option>
                <option value="casual" data-magicpath-id="294" data-magicpath-path="DashboardContentRouter.tsx">Casual</option>
                <option value="humorous" data-magicpath-id="295" data-magicpath-path="DashboardContentRouter.tsx">Humorous</option>
                <option value="inspirational" data-magicpath-id="296" data-magicpath-path="DashboardContentRouter.tsx">Inspirational</option>
              </select>
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} onClick={handleGenerate} className="w-full py-3 text-white rounded-lg font-medium flex items-center justify-center space-x-2" style={{
            backgroundColor: accentColor
          }} data-magicpath-id="297" data-magicpath-path="DashboardContentRouter.tsx">
              <Zap size={16} data-magicpath-id="298" data-magicpath-path="DashboardContentRouter.tsx" />
              <span data-magicpath-id="299" data-magicpath-path="DashboardContentRouter.tsx">Generate Content</span>
            </motion.button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="300" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="301" data-magicpath-path="DashboardContentRouter.tsx">Generated Content</h3>
          {generatedContent.length > 0 ? <div className="space-y-4" data-magicpath-id="302" data-magicpath-path="DashboardContentRouter.tsx">
              {generatedContent.map((content, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="303" data-magicpath-path="DashboardContentRouter.tsx">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="304" data-magicpath-path="DashboardContentRouter.tsx">{content}</p>
                  <div className="flex space-x-2" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="305" data-magicpath-path="DashboardContentRouter.tsx">
                    <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="306" data-magicpath-path="DashboardContentRouter.tsx">
                      Copy
                    </button>
                    <button className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="307" data-magicpath-path="DashboardContentRouter.tsx">
                      Schedule
                    </button>
                  </div>
                </motion.div>)}
            </div> : <div className="text-center py-8" data-magicpath-id="308" data-magicpath-path="DashboardContentRouter.tsx">
              <Zap size={48} className="mx-auto text-gray-400 mb-4" data-magicpath-id="309" data-magicpath-path="DashboardContentRouter.tsx" />
              <p className="text-gray-500 dark:text-gray-400" data-magicpath-id="310" data-magicpath-path="DashboardContentRouter.tsx">Generate content to see results here</p>
            </div>}
        </div>
      </div>
    </div>;
};

// Post Planner Component (keeping existing implementation)
const PostPlanner: React.FC<{
  accentColor: string;
  onShowNotification: (title: string, content: React.ReactNode) => void;
}> = ({
  accentColor,
  onShowNotification
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  return <div className="space-y-6" data-magicpath-id="311" data-magicpath-path="DashboardContentRouter.tsx">
      <div className="flex items-center justify-between" data-magicpath-id="312" data-magicpath-path="DashboardContentRouter.tsx">
        <div data-magicpath-id="313" data-magicpath-path="DashboardContentRouter.tsx">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="314" data-magicpath-path="DashboardContentRouter.tsx">Post Planner</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="315" data-magicpath-path="DashboardContentRouter.tsx">
            Schedule and manage your social media posts.
          </p>
        </div>
        <div className="flex items-center space-x-3" data-magicpath-id="316" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1" data-magicpath-id="317" data-magicpath-path="DashboardContentRouter.tsx">
            {['month', 'week', 'day'].map(mode => <button key={mode} onClick={() => setViewMode(mode as 'month' | 'week' | 'day')} className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${viewMode === mode ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`} style={{
            backgroundColor: viewMode === mode ? accentColor : 'transparent'
          }} data-magicpath-id="318" data-magicpath-path="DashboardContentRouter.tsx">
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>)}
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-4 py-2 text-white rounded-lg font-medium flex items-center space-x-2" style={{
          backgroundColor: accentColor
        }} onClick={() => onShowNotification('New Post', <p data-magicpath-id="320" data-magicpath-path="DashboardContentRouter.tsx">Post creation modal would open here!</p>)} data-magicpath-id="319" data-magicpath-path="DashboardContentRouter.tsx">
            <Plus size={16} data-magicpath-id="321" data-magicpath-path="DashboardContentRouter.tsx" />
            <span data-magicpath-id="322" data-magicpath-path="DashboardContentRouter.tsx">New Post</span>
          </motion.button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="323" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="grid grid-cols-7 gap-4 mb-4" data-magicpath-id="324" data-magicpath-path="DashboardContentRouter.tsx">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2" data-magicpath-id="325" data-magicpath-path="DashboardContentRouter.tsx">
              {day}
            </div>)}
        </div>
        
        <div className="grid grid-cols-7 gap-4" data-magicpath-id="326" data-magicpath-path="DashboardContentRouter.tsx">
          {Array.from({
          length: 35
        }, (_, i) => {
          const date = i + 1;
          const hasPost = Math.random() > 0.7;
          return <motion.div key={i} whileHover={{
            scale: 1.05
          }} className={`aspect-square p-2 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors cursor-pointer ${hasPost ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' : ''}`} onClick={() => onShowNotification('Schedule Post', <p data-magicpath-id="328" data-magicpath-path="DashboardContentRouter.tsx">Schedule a post for day {date}</p>)} data-magicpath-id="327" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300" data-magicpath-id="329" data-magicpath-path="DashboardContentRouter.tsx">{date}</div>
                {hasPost && <div className="mt-1" data-magicpath-id="330" data-magicpath-path="DashboardContentRouter.tsx">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mb-1" data-magicpath-id="331" data-magicpath-path="DashboardContentRouter.tsx" />
                    <div className="text-xs text-blue-600 dark:text-blue-400" data-magicpath-id="332" data-magicpath-path="DashboardContentRouter.tsx">2 posts</div>
                  </div>}
              </motion.div>;
        })}
        </div>
      </div>
    </div>;
};

// Preferences Component (keeping existing implementation)
const Preferences: React.FC<{
  accentColor: string;
  onUpdateAccentColor: (color: string) => void;
  user: User;
}> = ({
  accentColor,
  onUpdateAccentColor,
  user
}) => {
  const colorOptions = ['#00B99A', '#8B7FFF', '#FE8363', '#0D9488', '#F59E0B', '#EF4444'];
  return <div className="space-y-6" data-magicpath-id="333" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="334" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="335" data-magicpath-path="DashboardContentRouter.tsx">Preferences</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="336" data-magicpath-path="DashboardContentRouter.tsx">
          Customize your dashboard experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-magicpath-id="337" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="338" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="339" data-magicpath-path="DashboardContentRouter.tsx">Appearance</h3>
          <div className="space-y-4" data-magicpath-id="340" data-magicpath-path="DashboardContentRouter.tsx">
            <div data-magicpath-id="341" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" data-magicpath-id="342" data-magicpath-path="DashboardContentRouter.tsx">
                Accent Color
              </label>
              <div className="flex space-x-3" data-magicpath-id="343" data-magicpath-path="DashboardContentRouter.tsx">
                {colorOptions.map(color => <motion.button key={color} whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} onClick={() => onUpdateAccentColor(color)} className={`w-8 h-8 rounded-full border-2 ${accentColor === color ? 'border-gray-400' : 'border-gray-200 dark:border-gray-600'}`} style={{
                backgroundColor: color
              }} data-magicpath-uuid={(color as any)["mpid"] ?? "unsafe"} data-magicpath-id="344" data-magicpath-path="DashboardContentRouter.tsx" />)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="345" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="346" data-magicpath-path="DashboardContentRouter.tsx">Notifications</h3>
          <div className="space-y-4" data-magicpath-id="347" data-magicpath-path="DashboardContentRouter.tsx">
            {[{
            label: 'Email notifications',
            enabled: true,
            mpid: "f7bc18a9-dc89-43c0-a999-daa66455d965"
          }, {
            label: 'Push notifications',
            enabled: false,
            mpid: "dccce65d-7393-4d00-afe6-1e25e9b11ea7"
          }, {
            label: 'Weekly reports',
            enabled: true,
            mpid: "288e80fb-e607-4dc8-84e5-87776eb6b82f"
          }].map((setting, index) => <div key={index} className="flex items-center justify-between" data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-id="348" data-magicpath-path="DashboardContentRouter.tsx">
                <span className="text-sm text-gray-700 dark:text-gray-300" data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="349" data-magicpath-path="DashboardContentRouter.tsx">{setting.label}</span>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${setting.enabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`} data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-id="350" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${setting.enabled ? 'translate-x-6' : 'translate-x-0'}`} data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-id="351" data-magicpath-path="DashboardContentRouter.tsx" />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};

// Connections Component with Real Social Media Logos
const Connections: React.FC<{
  accentColor: string;
  onShowNotification: (title: string, content: React.ReactNode) => void;
}> = ({
  accentColor,
  onShowNotification
}) => {
  const platforms = [{
    name: 'Instagram',
    connected: true,
    color: '#E4405F',
    followers: '12.5K',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="352" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z" data-magicpath-id="353" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3" data-magicpath-id="354" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6" data-magicpath-id="355" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z" data-magicpath-id="356" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z" data-magicpath-id="357" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "5a40219e-2348-41ac-bb94-b89fa7d3d446"
  }, {
    name: 'X (Twitter)',
    connected: true,
    color: '#000000',
    followers: '8.2K',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="358" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="359" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.5v5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26" data-magicpath-id="360" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,18.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33" data-magicpath-id="361" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z" data-magicpath-id="362" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34" data-magicpath-id="363" data-magicpath-path="DashboardContentRouter.tsx"></polygon>
          <polygon fill="#18193f" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14" data-magicpath-id="364" data-magicpath-path="DashboardContentRouter.tsx"></polygon>
        </svg>,
    mpid: "91157039-618c-41e9-924e-208314b77379"
  }, {
    name: 'LinkedIn',
    connected: false,
    color: '#0077B5',
    followers: '0',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="365" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z" data-magicpath-id="366" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9" data-magicpath-id="367" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14" data-magicpath-id="368" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <circle cx="15.5" cy="15.5" r="2.5" fill="#18193f" data-magicpath-id="369" data-magicpath-path="DashboardContentRouter.tsx"></circle>
          <path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z" data-magicpath-id="370" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1  v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z" data-magicpath-id="371" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "936d5737-83bc-4097-96f9-0fe365e187c0"
  }, {
    name: 'Facebook',
    connected: true,
    color: '#1877F2',
    followers: '15.3K',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="372" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#90caf9" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="373" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="#18193f" d="M20,29h4v12.235c0.979,0.16,1.976,0.265,3,0.265s2.021-0.105,3-0.265V29h3.625  c0.504,0,0.93-0.376,0.992-0.876l0.375-3c0.036-0.284-0.053-0.57-0.243-0.786C34.56,24.123,34.287,24,34,24h-4v-3.5  c0-1.103,0.897-2,2-2h2c0.552,0,1-0.447,1-1v-3.375c0-0.518-0.396-0.95-0.911-0.996C34.03,13.124,32.62,13,30.834,13  C26.427,13,24,15.617,24,20.368V24h-4c-0.552,0-1,0.447-1,1v3C19,28.553,19.448,29,20,29z" data-magicpath-id="374" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.596V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V20.83" data-magicpath-id="375" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,14.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.479" data-magicpath-id="376" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "a705b9f0-170d-4f95-9cd9-4563bc392389"
  }, {
    name: 'TikTok',
    connected: false,
    color: '#FF0050',
    followers: '0',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="377" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z" data-magicpath-id="378" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404" data-magicpath-id="379" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777" data-magicpath-id="380" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21,22.5  c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6" data-magicpath-id="381" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "6e874495-8e84-4988-8181-1df087e0c84e"
  }, {
    name: 'YouTube',
    connected: false,
    color: '#FF0000',
    followers: '0',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6" data-magicpath-id="382" data-magicpath-path="DashboardContentRouter.tsx">
          <path fill="#ffab91" d="M27.86,14c-6.144,0-11.916,0.469-14.989,1.125c-2.048,0.469-3.817,1.875-4.19,4.031  c-0.371,2.25-0.744,5.125-0.744,9.344s0.373,7,0.838,9.344c0.373,2.063,2.141,3.563,4.19,4.031C16.223,42.531,21.809,43,27.953,43  s11.73-0.469,14.989-1.125c2.048-0.469,3.817-1.875,4.19-4.031c0.373-2.344,0.838-5.219,0.931-9.438  c0-4.219-0.466-7.094-0.931-9.438c-0.373-2.063-2.141-3.563-4.19-4.031C39.684,14.469,34.005,14,27.86,14L27.86,14z" data-magicpath-id="383" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M28.79,10.093  C27.206,10.034,25.549,10,23.857,10l0,0c-6.278,0-12.176,0.469-15.316,1.125C6.448,11.594,4.641,13,4.26,15.156  C3.881,17.406,3.5,20.281,3.5,24.5s0.381,7,0.856,9.344c0.381,2.063,2.188,3.563,4.281,4.031c1.085,0.214,2.423,0.408,3.951,0.572" data-magicpath-id="384" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,38.881  C20.233,38.958,22.067,39,23.952,39c6.278,0,11.986-0.469,15.316-1.125c2.093-0.469,3.9-1.875,4.281-4.031  c0.381-2.344,0.856-5.219,0.951-9.438c0-4.219-0.476-7.094-0.951-9.438c-0.381-2.063-2.188-3.563-4.281-4.031  c-0.888-0.125-1.952-0.25-3.154-0.366" data-magicpath-id="385" data-magicpath-path="DashboardContentRouter.tsx"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,24v4.514  c0,1.522,1.663,2.476,3,1.721l7.99-4.514c1.347-0.761,1.347-2.682,0-3.443l-7.99-4.514c-1.337-0.755-3,0.199-3,1.721" data-magicpath-id="386" data-magicpath-path="DashboardContentRouter.tsx"></path>
        </svg>,
    mpid: "6fe8e9d2-53b6-4215-aeb8-79879908509d"
  }] as any[];
  return <div className="space-y-6" data-magicpath-id="387" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="388" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="389" data-magicpath-path="DashboardContentRouter.tsx">Social Connections</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="390" data-magicpath-path="DashboardContentRouter.tsx">
          Manage your connected social media accounts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="391" data-magicpath-path="DashboardContentRouter.tsx">
        {platforms.map((platform, index) => <motion.div key={platform.name} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="392" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-center justify-between mb-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="393" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center space-x-3" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="394" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{
              backgroundColor: platform.color,
              background: "rgb(0 0 0 / 0)"
            }} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknwon" data-magicpath-id="395" data-magicpath-path="DashboardContentRouter.tsx">
                  {platform.logo}
                </div>
                <div data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="396" data-magicpath-path="DashboardContentRouter.tsx">
                  <h3 className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="397" data-magicpath-path="DashboardContentRouter.tsx">{platform.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="398" data-magicpath-path="DashboardContentRouter.tsx">
                    {platform.connected ? `${platform.followers} followers` : 'Not connected'}
                  </p>
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${platform.connected ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="399" data-magicpath-path="DashboardContentRouter.tsx" />
            </div>
            
            <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => onShowNotification(platform.connected ? 'Disconnect Account' : 'Connect Account', <p data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="401" data-magicpath-path="DashboardContentRouter.tsx">{platform.connected ? 'Disconnect' : 'Connect'} your {platform.name} account?</p>)} className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${platform.connected ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30' : 'text-white hover:opacity-90'}`} style={{
          backgroundColor: platform.connected ? undefined : accentColor
        }} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="400" data-magicpath-path="DashboardContentRouter.tsx">
              {platform.connected ? 'Disconnect' : 'Connect'}
            </motion.button>
          </motion.div>)}
      </div>
    </div>;
};

// Alerts Page Component (keeping existing implementation)
const AlertsPage: React.FC<{
  accentColor: string;
}> = ({
  accentColor
}) => {
  const alerts = [{
    type: 'success',
    title: 'Post Published',
    message: 'Your Instagram post has been published successfully',
    time: '2 minutes ago',
    mpid: "5f8d68a5-6fee-42c7-9174-a92cf2b30ffb"
  }, {
    type: 'warning',
    title: 'Engagement Drop',
    message: 'Your engagement rate has decreased by 15% this week',
    time: '1 hour ago',
    mpid: "55c801fd-0408-4087-9221-4f54a2864653"
  }, {
    type: 'info',
    title: 'Scheduled Post',
    message: 'Your LinkedIn post is scheduled for 3:00 PM today',
    time: '3 hours ago',
    mpid: "a2d1a519-0372-4caf-b042-52dc1cd8ffc4"
  }, {
    type: 'error',
    title: 'Connection Failed',
    message: 'Failed to connect to X (Twitter) API. Please check your credentials',
    time: '5 hours ago',
    mpid: "2a803048-0dae-4fae-9938-cacc1b07af72"
  }] as any[];
  const getAlertColor = (type: string) => {
    switch (type) {
      case 'success':
        return '#10B981';
      case 'warning':
        return '#F59E0B';
      case 'info':
        return '#3B82F6';
      case 'error':
        return '#EF4444';
      default:
        return accentColor;
    }
  };
  return <div className="space-y-6" data-magicpath-id="402" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="403" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="404" data-magicpath-path="DashboardContentRouter.tsx">Alerts & Notifications</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="405" data-magicpath-path="DashboardContentRouter.tsx">
          Stay updated with your social media activity.
        </p>
      </div>

      <div className="space-y-4" data-magicpath-id="406" data-magicpath-path="DashboardContentRouter.tsx">
        {alerts.map((alert, index) => <motion.div key={index} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="407" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-start space-x-4" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="408" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{
            backgroundColor: getAlertColor(alert.type)
          }} data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="409" data-magicpath-path="DashboardContentRouter.tsx" />
              <div className="flex-1" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="410" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-center justify-between" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="411" data-magicpath-path="DashboardContentRouter.tsx">
                  <h3 className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="412" data-magicpath-path="DashboardContentRouter.tsx">{alert.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:string" data-magicpath-id="413" data-magicpath-path="DashboardContentRouter.tsx">{alert.time}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-field="message:string" data-magicpath-id="414" data-magicpath-path="DashboardContentRouter.tsx">{alert.message}</p>
              </div>
            </div>
          </motion.div>)}
      </div>
    </div>;
};
export default DashboardContentRouter;