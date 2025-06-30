
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Shield, AlertTriangle, Music, FileCheck } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Total Music Files',
      value: '12,543',
      change: '+12%',
      changeType: 'increase',
      icon: Music,
      color: 'text-blue-600'
    },
    {
      title: 'Piracy Cases Detected',
      value: '847',
      change: '+23%',
      changeType: 'increase',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      title: 'Takedown Notices Sent',
      value: '623',
      change: '+8%',
      changeType: 'increase',
      icon: FileCheck,
      color: 'text-green-600'
    },
    {
      title: 'Protected Artists',
      value: '2,156',
      change: '+15%',
      changeType: 'increase',
      icon: Shield,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
            <stat.icon className={`h-8 w-8 ${stat.color}`} />
          </div>
          <div className="mt-4 flex items-center">
            {stat.changeType === 'increase' ? (
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={`text-sm font-medium ${
              stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
            }`}>
              {stat.change}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
              from last month
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
