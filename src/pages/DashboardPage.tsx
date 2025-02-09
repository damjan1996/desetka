import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import { Users, Eye, Clock, TrendingUp, MousePointer, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  avgTimeOnSite: string;
  bounceRate: string;
  conversions: number;
  conversionRate: string;
  activeUsers: number;
  topPages: Array<{
    path: string;
    views: number;
    change: number;
  }>;
  realtimeStats: {
    currentVisitors: number;
    pagesPerMinute: number;
  };
  events: Array<{
    name: string;
    count: number;
    trend: number;
  }>;
}

const DashboardPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    pageViews: 0,
    uniqueVisitors: 0,
    avgTimeOnSite: '0:00',
    bounceRate: '0%',
    conversions: 0,
    conversionRate: '0%',
    activeUsers: 0,
    topPages: [],
    realtimeStats: {
      currentVisitors: 0,
      pagesPerMinute: 0
    },
    events: []
  });

  useEffect(() => {
    checkAuth();
    fetchAnalyticsData();
    const interval = setInterval(fetchRealtimeData, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/login');
    }
    setLoading(false);
  };

  const fetchAnalyticsData = async () => {
    // Simulated data - replace with actual GA4 API calls
    setAnalyticsData({
      pageViews: 1234,
      uniqueVisitors: 567,
      avgTimeOnSite: '2:45',
      bounceRate: '45%',
      conversions: 89,
      conversionRate: '15.7%',
      activeUsers: 23,
      topPages: [
        { path: '/', views: 450, change: 5.2 },
        { path: '/blog', views: 320, change: -2.1 },
        { path: '/portfolio', views: 280, change: 8.4 },
        { path: '/contact', views: 184, change: 3.7 }
      ],
      realtimeStats: {
        currentVisitors: 23,
        pagesPerMinute: 4.2
      },
      events: [
        { name: 'Contact Form Submit', count: 45, trend: 12.3 },
        { name: 'Portfolio View', count: 156, trend: -4.2 },
        { name: 'CV Download', count: 78, trend: 8.7 },
        { name: 'Blog Read', count: 234, trend: 15.4 }
      ]
    });
  };

  const fetchRealtimeData = async () => {
    // Simulated real-time data update
    setAnalyticsData(prev => ({
      ...prev,
      realtimeStats: {
        currentVisitors: Math.floor(Math.random() * 30) + 15,
        pagesPerMinute: +(Math.random() * 5 + 2).toFixed(1)
      }
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <PageTransition>
      <SEO 
        title="Analytics Dashboard"
        description="Website analytics dashboard"
      />
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
            <div className="flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-lg">
              <div className="animate-pulse h-2 w-2 rounded-full bg-orange-500"></div>
              <span className="text-sm font-medium">
                {analyticsData.realtimeStats.currentVisitors} active users
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Page Views</h3>
                <Eye className="h-6 w-6 text-orange-500" />
              </div>
              <p className="text-3xl font-bold">{analyticsData.pageViews}</p>
              <p className="text-sm text-white/60 mt-2">
                {analyticsData.realtimeStats.pagesPerMinute} per minute
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Unique Visitors</h3>
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <p className="text-3xl font-bold">{analyticsData.uniqueVisitors}</p>
              <p className="text-sm text-white/60 mt-2">
                {analyticsData.activeUsers} currently active
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Conversions</h3>
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <p className="text-3xl font-bold">{analyticsData.conversions}</p>
              <p className="text-sm text-white/60 mt-2">
                {analyticsData.conversionRate} conversion rate
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Avg. Time on Site</h3>
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <p className="text-3xl font-bold">{analyticsData.avgTimeOnSite}</p>
              <p className="text-sm text-white/60 mt-2">
                {analyticsData.bounceRate} bounce rate
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Top Pages</h3>
              <div className="space-y-4">
                {analyticsData.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MousePointer className="h-4 w-4 text-white/40" />
                      <span className="text-white/80">{page.path}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-white/80">{page.views}</span>
                      <div className={`flex items-center ${page.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {page.change >= 0 ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        <span className="ml-1">{Math.abs(page.change)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Event Tracking</h3>
              <div className="space-y-4">
                {analyticsData.events.map((event, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/80">{event.name}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-white/80">{event.count}</span>
                      <div className={`flex items-center ${event.trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {event.trend >= 0 ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        <span className="ml-1">{Math.abs(event.trend)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default DashboardPage;