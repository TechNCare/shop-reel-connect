
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Star, ShoppingCart } from "lucide-react";

interface TrendingProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  sales: number;
  trending: boolean;
}

const TrendingCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("trending");

  const trendingProducts: TrendingProduct[] = [
    {
      id: 1,
      name: "Wireless AirPods Pro",
      price: 249.99,
      originalPrice: 299.99,
      image: "🎧",
      category: "Electronics",
      rating: 4.8,
      sales: 1240,
      trending: true
    },
    {
      id: 2,
      name: "Premium Skincare Set",
      price: 89.99,
      originalPrice: 120.99,
      image: "🧴",
      category: "Beauty",
      rating: 4.9,
      sales: 856,
      trending: true
    },
    {
      id: 3,
      name: "Designer Sneakers",
      price: 199.99,
      image: "👟",
      category: "Fashion",
      rating: 4.7,
      sales: 2103,
      trending: true
    },
    {
      id: 4,
      name: "Smart Fitness Watch",
      price: 299.99,
      originalPrice: 399.99,
      image: "⌚",
      category: "Fitness",
      rating: 4.6,
      sales: 945,
      trending: false
    },
    {
      id: 5,
      name: "Organic Coffee Blend",
      price: 24.99,
      image: "☕",
      category: "Food",
      rating: 4.9,
      sales: 3245,
      trending: false
    }
  ];

  const categories = [
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "bestselling", label: "Best Selling", icon: Star }
  ];

  const filteredProducts = activeCategory === "trending" 
    ? trendingProducts.filter(p => p.trending)
    : trendingProducts.filter(p => p.sales > 1000);

  return (
    <div className="px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-200">
      {/* Category Tabs */}
      <div className="flex gap-2 mb-3">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-1 rounded-full transition-all instagram-btn-primary font-semibold ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-foreground border border-border hover:bg-muted"
              }`}
            >
              <Icon className="w-3 h-3" />
              {category.label}
            </Button>
          );
        })}
      </div>

      {/* Products Carousel */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="min-w-[140px] bg-white/90 backdrop-blur-sm border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <CardContent className="p-3">
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
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
                <Badge variant="secondary" className="text-xs px-2 py-0.5">
                  {product.sales.toLocaleString()} sold
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {/* See All Card */}
        <Card className="min-w-[100px] bg-gradient-to-br from-purple-100 to-pink-100 border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
          <CardContent className="p-3 h-full flex flex-col items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-purple-600 mb-2" />
            <span className="text-xs font-medium text-purple-700">See All</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrendingCarousel;
