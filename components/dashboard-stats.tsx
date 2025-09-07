'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowUpDown, XCircle, AlertTriangle, Plus } from 'lucide-react';

interface StatsData {
  purchases: { value: number; amount: string };
  redemptions: { value: number; amount: string };
  rejTransactions: { value: number; amount: string };
  sipRejections: { value: number; amount: string };
  newSip: { value: number; amount: string };
}

interface DashboardStatsProps {
  data: StatsData;
}

const statItems = [
  {
    key: 'purchases',
    title: 'Purchases',
    icon: ShoppingBag,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    key: 'redemptions',
    title: 'Redemptions',
    icon: ArrowUpDown,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    key: 'rejTransactions',
    title: 'Rej Transactions',
    icon: XCircle,
    iconColor: 'text-gray-600',
    bgColor: 'bg-gray-50',
  },
  {
    key: 'sipRejections',
    title: 'SIP Rejections',
    icon: AlertTriangle,
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    key: 'newSip',
    title: 'New SIP',
    icon: Plus,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

export default function DashboardStats({ data }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {statItems.map((item) => {
        const Icon = item.icon;
        const statData = data[item.key as keyof StatsData];
        
        return (
          <Card key={item.key} className="bg-white dark:bg-gray-800 transition-all duration-200 hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-md ${item.bgColor}`}>
                  <Icon className={`h-5 w-5 ${item.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {statData.value}
                    </span>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-gray-700">
                      View Report
                    </Button>
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {statData.amount}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}