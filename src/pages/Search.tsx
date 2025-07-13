
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon, TrendingUp, Hash } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const trendingHashtags = [
    "#fashion", "#tech", "#beauty", "#lifestyle", "#fitness", "#food", "#travel", "#music"
  ];

  const trendingProducts = [
    { name: "Wireless Headphones", price: "$199", image: "🎧" },
    { name: "Summer Dress", price: "$79", image: "👗" },
    { name: "Skincare Set", price: "$45", image: "🧴" },
    { name: "Sneakers", price: "$120", image: "👟" }
  ];

  const suggestedCreators = [
    { name: "@techreviewer_mike", followers: "12.5K", image: "👨‍💻" },
    { name: "@fashionista_sarah", followers: "25.8K", image: "👩‍🎨" },
    { name: "@lifestyle_jenny", followers: "8.2K", image: "✨" },
    { name: "@fitness_coach", followers: "18.9K", image: "💪" }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="pt-4 mb-6">
        <h1 className="text-2xl font-bold mb-4">Discover</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search creators, products, hashtags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Trending Hashtags */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <Hash className="w-5 h-5 mr-2 text-purple-400" />
          <h2 className="text-lg font-semibold">Trending Hashtags</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingHashtags.map((hashtag) => (
            <Badge key={hashtag} variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
              {hashtag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Trending Products */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 mr-2 text-orange-400" />
          <h2 className="text-lg font-semibold">Trending Products</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {trendingProducts.map((product) => (
            <Card key={product.name} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">{product.image}</div>
                <h3 className="font-medium text-white text-sm">{product.name}</h3>
                <p className="text-orange-400 font-bold">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Suggested Creators */}
      <div>
        <h2 className="text-lg font-semibold mb-3">Suggested Creators</h2>
        <div className="space-y-3">
          {suggestedCreators.map((creator) => (
            <Card key={creator.name} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{creator.image}</div>
                    <div>
                      <p className="font-medium text-white">{creator.name}</p>
                      <p className="text-sm text-gray-400">{creator.followers} followers</p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
