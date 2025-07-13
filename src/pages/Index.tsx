
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Video, MessageCircle, Zap, TrendingUp, BarChart3, Smartphone } from "lucide-react";

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
                <Smartphone className="w-4 h-4 mr-2" />
                Instagram-Like Experience
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                Real-time Chat
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/auth')} 
                className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => navigate('/auth')} 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center text-white">
            <Zap className="w-12 h-12 mx-auto text-yellow-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Universal Feed</h3>
            <p className="opacity-80">Instagram-style experience with role-based features</p>
          </div>
          <div className="text-center text-white">
            <TrendingUp className="w-12 h-12 mx-auto text-green-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Wallets</h3>
            <p className="opacity-80">Integrated wallet system for all user roles</p>
          </div>
          <div className="text-center text-white">
            <MessageCircle className="w-12 h-12 mx-auto text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Role Selection</h3>
            <p className="opacity-80">Switch between vendor, influencer, and consumer roles</p>
          </div>
          <div className="text-center text-white">
            <BarChart3 className="w-12 h-12 mx-auto text-red-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Social Commerce</h3>
            <p className="opacity-80">Seamless shopping experience through video content</p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                1
              </div>
              <CardTitle className="text-white">Sign Up</CardTitle>
              <CardDescription className="text-gray-200">
                Create your account and access the universal feed
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                2
              </div>
              <CardTitle className="text-white">Choose Role</CardTitle>
              <CardDescription className="text-gray-200">
                Select your role as vendor, influencer, or consumer
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                3
              </div>
              <CardTitle className="text-white">Start Earning</CardTitle>
              <CardDescription className="text-gray-200">
                Create content, sell products, or discover amazing deals
              </CardDescription>
            </CardHeader>
          </Card>
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
