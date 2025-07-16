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
        return <HomeDashboard accentColor={accentColor} onShowNotification={onShowNotification} />;
      case 'content':
        return <ContentCreator accentColor={accentColor} onShowNotification={onShowNotification} />;
      case 'planner':
        return <PostPlanner accentColor={accentColor} onShowNotification={onShowNotification} />;
      case 'analytics':
        return <AnalyticsDashboard accentColor={accentColor} isDarkMode={isDarkMode} />;
      case 'preferences':
        return <Preferences accentColor={accentColor} onUpdateAccentColor={onUpdateAccentColor} user={user} />;
      case 'connections':
        return <Connections accentColor={accentColor} onShowNotification={onShowNotification} />;
      case 'alerts':
        return <AlertsPage accentColor={accentColor} />;
      default:
        return <HomeDashboard accentColor={accentColor} onShowNotification={onShowNotification} />;
    }
  };
  return <AnimatePresence mode="wait">
      <motion.div key={activeSection} variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{
      duration: 0.3
    }} className="p-6">
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
    trend: [120, 132, 145, 158, 172, 189, 205, 224, 240]
  }, {
    title: 'Engagement Rate',
    value: '6.8%',
    change: '+2.4%',
    changeType: 'increase',
    icon: Heart,
    color: '#8B7FFF',
    description: 'Average engagement across platforms',
    trend: [4.2, 4.5, 4.8, 5.1, 5.6, 6.0, 6.3, 6.5, 6.8]
  }, {
    title: 'Follower Growth',
    value: '+3,247',
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
    color: '#FE8363',
    description: 'New followers this period',
    trend: [2100, 2250, 2400, 2650, 2800, 2950, 3100, 3200, 3247]
  }, {
    title: 'Content Performance',
    value: '94.2',
    change: '-1.2%',
    changeType: 'decrease',
    icon: BarChart3,
    color: '#0D9488',
    description: 'Average performance score',
    trend: [92, 93, 94, 95, 96, 95, 94, 94, 94.2]
  }, {
    title: 'Click-Through Rate',
    value: '3.4%',
    change: '+0.8%',
    changeType: 'increase',
    icon: Target,
    color: '#F59E0B',
    description: 'Link clicks per impression',
    trend: [2.1, 2.3, 2.6, 2.8, 3.0, 3.1, 3.2, 3.3, 3.4]
  }, {
    title: 'Share Rate',
    value: '1.9%',
    change: '0.0%',
    changeType: 'neutral',
    icon: Share2,
    color: '#6366F1',
    description: 'Content sharing frequency',
    trend: [1.8, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9]
  }] as any[];

  // Enhanced engagement data with more granular time periods
  const engagementData = [{
    name: 'Mon',
    engagement: 4200,
    reach: 28000,
    clicks: 890,
    shares: 245,
    comments: 156,
    likes: 3200
  }, {
    name: 'Tue',
    engagement: 3800,
    reach: 25000,
    clicks: 750,
    shares: 198,
    comments: 134,
    likes: 2900
  }, {
    name: 'Wed',
    engagement: 5200,
    reach: 35000,
    clicks: 1200,
    shares: 320,
    comments: 210,
    likes: 4100
  }, {
    name: 'Thu',
    engagement: 4600,
    reach: 31000,
    clicks: 980,
    shares: 275,
    comments: 178,
    likes: 3600
  }, {
    name: 'Fri',
    engagement: 6800,
    reach: 42000,
    clicks: 1450,
    shares: 410,
    comments: 285,
    likes: 5200
  }, {
    name: 'Sat',
    engagement: 7200,
    reach: 48000,
    clicks: 1680,
    shares: 485,
    comments: 320,
    likes: 5800
  }, {
    name: 'Sun',
    engagement: 5900,
    reach: 38000,
    clicks: 1250,
    shares: 365,
    comments: 245,
    likes: 4500
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
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"></path>
          <path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"></path>
          <path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
        </svg>
  }, {
    name: 'X (Twitter)',
    followers: 23800,
    engagement: 4.8,
    reach: 520000,
    posts: 45,
    color: '#000000',
    growth: '+8.3%',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.5v5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,18.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33"></path>
          <path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path>
          <polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon>
          <polygon fill="#18193f" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
        </svg>
  }, {
    name: 'LinkedIn',
    followers: 18500,
    engagement: 6.1,
    reach: 340000,
    posts: 15,
    color: '#0077B5',
    growth: '+15.2%',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14"></path>
          <circle cx="15.5" cy="15.5" r="2.5" fill="#18193f"></circle>
          <path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z"></path>
          <path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1  v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z"></path>
        </svg>
  }, {
    name: 'TikTok',
    followers: 67300,
    engagement: 9.4,
    reach: 1200000,
    posts: 22,
    color: '#FF0050',
    growth: '+28.7%',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21,22.5  c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6"></path>
        </svg>
  }, {
    name: 'YouTube',
    followers: 12400,
    engagement: 5.6,
    reach: 280000,
    posts: 8,
    color: '#FF0000',
    growth: '+6.1%',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#ffab91" d="M27.86,14c-6.144,0-11.916,0.469-14.989,1.125c-2.048,0.469-3.817,1.875-4.19,4.031  c-0.371,2.25-0.744,5.125-0.744,9.344s0.373,7,0.838,9.344c0.373,2.063,2.141,3.563,4.19,4.031C16.223,42.531,21.809,43,27.953,43  s11.73-0.469,14.989-1.125c2.048-0.469,3.817-1.875,4.19-4.031c0.373-2.344,0.838-5.219,0.931-9.438  c0-4.219-0.466-7.094-0.931-9.438c-0.373-2.063-2.141-3.563-4.19-4.031C39.684,14.469,34.005,14,27.86,14L27.86,14z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M28.79,10.093  C27.206,10.034,25.549,10,23.857,10l0,0c-6.278,0-12.176,0.469-15.316,1.125C6.448,11.594,4.641,13,4.26,15.156  C3.881,17.406,3.5,20.281,3.5,24.5s0.381,7,0.856,9.344c0.381,2.063,2.188,3.563,4.281,4.031c1.085,0.214,2.423,0.408,3.951,0.572"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,38.881  C20.233,38.958,22.067,39,23.952,39c6.278,0,11.986-0.469,15.316-1.125c2.093-0.469,3.9-1.875,4.281-4.031  c0.381-2.344,0.856-5.219,0.951-9.438c0-4.219-0.476-7.094-0.951-9.438c-0.381-2.063-2.188-3.563-4.281-4.031  c-0.888-0.125-1.952-0.25-3.154-0.366"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,24v4.514  c0,1.522,1.663,2.476,3,1.721l7.99-4.514c1.347-0.761,1.347-2.682,0-3.443l-7.99-4.514c-1.337-0.755-3,0.199-3,1.721"></path>
        </svg>
  }] as any[];

  // Audience demographics data
  const audienceDemographics = [{
    age: '18-24',
    percentage: 28,
    color: '#8B7FFF'
  }, {
    age: '25-34',
    percentage: 35,
    color: '#00B99A'
  }, {
    age: '35-44',
    percentage: 22,
    color: '#FE8363'
  }, {
    age: '45-54',
    percentage: 12,
    color: '#F59E0B'
  }, {
    age: '55+',
    percentage: 3,
    color: '#6366F1'
  }] as any[];

  // Content performance by type
  const contentTypeData = [{
    type: 'Images',
    posts: 45,
    engagement: 6.8,
    reach: 450000
  }, {
    type: 'Videos',
    posts: 28,
    engagement: 9.2,
    reach: 680000
  }, {
    type: 'Carousels',
    posts: 18,
    engagement: 7.5,
    reach: 320000
  }, {
    type: 'Stories',
    posts: 62,
    engagement: 4.2,
    reach: 280000
  }, {
    type: 'Reels',
    posts: 15,
    engagement: 12.4,
    reach: 890000
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
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"></path>
          <path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"></path>
          <path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
        </svg>
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
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21,22.5  c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6"></path>
        </svg>
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
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14"></path>
          <circle cx="15.5" cy="15.5" r="2.5" fill="#18193f"></circle>
          <path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z"></path>
          <path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1  v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z"></path>
        </svg>
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
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.5v5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,18.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33"></path>
          <path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path>
          <polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon>
          <polygon fill="#18193f" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
        </svg>
  }] as any[];
  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case 'increase':
        return <ArrowUp size={14} className="text-green-500" />;
      case 'decrease':
        return <ArrowDown size={14} className="text-red-500" />;
      default:
        return <Minus size={14} className="text-gray-500" />;
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
  return <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Comprehensive insights into your social media performance
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            {[{
            label: '7D',
            value: '7d'
          }, {
            label: '30D',
            value: '30d'
          }, {
            label: '90D',
            value: '90d'
          }].map(range => <button key={range.value} onClick={() => setTimeRange(range.value)} className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${timeRange === range.value ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`} style={{
            backgroundColor: timeRange === range.value ? accentColor : 'transparent'
          }}>
                {range.label}
              </button>)}
          </div>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2">
            <Filter size={16} />
            <span>Filter</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Enhanced Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => <motion.div key={metric.title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl" style={{
              backgroundColor: `${metric.color}15`
            }}>
                  <metric.icon size={24} style={{
                color: metric.color
              }} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {metric.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {metric.value}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {getChangeIcon(metric.changeType)}
                <span className={`text-sm font-medium ${getChangeColor(metric.changeType)}`}>
                  {metric.change}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
              {metric.description}
            </p>
            
            {/* Mini trend chart */}
            <div className="h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metric.trend.map((value, i) => ({
              value,
              index: i
            }))}>
                  <Line type="monotone" dataKey="value" stroke={metric.color} strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>)}
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Engagement Chart */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Weekly Performance Breakdown
            </h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2 bg-blue-500"></div>
                <span className="text-gray-600 dark:text-gray-400">Engagement</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
                <span className="text-gray-600 dark:text-gray-400">Reach</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2 bg-purple-500"></div>
                <span className="text-gray-600 dark:text-gray-400">Clicks</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} />
              <XAxis dataKey="name" stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
              <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} />
              <Tooltip contentStyle={{
              backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
              border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }} />
              <Bar dataKey="engagement" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="reach" fill="#10B981" radius={[4, 4, 0, 0]} />
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
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Platform Performance
          </h3>
          <div className="space-y-4">
            {platformPerformance.map((platform, index) => <motion.div key={platform.name} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.6 + index * 0.1
          }} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{
                backgroundColor: platform.color,
                background: "rgb(227 64 94 / 0)"
              }}>
                    {platform.logo}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {platform.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {platform.followers.toLocaleString()} followers
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {platform.engagement}%
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400">
                      {platform.growth}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {platform.posts} posts
                  </p>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>

      {/* Additional Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Audience Demographics */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Audience Demographics
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <RechartsPieChart>
              <Pie data={audienceDemographics} cx="50%" cy="50%" outerRadius={70} dataKey="percentage" label={({
              age,
              percentage
            }) => `${age}: ${percentage}%`}>
                {audienceDemographics.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Tooltip />
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
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Content Performance
          </h3>
          <div className="space-y-4">
            {contentTypeData.map((content, index) => <div key={content.type} className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {content.type}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {content.posts} posts
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {content.engagement}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
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
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Top Posts
          </h3>
          <div className="space-y-4">
            {topPosts.map((post, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 1.0 + index * 0.1
          }} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded text-white text-xs flex items-center justify-center font-bold">
                      {post.logo}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.type}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{post.engagement}% engagement</span>
                  <span>{(post.reach / 1000).toFixed(0)}K reach</span>
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
    color: '#00B99A'
  }, {
    title: 'Engagement Rate',
    value: '4.8%',
    change: '+0.3%',
    icon: Heart,
    color: '#8B7FFF'
  }, {
    title: 'Followers',
    value: '23.5K',
    change: '+5.2%',
    icon: Users,
    color: '#FE8363'
  }, {
    title: 'Reach',
    value: '156K',
    change: '+18%',
    icon: Eye,
    color: '#0D9488'
  }] as any[];
  const weeklyEngagementData = [{
    name: 'Mon',
    posts: 12,
    engagement: 450,
    reach: 2400
  }, {
    name: 'Tue',
    posts: 8,
    engagement: 380,
    reach: 1800
  }, {
    name: 'Wed',
    posts: 15,
    engagement: 620,
    reach: 3200
  }, {
    name: 'Thu',
    posts: 10,
    engagement: 520,
    reach: 2800
  }, {
    name: 'Fri',
    posts: 18,
    engagement: 780,
    reach: 4100
  }, {
    name: 'Sat',
    posts: 22,
    engagement: 890,
    reach: 4800
  }, {
    name: 'Sun',
    posts: 16,
    engagement: 650,
    reach: 3600
  }] as any[];
  const platformData = [{
    name: 'Instagram',
    value: 35,
    color: '#E4405F'
  }, {
    name: 'X (Twitter)',
    value: 25,
    color: '#000000'
  }, {
    name: 'LinkedIn',
    value: 20,
    color: '#0077B5'
  }, {
    name: 'TikTok',
    value: 20,
    color: '#FF0050'
  }] as any[];
  const topPostsData = [{
    platform: 'Instagram',
    content: 'Morning motivation post',
    likes: 1247,
    comments: 89,
    shares: 34,
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"></path>
          <path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"></path>
          <path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
        </svg>
  }, {
    platform: 'X (Twitter)',
    content: 'Industry insights thread',
    likes: 892,
    comments: 156,
    shares: 78,
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.5v5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,18.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33"></path>
          <path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path>
          <polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon>
          <polygon fill="#18193f" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
        </svg>
  }, {
    platform: 'LinkedIn',
    content: 'Professional tips article',
    likes: 634,
    comments: 45,
    shares: 92,
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14"></path>
          <circle cx="15.5" cy="15.5" r="2.5" fill="#18193f"></circle>
          <path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z"></path>
          <path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1  v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z"></path>
        </svg>
  }, {
    platform: 'TikTok',
    content: 'Behind the scenes video',
    likes: 2156,
    comments: 234,
    shares: 145,
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21,22.5  c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6"></path>
        </svg>
  }] as any[];
  return <div className="space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's your social media overview.
          </p>
        </div>
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="px-6 py-3 text-white rounded-xl font-medium flex items-center space-x-2 shadow-lg" style={{
        backgroundColor: accentColor
      }} onClick={() => onShowNotification('Quick Action', <p>Create new post feature coming soon!</p>)}>
          <Plus size={18} />
          <span>Create Post</span>
        </motion.button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => <motion.div key={metric.title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {metric.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {metric.value}
                </p>
                <div className="flex items-center mt-2">
                  <TrendingUp size={14} className="text-green-500 mr-1" />
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    {metric.change}
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl" style={{
            backgroundColor: `${metric.color}15`
          }}>
                <metric.icon size={28} style={{
              color: metric.color
            }} />
              </div>
            </div>
          </motion.div>)}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Engagement Chart */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Weekly Performance
            </h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: '#00B99A'
              }}></div>
                <span className="text-gray-600 dark:text-gray-400">Engagement</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: '#8B7FFF'
              }}></div>
                <span className="text-gray-600 dark:text-gray-400">Reach</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={weeklyEngagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }} />
              <Bar dataKey="engagement" fill="#00B99A" radius={[4, 4, 0, 0]} />
              <Bar dataKey="reach" fill="#8B7FFF" radius={[4, 4, 0, 0]} />
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
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Platform Distribution
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <RechartsPieChart>
              <Pie data={platformData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {platformData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
              </Pie>
              <Tooltip />
            </RechartsPieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Performing Posts */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }} className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Top Performing Posts
          </h3>
          <div className="space-y-4">
            {topPostsData.map((post, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.7 + index * 0.1
          }} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {post.logo}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{post.content}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.platform}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Heart size={14} />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare size={14} />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Share2 size={14} />
                    <span>{post.shares}</span>
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
      }} className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {[{
              label: 'Schedule Post',
              icon: Calendar,
              color: '#00B99A'
            }, {
              label: 'Generate Content',
              icon: Zap,
              color: '#8B7FFF'
            }, {
              label: 'View Analytics',
              icon: BarChart3,
              color: '#FE8363'
            }, {
              label: 'Manage Connections',
              icon: Globe,
              color: '#0D9488'
            }].map((action, index) => <motion.button key={action.label} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group" onClick={() => onShowNotification('Quick Action', <p>{action.label} feature coming soon!</p>)}>
                  <action.icon size={24} style={{
                color: action.color
              }} className="mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                    {action.label}
                  </p>
                </motion.button>)}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[{
              action: 'Posted to Instagram',
              time: '2 hours ago',
              status: 'success'
            }, {
              action: 'Scheduled LinkedIn post',
              time: '4 hours ago',
              status: 'pending'
            }, {
              action: 'Generated AI content',
              time: '6 hours ago',
              status: 'success'
            }, {
              action: 'Updated profile settings',
              time: '1 day ago',
              status: 'success'
            }].map((activity, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.8 + index * 0.1
            }} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : activity.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
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
    onShowNotification('Content Generated', <p>Successfully generated {mockContent.length} content variations!</p>);
  };
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Content Creator</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Generate engaging content for your social media platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Content Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Topic
              </label>
              <input type="text" value={formData.topic} onChange={e => setFormData({
              ...formData,
              topic: e.target.value
            })} placeholder="Enter your content topic..." className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Platform
              </label>
              <select value={formData.platform} onChange={e => setFormData({
              ...formData,
              platform: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties}>
                <option value="instagram">Instagram</option>
                <option value="twitter">X (Twitter)</option>
                <option value="linkedin">LinkedIn</option>
                <option value="facebook">Facebook</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tone
              </label>
              <select value={formData.tone} onChange={e => setFormData({
              ...formData,
              tone: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties}>
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="humorous">Humorous</option>
                <option value="inspirational">Inspirational</option>
              </select>
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} onClick={handleGenerate} className="w-full py-3 text-white rounded-lg font-medium flex items-center justify-center space-x-2" style={{
            backgroundColor: accentColor
          }}>
              <Zap size={16} />
              <span>Generate Content</span>
            </motion.button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Generated Content</h3>
          {generatedContent.length > 0 ? <div className="space-y-4">
              {generatedContent.map((content, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{content}</p>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                      Copy
                    </button>
                    <button className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
                      Schedule
                    </button>
                  </div>
                </motion.div>)}
            </div> : <div className="text-center py-8">
              <Zap size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Generate content to see results here</p>
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
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Post Planner</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Schedule and manage your social media posts.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            {['month', 'week', 'day'].map(mode => <button key={mode} onClick={() => setViewMode(mode as 'month' | 'week' | 'day')} className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${viewMode === mode ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`} style={{
            backgroundColor: viewMode === mode ? accentColor : 'transparent'
          }}>
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>)}
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-4 py-2 text-white rounded-lg font-medium flex items-center space-x-2" style={{
          backgroundColor: accentColor
        }} onClick={() => onShowNotification('New Post', <p>Post creation modal would open here!</p>)}>
            <Plus size={16} />
            <span>New Post</span>
          </motion.button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-7 gap-4 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2">
              {day}
            </div>)}
        </div>
        
        <div className="grid grid-cols-7 gap-4">
          {Array.from({
          length: 35
        }, (_, i) => {
          const date = i + 1;
          const hasPost = Math.random() > 0.7;
          return <motion.div key={i} whileHover={{
            scale: 1.05
          }} className={`aspect-square p-2 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors cursor-pointer ${hasPost ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' : ''}`} onClick={() => onShowNotification('Schedule Post', <p>Schedule a post for day {date}</p>)}>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{date}</div>
                {hasPost && <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mb-1" />
                    <div className="text-xs text-blue-600 dark:text-blue-400">2 posts</div>
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
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Preferences</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Customize your dashboard experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Appearance</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Accent Color
              </label>
              <div className="flex space-x-3">
                {colorOptions.map(color => <motion.button key={color} whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} onClick={() => onUpdateAccentColor(color)} className={`w-8 h-8 rounded-full border-2 ${accentColor === color ? 'border-gray-400' : 'border-gray-200 dark:border-gray-600'}`} style={{
                backgroundColor: color
              }} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notifications</h3>
          <div className="space-y-4">
            {[{
            label: 'Email notifications',
            enabled: true
          }, {
            label: 'Push notifications',
            enabled: false
          }, {
            label: 'Weekly reports',
            enabled: true
          }].map((setting, index) => <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">{setting.label}</span>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${setting.enabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${setting.enabled ? 'translate-x-6' : 'translate-x-0'}`} />
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
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#f48fb1" d="M21,46h15c5.5,0,10-4.5,10-10V21c0-5.5-4.5-10-10-10H21c-5.5,0-10,4.5-10,10v15C11,41.5,15.5,46,21,46z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M41.5,21.1v-4.6c0-5.5-4.5-10-10-10h-15c-5.5,0-10,4.5-10,10v3"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M6.5,25.6v5.9c0,5.5,4.5,10,10,10h15c5.5,0,10-4.5,10-10v-4.6"></path>
          <path fill="none" stroke="#18193f" strokeMiterlimit="10" strokeWidth="3" d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S28.7,15.5,24,15.5z"></path>
          <path fill="#18193f" d="M34,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S35.1,12,34,12z"></path>
        </svg>
  }, {
    name: 'X (Twitter)',
    connected: true,
    color: '#000000',
    followers: '8.2K',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.5v5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,18.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33"></path>
          <path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path>
          <polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon>
          <polygon fill="#18193f" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
        </svg>
  }, {
    name: 'LinkedIn',
    connected: false,
    color: '#0077B5',
    followers: '0',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#8ce7f2" d="M40,44H15c-2.2,0-4-1.8-4-4V15c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v25C44,42.2,42.2,44,40,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M40.5,31.7v4.8c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4V24.9"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M7.5,19.2v-7.7c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v14"></path>
          <circle cx="15.5" cy="15.5" r="2.5" fill="#18193f"></circle>
          <path fill="#18193f" d="M17,35h-3c-0.6,0-1-0.4-1-1V21c0-0.6,0.4-1,1-1h3c0.6,0,1,0.4,1,1v13C18,34.6,17.6,35,17,35z"></path>
          <path fill="#18193f" d="M29,20c-1.5,0-2.9,0.6-4,1.5V21c0-0.6-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1v13c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1  v-7.5c0-1.4,1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5V34c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1v-8C35,22.7,32.3,20,29,20z"></path>
        </svg>
  }, {
    name: 'Facebook',
    connected: true,
    color: '#1877F2',
    followers: '15.3K',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#90caf9" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
          <path fill="#18193f" d="M20,29h4v12.235c0.979,0.16,1.976,0.265,3,0.265s2.021-0.105,3-0.265V29h3.625  c0.504,0,0.93-0.376,0.992-0.876l0.375-3c0.036-0.284-0.053-0.57-0.243-0.786C34.56,24.123,34.287,24,34,24h-4v-3.5  c0-1.103,0.897-2,2-2h2c0.552,0,1-0.447,1-1v-3.375c0-0.518-0.396-0.95-0.911-0.996C34.03,13.124,32.62,13,30.834,13  C26.427,13,24,15.617,24,20.368V24h-4c-0.552,0-1,0.447-1,1v3C19,28.553,19.448,29,20,29z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,31.596V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V20.83"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,14.064V11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.479"></path>
        </svg>
  }, {
    name: 'TikTok',
    connected: false,
    color: '#FF0050',
    followers: '0',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242  C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M40.5,34.128V36.5  c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V17.404"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7.5,11.5  c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v14.777"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21,22.5  c-3.038,0-5.5,2.462-5.5,5.5s2.462,5.5,5.5,5.5s5.5-2.462,5.5-5.5V14.5l0,0c0,3.314,2.686,6,6,6"></path>
        </svg>
  }, {
    name: 'YouTube',
    connected: false,
    color: '#FF0000',
    followers: '0',
    logo: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className="w-6 h-6">
          <path fill="#ffab91" d="M27.86,14c-6.144,0-11.916,0.469-14.989,1.125c-2.048,0.469-3.817,1.875-4.19,4.031  c-0.371,2.25-0.744,5.125-0.744,9.344s0.373,7,0.838,9.344c0.373,2.063,2.141,3.563,4.19,4.031C16.223,42.531,21.809,43,27.953,43  s11.73-0.469,14.989-1.125c2.048-0.469,3.817-1.875,4.19-4.031c0.373-2.344,0.838-5.219,0.931-9.438  c0-4.219-0.466-7.094-0.931-9.438c-0.373-2.063-2.141-3.563-4.19-4.031C39.684,14.469,34.005,14,27.86,14L27.86,14z"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M28.79,10.093  C27.206,10.034,25.549,10,23.857,10l0,0c-6.278,0-12.176,0.469-15.316,1.125C6.448,11.594,4.641,13,4.26,15.156  C3.881,17.406,3.5,20.281,3.5,24.5s0.381,7,0.856,9.344c0.381,2.063,2.188,3.563,4.281,4.031c1.085,0.214,2.423,0.408,3.951,0.572"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,38.881  C20.233,38.958,22.067,39,23.952,39c6.278,0,11.986-0.469,15.316-1.125c2.093-0.469,3.9-1.875,4.281-4.031  c0.381-2.344,0.856-5.219,0.951-9.438c0-4.219-0.476-7.094-0.951-9.438c-0.381-2.063-2.188-3.563-4.281-4.031  c-0.888-0.125-1.952-0.25-3.154-0.366"></path>
          <path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18.5,24v4.514  c0,1.522,1.663,2.476,3,1.721l7.99-4.514c1.347-0.761,1.347-2.682,0-3.443l-7.99-4.514c-1.337-0.755-3,0.199-3,1.721"></path>
        </svg>
  }] as any[];
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Social Connections</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your connected social media accounts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform, index) => <motion.div key={platform.name} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{
              backgroundColor: platform.color,
              background: "rgb(0 0 0 / 0)"
            }}>
                  {platform.logo}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {platform.connected ? `${platform.followers} followers` : 'Not connected'}
                  </p>
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${platform.connected ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`} />
            </div>
            
            <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => onShowNotification(platform.connected ? 'Disconnect Account' : 'Connect Account', <p>{platform.connected ? 'Disconnect' : 'Connect'} your {platform.name} account?</p>)} className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${platform.connected ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30' : 'text-white hover:opacity-90'}`} style={{
          backgroundColor: platform.connected ? undefined : accentColor
        }}>
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
    time: '2 minutes ago'
  }, {
    type: 'warning',
    title: 'Engagement Drop',
    message: 'Your engagement rate has decreased by 15% this week',
    time: '1 hour ago'
  }, {
    type: 'info',
    title: 'Scheduled Post',
    message: 'Your LinkedIn post is scheduled for 3:00 PM today',
    time: '3 hours ago'
  }, {
    type: 'error',
    title: 'Connection Failed',
    message: 'Failed to connect to X (Twitter) API. Please check your credentials',
    time: '5 hours ago'
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
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Alerts & Notifications</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Stay updated with your social media activity.
        </p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => <motion.div key={index} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{
            backgroundColor: getAlertColor(alert.type)
          }} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{alert.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{alert.time}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{alert.message}</p>
              </div>
            </div>
          </motion.div>)}
      </div>
    </div>;
};
export default DashboardContentRouter;