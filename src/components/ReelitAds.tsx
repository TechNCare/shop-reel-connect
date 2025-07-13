
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Play, Target, DollarSign, Users, Calendar, BarChart3, Eye } from "lucide-react";
import { toast } from "sonner";

interface AdCampaign {
  id: number;
  productId: number;
  productName: string;
  budget: number;
  duration: number;
  targetAudience: {
    ageRange: [number, number];
    interests: string[];
    location: string[];
  };
  adContent: {
    title: string;
    description: string;
    callToAction: string;
  };
  status: "draft" | "active" | "paused" | "completed";
  performance: {
    views: number;
    clicks: number;
    conversions: number;
    spent: number;
  };
}

const ReelitAds = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [newCampaign, setNewCampaign] = useState({
    productId: "",
    budget: 100,
    duration: 7,
    ageRange: [18, 45] as [number, number],
    interests: [] as string[],
    locations: [] as string[],
    title: "",
    description: "",
    callToAction: "Shop Now"
  });

  const [campaigns] = useState<AdCampaign[]>([
    {
      id: 1,
      productId: 1,
      productName: "Premium Wireless Headphones",
      budget: 500,
      duration: 14,
      targetAudience: {
        ageRange: [18, 35],
        interests: ["Technology", "Gaming", "Music"],
        location: ["United States", "Canada"]
      },
      adContent: {
        title: "Experience Premium Audio",
        description: "Crystal clear sound meets comfort. Perfect for gaming and music lovers!",
        callToAction: "Get 20% Off"
      },
      status: "active",
      performance: {
        views: 24567,
        clicks: 1234,
        conversions: 89,
        spent: 187.50
      }
    },
    {
      id: 2,
      productId: 2,
      productName: "Smart Fitness Watch",
      budget: 300,
      duration: 10,
      targetAudience: {
        ageRange: [25, 50],
        interests: ["Fitness", "Health", "Technology"],
        location: ["United States"]
      },
      adContent: {
        title: "Track Your Fitness Journey",
        description: "Smart features for smarter workouts. Monitor everything that matters!",
        callToAction: "Start Tracking"
      },
      status: "active",
      performance: {
        views: 18943,
        clicks: 876,
        conversions: 67,
        spent: 142.30
      }
    }
  ]);

  const availableProducts = [
    { id: 1, name: "Premium Wireless Headphones", price: 199.99 },
    { id: 2, name: "Smart Fitness Watch", price: 299.99 },
    { id: 3, name: "Organic Skincare Set", price: 79.99 }
  ];

  const availableInterests = [
    "Technology", "Fashion", "Beauty", "Fitness", "Gaming", "Music", 
    "Travel", "Food", "Home Decor", "Pets", "Books", "Sports"
  ];

  const availableLocations = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany", "France"
  ];

  const handleCreateCampaign = () => {
    if (!newCampaign.productId || !newCampaign.title || !newCampaign.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Ad campaign created successfully!");
    // Reset form
    setNewCampaign({
      productId: "",
      budget: 100,
      duration: 7,
      ageRange: [18, 45],
      interests: [],
      locations: [],
      title: "",
      description: "",
      callToAction: "Shop Now"
    });
  };

  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;
  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <Target className="w-6 h-6" />
            Reelit Ads - Boost Your Products
          </CardTitle>
          <CardDescription className="text-orange-600">
            Create targeted ad campaigns to reach your ideal customers on Reelit
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create Campaign</TabsTrigger>
          <TabsTrigger value="manage">Manage Campaigns</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Ad Campaign</CardTitle>
              <CardDescription>
                Set up a targeted advertising campaign for your products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Product Selection */}
              <div>
                <Label htmlFor="product">Select Product</Label>
                <Select value={newCampaign.productId} onValueChange={(value) => 
                  setNewCampaign(prev => ({ ...prev, productId: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a product to advertise" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableProducts.map((product) => (
                      <SelectItem key={product.id} value={product.id.toString()}>
                        {product.name} - ${product.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget & Duration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Campaign Budget: {formatCurrency(newCampaign.budget)}</Label>
                  <Slider
                    value={[newCampaign.budget]}
                    onValueChange={(value) => setNewCampaign(prev => ({ ...prev, budget: value[0] }))}
                    max={1000}
                    min={50}
                    step={25}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Duration: {newCampaign.duration} days</Label>
                  <Slider
                    value={[newCampaign.duration]}
                    onValueChange={(value) => setNewCampaign(prev => ({ ...prev, duration: value[0] }))}
                    max={30}
                    min={3}
                    step={1}
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Target Audience */}
              <div className="space-y-4">
                <h3 className="font-medium">Target Audience</h3>
                
                <div>
                  <Label>Age Range: {newCampaign.ageRange[0]} - {newCampaign.ageRange[1]} years</Label>
                  <Slider
                    value={newCampaign.ageRange}
                    onValueChange={(value) => setNewCampaign(prev => ({ 
                      ...prev, 
                      ageRange: [value[0], value[1]] as [number, number]
                    }))}
                    max={65}
                    min={13}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Interests</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {availableInterests.map((interest) => (
                      <Badge
                        key={interest}
                        variant={newCampaign.interests.includes(interest) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => {
                          setNewCampaign(prev => ({
                            ...prev,
                            interests: prev.interests.includes(interest)
                              ? prev.interests.filter(i => i !== interest)
                              : [...prev.interests, interest]
                          }));
                        }}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Target Locations</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {availableLocations.map((location) => (
                      <Badge
                        key={location}
                        variant={newCampaign.locations.includes(location) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => {
                          setNewCampaign(prev => ({
                            ...prev,
                            locations: prev.locations.includes(location)
                              ? prev.locations.filter(l => l !== location)
                              : [...prev.locations, location]
                          }));
                        }}
                      >
                        {location}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ad Content */}
              <div className="space-y-4">
                <h3 className="font-medium">Ad Content</h3>
                
                <div>
                  <Label htmlFor="title">Ad Title</Label>
                  <Input
                    id="title"
                    value={newCampaign.title}
                    onChange={(e) => setNewCampaign(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Create an engaging title for your ad"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Ad Description</Label>
                  <Textarea
                    id="description"
                    value={newCampaign.description}
                    onChange={(e) => setNewCampaign(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your product and its benefits"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="cta">Call to Action</Label>
                  <Select value={newCampaign.callToAction} onValueChange={(value) => 
                    setNewCampaign(prev => ({ ...prev, callToAction: value }))
                  }>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Shop Now">Shop Now</SelectItem>
                      <SelectItem value="Buy Now">Buy Now</SelectItem>
                      <SelectItem value="Get Offer">Get Offer</SelectItem>
                      <SelectItem value="Learn More">Learn More</SelectItem>
                      <SelectItem value="Try Free">Try Free</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preview */}
              <Card className="bg-gradient-to-br from-purple-100 to-pink-100">
                <CardHeader>
                  <CardTitle className="text-sm">Ad Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-2">
                    <div className="text-4xl">📱</div>
                    <h4 className="font-semibold">{newCampaign.title || "Your Ad Title"}</h4>
                    <p className="text-sm text-gray-600">{newCampaign.description || "Your ad description will appear here"}</p>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      {newCampaign.callToAction}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={handleCreateCampaign} className="w-full bg-orange-500 hover:bg-orange-600">
                Launch Campaign
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{campaign.productName}</CardTitle>
                    <CardDescription>{campaign.adContent.title}</CardDescription>
                  </div>
                  <Badge 
                    className={
                      campaign.status === "active" ? "bg-green-100 text-green-800" :
                      campaign.status === "paused" ? "bg-yellow-100 text-yellow-800" :
                      campaign.status === "completed" ? "bg-gray-100 text-gray-800" :
                      "bg-blue-100 text-blue-800"
                    }
                  >
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <Eye className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                    <p className="text-sm text-gray-600">Views</p>
                    <p className="font-bold">{formatNumber(campaign.performance.views)}</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 mx-auto mb-1 text-green-600" />
                    <p className="text-sm text-gray-600">Clicks</p>
                    <p className="font-bold">{formatNumber(campaign.performance.clicks)}</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <p className="text-sm text-gray-600">Conversions</p>
                    <p className="font-bold">{campaign.performance.conversions}</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="w-5 h-5 mx-auto mb-1 text-orange-600" />
                    <p className="text-sm text-gray-600">Spent</p>
                    <p className="font-bold">{formatCurrency(campaign.performance.spent)}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">
                    {campaign.status === "active" ? "Pause" : "Resume"}
                  </Button>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Analytics</CardTitle>
              <CardDescription>
                Detailed performance metrics for all your campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="bg-blue-50">
                  <CardContent className="p-4 text-center">
                    <Eye className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <p className="text-2xl font-bold text-blue-800">43.5K</p>
                    <p className="text-sm text-blue-600">Total Views</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50">
                  <CardContent className="p-4 text-center">
                    <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <p className="text-2xl font-bold text-green-800">2.1K</p>
                    <p className="text-sm text-green-600">Total Clicks</p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50">
                  <CardContent className="p-4 text-center">
                    <BarChart3 className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <p className="text-2xl font-bold text-purple-800">4.8%</p>
                    <p className="text-sm text-purple-600">Conversion Rate</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Performance Insights</h3>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    📈 Your campaigns are performing 23% better than industry average
                  </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    💡 Consider increasing budget for "Premium Wireless Headphones" campaign - it's showing high conversion rates
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReelitAds;
