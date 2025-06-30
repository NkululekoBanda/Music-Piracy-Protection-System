
import React from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PiracyChart = () => {
  const data = [
    { month: 'Jan', detected: 45, resolved: 38 },
    { month: 'Feb', detected: 52, resolved: 43 },
    { month: 'Mar', detected: 48, resolved: 41 },
    { month: 'Apr', detected: 61, resolved: 52 },
    { month: 'May', detected: 55, resolved: 47 },
    { month: 'Jun', detected: 67, resolved: 58 },
    { month: 'Jul', detected: 73, resolved: 62 }
  ];

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Piracy Detection Trends
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Monthly piracy cases detected vs resolved
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="detected" 
            stroke="#ef4444" 
            strokeWidth={2}
            name="Cases Detected"
          />
          <Line 
            type="monotone" 
            dataKey="resolved" 
            stroke="#22c55e" 
            strokeWidth={2}
            name="Cases Resolved"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default PiracyChart;
