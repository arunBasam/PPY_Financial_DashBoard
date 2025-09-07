'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const monthlyData = [
  { month: 'Jan', blue: -0.20, pink: 0.20, green: 0.50 },
  { month: 'Feb', blue: -0.15, pink: 0.25, green: 0.45 },
  { month: 'Mar', blue: 0.10, pink: 0.30, green: 0.40 },
  { month: 'Apr', blue: 0.30, pink: 0.20, green: 0.35 },
  { month: 'May', blue: 0.40, pink: 0.10, green: 0.30 },
  { month: 'Jun', blue: 0.20, pink: 0.05, green: 0.25 },
  { month: 'Jul', blue: -0.10, pink: -0.10, green: 0.20 }
];

export default function MonthlyMisChart() {
  return (
    <Card className="bg-white dark:bg-gray-800" data-chart="monthly-mis">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          MONTHLY MIS
        </CardTitle>
        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-gray-700">
          View Report
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              domain={[-0.25, 0.60]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
              tickFormatter={(value) => `${value.toFixed(2)} Cr`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #ccc',
                borderRadius: '8px'
              }}
              formatter={(value: any) => [`${value.toFixed(2)} Cr`]}
            />
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
              </linearGradient>
              <linearGradient id="colorPink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0.2}/>
              </linearGradient>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="green" 
              stroke="#10b981" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorGreen)" 
            />
            <Area 
              type="monotone" 
              dataKey="pink" 
              stroke="#ec4899" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPink)" 
            />
            <Area 
              type="monotone" 
              dataKey="blue" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorBlue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}