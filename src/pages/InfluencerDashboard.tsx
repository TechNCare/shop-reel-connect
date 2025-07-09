
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Video, Upload, DollarSign, Eye, Heart, Instagram } from "lucide-react";
import { toast } from "sonner";

const InfluencerDashboard = () => {
  const navigate = useNavigate();
  const [isInstagramConnected, setIsInstagramConnected] = useState(false);

  const mockVideos = [
    { id: 1, title: "Tech Review: Gaming Headphones", views: 15420, likes: 1240, earnings: 85.50, status: "Live" },
    { id: 2, title: "Skincare Routine Essentials", views: 8930, likes: 890, earnings: 65.20, status: "Live" },
    { id: 3, title: "Fashion Haul: Summer Vibes", views: 22100, likes: 2100, earnings: 120.75, status: "Processing" },
  ];

  const handleInstagramConnect = () => {
    setIsInstagramConnected(true);
    toast.success("Instagram account connected successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Video className="w-8 h-8 text-pink-500" />
                Creator Studio
              </h1>
              <p className="text-gray-600">Create content and earn commissions</p>
            </div>
          </div>
          <Button onClick={() => navigate('/chat')} className="bg-pink-500 hover:bg-pink-600">
            Messages
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,847.50</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">46.4K</div>
                  <p className="text-xs text-muted-foreground">+8.2K this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2K</div>
                  <p className="text-xs text-muted-foreground">Great engagement!</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Videos</CardTitle>
                  <Video className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">2 processing</p>
                </CardContent>
              </Card>
            </div>

            {/* Performance Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">📈 Performance chart coming soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Content</h2>
              <Button className="bg-pink-500 hover:bg-pink-600">
                <Upload className="w-4 h-4 mr-2" />
                Upload Video
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockVideos.map((video) => (
                <Card key={video.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{video.title}</h3>
                        <div className="flex gap-6 mt-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {video.views.toLocaleString()} views
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {video.likes.toLocaleString()} likes
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            ${video.earnings}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={video.status === "Live" ? "default" : "secondary"}>
                          {video.status}
                        </Badge>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <h2 className="text-2xl font-bold">Available Campaigns</h2>
            
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Tech Gadgets Summer Campaign</CardTitle>
                      <CardDescription>Promote premium wireless headphones</CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800">$50-150 per video</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Duration: 30 days • Min followers: 1K</p>
                      <p className="text-sm font-medium mt-1">Commission: 8% + $75 flat fee</p>
                    </div>
                    <Button className="bg-pink-500 hover:bg-pink-600">Apply</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Beauty & Skincare Collaboration</CardTitle>
                      <CardDescription>Showcase organic skincare products</CardDescription>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">$30-100 per video</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Duration: 45 days • Min followers: 500</p>
                      <p className="text-sm font-medium mt-1">Commission: 12% + $45 flat fee</p>
                    </div>
                    <Button className="bg-pink-500 hover:bg-pink-600">Apply</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  Instagram Integration
                </CardTitle>
                <CardDescription>
                  Connect your Instagram account to import follower data and verification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isInstagramConnected ? (
                  <Button onClick={handleInstagramConnect} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Instagram className="w-4 h-4 mr-2" />
                    Connect Instagram Account
                  </Button>
                ) : (
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">@your_instagram_handle</p>
                        <p className="text-sm text-gray-600">15.2K followers • Verified ✓</p>
                      </div>
                    </div>
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

export default InfluencerDashboard;
