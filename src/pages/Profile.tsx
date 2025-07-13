
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Settings, User, Store, Video, Heart, Eye, ShoppingBag, TrendingUp, Calendar, BarChart3, DollarSign } from "lucide-react";
import { toast } from "sonner";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const Profile = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState<'consumer' | 'influencer' | 'vendor'>('consumer');

  // Consumer Analytics Data
  const purchaseHistory = [
    { month: "Jan", purchases: 3, spent: 245, savings: 35 },
    { month: "Feb", purchases: 5, spent: 420, savings: 65 },
    { month: "Mar", purchases: 4, spent: 380, savings: 45 },
    { month: "Apr", purchases: 6, spent: 520, savings: 78 },
    { month: "May", purchases: 7, spent: 650, savings: 95 },
    { month: "Jun", purchases: 5, spent: 480, savings: 72 },
  ];

  const categorySpending = [
    { name: "Fashion", value: 45, color: "#8884d8", amount: 890 },
    { name: "Tech", value: 25, color: "#82ca9d", amount: 520 },
    { name: "Beauty", value: 20, color: "#ffc658", amount: 410 },
    { name: "Fitness", value: 10, color: "#ff7c7c", amount: 185 },
  ];

  const recentPurchases = [
    { product: "Wireless Headphones", price: 199.99, influencer: "@techguru", date: "2 days ago", category: "Tech" },
    { product: "Summer Dress", price: 89.99, influencer: "@fashionista", date: "1 week ago", category: "Fashion" },
    { product: "Skincare Set", price: 149.99, influencer: "@beautyexpert", date: "2 weeks ago", category: "Beauty" },
    { product: "Yoga Mat", price: 45.99, influencer: "@fitnessjoe", date: "3 weeks ago", category: "Fitness" },
  ];

  const watchingHabits = [
    { category: "Tech Reviews", hours: 12, percentage: 35 },
    { category: "Fashion", hours: 8, percentage: 25 },
    { category: "Beauty", hours: 6, percentage: 20 },
    { category: "Lifestyle", hours: 4, percentage: 12 },
    { category: "Fitness", hours: 3, percentage: 8 },
  ];

  const handleRoleChange = (role: 'consumer' | 'influencer' | 'vendor') => {
    setActiveRole(role);
    toast.success(`Switched to ${role} mode`);
    
    // Navigate to role-specific dashboard
    if (role === 'vendor') {
      navigate('/vendor');
    } else if (role === 'influencer') {
      navigate('/influencer');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl">
                JD
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">John Doe</h1>
              <p className="text-gray-600">john.doe@example.com</p>
              <Badge className="mt-2 bg-blue-100 text-blue-800">
                {activeRole.charAt(0).toUpperCase() + activeRole.slice(1)}
              </Badge>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate('/app/profile')}>
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="roles">Role Management</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-muted-foreground">+8 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$2,695</div>
                  <p className="text-xs text-muted-foreground">+$520 this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$390</div>
                  <p className="text-xs text-muted-foreground">From referral discounts</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Watch Time</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">152h</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Purchases</CardTitle>
                <CardDescription>Your latest purchases through influencer referrals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPurchases.map((purchase, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{purchase.product}</h4>
                          <Badge variant="outline" className="text-xs">
                            {purchase.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          Referred by {purchase.influencer} • {purchase.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${purchase.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold">Consumer Analytics</h2>
            </div>

            {/* Purchase Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Purchase & Spending Trends</CardTitle>
                <CardDescription>Your shopping patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                  purchases: { label: "Purchases", color: "#8884d8" },
                  spent: { label: "Amount Spent ($)", color: "#82ca9d" },
                  savings: { label: "Savings ($)", color: "#ffc658" }
                }} className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={purchaseHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line type="monotone" dataKey="purchases" stroke="#8884d8" strokeWidth={2} />
                      <Line type="monotone" dataKey="spent" stroke="#82ca9d" strokeWidth={2} />
                      <Line type="monotone" dataKey="savings" stroke="#ffc658" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Category Breakdown */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Spending by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{
                    fashion: { label: "Fashion", color: "#8884d8" },
                    tech: { label: "Tech", color: "#82ca9d" },
                    beauty: { label: "Beauty", color: "#ffc658" },
                    fitness: { label: "Fitness", color: "#ff7c7c" }
                  }} className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categorySpending}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {categorySpending.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Watching Habits</CardTitle>
                  <CardDescription>Content categories you engage with most</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {watchingHabits.map((habit, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{habit.category}</span>
                          <span>{habit.hours}h ({habit.percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${habit.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Category Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Category Analysis</CardTitle>
                <CardDescription>Detailed breakdown of your spending habits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {categorySpending.map((category, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{category.name}</h4>
                        <Badge style={{ backgroundColor: category.color, color: 'white' }}>
                          {category.value}%
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold">${category.amount}</p>
                      <p className="text-sm text-gray-600">Total spent in this category</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Purchased Wireless Headphones</p>
                      <p className="text-sm text-gray-600">From @techguru's recommendation • $199.99</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Liked @fashionista's summer collection reel</p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                    </div>
                    <Heart className="w-4 h-4 text-red-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Added skincare set to wishlist</p>
                      <p className="text-sm text-gray-600">From @beautyexpert's routine video</p>
                    </div>
                    <Badge variant="outline">Saved</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="roles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Role Management</CardTitle>
                <CardDescription>Switch between different user roles to access various features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className={`cursor-pointer transition-all ${activeRole === 'consumer' ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-md'}`}>
                    <CardContent className="p-6 text-center">
                      <User className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                      <h3 className="font-semibold mb-2">Consumer</h3>
                      <p className="text-sm text-gray-600 mb-4">Browse and purchase products from influencer recommendations</p>
                      <Button 
                        onClick={() => handleRoleChange('consumer')}
                        variant={activeRole === 'consumer' ? 'default' : 'outline'}
                        className="w-full"
                      >
                        {activeRole === 'consumer' ? 'Active' : 'Switch to Consumer'}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className={`cursor-pointer transition-all ${activeRole === 'influencer' ? 'ring-2 ring-pink-500 bg-pink-50' : 'hover:shadow-md'}`}>
                    <CardContent className="p-6 text-center">
                      <Video className="w-12 h-12 mx-auto mb-4 text-pink-500" />
                      <h3 className="font-semibold mb-2">Influencer</h3>
                      <p className="text-sm text-gray-600 mb-4">Create content and earn commissions from product promotions</p>
                      <Button 
                        onClick={() => handleRoleChange('influencer')}
                        variant={activeRole === 'influencer' ? 'default' : 'outline'}
                        className="w-full"
                      >
                        {activeRole === 'influencer' ? 'Active' : 'Switch to Influencer'}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className={`cursor-pointer transition-all ${activeRole === 'vendor' ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:shadow-md'}`}>
                    <CardContent className="p-6 text-center">
                      <Store className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                      <h3 className="font-semibold mb-2">Vendor</h3>
                      <p className="text-sm text-gray-600 mb-4">Manage products and create marketing campaigns</p>
                      <Button 
                        onClick={() => handleRoleChange('vendor')}
                        variant={activeRole === 'vendor' ? 'default' : 'outline'}
                        className="w-full"
                      >
                        {activeRole === 'vendor' ? 'Active' : 'Switch to Vendor'}
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Current Role: {activeRole.charAt(0).toUpperCase() + activeRole.slice(1)}</h4>
                  <p className="text-sm text-gray-600">
                    {activeRole === 'consumer' && "You can browse products, watch reels, and make purchases."}
                    {activeRole === 'influencer' && "You can create content, promote products, and earn commissions."}
                    {activeRole === 'vendor' && "You can manage products, create campaigns, and track sales."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
