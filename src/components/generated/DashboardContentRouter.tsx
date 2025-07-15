import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Calendar, Users, MessageSquare, BarChart3, PieChart, Activity, Plus, Filter, Download, Palette, Bell, Globe, Clock, Zap, Target, Heart, Share2, Eye } from 'lucide-react';
import { User } from './ReaxoDashboardApp';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell, AreaChart, Area } from 'recharts';
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

// Home Dashboard Component
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
    mpid: "ba78ec1c-9788-4a71-892b-8a26b50b0c5b"
  }, {
    title: 'Engagement Rate',
    value: '4.8%',
    change: '+0.3%',
    icon: Heart,
    color: '#8B7FFF',
    mpid: "dfb922b0-b350-407d-a161-e5d039eaf304"
  }, {
    title: 'Followers',
    value: '23.5K',
    change: '+5.2%',
    icon: Users,
    color: '#FE8363',
    mpid: "e4fcaab4-35f1-4608-88e7-dcd8fb817bfd"
  }, {
    title: 'Reach',
    value: '156K',
    change: '+18%',
    icon: Eye,
    color: '#0D9488',
    mpid: "55b4c452-6b40-44bf-ba35-75a3d9e7a769"
  }] as any[];

  // Chart data for dashboard
  const weeklyEngagementData = [{
    name: 'Mon',
    posts: 12,
    engagement: 450,
    reach: 2400,
    mpid: "9144f44b-ed89-4b8b-8536-f38211023756"
  }, {
    name: 'Tue',
    posts: 8,
    engagement: 380,
    reach: 1800,
    mpid: "4ae53efd-c535-4c76-8806-c38896096b61"
  }, {
    name: 'Wed',
    posts: 15,
    engagement: 620,
    reach: 3200,
    mpid: "d3652c53-b279-45ff-a6df-97b23a869c5c"
  }, {
    name: 'Thu',
    posts: 10,
    engagement: 520,
    reach: 2800,
    mpid: "99ecb7b7-d585-4cc8-8979-b80a9de98a83"
  }, {
    name: 'Fri',
    posts: 18,
    engagement: 780,
    reach: 4100,
    mpid: "68d5fe0a-7cec-4f0d-ba8c-e1d5a4d6871a"
  }, {
    name: 'Sat',
    posts: 22,
    engagement: 890,
    reach: 4800,
    mpid: "2908b4a8-f346-4f2b-a540-53a59903f24a"
  }, {
    name: 'Sun',
    posts: 16,
    engagement: 650,
    reach: 3600,
    mpid: "f2836809-98b2-4f28-99a0-d0c95da2ea85"
  }] as any[];
  const platformData = [{
    name: 'Instagram',
    value: 35,
    color: '#E4405F',
    mpid: "5f7dd8cb-c97f-4a71-b5ca-86d4d1e36133"
  }, {
    name: 'Twitter',
    value: 25,
    color: '#1DA1F2',
    mpid: "6bea6982-6d59-4e0c-87ae-97d081a67996"
  }, {
    name: 'LinkedIn',
    value: 20,
    color: '#0077B5',
    mpid: "bbbd7fa3-c334-4c07-8045-48c7d3707973"
  }, {
    name: 'TikTok',
    value: 20,
    color: '#000000',
    mpid: "04a631f8-78b7-40b3-9861-aad4d3cc4e39"
  }] as any[];
  const topPostsData = [{
    platform: 'Instagram',
    content: 'Morning motivation post',
    likes: 1247,
    comments: 89,
    shares: 34,
    mpid: "dc87ee8a-c604-4e38-b2d5-8daec00616a0"
  }, {
    platform: 'Twitter',
    content: 'Industry insights thread',
    likes: 892,
    comments: 156,
    shares: 78,
    mpid: "7306e051-0888-4ff6-aed8-02ec28df2a6e"
  }, {
    platform: 'LinkedIn',
    content: 'Professional tips article',
    likes: 634,
    comments: 45,
    shares: 92,
    mpid: "32707785-6f8f-4e31-a8c9-71e41570b9d2"
  }, {
    platform: 'TikTok',
    content: 'Behind the scenes video',
    likes: 2156,
    comments: 234,
    shares: 145,
    mpid: "0dc34a02-3d85-4020-b6ab-903b8a6a8f51"
  }] as any[];
  return <div className="space-y-8" data-magicpath-id="10" data-magicpath-path="DashboardContentRouter.tsx">
      {/* Header Section */}
      <div className="flex items-center justify-between" data-magicpath-id="11" data-magicpath-path="DashboardContentRouter.tsx">
        <div data-magicpath-id="12" data-magicpath-path="DashboardContentRouter.tsx">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="13" data-magicpath-path="DashboardContentRouter.tsx">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="14" data-magicpath-path="DashboardContentRouter.tsx">Welcome back! Here's your social media overview.</p>
        </div>
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="px-6 py-3 text-white rounded-xl font-medium flex items-center space-x-2 shadow-lg" style={{
        backgroundColor: accentColor
      }} onClick={() => onShowNotification('Quick Action', <p data-magicpath-id="16" data-magicpath-path="DashboardContentRouter.tsx">Create new post feature coming soon!</p>)} data-magicpath-id="15" data-magicpath-path="DashboardContentRouter.tsx">
          <Plus size={18} data-magicpath-id="17" data-magicpath-path="DashboardContentRouter.tsx" />
          <span data-magicpath-id="18" data-magicpath-path="DashboardContentRouter.tsx">Create Post</span>
        </motion.button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-magicpath-id="19" data-magicpath-path="DashboardContentRouter.tsx">
        {metrics.map((metric, index) => <motion.div key={metric.title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-center justify-between" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="DashboardContentRouter.tsx">
              <div data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="DashboardContentRouter.tsx">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="23" data-magicpath-path="DashboardContentRouter.tsx">{metric.title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="value:unknown" data-magicpath-id="24" data-magicpath-path="DashboardContentRouter.tsx">{metric.value}</p>
                <div className="flex items-center mt-2" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="25" data-magicpath-path="DashboardContentRouter.tsx">
                  <TrendingUp size={14} className="text-green-500 mr-1" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="26" data-magicpath-path="DashboardContentRouter.tsx" />
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium" data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-field="change:unknown" data-magicpath-id="27" data-magicpath-path="DashboardContentRouter.tsx">{metric.change}</p>
                </div>
              </div>
              <div className="p-4 rounded-xl" style={{
            backgroundColor: `${metric.color}15`
          }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="28" data-magicpath-path="DashboardContentRouter.tsx">
                <metric.icon size={28} style={{
              color: metric.color
            }} data-magicpath-uuid={(metric as any)["mpid"] ?? "unsafe"} data-magicpath-id="29" data-magicpath-path="DashboardContentRouter.tsx" />
              </div>
            </div>
          </motion.div>)}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-magicpath-id="30" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Weekly Engagement Chart */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="31" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex items-center justify-between mb-6" data-magicpath-id="32" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white" data-magicpath-id="33" data-magicpath-path="DashboardContentRouter.tsx">Weekly Performance</h3>
            <div className="flex items-center space-x-4 text-sm" data-magicpath-id="34" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center" data-magicpath-id="35" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: '#00B99A'
              }} data-magicpath-id="36" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="37" data-magicpath-path="DashboardContentRouter.tsx">Engagement</span>
              </div>
              <div className="flex items-center" data-magicpath-id="38" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-3 h-3 rounded-full mr-2" style={{
                backgroundColor: '#8B7FFF'
              }} data-magicpath-id="39" data-magicpath-path="DashboardContentRouter.tsx"></div>
                <span className="text-gray-600 dark:text-gray-400" data-magicpath-id="40" data-magicpath-path="DashboardContentRouter.tsx">Reach</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280} data-magicpath-id="41" data-magicpath-path="DashboardContentRouter.tsx">
            <BarChart data={weeklyEngagementData} data-magicpath-id="42" data-magicpath-path="DashboardContentRouter.tsx">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" data-magicpath-id="43" data-magicpath-path="DashboardContentRouter.tsx" />
              <XAxis dataKey="name" stroke="#6B7280" data-magicpath-id="44" data-magicpath-path="DashboardContentRouter.tsx" />
              <YAxis stroke="#6B7280" data-magicpath-id="45" data-magicpath-path="DashboardContentRouter.tsx" />
              <Tooltip contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }} data-magicpath-id="46" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="engagement" fill="#00B99A" radius={[4, 4, 0, 0]} data-magicpath-id="47" data-magicpath-path="DashboardContentRouter.tsx" />
              <Bar dataKey="reach" fill="#8B7FFF" radius={[4, 4, 0, 0]} data-magicpath-id="48" data-magicpath-path="DashboardContentRouter.tsx" />
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
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="49" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="50" data-magicpath-path="DashboardContentRouter.tsx">Platform Distribution</h3>
          <ResponsiveContainer width="100%" height={280} data-magicpath-id="51" data-magicpath-path="DashboardContentRouter.tsx">
            <RechartsPieChart data-magicpath-id="52" data-magicpath-path="DashboardContentRouter.tsx">
              <Pie data={platformData} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`} data-magicpath-id="53" data-magicpath-path="DashboardContentRouter.tsx">
                {platformData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="54" data-magicpath-path="DashboardContentRouter.tsx" />)}
              </Pie>
              <Tooltip data-magicpath-id="55" data-magicpath-path="DashboardContentRouter.tsx" />
            </RechartsPieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-magicpath-id="56" data-magicpath-path="DashboardContentRouter.tsx">
        {/* Top Performing Posts */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }} className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="57" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6" data-magicpath-id="58" data-magicpath-path="DashboardContentRouter.tsx">Top Performing Posts</h3>
          <div className="space-y-4" data-magicpath-id="59" data-magicpath-path="DashboardContentRouter.tsx">
            {topPostsData.map((post, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.7 + index * 0.1
          }} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="60" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-center space-x-4" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="61" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{
                backgroundColor: platformData.find(p => p.name === post.platform)?.color || '#6B7280'
              }} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="62" data-magicpath-path="DashboardContentRouter.tsx">
                    {post.platform[0]}
                  </div>
                  <div data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="63" data-magicpath-path="DashboardContentRouter.tsx">
                    <p className="font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="content:string" data-magicpath-id="64" data-magicpath-path="DashboardContentRouter.tsx">{post.content}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="platform:string" data-magicpath-id="65" data-magicpath-path="DashboardContentRouter.tsx">{post.platform}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="66" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className="flex items-center space-x-1" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="67" data-magicpath-path="DashboardContentRouter.tsx">
                    <Heart size={14} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="68" data-magicpath-path="DashboardContentRouter.tsx" />
                    <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="likes:number" data-magicpath-id="69" data-magicpath-path="DashboardContentRouter.tsx">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="70" data-magicpath-path="DashboardContentRouter.tsx">
                    <MessageSquare size={14} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="71" data-magicpath-path="DashboardContentRouter.tsx" />
                    <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="comments:number" data-magicpath-id="72" data-magicpath-path="DashboardContentRouter.tsx">{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1" data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="73" data-magicpath-path="DashboardContentRouter.tsx">
                    <Share2 size={14} data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-id="74" data-magicpath-path="DashboardContentRouter.tsx" />
                    <span data-magicpath-uuid={(post as any)["mpid"] ?? "unsafe"} data-magicpath-field="shares:number" data-magicpath-id="75" data-magicpath-path="DashboardContentRouter.tsx">{post.shares}</span>
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
      }} className="space-y-6" data-magicpath-id="76" data-magicpath-path="DashboardContentRouter.tsx">
          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="77" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="78" data-magicpath-path="DashboardContentRouter.tsx">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3" data-magicpath-id="79" data-magicpath-path="DashboardContentRouter.tsx">
              {[{
              label: 'Schedule Post',
              icon: Calendar,
              color: '#00B99A',
              mpid: "d55c129b-84e0-4644-a67e-8b3b5bcaaef8"
            }, {
              label: 'Generate Content',
              icon: Zap,
              color: '#8B7FFF',
              mpid: "6697d94c-4af1-42d2-9dfb-ae3b069a12ef"
            }, {
              label: 'View Analytics',
              icon: BarChart3,
              color: '#FE8363',
              mpid: "b6307232-195a-4651-a4da-7ea27098b8fa"
            }, {
              label: 'Manage Connections',
              icon: Globe,
              color: '#0D9488',
              mpid: "d5d89c1a-fcb0-4435-a523-ee8459eb1422"
            }].map((action, index) => <motion.button key={action.label} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group" onClick={() => onShowNotification('Quick Action', <p data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="81" data-magicpath-path="DashboardContentRouter.tsx">{action.label} feature coming soon!</p>)} data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="80" data-magicpath-path="DashboardContentRouter.tsx">
                  <action.icon size={24} style={{
                color: action.color
              }} className="mx-auto mb-2 group-hover:scale-110 transition-transform" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-id="82" data-magicpath-path="DashboardContentRouter.tsx" />
                  <p className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center" data-magicpath-uuid={(action as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="83" data-magicpath-path="DashboardContentRouter.tsx">{action.label}</p>
                </motion.button>)}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="84" data-magicpath-path="DashboardContentRouter.tsx">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="85" data-magicpath-path="DashboardContentRouter.tsx">Recent Activity</h3>
            <div className="space-y-4" data-magicpath-id="86" data-magicpath-path="DashboardContentRouter.tsx">
              {[{
              action: 'Posted to Instagram',
              time: '2 hours ago',
              status: 'success',
              mpid: "6af1454f-9d42-488a-8001-07289c0a5fca"
            }, {
              action: 'Scheduled LinkedIn post',
              time: '4 hours ago',
              status: 'pending',
              mpid: "968a0de2-12ef-4931-97bc-102c9750a37e"
            }, {
              action: 'Generated AI content',
              time: '6 hours ago',
              status: 'success',
              mpid: "22c62fa1-cc9c-42f9-9400-48ef7f3e7a26"
            }, {
              action: 'Updated profile settings',
              time: '1 day ago',
              status: 'success',
              mpid: "31bf0d89-604b-4942-8a5d-2e4fb369ed14"
            }].map((activity, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -10
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.8 + index * 0.1
            }} className="flex items-center space-x-3" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-id="87" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className={`w-2 h-2 rounded-full ${activity.status === 'success' ? 'bg-green-500' : activity.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'}`} data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-id="88" data-magicpath-path="DashboardContentRouter.tsx" />
                  <div className="flex-1" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-id="89" data-magicpath-path="DashboardContentRouter.tsx">
                    <p className="text-sm font-medium text-gray-900 dark:text-white" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-field="action:unknown" data-magicpath-id="90" data-magicpath-path="DashboardContentRouter.tsx">{activity.action}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400" data-magicpath-uuid={(activity as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="91" data-magicpath-path="DashboardContentRouter.tsx">{activity.time}</p>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};

// Content Creator Component
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
    onShowNotification('Content Generated', <p data-magicpath-id="92" data-magicpath-path="DashboardContentRouter.tsx">Successfully generated {mockContent.length} content variations!</p>);
  };
  return <div className="space-y-6" data-magicpath-id="93" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="94" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="95" data-magicpath-path="DashboardContentRouter.tsx">AI Content Creator</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="96" data-magicpath-path="DashboardContentRouter.tsx">Generate engaging content for your social media platforms.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-magicpath-id="97" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="98" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="99" data-magicpath-path="DashboardContentRouter.tsx">Content Settings</h3>
          <div className="space-y-4" data-magicpath-id="100" data-magicpath-path="DashboardContentRouter.tsx">
            <div data-magicpath-id="101" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-magicpath-id="102" data-magicpath-path="DashboardContentRouter.tsx">Topic</label>
              <input type="text" value={formData.topic} onChange={e => setFormData({
              ...formData,
              topic: e.target.value
            })} placeholder="Enter your content topic..." className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} data-magicpath-id="103" data-magicpath-path="DashboardContentRouter.tsx" />
            </div>

            <div data-magicpath-id="104" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-magicpath-id="105" data-magicpath-path="DashboardContentRouter.tsx">Platform</label>
              <select value={formData.platform} onChange={e => setFormData({
              ...formData,
              platform: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} data-magicpath-id="106" data-magicpath-path="DashboardContentRouter.tsx">
                <option value="instagram" data-magicpath-id="107" data-magicpath-path="DashboardContentRouter.tsx">Instagram</option>
                <option value="twitter" data-magicpath-id="108" data-magicpath-path="DashboardContentRouter.tsx">Twitter</option>
                <option value="linkedin" data-magicpath-id="109" data-magicpath-path="DashboardContentRouter.tsx">LinkedIn</option>
                <option value="facebook" data-magicpath-id="110" data-magicpath-path="DashboardContentRouter.tsx">Facebook</option>
              </select>
            </div>

            <div data-magicpath-id="111" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-magicpath-id="112" data-magicpath-path="DashboardContentRouter.tsx">Tone</label>
              <select value={formData.tone} onChange={e => setFormData({
              ...formData,
              tone: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent" style={{
              '--tw-ring-color': accentColor
            } as React.CSSProperties} data-magicpath-id="113" data-magicpath-path="DashboardContentRouter.tsx">
                <option value="professional" data-magicpath-id="114" data-magicpath-path="DashboardContentRouter.tsx">Professional</option>
                <option value="casual" data-magicpath-id="115" data-magicpath-path="DashboardContentRouter.tsx">Casual</option>
                <option value="humorous" data-magicpath-id="116" data-magicpath-path="DashboardContentRouter.tsx">Humorous</option>
                <option value="inspirational" data-magicpath-id="117" data-magicpath-path="DashboardContentRouter.tsx">Inspirational</option>
              </select>
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} onClick={handleGenerate} className="w-full py-3 text-white rounded-lg font-medium flex items-center justify-center space-x-2" style={{
            backgroundColor: accentColor
          }} data-magicpath-id="118" data-magicpath-path="DashboardContentRouter.tsx">
              <Zap size={16} data-magicpath-id="119" data-magicpath-path="DashboardContentRouter.tsx" />
              <span data-magicpath-id="120" data-magicpath-path="DashboardContentRouter.tsx">Generate Content</span>
            </motion.button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="121" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="122" data-magicpath-path="DashboardContentRouter.tsx">Generated Content</h3>
          {generatedContent.length > 0 ? <div className="space-y-4" data-magicpath-id="123" data-magicpath-path="DashboardContentRouter.tsx">
              {generatedContent.map((content, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="124" data-magicpath-path="DashboardContentRouter.tsx">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="125" data-magicpath-path="DashboardContentRouter.tsx">{content}</p>
                  <div className="flex space-x-2" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="126" data-magicpath-path="DashboardContentRouter.tsx">
                    <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="127" data-magicpath-path="DashboardContentRouter.tsx">
                      Copy
                    </button>
                    <button className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded" data-magicpath-uuid={(content as any)["mpid"] ?? "unsafe"} data-magicpath-id="128" data-magicpath-path="DashboardContentRouter.tsx">
                      Schedule
                    </button>
                  </div>
                </motion.div>)}
            </div> : <div className="text-center py-8" data-magicpath-id="129" data-magicpath-path="DashboardContentRouter.tsx">
              <Zap size={48} className="mx-auto text-gray-400 mb-4" data-magicpath-id="130" data-magicpath-path="DashboardContentRouter.tsx" />
              <p className="text-gray-500 dark:text-gray-400" data-magicpath-id="131" data-magicpath-path="DashboardContentRouter.tsx">Generate content to see results here</p>
            </div>}
        </div>
      </div>
    </div>;
};

// Post Planner Component
const PostPlanner: React.FC<{
  accentColor: string;
  onShowNotification: (title: string, content: React.ReactNode) => void;
}> = ({
  accentColor,
  onShowNotification
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  return <div className="space-y-6" data-magicpath-id="132" data-magicpath-path="DashboardContentRouter.tsx">
      <div className="flex items-center justify-between" data-magicpath-id="133" data-magicpath-path="DashboardContentRouter.tsx">
        <div data-magicpath-id="134" data-magicpath-path="DashboardContentRouter.tsx">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="135" data-magicpath-path="DashboardContentRouter.tsx">Post Planner</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="136" data-magicpath-path="DashboardContentRouter.tsx">Schedule and manage your social media posts.</p>
        </div>
        <div className="flex items-center space-x-3" data-magicpath-id="137" data-magicpath-path="DashboardContentRouter.tsx">
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1" data-magicpath-id="138" data-magicpath-path="DashboardContentRouter.tsx">
            {['month', 'week', 'day'].map(mode => <button key={mode} onClick={() => setViewMode(mode as any)} className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${viewMode === mode ? 'text-white' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`} style={{
            backgroundColor: viewMode === mode ? accentColor : 'transparent'
          }} data-magicpath-id="139" data-magicpath-path="DashboardContentRouter.tsx">
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>)}
          </div>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="px-4 py-2 text-white rounded-lg font-medium flex items-center space-x-2" style={{
          backgroundColor: accentColor
        }} onClick={() => onShowNotification('New Post', <p data-magicpath-id="141" data-magicpath-path="DashboardContentRouter.tsx">Post creation modal would open here!</p>)} data-magicpath-id="140" data-magicpath-path="DashboardContentRouter.tsx">
            <Plus size={16} data-magicpath-id="142" data-magicpath-path="DashboardContentRouter.tsx" />
            <span data-magicpath-id="143" data-magicpath-path="DashboardContentRouter.tsx">New Post</span>
          </motion.button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="144" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="grid grid-cols-7 gap-4 mb-4" data-magicpath-id="145" data-magicpath-path="DashboardContentRouter.tsx">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2" data-magicpath-id="146" data-magicpath-path="DashboardContentRouter.tsx">
              {day}
            </div>)}
        </div>
        
        <div className="grid grid-cols-7 gap-4" data-magicpath-id="147" data-magicpath-path="DashboardContentRouter.tsx">
          {Array.from({
          length: 35
        }, (_, i) => {
          const date = i + 1;
          const hasPost = Math.random() > 0.7;
          return <motion.div key={i} whileHover={{
            scale: 1.05
          }} className={`aspect-square p-2 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-colors cursor-pointer ${hasPost ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' : ''}`} onClick={() => onShowNotification('Schedule Post', <p data-magicpath-id="149" data-magicpath-path="DashboardContentRouter.tsx">Schedule a post for day {date}</p>)} data-magicpath-id="148" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300" data-magicpath-id="150" data-magicpath-path="DashboardContentRouter.tsx">{date}</div>
                {hasPost && <div className="mt-1" data-magicpath-id="151" data-magicpath-path="DashboardContentRouter.tsx">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mb-1" data-magicpath-id="152" data-magicpath-path="DashboardContentRouter.tsx" />
                    <div className="text-xs text-blue-600 dark:text-blue-400" data-magicpath-id="153" data-magicpath-path="DashboardContentRouter.tsx">2 posts</div>
                  </div>}
              </motion.div>;
        })}
        </div>
      </div>
    </div>;
};

// Analytics Dashboard Component
const AnalyticsDashboard: React.FC<{
  accentColor: string;
  isDarkMode: boolean;
}> = ({
  accentColor,
  isDarkMode
}) => {
  const engagementData = [{
    name: 'Jan',
    value: 400,
    mpid: "078303f7-975e-4929-a168-7cfd7c7b2d20"
  }, {
    name: 'Feb',
    value: 300,
    mpid: "c62a2342-bb65-4f72-8d90-f4abff6d30ab"
  }, {
    name: 'Mar',
    value: 600,
    mpid: "728a29eb-482f-4c73-9194-07dbe86efaf9"
  }, {
    name: 'Apr',
    value: 800,
    mpid: "b83bdb0f-1281-467f-bab8-bcc94ac93a23"
  }, {
    name: 'May',
    value: 500,
    mpid: "975004f1-8133-4f24-b31d-3d5941b5ec5e"
  }, {
    name: 'Jun',
    value: 900,
    mpid: "43411aac-69bb-4729-b465-8f71e36c8bbe"
  }] as any[];
  const platformData = [{
    name: 'Instagram',
    value: 35,
    color: '#E4405F',
    mpid: "2ae4b347-fa7c-41e3-bcde-d548880ba317"
  }, {
    name: 'Twitter',
    value: 25,
    color: '#1DA1F2',
    mpid: "99607caa-beb7-476e-bc56-258a2e7b48ab"
  }, {
    name: 'LinkedIn',
    value: 20,
    color: '#0077B5',
    mpid: "11f1ee2f-9ef2-48a1-94a8-e49747a410b5"
  }, {
    name: 'Facebook',
    value: 20,
    color: '#1877F2',
    mpid: "60683b2b-99b9-4c92-b884-118975af097f"
  }] as any[];
  return <div className="space-y-6" data-magicpath-id="154" data-magicpath-path="DashboardContentRouter.tsx">
      <div className="flex items-center justify-between" data-magicpath-id="155" data-magicpath-path="DashboardContentRouter.tsx">
        <div data-magicpath-id="156" data-magicpath-path="DashboardContentRouter.tsx">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="157" data-magicpath-path="DashboardContentRouter.tsx">Analytics Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="158" data-magicpath-path="DashboardContentRouter.tsx">Track your social media performance and insights.</p>
        </div>
        <div className="flex items-center space-x-3" data-magicpath-id="159" data-magicpath-path="DashboardContentRouter.tsx">
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2" data-magicpath-id="160" data-magicpath-path="DashboardContentRouter.tsx">
            <Filter size={16} data-magicpath-id="161" data-magicpath-path="DashboardContentRouter.tsx" />
            <span data-magicpath-id="162" data-magicpath-path="DashboardContentRouter.tsx">Filter</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center space-x-2" data-magicpath-id="163" data-magicpath-path="DashboardContentRouter.tsx">
            <Download size={16} data-magicpath-id="164" data-magicpath-path="DashboardContentRouter.tsx" />
            <span data-magicpath-id="165" data-magicpath-path="DashboardContentRouter.tsx">Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-magicpath-id="166" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="167" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="168" data-magicpath-path="DashboardContentRouter.tsx">Engagement Over Time</h3>
          <ResponsiveContainer width="100%" height={300} data-magicpath-id="169" data-magicpath-path="DashboardContentRouter.tsx">
            <AreaChart data={engagementData} data-magicpath-id="170" data-magicpath-path="DashboardContentRouter.tsx">
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#E5E7EB'} data-magicpath-id="171" data-magicpath-path="DashboardContentRouter.tsx" />
              <XAxis dataKey="name" stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} data-magicpath-id="172" data-magicpath-path="DashboardContentRouter.tsx" />
              <YAxis stroke={isDarkMode ? '#9CA3AF' : '#6B7280'} data-magicpath-id="173" data-magicpath-path="DashboardContentRouter.tsx" />
              <Tooltip contentStyle={{
              backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
              border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
              borderRadius: '8px'
            }} data-magicpath-id="174" data-magicpath-path="DashboardContentRouter.tsx" />
              <Area type="monotone" dataKey="value" stroke={accentColor} fill={`${accentColor}20`} data-magicpath-id="175" data-magicpath-path="DashboardContentRouter.tsx" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="176" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="177" data-magicpath-path="DashboardContentRouter.tsx">Platform Distribution</h3>
          <ResponsiveContainer width="100%" height={300} data-magicpath-id="178" data-magicpath-path="DashboardContentRouter.tsx">
            <RechartsPieChart data-magicpath-id="179" data-magicpath-path="DashboardContentRouter.tsx">
              <Pie data={platformData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({
              name,
              percent
            }) => `${name} ${(percent * 100).toFixed(0)}%`} data-magicpath-id="180" data-magicpath-path="DashboardContentRouter.tsx">
                {platformData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} data-magicpath-uuid={(entry as any)["mpid"] ?? "unsafe"} data-magicpath-id="181" data-magicpath-path="DashboardContentRouter.tsx" />)}
              </Pie>
              <Tooltip data-magicpath-id="182" data-magicpath-path="DashboardContentRouter.tsx" />
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>;
};

// Preferences Component
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
  return <div className="space-y-6" data-magicpath-id="183" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="184" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="185" data-magicpath-path="DashboardContentRouter.tsx">Preferences</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="186" data-magicpath-path="DashboardContentRouter.tsx">Customize your dashboard experience.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-magicpath-id="187" data-magicpath-path="DashboardContentRouter.tsx">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="188" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="189" data-magicpath-path="DashboardContentRouter.tsx">Appearance</h3>
          <div className="space-y-4" data-magicpath-id="190" data-magicpath-path="DashboardContentRouter.tsx">
            <div data-magicpath-id="191" data-magicpath-path="DashboardContentRouter.tsx">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3" data-magicpath-id="192" data-magicpath-path="DashboardContentRouter.tsx">Accent Color</label>
              <div className="flex space-x-3" data-magicpath-id="193" data-magicpath-path="DashboardContentRouter.tsx">
                {colorOptions.map(color => <motion.button key={color} whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} onClick={() => onUpdateAccentColor(color)} className={`w-8 h-8 rounded-full border-2 ${accentColor === color ? 'border-gray-400' : 'border-gray-200 dark:border-gray-600'}`} style={{
                backgroundColor: color
              }} data-magicpath-uuid={(color as any)["mpid"] ?? "unsafe"} data-magicpath-id="194" data-magicpath-path="DashboardContentRouter.tsx" />)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-id="195" data-magicpath-path="DashboardContentRouter.tsx">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" data-magicpath-id="196" data-magicpath-path="DashboardContentRouter.tsx">Notifications</h3>
          <div className="space-y-4" data-magicpath-id="197" data-magicpath-path="DashboardContentRouter.tsx">
            {[{
            label: 'Email notifications',
            enabled: true,
            mpid: "34af4b8e-035e-4119-a544-8390698478a9"
          }, {
            label: 'Push notifications',
            enabled: false,
            mpid: "dc7c95bc-8ac7-443b-ba28-d92b3a42ccee"
          }, {
            label: 'Weekly reports',
            enabled: true,
            mpid: "e43e15ba-c0e0-4c0f-8be9-02c2d2483fb1"
          }].map((setting, index) => <div key={index} className="flex items-center justify-between" data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-id="198" data-magicpath-path="DashboardContentRouter.tsx">
                <span className="text-sm text-gray-700 dark:text-gray-300" data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-field="label:unknown" data-magicpath-id="199" data-magicpath-path="DashboardContentRouter.tsx">{setting.label}</span>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${setting.enabled ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`} data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-id="200" data-magicpath-path="DashboardContentRouter.tsx">
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${setting.enabled ? 'translate-x-6' : 'translate-x-0'}`} data-magicpath-uuid={(setting as any)["mpid"] ?? "unsafe"} data-magicpath-id="201" data-magicpath-path="DashboardContentRouter.tsx" />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};

// Connections Component
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
    mpid: "d55b55f4-c988-4c94-b6b4-751d417f866e"
  }, {
    name: 'Twitter',
    connected: true,
    color: '#1DA1F2',
    followers: '8.2K',
    mpid: "e44c249e-870b-47f9-9127-daceff75ba63"
  }, {
    name: 'LinkedIn',
    connected: false,
    color: '#0077B5',
    followers: '0',
    mpid: "e1c40dc6-9ac2-45cc-b45a-9e5f2432b3ea"
  }, {
    name: 'Facebook',
    connected: true,
    color: '#1877F2',
    followers: '15.3K',
    mpid: "ed2cb562-e209-41db-880b-7fcae7286a25"
  }, {
    name: 'TikTok',
    connected: false,
    color: '#000000',
    followers: '0',
    mpid: "c79221c9-57bf-4bdd-b9b3-19e8c6b541a0"
  }, {
    name: 'YouTube',
    connected: false,
    color: '#FF0000',
    followers: '0',
    mpid: "9b839910-5176-4150-bd8a-7471be8e44f8"
  }] as any[];
  return <div className="space-y-6" data-magicpath-id="202" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="203" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="204" data-magicpath-path="DashboardContentRouter.tsx">Social Connections</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="205" data-magicpath-path="DashboardContentRouter.tsx">Manage your connected social media accounts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-magicpath-id="206" data-magicpath-path="DashboardContentRouter.tsx">
        {platforms.map((platform, index) => <motion.div key={platform.name} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="207" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-center justify-between mb-4" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="208" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="flex items-center space-x-3" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="209" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold" style={{
              backgroundColor: platform.color
            }} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="210" data-magicpath-path="DashboardContentRouter.tsx">
                  {platform.name[0]}
                </div>
                <div data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="211" data-magicpath-path="DashboardContentRouter.tsx">
                  <h3 className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="212" data-magicpath-path="DashboardContentRouter.tsx">{platform.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="213" data-magicpath-path="DashboardContentRouter.tsx">
                    {platform.connected ? `${platform.followers} followers` : 'Not connected'}
                  </p>
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${platform.connected ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="214" data-magicpath-path="DashboardContentRouter.tsx" />
            </div>
            
            <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={() => onShowNotification(platform.connected ? 'Disconnect Account' : 'Connect Account', <p data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="216" data-magicpath-path="DashboardContentRouter.tsx">{platform.connected ? 'Disconnect' : 'Connect'} your {platform.name} account?</p>)} className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${platform.connected ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30' : 'text-white hover:opacity-90'}`} style={{
          backgroundColor: platform.connected ? undefined : accentColor
        }} data-magicpath-uuid={(platform as any)["mpid"] ?? "unsafe"} data-magicpath-id="215" data-magicpath-path="DashboardContentRouter.tsx">
              {platform.connected ? 'Disconnect' : 'Connect'}
            </motion.button>
          </motion.div>)}
      </div>
    </div>;
};

// Alerts Page Component
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
    mpid: "846f9cd9-fa57-4f4a-b647-21f052e71a9e"
  }, {
    type: 'warning',
    title: 'Engagement Drop',
    message: 'Your engagement rate has decreased by 15% this week',
    time: '1 hour ago',
    mpid: "0b0a2315-5735-4f7d-bcdf-6b1995a9dd98"
  }, {
    type: 'info',
    title: 'Scheduled Post',
    message: 'Your LinkedIn post is scheduled for 3:00 PM today',
    time: '3 hours ago',
    mpid: "e8302621-afb5-4033-8c1b-1a4e474bba81"
  }, {
    type: 'error',
    title: 'Connection Failed',
    message: 'Failed to connect to Twitter API. Please check your credentials',
    time: '5 hours ago',
    mpid: "c4ed400d-6aa3-4781-8493-b2d7de509717"
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
  return <div className="space-y-6" data-magicpath-id="217" data-magicpath-path="DashboardContentRouter.tsx">
      <div data-magicpath-id="218" data-magicpath-path="DashboardContentRouter.tsx">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-magicpath-id="219" data-magicpath-path="DashboardContentRouter.tsx">Alerts & Notifications</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-id="220" data-magicpath-path="DashboardContentRouter.tsx">Stay updated with your social media activity.</p>
      </div>

      <div className="space-y-4" data-magicpath-id="221" data-magicpath-path="DashboardContentRouter.tsx">
        {alerts.map((alert, index) => <motion.div key={index} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: index * 0.1
      }} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="222" data-magicpath-path="DashboardContentRouter.tsx">
            <div className="flex items-start space-x-4" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="223" data-magicpath-path="DashboardContentRouter.tsx">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{
            backgroundColor: getAlertColor(alert.type)
          }} data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="224" data-magicpath-path="DashboardContentRouter.tsx" />
              <div className="flex-1" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="225" data-magicpath-path="DashboardContentRouter.tsx">
                <div className="flex items-center justify-between" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-id="226" data-magicpath-path="DashboardContentRouter.tsx">
                  <h3 className="font-semibold text-gray-900 dark:text-white" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="227" data-magicpath-path="DashboardContentRouter.tsx">{alert.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-field="time:unknown" data-magicpath-id="228" data-magicpath-path="DashboardContentRouter.tsx">{alert.time}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1" data-magicpath-uuid={(alert as any)["mpid"] ?? "unsafe"} data-magicpath-field="message:unknown" data-magicpath-id="229" data-magicpath-path="DashboardContentRouter.tsx">{alert.message}</p>
              </div>
            </div>
          </motion.div>)}
      </div>
    </div>;
};
export default DashboardContentRouter;