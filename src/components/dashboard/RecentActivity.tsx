
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Clock, FileText } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'piracy_detected',
      title: 'Piracy Detected',
      description: 'Song "Summer Vibes" found on unauthorized site',
      time: '2 minutes ago',
      status: 'pending',
      icon: AlertTriangle,
      iconColor: 'text-red-500'
    },
    {
      id: 2,
      type: 'takedown_sent',
      title: 'Takedown Notice Sent',
      description: 'DMCA notice sent to pirate-music.com',
      time: '15 minutes ago',
      status: 'completed',
      icon: FileText,
      iconColor: 'text-blue-500'
    },
    {
      id: 3,
      type: 'content_removed',
      title: 'Content Removed',
      description: 'Pirated content successfully removed from site',
      time: '1 hour ago',
      status: 'resolved',
      icon: CheckCircle,
      iconColor: 'text-green-500'
    },
    {
      id: 4,
      type: 'scan_completed',
      title: 'Website Scan Completed',
      description: 'Scanned 1,247 websites for pirated content',
      time: '2 hours ago',
      status: 'completed',
      icon: Clock,
      iconColor: 'text-purple-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Latest system activities and alerts
        </p>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <activity.icon className={`h-5 w-5 mt-0.5 ${activity.iconColor}`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {activity.title}
                </p>
                <Badge className={getStatusColor(activity.status)}>
                  {activity.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {activity.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;
