import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Store, Plus, DollarSign, Users, BarChart3, Settings, Target, TrendingUp, Zap } from "lucide-react";
import { toast } from "sonner";
import ReelitAds from "@/components/ReelitAds";

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [shopifyUrl, setShopifyUrl] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const mockProducts = [
    { id: 1, name: "Premium Wireless Headphones", price: 199.99, inventory: 45, campaigns: 3, sales: 1240 },
    { id: 2, name: "Smart Fitness Watch", price: 299.99, inventory: 23, campaigns: 2, sales: 856 },
    { id: 3, name: "Organic Skincare Set", price: 79.99, inventory: 67, campaigns: 5, sales: 2103 },
    { id: 4, name: "Designer Sneakers", price: 149.99, inventory: 31, campaigns: 1, sales: 678 },
  ];

  const handleShopifyConnect = () => {
    if (shopifyUrl) {
      setIsConnected(true);
      toast.success("Shopify store connected successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate('/app/profile')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Store className="w-8 h-8 text-orange-500" />
                Vendor Dashboard
              </h1>
              <p className="text-gray-600">Manage your products, campaigns, and boost sales with AI</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => navigate('/chat')} variant="outline">
              Messages
            </Button>
            <Button onClick={() => navigate('/wallet')} className="bg-green-500 hover:bg-green-600">
              <DollarSign className="w-4 h-4 mr-2" />
              Wallet
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="ads" className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              Reelit Ads
            </TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Enhanced Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-800">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-900">$18,247</div>
                  <p className="text-xs text-green-700">+28.5% from last month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-800">Active Campaigns</CardTitle>
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-900">12</div>
                  <p className="text-xs text-blue-700">5 ending this week</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-800">Partner Influencers</CardTitle>
                  <Users className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-900">38</div>
                  <p className="text-xs text-purple-700">+12 new this month</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-100 to-red-100 border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-orange-800">Ad Performance</CardTitle>
                  <Target className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-900">4.8%</div>
                  <p className="text-xs text-orange-700">Conversion rate (+0.9%)</p>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights Card */}
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  AI-Powered Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-sm">📈 Your "Premium Wireless Headphones" are trending! Consider increasing ad budget by 40%</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-sm">🎯 Target audience aged 25-35 shows 3x higher conversion rates for your fitness products</p>
                </div>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-sm">💡 Best posting time for your content: 7-9 PM on weekdays</p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium text-green-800">New sale from @fashionista_sarah campaign</p>
                      <p className="text-sm text-green-600">Premium Wireless Headphones - $199.99 • Commission: $19.99</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">+$19.99</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium text-blue-800">@techreviewer_mike posted new content</p>
                      <p className="text-sm text-blue-600">Smart Fitness Watch campaign • Views: 15.2K</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Trending</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium text-purple-800">Ad campaign "Summer Sale" completed</p>
                      <p className="text-sm text-purple-600">89 conversions • ROI: 240%</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Completed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Product Catalog</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{product.name}</h3>
                          {product.sales > 1000 && (
                            <Badge className="bg-yellow-100 text-yellow-800">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <p className="text-2xl font-bold text-orange-500 mb-3">${product.price}</p>
                        <div className="flex gap-4">
                          <Badge variant="outline" className="border-green-200 text-green-700">
                            Stock: {product.inventory}
                          </Badge>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            {product.campaigns} Campaigns
                          </Badge>
                          <Badge variant="outline" className="border-purple-200 text-purple-700">
                            {product.sales} Sales
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                          Create Campaign
                        </Button>
                        <Button size="sm" variant="outline" className="border-purple-200 text-purple-700">
                          <Target className="w-4 h-4 mr-1" />
                          Advertise
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Campaign Management</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Plus className="w-4 h-4 mr-2" />
                New Campaign
              </Button>
            </div>
            
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Summer Tech Collection</CardTitle>
                      <CardDescription>Premium Wireless Headphones campaign</CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Budget</p>
                      <p className="font-semibold">$2,500</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">14 days left</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Influencers</p>
                      <p className="font-semibold">8 active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ads">
            <ReelitAds />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Shopify Integration
                </CardTitle>
                <CardDescription>
                  Connect your Shopify store to sync products and orders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isConnected ? (
                  <>
                    <div>
                      <Label htmlFor="shopify-url">Shopify Store URL</Label>
                      <Input
                        id="shopify-url"
                        placeholder="your-store.myshopify.com"
                        value={shopifyUrl}
                        onChange={(e) => setShopifyUrl(e.target.value)}
                      />
                    </div>
                    <Button onClick={handleShopifyConnect} className="bg-orange-500 hover:bg-orange-600">
                      Connect Shopify Store
                    </Button>
                  </>
                ) : (
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800 font-medium">✅ Shopify store connected successfully!</p>
                    <p className="text-sm text-green-600 mt-1">Products and orders are now syncing in real-time.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard;
