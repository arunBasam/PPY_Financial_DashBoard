'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Search, MapPin, Settings, Bell, Star, User, Shield, Eye, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import DashboardStats from '@/components/dashboard-stats';
import ClientsChart from '@/components/clients-chart';
import SipBusinessChart from '@/components/sip-business-chart';
import MonthlyMisChart from '@/components/monthly-mis-chart';
import PDFGenerator from '@/components/pdf-generator';

const timeRanges = ['3 Days', '7 Days', '10 Days', '30 Days'];

const mockData = {
  aum: {
    current: 12.19,
    unit: 'Cr',
    momChange: 0.77,
    isPositive: true
  },
  sip: {
    current: 1.39,
    unit: 'Lakh',
    momChange: 0,
    isPositive: true
  },
  stats: {
    purchases: { value: 0, amount: '0.00 INR' },
    redemptions: { value: 0, amount: '0.00 INR' },
    rejTransactions: { value: 0, amount: '0.00 INR' },
    sipRejections: { value: 0, amount: '0.00 INR' },
    newSip: { value: 0, amount: '0.00 INR' }
  }
};

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedRange, setSelectedRange] = useState('3 Days');
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
       <div className="mt-4 md:mt-0 mb-4 md:mb-0">
      {/* Top Header */}
      <header id='header' className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded"></div>
              <span className="font-bold text-lg text-gray-900 dark:text-white">Wealth Elite</span>
            </div>
            <div className="hidden md:block">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                className="w-64 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Always visible icons */}
            <div className="flex space-x-2 md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setShowMenu(!showMenu)}>
                <Menu className="h-4 w-4" />
              </Button>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MapPin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Star className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Shield className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              <Moon className="h-4 w-4" />
            </div>

            <Button variant="ghost" size="sm" className="text-red-600 hidden md:flex">
              <LogOut className="h-4 w-4 mr-1" />
              LOGOUT
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-2 space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <MapPin className="h-4 w-4 mr-2" />
              Location
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Star className="h-4 w-4 mr-2" />
              Favorites
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Eye className="h-4 w-4 mr-2" />
              Privacy
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-red-600">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </header>

      {/* Navigation Bar */}
      <nav className="bg-red-600 text-white overflow-x-auto">
        <div className="max-w-full mx-auto">
          <div className="flex space-x-2 min-w-max px-2">
            {['HOME', 'CRM', 'UTILITIES', 'INSURANCE', 'ASSETS', 'MUTUAL', 'RESEARCH', 'TRANSACT ONLINE', 'GOAL GPS', 'FINANCIAL PLANNING', 'WEALTH REPORT', 'OTHER'].map((item) => (
              <button
                key={item}
                className="px-4 py-3 text-xs font-medium hover:bg-red-700 transition-colors border-b-2 border-transparent hover:border-white whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto p-6 space-y-6">
          {/* AUM and SIP Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-around items-start mb-6">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">AUM {mockData.aum.current}</span>
                      <span className="text-lg text-gray-600 dark:text-gray-400">{mockData.aum.unit}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-green-600 text-sm font-medium">
                        ▲ +{mockData.aum.momChange}% MoM
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-gray-700">
                      View Report
                    </Button>
                    <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-gray-700">
                      View Trend ▼
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex justify-around items-start mb-6">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current</p>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">SIP {mockData.sip.current}</span>
                      <span className="text-lg text-gray-600 dark:text-gray-400">{mockData.sip.unit}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-green-600 text-sm font-medium">
                        ▲ +{mockData.sip.momChange}% MoM
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-gray-700">
                      View Report
                    </Button>
                    <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-gray-700">
                      View Trend ▼
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Time Range Filter */}
          <div className="flex flex-wrap gap-2">
            <PDFGenerator data={mockData} />
            {timeRanges.map((range) => (
              <Button
                key={range}
                variant={selectedRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRange(range)}
                className={selectedRange === range ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {range}
              </Button>
            ))}
          </div>

          {/* Dashboard Stats */}
          <div id='stats'>
            <DashboardStats data={mockData.stats} />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ClientsChart />
            <SipBusinessChart />
            <MonthlyMisChart />
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
