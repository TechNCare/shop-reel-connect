
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, UserPlus, ShoppingBag, TrendingUp } from "lucide-react";

const Activity = () => {
  const activities = [
    {
      id: 1,
      type: "like",
      user: "@techreviewer_mike",
      action: "liked your video",
      time: "2 min ago",
      content: "Wireless Headphones Review"
    },
    {
      id: 2,
      type: "comment",
      user: "@fashionista_sarah",
      action: "commented on your post",
      time: "5 min ago",
      content: "Summer outfit ideas"
    },
    {
      id: 3,
      type: "follow",
      user: "@lifestyle_jenny",
      action: "started following you",
      time: "15 min ago",
      content: null
    },
    {
      id: 4,
      type: "purchase",
      user: "@shopper_alex",
      action: "bought through your link",
      time: "1 hour ago",
      content: "Premium Skincare Set - $45.99"
    },
    {
      id: 5,
      type: "earning",
      user: "System",
      action: "Commission earned",
      time: "2 hours ago",
      content: "$12.50 from headphones sale"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "like":
        return Heart;
      case "comment":
        return MessageCircle;
      case "follow":
        return UserPlus;
      case "purchase":
        return ShoppingBag;
      case "earning":
        return TrendingUp;
      default:
        return Heart;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "like":
        return "text-red-400";
      case "comment":
        return "text-blue-400";
      case "follow":
        return "text-purple-400";
      case "purchase":
        return "text-green-400";
      case "earning":
        return "text-yellow-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="pt-4 mb-6">
        <h1 className="text-2xl font-bold">Activity</h1>
        <p className="text-gray-400">Stay updated with your interactions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <Heart className="w-6 h-6 mx-auto mb-2 text-red-400" />
            <p className="text-2xl font-bold text-white">1.2K</p>
            <p className="text-sm text-gray-400">Total Likes</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-400" />
            <p className="text-2xl font-bold text-white">$156</p>
            <p className="text-sm text-gray-400">This Month</p>
          </CardContent>
        </Card>
      </div>

      {/* Activity Feed */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activities.map((activity) => {
            const Icon = getActivityIcon(activity.type);
            const colorClass = getActivityColor(activity.type);
            
            return (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                <div className={`p-2 rounded-full bg-gray-800`}>
                  <Icon className={`w-4 h-4 ${colorClass}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-white">{activity.user}</span>
                    <span className="text-gray-400 text-sm">{activity.action}</span>
                  </div>
                  {activity.content && (
                    <p className="text-sm text-gray-300 mb-2">{activity.content}</p>
                  )}
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                {activity.type === "follow" && (
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Follow Back
                  </Button>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity;
