
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Star, ShoppingCart } from "lucide-react";

interface RecommendedProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  matchScore: number;
  reason: string;
}

interface AIRecommendationsProps {
  userId?: string;
  currentProduct?: number;
  context: "feed" | "product-detail" | "checkout";
}

const AIRecommendations = ({ userId, currentProduct, context }: AIRecommendationsProps) => {
  const [recommendations, setRecommendations] = useState<RecommendedProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated AI recommendation engine
  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      
      // Simulated API call with collaborative filtering
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockRecommendations: RecommendedProduct[] = [
        {
          id: 101,
          name: "Wireless Charging Pad",
          price: 39.99,
          originalPrice: 59.99,
          image: "🔌",
          category: "Electronics",
          rating: 4.6,
          matchScore: 95,
          reason: "Users who bought similar items also purchased this"
        },
        {
          id: 102,
          name: "Premium Phone Case",
          price: 24.99,
          image: "📱",
          category: "Accessories",
          rating: 4.8,
          matchScore: 87,
          reason: "Perfect complement to your recent electronics purchases"
        },
        {
          id: 103,
          name: "Bluetooth Speaker",
          price: 79.99,
          originalPrice: 99.99,
          image: "🔊",
          category: "Audio",
          rating: 4.7,
          matchScore: 82,
          reason: "Trending in your area"
        },
        {
          id: 104,
          name: "Smart Home Hub",
          price: 149.99,
          image: "🏠",
          category: "Smart Home",
          rating: 4.5,
          matchScore: 78,
          reason: "Based on your browsing history"
        }
      ];

      setRecommendations(mockRecommendations);
      setIsLoading(false);
    };

    fetchRecommendations();
  }, [userId, currentProduct, context]);

  const getContextTitle = () => {
    switch (context) {
      case "feed":
        return "You May Also Like";
      case "product-detail":
        return "Frequently Bought Together";
      case "checkout":
        return "Complete Your Order With";
      default:
        return "Recommended For You";
    }
  };

  const getContextIcon = () => {
    switch (context) {
      case "feed":
        return Sparkles;
      case "product-detail":
        return TrendingUp;
      case "checkout":
        return ShoppingCart;
      default:
        return Star;
    }
  };

  const ContextIcon = getContextIcon();

  if (isLoading) {
    return (
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
            <span className="text-sm text-purple-700">AI is personalizing your feed...</span>
          </div>
          <div className="flex gap-3 overflow-x-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="min-w-[120px] h-[140px] bg-white/50 rounded-lg animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 my-4">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ContextIcon className="w-5 h-5 text-purple-600" />
          {getContextTitle()}
          <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
            AI Powered
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {recommendations.map((product) => (
            <Card
              key={product.id}
              className="min-w-[140px] bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-3">
                <div className="text-center">
                  <div className="relative">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                    <Badge 
                      className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5"
                    >
                      {product.matchScore}%
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-xs text-gray-900 mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-sm font-bold text-purple-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                    {product.reason}
                  </p>
                  <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-xs">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
