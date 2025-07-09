
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Store, Users, Video, BarChart3, MessageCircle, Smartphone, Zap, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Reel<span className="text-orange-300">it</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              The future of social commerce. Where creators, brands, and shoppers connect through engaging video content.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Video className="w-4 h-4 mr-2" />
                TikTok-Style Feed
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Store className="w-4 h-4 mr-2" />
                Shopify Integration
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                Real-time Chat
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Choose Your Role</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <Store className="w-16 h-16 mx-auto text-orange-300 mb-4" />
              <CardTitle className="text-white text-2xl">Vendor</CardTitle>
              <CardDescription className="text-gray-200">
                Connect your Shopify store, manage campaigns, and partner with influencers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate('/vendor')} className="w-full bg-orange-500 hover:bg-orange-600">
                Vendor Dashboard
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <Users className="w-16 h-16 mx-auto text-pink-300 mb-4" />
              <CardTitle className="text-white text-2xl">Influencer</CardTitle>
              <CardDescription className="text-gray-200">
                Create engaging content, earn commissions, and grow your audience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate('/influencer')} className="w-full bg-pink-500 hover:bg-pink-600">
                Creator Studio
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <Smartphone className="w-16 h-16 mx-auto text-purple-300 mb-4" />
              <CardTitle className="text-white text-2xl">Consumer</CardTitle>
              <CardDescription className="text-gray-200">
                Discover products through engaging videos and shop seamlessly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate('/consumer')} className="w-full bg-purple-500 hover:bg-purple-600">
                Start Shopping
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center text-white">
            <Zap className="w-12 h-12 mx-auto text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Sync</h3>
            <p className="opacity-80">Instant Shopify integration with live inventory updates</p>
          </div>
          <div className="text-center text-white">
            <TrendingUp className="w-12 h-12 mx-auto text-green-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
            <p className="opacity-80">Smart content discovery powered by machine learning</p>
          </div>
          <div className="text-center text-white">
            <MessageCircle className="w-12 h-12 mx-auto text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="opacity-80">Connect vendors, creators, and customers instantly</p>
          </div>
          <div className="text-center text-white">
            <BarChart3 className="w-12 h-12 mx-auto text-red-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="opacity-80">Track performance and optimize your campaigns</p>
          </div>
        </div>
      </div>

      {/* Admin Access */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Button 
            onClick={() => navigate('/admin')} 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10"
          >
            Admin Panel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
