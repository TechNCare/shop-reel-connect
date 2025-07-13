
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, ShoppingCart, Play, Bookmark, MoreHorizontal } from "lucide-react";

interface ReelData {
  id: number;
  creator: {
    username: string;
    avatar: string;
    isVerified: boolean;
    followers: number;
  };
  product?: {
    name: string;
    price: number;
    originalPrice?: number;
    vendor: string;
  };
  content: {
    type: "video" | "image";
    thumbnail: string;
    description: string;
    duration?: number;
  };
  engagement: {
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
    isSaved: boolean;
  };
  isSponsored: boolean;
  category: string;
}

interface ReelContentProps {
  reel: ReelData;
  onBuyNow?: (productId: number) => void;
}

const ReelContent = ({ reel, onBuyNow }: ReelContentProps) => {
  const [isLiked, setIsLiked] = useState(reel.engagement.isLiked);
  const [isSaved, setIsSaved] = useState(reel.engagement.isSaved);
  const [likesCount, setLikesCount] = useState(reel.engagement.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <Card className="relative h-[calc(100vh-12rem)] bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 border-none overflow-hidden">
      <CardContent className="h-full p-0 relative">
        {/* Background Content */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-center">
            <div className="text-8xl mb-4">{reel.content.thumbnail}</div>
            {reel.content.type === "video" && (
              <Button variant="ghost" className="text-white/80 mb-8">
                <Play className="w-12 h-12" />
              </Button>
            )}
          </div>
        </div>

        {/* Sponsored Badge */}
        {reel.isSponsored && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-yellow-500 text-black font-medium">
              Sponsored
            </Badge>
          </div>
        )}

        {/* Creator Info */}
        <div className="absolute top-4 right-4 left-4 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {reel.creator.avatar}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-medium text-sm">
                    {reel.creator.username}
                  </span>
                  {reel.creator.isVerified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <span className="text-white/70 text-xs">
                  {formatNumber(reel.creator.followers)} followers
                </span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-white">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex justify-between items-end">
            <div className="flex-1 pr-4">
              <p className="text-white text-base mb-2 line-clamp-3">
                {reel.content.description}
              </p>
              
              {/* Product Info */}
              {reel.product && (
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-4">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-white text-sm">
                          {reel.product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-orange-300">
                            ${reel.product.price}
                          </span>
                          {reel.product.originalPrice && (
                            <span className="text-white/60 line-through text-sm">
                              ${reel.product.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-white/70 text-xs">
                          by {reel.product.vendor}
                        </span>
                      </div>
                      <Button 
                        onClick={() => onBuyNow?.(reel.id)}
                        className="bg-orange-500 hover:bg-orange-600 shadow-lg"
                        size="sm"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <Button 
                variant="ghost" 
                className="flex flex-col items-center text-white hover:bg-white/20 p-2"
                onClick={handleLike}
              >
                <Heart className={`w-6 h-6 mb-1 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="text-xs">{formatNumber(likesCount)}</span>
              </Button>
              
              <Button variant="ghost" className="flex flex-col items-center text-white hover:bg-white/20 p-2">
                <MessageCircle className="w-6 h-6 mb-1" />
                <span className="text-xs">{formatNumber(reel.engagement.comments)}</span>
              </Button>
              
              <Button variant="ghost" className="flex flex-col items-center text-white hover:bg-white/20 p-2">
                <Share className="w-6 h-6 mb-1" />
                <span className="text-xs">{formatNumber(reel.engagement.shares)}</span>
              </Button>
              
              <Button 
                variant="ghost" 
                className="flex flex-col items-center text-white hover:bg-white/20 p-2"
                onClick={handleSave}
              >
                <Bookmark className={`w-6 h-6 ${isSaved ? 'fill-white' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReelContent;
