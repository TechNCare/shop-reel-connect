
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share, ShoppingCart, Play, User, MessageCircle } from "lucide-react";

const ConsumerFeed = () => {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(0);

  const mockVideos = [
    {
      id: 1,
      creator: "@techreviewer_mike",
      product: "Premium Wireless Headphones",
      price: 199.99,
      likes: 1240,
      comments: 89,
      description: "These headphones changed my gaming experience! Crystal clear audio and super comfortable 🎧✨",
      thumbnail: "🎧"
    },
    {
      id: 2,
      creator: "@fashionista_sarah",
      product: "Summer Floral Dress",
      price: 79.99,
      likes: 2100,
      comments: 156,
      description: "Perfect for any summer occasion! The fabric is so soft and the fit is amazing 👗💖",
      thumbnail: "👗"
    },
    {
      id: 3,
      creator: "@skincare_guru",
      product: "Organic Vitamin C Serum",
      price: 45.99,
      likes: 890,
      comments: 67,
      description: "This serum gave me the glow I've been searching for! See the difference in just 2 weeks ✨",
      thumbnail: "🧴"
    }
  ];

  const handleBuyNow = (product: string, price: number) => {
    alert(`Redirecting to Shopify checkout for ${product} - $${price}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
        <Button variant="ghost" onClick={() => navigate('/')} className="text-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-bold">Reelit Feed</h1>
        <Button variant="ghost" onClick={() => navigate('/chat')} className="text-white">
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>

      {/* Feed Container */}
      <div className="pt-16">
        {/* Horizontal Creator Tabs */}
        <div className="flex gap-2 p-4 overflow-x-auto">
          {mockVideos.map((video, index) => (
            <Button
              key={video.id}
              variant={currentVideo === index ? "default" : "ghost"}
              onClick={() => setCurrentVideo(index)}
              className="flex-shrink-0 text-white"
            >
              <User className="w-4 h-4 mr-2" />
              {video.creator}
            </Button>
          ))}
        </div>

        {/* Video Content */}
        <div className="relative h-[calc(100vh-8rem)]">
          <Card className="h-full bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 border-none">
            <CardContent className="h-full p-0 relative overflow-hidden">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="text-center">
                  <div className="text-8xl mb-4">{mockVideos[currentVideo].thumbnail}</div>
                  <Button variant="ghost" className="text-white/80 mb-8">
                    <Play className="w-12 h-12" />
                  </Button>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-end">
                  <div className="flex-1">
                    <p className="text-lg mb-2">{mockVideos[currentVideo].description}</p>
                    <p className="text-white/80 mb-4">by {mockVideos[currentVideo].creator}</p>
                    
                    {/* Product Info */}
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-4">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-white">{mockVideos[currentVideo].product}</h3>
                            <p className="text-2xl font-bold text-orange-300">${mockVideos[currentVideo].price}</p>
                          </div>
                          <Button 
                            onClick={() => handleBuyNow(mockVideos[currentVideo].product, mockVideos[currentVideo].price)}
                            className="bg-orange-500 hover:bg-orange-600"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Buy Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4 ml-4">
                    <Button variant="ghost" className="flex flex-col items-center text-white">
                      <Heart className="w-6 h-6 mb-1" />
                      <span className="text-sm">{mockVideos[currentVideo].likes}</span>
                    </Button>
                    <Button variant="ghost" className="flex flex-col items-center text-white">
                      <MessageCircle className="w-6 h-6 mb-1" />
                      <span className="text-sm">{mockVideos[currentVideo].comments}</span>
                    </Button>
                    <Button variant="ghost" className="text-white">
                      <Share className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommended Products */}
        <div className="p-4 bg-gray-900">
          <h3 className="text-lg font-semibold mb-4">You might also like</h3>
          <div className="flex gap-4 overflow-x-auto">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="flex-shrink-0 w-48 bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="text-4xl mb-2">🎯</div>
                  <h4 className="font-medium text-white">Similar Product</h4>
                  <p className="text-orange-300 font-bold">$99.99</p>
                  <Badge variant="secondary" className="mt-2">AI Recommended</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerFeed;
