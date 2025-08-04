/**
 * Consumer Profile Component
 * 
 * Displays consumer-specific profile information including:
 * - Purchase history and analytics
 * - Spending patterns by category
 * - Watching habits and engagement metrics
 * - Recent purchase activity
 * 
 * Features:
 * - Mobile-first responsive design matching Instagram layout
 * - Interactive charts with horizontal scrolling for mobile
 * - Clean typography using SF Pro fonts
 * - Accessible color contrast following Instagram design system
 */

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, TrendingUp, Eye, DollarSign, BarChart3 } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Consumer data interfaces for type safety
interface PurchaseHistoryData {
  month: string;
  purchases: number;
  spent: number;
  savings: number;
}

interface CategorySpendingData {
  name: string;
  value: number;
  color: string;
  amount: number;
}

interface WatchingHabitData {
  category: string;
  hours: number;
  percentage: number;
}

interface RecentPurchaseData {
  product: string;
  price: number;
  influencer: string;
  date: string;
  category: string;
}

const ConsumerProfile = () => {
  // Sample data - in production, this would come from API
  const purchaseHistory: PurchaseHistoryData[] = [
    { month: "Jan", purchases: 3, spent: 245, savings: 35 },
    { month: "Feb", purchases: 5, spent: 420, savings: 65 },
    { month: "Mar", purchases: 4, spent: 380, savings: 45 },
    { month: "Apr", purchases: 6, spent: 520, savings: 78 },
    { month: "May", purchases: 7, spent: 650, savings: 95 },
    { month: "Jun", purchases: 5, spent: 480, savings: 72 },
  ];

  const categorySpending: CategorySpendingData[] = [
    { name: "Fashion", value: 45, color: "hsl(var(--primary))", amount: 890 },
    { name: "Tech", value: 25, color: "hsl(var(--accent))", amount: 520 },
    { name: "Beauty", value: 20, color: "hsl(var(--muted-foreground))", amount: 410 },
    { name: "Fitness", value: 10, color: "hsl(var(--destructive))", amount: 185 },
  ];

  const watchingHabits: WatchingHabitData[] = [
    { category: "Tech Reviews", hours: 12, percentage: 35 },
    { category: "Fashion", hours: 8, percentage: 25 },
    { category: "Beauty", hours: 6, percentage: 20 },
    { category: "Lifestyle", hours: 4, percentage: 12 },
    { category: "Fitness", hours: 3, percentage: 8 },
  ];

  const recentPurchases: RecentPurchaseData[] = [
    { product: "Wireless Headphones", price: 199.99, influencer: "@techguru", date: "2 days ago", category: "Tech" },
    { product: "Summer Dress", price: 89.99, influencer: "@fashionista", date: "1 week ago", category: "Fashion" },
    { product: "Skincare Set", price: 149.99, influencer: "@beautyexpert", date: "2 weeks ago", category: "Beauty" },
    { product: "Yoga Mat", price: 45.99, influencer: "@fitnessjoe", date: "3 weeks ago", category: "Fitness" },
  ];

  return (
    <div className="space-y-6">
      {/* Consumer Analytics Header */}
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold instagram-heading">Consumer Analytics</h2>
      </div>

      {/* Quick Stats Grid - Mobile Responsive */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="instagram-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">+8 this month</p>
          </CardContent>
        </Card>

        <Card className="instagram-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,695</div>
            <p className="text-xs text-muted-foreground">+$520 this month</p>
          </CardContent>
        </Card>

        <Card className="instagram-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$390</div>
            <p className="text-xs text-muted-foreground">From referral discounts</p>
          </CardContent>
        </Card>

        <Card className="instagram-card">
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

      {/* Purchase Trends Chart - Mobile Optimized */}
      <Card className="instagram-card">
        <CardHeader>
          <CardTitle>Purchase & Spending Trends</CardTitle>
          <CardDescription>Your shopping patterns over time</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Horizontal scroll container for mobile devices */}
          <div className="w-full overflow-x-auto hide-scrollbar">
            <ChartContainer
              config={{
                purchases: { label: "Purchases", color: "hsl(var(--primary))" },
                spent: { label: "Amount Spent ($)", color: "hsl(var(--accent))" },
                savings: { label: "Savings ($)", color: "hsl(var(--muted-foreground))" },
              }}
              className="h-80 min-w-[600px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={purchaseHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="purchases" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line type="monotone" dataKey="spent" stroke="hsl(var(--accent))" strokeWidth={2} />
                  <Line type="monotone" dataKey="savings" stroke="hsl(var(--muted-foreground))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Category Analytics - Responsive Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Spending by Category Pie Chart */}
        <Card className="instagram-card">
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                fashion: { label: "Fashion", color: "hsl(var(--primary))" },
                tech: { label: "Tech", color: "hsl(var(--accent))" },
                beauty: { label: "Beauty", color: "hsl(var(--muted-foreground))" },
                fitness: { label: "Fitness", color: "hsl(var(--destructive))" },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categorySpending}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="hsl(var(--primary))"
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

        {/* Watching Habits Progress Bars */}
        <Card className="instagram-card">
          <CardHeader>
            <CardTitle>Watching Habits</CardTitle>
            <CardDescription>Content categories you engage with most</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {watchingHabits.map((habit, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm instagram-body">
                    <span className="font-medium">{habit.category}</span>
                    <span className="text-muted-foreground">{habit.hours}h ({habit.percentage}%)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${habit.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Purchases List */}
      <Card className="instagram-card">
        <CardHeader>
          <CardTitle>Recent Purchases</CardTitle>
          <CardDescription>Your latest purchases through influencer referrals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPurchases.map((purchase, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium instagram-body">{purchase.product}</h4>
                    <Badge variant="outline" className="text-xs">
                      {purchase.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground instagram-timestamp">
                    Referred by {purchase.influencer} • {purchase.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">${purchase.price}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Category Analysis */}
      <Card className="instagram-card">
        <CardHeader>
          <CardTitle>Category Analysis</CardTitle>
          <CardDescription>Detailed breakdown of your spending habits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categorySpending.map((category, index) => (
              <div key={index} className="p-4 border border-border rounded-lg bg-background">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium instagram-heading">{category.name}</h4>
                  <Badge style={{ backgroundColor: category.color, color: 'white' }}>
                    {category.value}%
                  </Badge>
                </div>
                <p className="text-2xl font-bold text-primary">${category.amount}</p>
                <p className="text-sm text-muted-foreground">Total spent in this category</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsumerProfile;