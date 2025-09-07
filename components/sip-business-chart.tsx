'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const sipData = [
  { month: 'Mar', bar: 0.4, line: 2.2 },
  { month: 'Apr', bar: 1.6, line: 1.8 },
  { month: 'May', bar: 1.4, line: 0.2 },
  { month: 'Jun', bar: 1.6, line: 0.0 }
];

export default function SipBusinessChart() {
  return (
    <Card className="bg-white dark:bg-gray-800" data-chart="sip-business">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          SIP BUSINESS CHART
        </CardTitle>
        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-gray-700">
          View Report
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        <ResponsiveContainer width="100%" height={260}>
          <ComposedChart data={sipData} margin={{ top: 20, right: 50, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              yAxisId="left"
              domain={[0, 2]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right"
              domain={[0, 2.5]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#666' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #ccc',
                borderRadius: '8px'
              }}
            />
            <Bar 
              yAxisId="left"
              dataKey="bar" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="line" 
              stroke="#dc2626" 
              strokeWidth={3}
              dot={{ fill: '#dc2626', strokeWidth: 0, r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}