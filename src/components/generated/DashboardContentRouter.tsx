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
    mpid: "6659ca32-a6ee-4b36-ad8e-b59a249c6c39"
  }, {
    title: 'Engagement Rate',
    value: '6.8%',
    change: '+2.4%',
    changeType: 'increase',
    icon: Heart,
    color: '#8B7FFF',
    description: 'Average engagement across platforms',
    trend: [4.2, 4.5, 4.8, 5.1, 5.6, 6.0, 6.3, 6.5, 6.8],
    mpid: "abd142a5-460c-4e43-97a1-ae7ec692d55b"
  }, {
    title: 'Follower Growth',
    value: '+3,247',
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
    color: '#FE8363',
    description: 'New followers this period',
    trend: [2100, 2250, 2400, 2650, 2800, 2950, 3100, 3200, 3247],
    mpid: "5091819c-71c1-4142-a9ca-a2ed736354dd"
  }, {
    title: 'Content Performance',
    value: '94.2',
    change: '-1.2%',
    changeType: 'decrease',
    icon: BarChart3,
    color: '#0D9488',
    description: 'Average performance score',
    trend: [92, 93, 94, 95, 96, 95, 94, 94, 94.2],
    mpid: "f1bb35d7-9e34-4ba0-ace3-a8fdec4decaa"
  }, {
    title: 'Click-Through Rate',
    value: '3.4%',
    change: '+0.8%',
    changeType: 'increase',
    icon: Target,
    color: '#F59E0B',
    description: 'Link clicks per impression',
    trend: [2.1, 2.3, 2.6, 2.8, 3.0, 3.1, 3.2, 3.3, 3.4],
    mpid: "32100723-5d06-43f1-be0f-ad5e07750acf"
  }, {
    title: 'Share Rate',
    value: '1.9%',
    change: '0.0%',
    changeType: 'neutral',
    icon: Share2,
    color: '#6366F1',
    description: 'Content sharing frequency',
    trend: [1.8, 1.8, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9],
    mpid: "8d586850-393c-494d-b3c5-f6561e7ccb27"
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
    mpid: "2d0c9d43-5a15-45f5-9827-d5f23f79f994"
  }, {
    name: 'Tue',
    engagement: 3800,
    reach: 25000,
    clicks: 750,
    shares: 198,
    comments: 134,
    likes: 2900,
    mpid: "a50f072a-d5a0-4392-b378-8571fd2b9710"
  }, {
    name: 'Wed',
    engagement: 5200,
    reach: 35000,
    clicks: 1200,
    shares: 320,
    comments: 210,
    likes: 4100,
    mpid: "db6dced6-e967-4e66-a195-79e4ce4d0ae5"
  }, {
    name: 'Thu',
    engagement: 4600,
    reach: 31000,
    clicks: 980,
    shares: 275,
    comments: 178,
    likes: 3600,
    mpid: "d34f940e-4d75-4640-961d-7fb00d5b21dd"
  }, {
    name: 'Fri',
    engagement: 6800,
    reach: 42000,
    clicks: 1450,
    shares: 410,
    comments: 285,
    likes: 5200,
    mpid: "38723087-3ae3-46a6-aff8-fad49661a4c6"
  }, {
    name: 'Sat',
    engagement: 7200,
    reach: 48000,
    clicks: 1680,
    shares: 485,
    comments: 320,
    likes: 5800,
    mpid: "7dc2d33f-0ed2-4679-8e65-a2206466a80d"
  }, {
    name: 'Sun',
    engagement: 5900,
    reach: 38000,
    clicks: 1250,
    shares: 365,
    comments: 245,
    likes: 4500,
    mpid: "e21e3803-a72a-437c-ac41-0e61fd0409b7"
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
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="10" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-magicpath-id="11" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "198e5203-5a66-4116-9607-a3513bca63c6"
  }, {
    name: 'Twitter',
    followers: 23800,
    engagement: 4.8,
    reach: 520000,
    posts: 45,
    color: '#1DA1F2',
    growth: '+8.3%',
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="12" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-magicpath-id="13" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "0a2f993a-34c0-48b7-85b5-4667530ed030"
  }, {
    name: 'LinkedIn',
    followers: 18500,
    engagement: 6.1,
    reach: 340000,
    posts: 15,
    color: '#0077B5',
    growth: '+15.2%',
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="14" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-magicpath-id="15" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "ce35a4c9-9ccb-4606-beb2-1b4cdb8c3cd1"
  }, {
    name: 'TikTok',
    followers: 67300,
    engagement: 9.4,
    reach: 1200000,
    posts: 22,
    color: '#000000',
    growth: '+28.7%',
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="16" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" data-magicpath-id="17" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "6b5f377e-88f6-4bcf-a033-07f988204a9a"
  }, {
    name: 'YouTube',
    followers: 12400,
    engagement: 5.6,
    reach: 280000,
    posts: 8,
    color: '#FF0000',
    growth: '+6.1%',
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="18" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" data-magicpath-id="19" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "3091f380-8400-4c08-a184-73603f933b75"
  }] as any[];

  // Audience demographics data
  const audienceDemographics = [{
    age: '18-24',
    percentage: 28,
    color: '#8B7FFF',
    mpid: "9f7466bf-588e-45c4-a1a4-0c1ba6b165a5"
  }, {
    age: '25-34',
    percentage: 35,
    color: '#00B99A',
    mpid: "5f363ea0-315a-4f2d-9d9e-bf3c1a68b813"
  }, {
    age: '35-44',
    percentage: 22,
    color: '#FE8363',
    mpid: "b5cc307d-ec78-4fc4-bb6d-e8aa490fb166"
  }, {
    age: '45-54',
    percentage: 12,
    color: '#F59E0B',
    mpid: "6b83a11b-34d2-49cb-a40f-64369fff59de"
  }, {
    age: '55+',
    percentage: 3,
    color: '#6366F1',
    mpid: "72667a76-d1da-4b8e-879b-c891f01ba536"
  }] as any[];

  // Content performance by type
  const contentTypeData = [{
    type: 'Images',
    posts: 45,
    engagement: 6.8,
    reach: 450000,
    mpid: "28a69e3d-e159-40b3-8a60-ff1c53d63ed6"
  }, {
    type: 'Videos',
    posts: 28,
    engagement: 9.2,
    reach: 680000,
    mpid: "26bdce6a-d7e2-4985-9947-1bbfd4919043"
  }, {
    type: 'Carousels',
    posts: 18,
    engagement: 7.5,
    reach: 320000,
    mpid: "d136e1b6-060d-4222-9eb8-dbebd48f8bf1"
  }, {
    type: 'Stories',
    posts: 62,
    engagement: 4.2,
    reach: 280000,
    mpid: "57a6594b-a2b0-490e-93cc-2d94937b010a"
  }, {
    type: 'Reels',
    posts: 15,
    engagement: 12.4,
    reach: 890000,
    mpid: "18d1d99f-58cb-4cfb-9ebf-815783cb28f9"
  }] as any[];

  // Top performing posts
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
    mpid: "fa863953-d160-4212-8c43-0c62d5b80439"
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
    mpid: "42630022-5d15-4720-a312-38ddb180cd5c"
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
    mpid: "5d59c051-1a9e-49c9-9e99-8e0df7d29eb3"
  }, {
    platform: 'Twitter',
    type: 'Thread',
    content: 'How to build authentic connections online',
    engagement: 6.7,
    reach: 32000,
    likes: 1800,
    comments: 95,
    shares: 145,
    date: '3 days ago',
    mpid: "941c52bf-842e-4e6c-8980-d650807fe469"
  }] as any[];
  const getChangeIcon = (changeType: string) => {
    switch (changeType) {
      case 'increase':
        return <ArrowUp size={14} className="text-green-500" data-magicpath-id="20" data-magicpath-path="DashboardContentRouter.tsx" />;
      case 'decrease':
        return <ArrowDown size={14} className="text-red-500" data-magicpath-id="21" data-magicpath-path="DashboardContentRouter.tsx" />;
      default:
        return <Minus size={14} className="text-gray-500" data-magicpath-id="22" data-magicpath-path="DashboardContentRouter.tsx" />;
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
  return <div className="space-y-8" data-magicpath-id="23" data-magicpath-path="DashboardContentRouter.tsx">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4" data-magicpath-id="24" data-magicpath-path="DashboardContentRouter.tsx">
        <div data-magicpath-id="25" data-magicpath-path="DashboardContentRouter.tsx">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="26" data-magicpath-path="DashboardContentRouter.tsx">Analytics Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="27" data-magicpath-path="DashboardContentRouter.tsx">
            Comprehensive insights into your social media performance
          </p>
        </div>
        <div className="flex items-center space-x-3" data-magicpath-id="28" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1" data-magicpath-id="29" data-magicpath-path="DashboardContentRouter.tsx">
            {[{
            label: '7D',
            value: '7d',
            mpid: "ea425e98-5864-4629-8014-c49bfc383b4a"
          }, {
            label: '30D',
            value: '30d',
            mpid: "78c9480d-6207-47b3-812c-9580430873b5"
          }, {
            label: '90D',
            value: '90d',
            mpid: "99ce6b6e-fd9f-443c-a89b-009ac698e2bb"
          }].map(range => <button key={range.value} onClick={() => setTimeRange(range.value)} className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${timeRange === range.value ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`} style={{
            backgroundColor: timeRange === range.value ? accentColor : 'transparent'
          }} data-magicpath-uuid={(range as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="30" data-magicpath-path="DashboardContentRouter.tsx">
                {range.label}
              </button>)}
          </div>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2" data-magicpath-id="31" data-magicpath-path="DashboardContentRouter.tsx">
            <Filter size={16} data-magicpath-id="32" data-magicpath-path="DashboardContentRouter.tsx" />
            <span data-magicpath-id="33" data-magicpath-path="DashboardContentRouter.tsx">Filter</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2" data-magicpath-id="34" data-magicpath-path="DashboardContentRouter.tsx">
            <Download size={16} data-magicpath-id="35" data-magicpath-path="DashboardContentRouter.tsx" />
            <span data-magicpath-id="36" data-magicpath-path="DashboardContentRouter.tsx">Export</span>
          </button>
        </div>
      </div>

      {/* Enhanced Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="37" data-magicpath-path="DashboardContentRouter.tsx">
        {metrics.map((metric, index) => <motion.div key={metric.title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="38" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-start justify-between mb-4" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="39" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center space-x-3" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="40" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="p-3 rounded-xl" style={{
              backgroundColor: `${metric.color}15`
            }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="41" data-magicpath-path="DashboardContentRouter.tsx">
                  <metric.icon size={24} style={{
                color: metric.color
              }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="42" data-magicpath-path="DashboardContentRouter.tsx" />
                </div>
                <div data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="43" data-magicpath-path="DashboardContentRouter.tsx">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="44" data-magicpath-path="DashboardContentRouter.tsx">
                    {metric.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:string" data-magicpath-id="45" data-magicpath-path="DashboardContentRouter.tsx">
                    {metric.value}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="changeType:string" data-magicpath-id="46" data-magicpath-path="DashboardContentRouter.tsx">
                {getChangeIcon(metric.changeType)}
                <span className={`text-sm font-medium ${getChangeColor(metric.changeType)}`} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="change:string" data-magicpath-id="47" data-magicpath-path="DashboardContentRouter.tsx">
                  {metric.change}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:string" data-magicpath-id="48" data-magicpath-path="DashboardContentRouter.tsx">
              {metric.description}
            </p>
            
            {/* Mini trend chart */}
            <div className="h-12" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="49" data-magicpath-path="DashboardContentRouter.tsx">
              <ResponsiveContainer width="100%" height="100%" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="50" data-magicpath-path="DashboardContentRouter.tsx">
                <LineChart data={metric.trend.map((value, i) => ({
              value,
              index: i
            }))} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="51" data-magicpath-path="DashboardContentRouter.tsx">
                  <Line type="monotone" dataKey="value" stroke={metric.color} strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>)}
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-magicpath-id="52" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Enhanced Engagement Chart */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="53" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex items-center justify-between mb-6" data-magicpath-id="54" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white" data-magicpath-id="55" data-magicpath-path="DashboardContentRouter.tsx">
              Weekly Performance Breakdown
            </h3>
            <div className="flex items-center space-x-4 text-sm" data-magicpath-id="56" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center" data-magicpath-id="57" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2 bg-blue-500" data-magicpath-id="58" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="59" data-magicpath-path="DashboardContentRouter.tsx">Engagement</span>
              </div>
              <div className="flex items-center" data-magicpath-id="60" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2 bg-green-500" data-magicpath-id="61" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="62" data-magicpath-path="DashboardContentRouter.tsx">Reach</span>
              </div>
              <div className="flex items-center" data-magicpath-id="63" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2 bg-purple-500" data-magicpath-id="64" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="65" data-magicpath-path="DashboardContentRouter.tsx">Clicks</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={320} data-magicpath-id="66" data-magicpath-path="DashboardContentRouter.tsx">
            <ComposedChart data={engagementData} data-magicpath-id="67" data-magicpath-path="DashboardContentRouter.tsx">
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} data-magicpath-id="68" data-magicpath-path="DashboardContentRouter.tsx" />
              <XAxis dataKey="name" stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} data-magicpath-id="69" data-magicpath-path="DashboardContentRouter.tsx" />
              <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} data-magicpath-id="70" data-magicpath-path="DashboardContentRouter.tsx" />
              <Tooltip contentStyle={{
              backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
              border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }} data-magicpath-id="71" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="engagement" fill="#3B82F6" radius={[4, 4, 0, 0]} data-magicpath-id="72" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="reach" fill="#10B981" radius={[4, 4, 0, 0]} data-magicpath-id="73" data-magicpath-path="DashboardContentRouter.tsx" />
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
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="74" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="75" data-magicpath-path="DashboardContentRouter.tsx">
            Platform Performance
          </h3>
          <div className="space-y-4" data-magicpath-id="76" data-magicpath-path="DashboardContentRouter.tsx">
            {platformPerformance.map((platform, index) => <motion.div key={platform.name} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.6 + index * 0.1
          }} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="77" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-center space-x-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="78" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{
                backgroundColor: platform.color
              }} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknwon" data-magicpath-id="79" data-magicpath-path="DashboardContentRouter.tsx">
                    {platform.logo}
                  </div>
                  <div data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="DashboardContentRouter.tsx">
                    <h4 className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="81" data-magicpath-path="DashboardContentRouter.tsx">
                      {platform.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="DashboardContentRouter.tsx">
                      {platform.followers.toLocaleString()} followers
                    </p>
                  </div>
                </div>
                <div className="text-right" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="83" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="flex items-center space-x-2" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="84" data-magicpath-path="DashboardContentRouter.tsx">
                    <span className="text-sm font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="engagement:number" data-magicpath-id="85" data-magicpath-path="DashboardContentRouter.tsx">
                      {platform.engagement}%
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="growth:string" data-magicpath-id="86" data-magicpath-path="DashboardContentRouter.tsx">
                      {platform.growth}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="posts:number" data-magicpath-id="87" data-magicpath-path="DashboardContentRouter.tsx">
                    {platform.posts} posts
                  </p>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>

      {/* Additional Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-magicpath-id="88" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Audience Demographics */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.7
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="89" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="90" data-magicpath-path="DashboardContentRouter.tsx">
            Audience Demographics
          </h3>
          <ResponsiveContainer width="100%" height={200} data-magicpath-id="91" data-magicpath-path="DashboardContentRouter.tsx">
            <RechartsPieChart data-magicpath-id="92" data-magicpath-path="DashboardContentRouter.tsx">
              <Pie data={audienceDemographics} cx="50%" cy="50%" outerRadius={70} dataKey="percentage" label={({
              age,
              percentage
            }) => `${age}: ${percentage}%`} data-magicpath-id="93" data-magicpath-path="DashboardContentRouter.tsx">
                {audienceDemographics.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="94" data-magicpath-path="DashboardContentRouter.tsx" />)}
              </Pie>
              <Tooltip data-magicpath-id="95" data-magicpath-path="DashboardContentRouter.tsx" />
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
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="96" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="97" data-magicpath-path="DashboardContentRouter.tsx">
            Content Performance
          </h3>
          <div className="space-y-4" data-magicpath-id="98" data-magicpath-path="DashboardContentRouter.tsx">
            {contentTypeData.map((content, index) => <div key={content.type} className="flex items-center justify-between" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="99" data-magicpath-path="DashboardContentRouter.tsx">
                <div data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="100" data-magicpath-path="DashboardContentRouter.tsx">
                  <p className="font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-field="type:string" data-magicpath-id="101" data-magicpath-path="DashboardContentRouter.tsx">
                    {content.type}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-field="posts:number" data-magicpath-id="102" data-magicpath-path="DashboardContentRouter.tsx">
                    {content.posts} posts
                  </p>
                </div>
                <div className="text-right" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="103" data-magicpath-path="DashboardContentRouter.tsx">
                  <p className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-field="engagement:number" data-magicpath-id="104" data-magicpath-path="DashboardContentRouter.tsx">
                    {content.engagement}%
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="105" data-magicpath-path="DashboardContentRouter.tsx">
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
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="106" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="107" data-magicpath-path="DashboardContentRouter.tsx">
            Top Posts
          </h3>
          <div className="space-y-4" data-magicpath-id="108" data-magicpath-path="DashboardContentRouter.tsx">
            {topPosts.map((post, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 1.0 + index * 0.1
          }} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="109" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-start justify-between mb-2" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="110" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="flex items-center space-x-2" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="111" data-magicpath-path="DashboardContentRouter.tsx">
                    <div className="w-6 h-6 rounded text-white text-xs flex items-center justify-center font-bold" style={{
                  backgroundColor: platformPerformance.find(p => p.name === post.platform)?.color || '#6B7280'
                }} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="112" data-magicpath-path="DashboardContentRouter.tsx">
                      {post.platform[0]}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="type:string" data-magicpath-id="113" data-magicpath-path="DashboardContentRouter.tsx">
                      {post.type}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="date:string" data-magicpath-id="114" data-magicpath-path="DashboardContentRouter.tsx">
                    {post.date}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-2" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="content:string" data-magicpath-id="115" data-magicpath-path="DashboardContentRouter.tsx">
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="116" data-magicpath-path="DashboardContentRouter.tsx">
                  <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="engagement:number" data-magicpath-id="117" data-magicpath-path="DashboardContentRouter.tsx">{post.engagement}% engagement</span>
                  <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="118" data-magicpath-path="DashboardContentRouter.tsx">{(post.reach / 1000).toFixed(0)}K reach</span>
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
    mpid: "00d59fc3-a158-4cd4-b3d5-0a00a3589839"
  }, {
    title: 'Engagement Rate',
    value: '4.8%',
    change: '+0.3%',
    icon: Heart,
    color: '#8B7FFF',
    mpid: "03e93b02-831b-409f-9c2a-4b96e5d9275d"
  }, {
    title: 'Followers',
    value: '23.5K',
    change: '+5.2%',
    icon: Users,
    color: '#FE8363',
    mpid: "19343ee7-2dbe-444a-8db5-36a05585a118"
  }, {
    title: 'Reach',
    value: '156K',
    change: '+18%',
    icon: Eye,
    color: '#0D9488',
    mpid: "527cfadb-52c5-415a-a7d1-32487ebbaedd"
  }] as any[];
  const weeklyEngagementData = [{
    name: 'Mon',
    posts: 12,
    engagement: 450,
    reach: 2400,
    mpid: "a9e29928-e50f-43db-91b3-7314a6b9172a"
  }, {
    name: 'Tue',
    posts: 8,
    engagement: 380,
    reach: 1800,
    mpid: "e5d7d0d5-838d-4f86-ba61-8e69e98bef4c"
  }, {
    name: 'Wed',
    posts: 15,
    engagement: 620,
    reach: 3200,
    mpid: "9a861938-5548-405d-8276-328d2d76a66f"
  }, {
    name: 'Thu',
    posts: 10,
    engagement: 520,
    reach: 2800,
    mpid: "c21331d3-fa1b-4c24-a2bf-49e5d98ae742"
  }, {
    name: 'Fri',
    posts: 18,
    engagement: 780,
    reach: 4100,
    mpid: "524d38b0-d0ea-4f28-890a-ef9e982bdaf1"
  }, {
    name: 'Sat',
    posts: 22,
    engagement: 890,
    reach: 4800,
    mpid: "2f3f0745-8967-49ce-bc42-b400d88fae31"
  }, {
    name: 'Sun',
    posts: 16,
    engagement: 650,
    reach: 3600,
    mpid: "fcfb5240-c299-4ba9-85a1-b4c25a602bf2"
  }] as any[];
  const platformData = [{
    name: 'Instagram',
    value: 35,
    color: '#E4405F',
    mpid: "cc32db4d-fa79-463a-951f-e9410d807229"
  }, {
    name: 'Twitter',
    value: 25,
    color: '#1DA1F2',
    mpid: "ba8febf9-1456-4596-b3e3-3af9f7022c36"
  }, {
    name: 'LinkedIn',
    value: 20,
    color: '#0077B5',
    mpid: "ceb32e90-80d5-4f9f-8924-6bb736b27192"
  }, {
    name: 'TikTok',
    value: 20,
    color: '#000000',
    mpid: "0bbd9190-447d-47c3-ad75-9a060268ede2"
  }] as any[];
  const topPostsData = [{
    platform: 'Instagram',
    content: 'Morning motivation post',
    likes: 1247,
    comments: 89,
    shares: 34,
    mpid: "9016252a-6e48-483c-9252-eac93e56ebd7"
  }, {
    platform: 'Twitter',
    content: 'Industry insights thread',
    likes: 892,
    comments: 156,
    shares: 78,
    mpid: "beb79450-6e9e-4a2c-99c2-dafc2cc570a2"
  }, {
    platform: 'LinkedIn',
    content: 'Professional tips article',
    likes: 634,
    comments: 45,
    shares: 92,
    mpid: "6e591b66-4056-482c-9ad5-d3acb307ed65"
  }, {
    platform: 'TikTok',
    content: 'Behind the scenes video',
    likes: 2156,
    comments: 234,
    shares: 145,
    mpid: "c3c3ef31-f29e-4f7a-85eb-5566c08520ae"
  }] as any[];
  return <div className="space-y-8" data-magicpath-id="119" data-magicpath-path="DashboardContentRouter.tsx">
      {/* Header Section */}
      <div className="flex items-center justify-between" data-magicpath-id="120" data-magicpath-path="DashboardContentRouter.tsx">
        <div data-magicpath-id="121" data-magicpath-path="DashboardContentRouter.tsx">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="122" data-magicpath-path="DashboardContentRouter.tsx">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="123" data-magicpath-path="DashboardContentRouter.tsx">
            Welcome back! Here's your social media overview.
          </p>
        </div>
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="px-6 py-3 text-white rounded-xl font-medium flex items-center space-x-2 shadow-lg" style={{
        backgroundColor: accentColor
      }} onClick={() => onShowNotification('Quick Action', <p data-magicpath-id="125" data-magicpath-path="DashboardContentRouter.tsx">Create new post feature coming soon!</p>)} data-magicpath-id="124" data-magicpath-path="DashboardContentRouter.tsx">
          <Plus size={18} data-magicpath-id="126" data-magicpath-path="DashboardContentRouter.tsx" />
          <span data-magicpath-id="127" data-magicpath-path="DashboardContentRouter.tsx">Create Post</span>
        </motion.button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="128" data-magicpath-path="DashboardContentRouter.tsx">
        {metrics.map((metric, index) => <motion.div key={metric.title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="129" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-center justify-between" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="130" data-magicpath-path="DashboardContentRouter.tsx">
              <div data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="131" data-magicpath-path="DashboardContentRouter.tsx">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="132" data-magicpath-path="DashboardContentRouter.tsx">
                  {metric.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:string" data-magicpath-id="133" data-magicpath-path="DashboardContentRouter.tsx">
                  {metric.value}
                </p>
                <div className="flex items-center mt-2" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="134" data-magicpath-path="DashboardContentRouter.tsx">
                  <TrendingUp size={14} className="text-green-500 mr-1" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="135" data-magicpath-path="DashboardContentRouter.tsx" />
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="change:string" data-magicpath-id="136" data-magicpath-path="DashboardContentRouter.tsx">
                    {metric.change}
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl" style={{
            backgroundColor: `${metric.color}15`
          }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="137" data-magicpath-path="DashboardContentRouter.tsx">
                <metric.icon size={28} style={{
              color: metric.color
            }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="138" data-magicpath-path="DashboardContentRouter.tsx" />
              </div>
            </div>
          </motion.div>)}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-magicpath-id="139" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Weekly Engagement Chart */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="140" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex items-center justify-between mb-6" data-magicpath-id="141" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white" data-magicpath-id="142" data-magicpath-path="DashboardContentRouter.tsx">
              Weekly Performance
            </h3>
            <div className="flex items-center space-x-4 text-sm" data-magicpath-id="143" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center" data-magicpath-id="144" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: '#00B99A'
              }} data-magicpath-id="145" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="146" data-magicpath-path="DashboardContentRouter.tsx">Engagement</span>
              </div>
              <div className="flex items-center" data-magicpath-id="147" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: '#8B7FFF'
              }} data-magicpath-id="148" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="149" data-magicpath-path="DashboardContentRouter.tsx">Reach</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280} data-magicpath-id="150" data-magicpath-path="DashboardContentRouter.tsx">
            <BarChart data={weeklyEngagementData} data-magicpath-id="151" data-magicpath-path="DashboardContentRouter.tsx">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" data-magicpath-id="152" data-magicpath-path="DashboardContentRouter.tsx" />
              <XAxis dataKey="name" stroke="#6B7280" data-magicpath-id="153" data-magicpath-path="DashboardContentRouter.tsx" />
              <YAxis stroke="#6B7280" data-magicpath-id="154" data-magicpath-path="DashboardContentRouter.tsx" />
              <Tooltip contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }} data-magicpath-id="155" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="engagement" fill="#00B99A" radius={[4, 4, 0, 0]} data-magicpath-id="156" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="reach" fill="#8B7FFF" radius={[4, 4, 0, 0]} data-magicpath-id="157" data-magicpath-path="DashboardContentRouter.tsx" />
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
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="158" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="159" data-magicpath-path="DashboardContentRouter.tsx">
            Platform Distribution
          </h3>
          <ResponsiveContainer width="100%" height={280} data-magicpath-id="160" data-magicpath-path="DashboardContentRouter.tsx">
            <RechartsPieChart data-magicpath-id="161" data-magicpath-path="DashboardContentRouter.tsx">
              <Pie data={platformData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`} data-magicpath-id="162" data-magicpath-path="DashboardContentRouter.tsx">
                {platformData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="163" data-magicpath-path="DashboardContentRouter.tsx" />)}
              </Pie>
              <Tooltip data-magicpath-id="164" data-magicpath-path="DashboardContentRouter.tsx" />
            </RechartsPieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-magicpath-id="165" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Top Performing Posts */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }} className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="166" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="167" data-magicpath-path="DashboardContentRouter.tsx">
            Top Performing Posts
          </h3>
          <div className="space-y-4" data-magicpath-id="168" data-magicpath-path="DashboardContentRouter.tsx">
            {topPostsData.map((post, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.7 + index * 0.1
          }} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="169" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-center space-x-4" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="170" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{
                backgroundColor: platformData.find(p => p.name === post.platform)?.color || '#6B7280'
              }} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="171" data-magicpath-path="DashboardContentRouter.tsx">
                    {post.platform[0]}
                  </div>
                  <div data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="172" data-magicpath-path="DashboardContentRouter.tsx">
                    <p className="font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="content:string" data-magicpath-id="173" data-magicpath-path="DashboardContentRouter.tsx">{post.content}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="platform:string" data-magicpath-id="174" data-magicpath-path="DashboardContentRouter.tsx">{post.platform}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="175" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="flex items-center space-x-1" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="176" data-magicpath-path="DashboardContentRouter.tsx">
                    <Heart size={14} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="177" data-magicpath-path="DashboardContentRouter.tsx" />
                    <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="likes:number" data-magicpath-id="178" data-magicpath-path="DashboardContentRouter.tsx">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="179" data-magicpath-path="DashboardContentRouter.tsx">
                    <MessageSquare size={14} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="180" data-magicpath-path="DashboardContentRouter.tsx" />
                    <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="comments:number" data-magicpath-id="181" data-magicpath-path="DashboardContentRouter.tsx">{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="182" data-magicpath-path="DashboardContentRouter.tsx">
                    <Share2 size={14} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="183" data-magicpath-path="DashboardContentRouter.tsx" />
                    <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="shares:number" data-magicpath-id="184" data-magicpath-path="DashboardContentRouter.tsx">{post.shares}</span>
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
      }} className="space-y-6" data-magicpath-id="185" data-magicpath-path="DashboardContentRouter.tsx">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="186" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="187" data-magicpath-path="DashboardContentRouter.tsx">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3" data-magicpath-id="188" data-magicpath-path="DashboardContentRouter.tsx">
              {[{
              label: 'Schedule Post',
              icon: Calendar,
              color: '#00B99A',
              mpid: "f0c6cd19-958d-4da5-8b3a-8828a71e29ab"
            }, {
              label: 'Generate Content',
              icon: Zap,
              color: '#8B7FFF',
              mpid: "c3ce6f8d-5baa-4cdd-9327-3cad12f023ba"
            }, {
              label: 'View Analytics',
              icon: BarChart3,
              color: '#FE8363',
              mpid: "4ed14248-a938-4b19-ae3a-03f957124007"
            }, {
              label: 'Manage Connections',
              icon: Globe,
              color: '#0D9488',
              mpid: "1bf19b50-6e08-499c-9ed2-97d1d35864ea"
            }].map((action, index) => <motion.button key={action.label} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group" onClick={() => onShowNotification('Quick Action', <p data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="190" data-magicpath-path="DashboardContentRouter.tsx">{action.label} feature coming soon!</p>)} data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="189" data-magicpath-path="DashboardContentRouter.tsx">
                  <action.icon size={24} style={{
                color: action.color
              }} className="mx-auto mb-2 group-hover:scale-110 transition-transform" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="191" data-magicpath-path="DashboardContentRouter.tsx" />
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="192" data-magicpath-path="DashboardContentRouter.tsx">
                    {action.label}
                  </p>
                </motion.button>)}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="193" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="194" data-magicpath-path="DashboardContentRouter.tsx">Recent Activity</h3>
            <div className="space-y-4" data-magicpath-id="195" data-magicpath-path="DashboardContentRouter.tsx">
              {[{
              action: 'Posted to Instagram',
              time: '2 hours ago',
              status: 'success',
              mpid: "9f0d693b-012c-410d-96ab-cf82253987fe"
            }, {
              action: 'Scheduled LinkedIn post',
              time: '4 hours ago',
              status: 'pending',
              mpid: "696ec365-19c2-4d10-a500-f1ec0a636ee4"
            }, {
              action: 'Generated AI content',
              time: '6 hours ago',
              status: 'success',
              mpid: "71e48567-e1ce-42d1-ad02-986e86112efb"
            }, {
              action: 'Updated profile settings',
              time: '1 day ago',
              status: 'success',
              mpid: "b53a6837-b06d-4cbe-b675-ee5b834634c9"
            }].map((activity, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.8 + index * 0.1
            }} className="flex items-center space-x-3" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-id="196" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : activity.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'}`} data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-id="197" data-magicpath-path="DashboardContentRouter.tsx" />
                  <div className="flex-1" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="DashboardContentRouter.tsx">
                    <p className="text-sm font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-field="action:unknown" data-magicpath-id="199" data-magicpath-path="DashboardContentRouter.tsx">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="200" data-magicpath-path="DashboardContentRouter.tsx">{activity.time}</p>
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
    onShowNotification('Content Generated', <p data-magicpath-id="201" data-magicpath-path="DashboardContentRouter.tsx">Successfully generated {mockContent.length} content variations!</p>);
  };
  return <div className="space-y-6" data-magicpath-id="202" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="203" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="204" data-magicpath-path="DashboardContentRouter.tsx">AI Content Creator</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="205" data-magicpath-path="DashboardContentRouter.tsx">
          Generate engaging content for your social media platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-magicpath-id="206" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="207" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="208" data-magicpath-path="DashboardContentRouter.tsx">Content Settings</h3>
          <div className="space-y-4" data-magicpath-id="209" data-magicpath-path="DashboardContentRouter.tsx">
            <div data-magicpath-id="210" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-magicpath-id="211" data-magicpath-path="DashboardContentRouter.tsx">
                Topic
              </label>
              <input type="text" value={formData.topic} onChange={e => setFormData({
              ...formData,
              topic: e.target.value
            })} placeholder="Enter your content topic..." className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} data-magicpath-id="212" data-magicpath-path="DashboardContentRouter.tsx" />
            </div>

            <div data-magicpath-id="213" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-magicpath-id="214" data-magicpath-path="DashboardContentRouter.tsx">
                Platform
              </label>
              <select value={formData.platform} onChange={e => setFormData({
              ...formData,
              platform: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} data-magicpath-id="215" data-magicpath-path="DashboardContentRouter.tsx">
                <option value="instagram" data-magicpath-id="216" data-magicpath-path="DashboardContentRouter.tsx">Instagram</option>
                <option value="twitter" data-magicpath-id="217" data-magicpath-path="DashboardContentRouter.tsx">Twitter</option>
                <option value="linkedin" data-magicpath-id="218" data-magicpath-path="DashboardContentRouter.tsx">LinkedIn</option>
                <option value="facebook" data-magicpath-id="219" data-magicpath-path="DashboardContentRouter.tsx">Facebook</option>
              </select>
            </div>

            <div data-magicpath-id="220" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-magicpath-id="221" data-magicpath-path="DashboardContentRouter.tsx">
                Tone
              </label>
              <select value={formData.tone} onChange={e => setFormData({
              ...formData,
              tone: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} data-magicpath-id="222" data-magicpath-path="DashboardContentRouter.tsx">
                <option value="professional" data-magicpath-id="223" data-magicpath-path="DashboardContentRouter.tsx">Professional</option>
                <option value="casual" data-magicpath-id="224" data-magicpath-path="DashboardContentRouter.tsx">Casual</option>
                <option value="humorous" data-magicpath-id="225" data-magicpath-path="DashboardContentRouter.tsx">Humorous</option>
                <option value="inspirational" data-magicpath-id="226" data-magicpath-path="DashboardContentRouter.tsx">Inspirational</option>
              </select>
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} onClick={handleGenerate} className="w-full py-3 text-white rounded-lg font-medium flex items-center justify-center space-x-2" style={{
            backgroundColor: accentColor
          }} data-magicpath-id="227" data-magicpath-path="DashboardContentRouter.tsx">
              <Zap size={16} data-magicpath-id="228" data-magicpath-path="DashboardContentRouter.tsx" />
              <span data-magicpath-id="229" data-magicpath-path="DashboardContentRouter.tsx">Generate Content</span>
            </motion.button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="230" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="231" data-magicpath-path="DashboardContentRouter.tsx">Generated Content</h3>
          {generatedContent.length > 0 ? <div className="space-y-4" data-magicpath-id="232" data-magicpath-path="DashboardContentRouter.tsx">
              {generatedContent.map((content, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="233" data-magicpath-path="DashboardContentRouter.tsx">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="234" data-magicpath-path="DashboardContentRouter.tsx">{content}</p>
                  <div className="flex space-x-2" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="235" data-magicpath-path="DashboardContentRouter.tsx">
                    <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="236" data-magicpath-path="DashboardContentRouter.tsx">
                      Copy
                    </button>
                    <button className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="237" data-magicpath-path="DashboardContentRouter.tsx">
                      Schedule
                    </button>
                  </div>
                </motion.div>)}
            </div> : <div className="text-center py-8" data-magicpath-id="238" data-magicpath-path="DashboardContentRouter.tsx">
              <Zap size={48} className="mx-auto text-gray-400 mb-4" data-magicpath-id="239" data-magicpath-path="DashboardContentRouter.tsx" />
              <p className="text-gray-500 dark:text-gray-400" data-magicpath-id="240" data-magicpath-path="DashboardContentRouter.tsx">Generate content to see results here</p>
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
  return <div className="space-y-6" data-magicpath-id="241" data-magicpath-path="DashboardContentRouter.tsx">
      <div className="flex items-center justify-between" data-magicpath-id="242" data-magicpath-path="DashboardContentRouter.tsx">
        <div data-magicpath-id="243" data-magicpath-path="DashboardContentRouter.tsx">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="244" data-magicpath-path="DashboardContentRouter.tsx">Post Planner</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="245" data-magicpath-path="DashboardContentRouter.tsx">
            Schedule and manage your social media posts.
          </p>
        </div>
        <div className="flex items-center space-x-3" data-magicpath-id="246" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1" data-magicpath-id="247" data-magicpath-path="DashboardContentRouter.tsx">
            {['month', 'week', 'day'].map(mode => <button key={mode} onClick={() => setViewMode(mode as 'month' | 'week' | 'day')} className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${viewMode === mode ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`} style={{
            backgroundColor: viewMode === mode ? accentColor : 'transparent'
          }} data-magicpath-id="248" data-magicpath-path="DashboardContentRouter.tsx">
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>)}
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-4 py-2 text-white rounded-lg font-medium flex items-center space-x-2" style={{
          backgroundColor: accentColor
        }} onClick={() => onShowNotification('New Post', <p data-magicpath-id="250" data-magicpath-path="DashboardContentRouter.tsx">Post creation modal would open here!</p>)} data-magicpath-id="249" data-magicpath-path="DashboardContentRouter.tsx">
            <Plus size={16} data-magicpath-id="251" data-magicpath-path="DashboardContentRouter.tsx" />
            <span data-magicpath-id="252" data-magicpath-path="DashboardContentRouter.tsx">New Post</span>
          </motion.button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="253" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="grid grid-cols-7 gap-4 mb-4" data-magicpath-id="254" data-magicpath-path="DashboardContentRouter.tsx">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2" data-magicpath-id="255" data-magicpath-path="DashboardContentRouter.tsx">
              {day}
            </div>)}
        </div>
        
        <div className="grid grid-cols-7 gap-4" data-magicpath-id="256" data-magicpath-path="DashboardContentRouter.tsx">
          {Array.from({
          length: 35
        }, (_, i) => {
          const date = i + 1;
          const hasPost = Math.random() > 0.7;
          return <motion.div key={i} whileHover={{
            scale: 1.05
          }} className={`aspect-square p-2 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors cursor-pointer ${hasPost ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' : ''}`} onClick={() => onShowNotification('Schedule Post', <p data-magicpath-id="258" data-magicpath-path="DashboardContentRouter.tsx">Schedule a post for day {date}</p>)} data-magicpath-id="257" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300" data-magicpath-id="259" data-magicpath-path="DashboardContentRouter.tsx">{date}</div>
                {hasPost && <div className="mt-1" data-magicpath-id="260" data-magicpath-path="DashboardContentRouter.tsx">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mb-1" data-magicpath-id="261" data-magicpath-path="DashboardContentRouter.tsx" />
                    <div className="text-xs text-blue-600 dark:text-blue-400" data-magicpath-id="262" data-magicpath-path="DashboardContentRouter.tsx">2 posts</div>
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
  return <div className="space-y-6" data-magicpath-id="263" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="264" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="265" data-magicpath-path="DashboardContentRouter.tsx">Preferences</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="266" data-magicpath-path="DashboardContentRouter.tsx">
          Customize your dashboard experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-magicpath-id="267" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="268" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="269" data-magicpath-path="DashboardContentRouter.tsx">Appearance</h3>
          <div className="space-y-4" data-magicpath-id="270" data-magicpath-path="DashboardContentRouter.tsx">
            <div data-magicpath-id="271" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" data-magicpath-id="272" data-magicpath-path="DashboardContentRouter.tsx">
                Accent Color
              </label>
              <div className="flex space-x-3" data-magicpath-id="273" data-magicpath-path="DashboardContentRouter.tsx">
                {colorOptions.map(color => <motion.button key={color} whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} onClick={() => onUpdateAccentColor(color)} className={`w-8 h-8 rounded-full border-2 ${accentColor === color ? 'border-gray-400' : 'border-gray-200 dark:border-gray-600'}`} style={{
                backgroundColor: color
              }} data-magicpath-uuid={(color as any)["mpid"] ?? "unsafe"} data-magicpath-id="274" data-magicpath-path="DashboardContentRouter.tsx" />)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="275" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="276" data-magicpath-path="DashboardContentRouter.tsx">Notifications</h3>
          <div className="space-y-4" data-magicpath-id="277" data-magicpath-path="DashboardContentRouter.tsx">
            {[{
            label: 'Email notifications',
            enabled: true,
            mpid: "f337bd5d-c72d-48df-b371-9bff52a8985a"
          }, {
            label: 'Push notifications',
            enabled: false,
            mpid: "8bb3466c-1f59-40da-b995-11bb72d9a921"
          }, {
            label: 'Weekly reports',
            enabled: true,
            mpid: "3552f6c1-c733-4ef0-b4fb-b3b154d1da42"
          }].map((setting, index) => <div key={index} className="flex items-center justify-between" data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-id="278" data-magicpath-path="DashboardContentRouter.tsx">
                <span className="text-sm text-gray-700 dark:text-gray-300" data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="279" data-magicpath-path="DashboardContentRouter.tsx">{setting.label}</span>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${setting.enabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`} data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-id="280" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${setting.enabled ? 'translate-x-6' : 'translate-x-0'}`} data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-id="281" data-magicpath-path="DashboardContentRouter.tsx" />
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
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="282" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-magicpath-id="283" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "10b0b66c-c56b-4b37-a150-38463aabc157"
  }, {
    name: 'Twitter',
    connected: true,
    color: '#1DA1F2',
    followers: '8.2K',
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="284" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-magicpath-id="285" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "37f905d1-e64b-4654-a18c-e501f0e9e789"
  }, {
    name: 'LinkedIn',
    connected: false,
    color: '#0077B5',
    followers: '0',
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="286" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-magicpath-id="287" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "92a8d001-4559-481c-85d8-eaa5adad9bc1"
  }, {
    name: 'Facebook',
    connected: true,
    color: '#1877F2',
    followers: '15.3K',
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="288" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-magicpath-id="289" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "9dd13dca-c6cf-42b9-b7f6-3eb87f993213"
  }, {
    name: 'TikTok',
    connected: false,
    color: '#000000',
    followers: '0',
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="290" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" data-magicpath-id="291" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "f9c13b2b-5d12-4e98-a1ff-c926a07fb064"
  }, {
    name: 'YouTube',
    connected: false,
    color: '#FF0000',
    followers: '0',
    logo: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" data-magicpath-id="292" data-magicpath-path="DashboardContentRouter.tsx">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" data-magicpath-id="293" data-magicpath-path="DashboardContentRouter.tsx" />
        </svg>,
    mpid: "2062d370-bfd0-4a3e-98cb-b8ae59c5ca87"
  }] as any[];
  return <div className="space-y-6" data-magicpath-id="294" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="295" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="296" data-magicpath-path="DashboardContentRouter.tsx">Social Connections</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="297" data-magicpath-path="DashboardContentRouter.tsx">
          Manage your connected social media accounts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="298" data-magicpath-path="DashboardContentRouter.tsx">
        {platforms.map((platform, index) => <motion.div key={platform.name} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="299" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-center justify-between mb-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="300" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center space-x-3" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="301" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white" style={{
              backgroundColor: platform.color
            }} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknwon" data-magicpath-id="302" data-magicpath-path="DashboardContentRouter.tsx">
                  {platform.logo}
                </div>
                <div data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="303" data-magicpath-path="DashboardContentRouter.tsx">
                  <h3 className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="304" data-magicpath-path="DashboardContentRouter.tsx">{platform.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="305" data-magicpath-path="DashboardContentRouter.tsx">
                    {platform.connected ? `${platform.followers} followers` : 'Not connected'}
                  </p>
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${platform.connected ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="306" data-magicpath-path="DashboardContentRouter.tsx" />
            </div>
            
            <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => onShowNotification(platform.connected ? 'Disconnect Account' : 'Connect Account', <p data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="308" data-magicpath-path="DashboardContentRouter.tsx">{platform.connected ? 'Disconnect' : 'Connect'} your {platform.name} account?</p>)} className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${platform.connected ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30' : 'text-white hover:opacity-90'}`} style={{
          backgroundColor: platform.connected ? undefined : accentColor
        }} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="307" data-magicpath-path="DashboardContentRouter.tsx">
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
    mpid: "13529b68-5a7c-44c0-b054-20918cf22a09"
  }, {
    type: 'warning',
    title: 'Engagement Drop',
    message: 'Your engagement rate has decreased by 15% this week',
    time: '1 hour ago',
    mpid: "a7ab8f65-67ba-42a3-be81-61cb5d6494d1"
  }, {
    type: 'info',
    title: 'Scheduled Post',
    message: 'Your LinkedIn post is scheduled for 3:00 PM today',
    time: '3 hours ago',
    mpid: "e96e821e-6168-4978-9e2b-bddc7513f54b"
  }, {
    type: 'error',
    title: 'Connection Failed',
    message: 'Failed to connect to Twitter API. Please check your credentials',
    time: '5 hours ago',
    mpid: "3a155309-27c3-49db-849c-3a71275d420b"
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
  return <div className="space-y-6" data-magicpath-id="309" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="310" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="311" data-magicpath-path="DashboardContentRouter.tsx">Alerts & Notifications</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="312" data-magicpath-path="DashboardContentRouter.tsx">
          Stay updated with your social media activity.
        </p>
      </div>

      <div className="space-y-4" data-magicpath-id="313" data-magicpath-path="DashboardContentRouter.tsx">
        {alerts.map((alert, index) => <motion.div key={index} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="314" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-start space-x-4" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="315" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{
            backgroundColor: getAlertColor(alert.type)
          }} data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="316" data-magicpath-path="DashboardContentRouter.tsx" />
              <div className="flex-1" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="317" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-center justify-between" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="318" data-magicpath-path="DashboardContentRouter.tsx">
                  <h3 className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:string" data-magicpath-id="319" data-magicpath-path="DashboardContentRouter.tsx">{alert.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:string" data-magicpath-id="320" data-magicpath-path="DashboardContentRouter.tsx">{alert.time}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-field="message:string" data-magicpath-id="321" data-magicpath-path="DashboardContentRouter.tsx">{alert.message}</p>
              </div>
            </div>
          </motion.div>)}
      </div>
    </div>;
};
export default DashboardContentRouter;