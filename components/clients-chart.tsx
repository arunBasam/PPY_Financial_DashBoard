'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ClientsChart() {
  return (
    <div id="clients-chart">
    <Card className="bg-white dark:bg-gray-800" data-chart="clients">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          CLIENTS
        </CardTitle>
        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-gray-700">
          Download Report
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        <div className="relative h-64 flex items-center justify-center">
          {/* Bubble Chart positioned to match the original image exactly */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Active - Largest red circle in center */}
            <div 
              className="absolute rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{
                backgroundColor: '#dc2626',
                width: '120px',
                height: '120px',
                left: '40%',
                top: '40%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1
              }}
            >
              3824
            </div>
            
            {/* InActive - Medium red circle overlapping */}
            <div 
              className="absolute rounded-full flex items-center justify-center text-white font-bold text-md"
              style={{
                backgroundColor: '#ef4444',
                width: '80px',
                height: '80px',
                right: '25%',
                top: '25%',
                zIndex: 2
              }}
            >
              541
            </div>
            
            {/* Online - Orange circle */}
            <div 
              className="absolute rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{
                backgroundColor: '#f97316',
                width: '50px',
                height: '50px',
                left: '25%',
                top: '20%',
                zIndex: 3
              }}
            >
              60
            </div>
            
            {/* New - Small green circle */}
            <div 
              className="absolute rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{
                backgroundColor: '#16a34a',
                width: '25px',
                height: '25px',
                left: '20%',
                bottom: '30%',
                zIndex: 4
              }}
            >
              2
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Online</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-green-600"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">New</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Active</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">InActive</span>
          </div>
        </div>
      </CardContent>
    </Card></div>
  );
}