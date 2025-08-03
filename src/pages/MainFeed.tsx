/**
 * MainFeed Component - Instagram-like Social Commerce Feed
 * 
 * Features:
 * - Instagram-exact mobile layout and spacing
 * - Interactive like/save/share buttons
 * - Seamless product purchase integration
 * - AI-powered content recommendations
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Search, Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import TrendingCarousel from "@/components/TrendingCarousel";
import ReelContent from "@/components/ReelContent";
import AIRecommendations from "@/components/AIRecommendations";

const MainFeed = () => {
  // State management for user interactions
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set());
  const [followedUsers, setFollowedUsers] = useState<Set<string>>(new Set());

  // Sample reels data (converted to work with existing ReelContent component)
  const sampleReels = [
    {
      id: 1,
      creator: {
        username: "@techreviewer_mike",
        avatar: "👨‍💻",
        isVerified: true,
        followers: 125000
      },
      product: {
        name: "Premium Wireless Headphones",
        price: 199.99,
        originalPrice: 249.99,
        vendor: "AudioTech Pro"
      },
      content: {
        type: "video" as const,
        thumbnail: "🎧",
        description: "These headphones changed my gaming experience! Crystal clear audio, noise cancellation is incredible 🎧✨ #TechReview #Gaming #Audio",
        duration: 45
      },
      engagement: {
        likes: 12400,
        comments: 890,
        shares: 234,
        isLiked: false,
        isSaved: false
      },
      isSponsored: true,
      category: "Technology"
    },
    {
      id: 2,
      creator: {
        username: "@fashionista_sarah",
        avatar: "👩‍🎨",
        isVerified: true,
        followers: 258000
      },
      product: {
        name: "Summer Floral Dress",
        price: 79.99,
        originalPrice: 120.00,
        vendor: "Boho Chic Co"
      },
      content: {
        type: "video" as const,
        thumbnail: "👗",
        description: "Perfect for any summer occasion! The fabric is so soft and the fit is amazing. Get 35% off with my link! 👗💖 #SummerStyle #Fashion #OOTD",
        duration: 30
      },
      engagement: {
        likes: 21000,
        comments: 1560,
        shares: 445,
        isLiked: true,
        isSaved: true
      },
      isSponsored: false,
      category: "Fashion"
    },
    {
      id: 3,
      creator: {
        username: "@fitness_jenny",
        avatar: "💪",
        isVerified: false,
        followers: 89000
      },
      product: {
        name: "Smart Fitness Watch",
        price: 299.99,
        vendor: "FitTech"
      },
      content: {
        type: "video" as const,
        thumbnail: "⌚",
        description: "This fitness watch tracks everything! Heart rate, sleep, workouts, and even stress levels 💪⌚ #Fitness #HealthTech",
        duration: 60
      },
      engagement: {
        likes: 8900,
        comments: 567,
        shares: 123,
        isLiked: false,
        isSaved: false
      },
      isSponsored: true,
      category: "Fitness"
    }
  ];

  const handleBuyNow = (reelId: number) => {
    const reel = sampleReels.find(r => r.id === reelId);
    if (reel?.product) {
      toast.success(`🛒 Opening ${reel.product.name} - $${reel.product.price}`);
    }
  };

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
        toast.success("❤️ Removed from likes");
      } else {
        newLiked.add(postId);
        toast.success("❤️ Liked!");
      }
      return newLiked;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Instagram-style Mobile Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold font-instagram-heading tracking-tight">
            Reelit
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Camera className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <MessageCircle className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Trending Products Carousel */}
      <div className="border-b border-border bg-background">
        <TrendingCarousel />
      </div>

      {/* AI Recommendations */}
      <div className="px-4">
        <AIRecommendations context="feed" />
      </div>

      {/* Main Feed Content */}
      <div className="max-w-lg mx-auto bg-background">
        {sampleReels.map((reel, index) => (
          <div key={reel.id} className="border-b border-border">
            <ReelContent 
              reel={reel} 
              onBuyNow={handleBuyNow}
            />
            
            {/* Insert AI recommendations every 3 reels */}
            {(index + 1) % 3 === 0 && (
              <div className="p-4">
                <AIRecommendations 
                  context="feed" 
                  currentProduct={reel.id}
                />
              </div>
            )}
          </div>
        ))}

        {/* End of Feed */}
        <div className="p-8 text-center">
          <p className="text-muted-foreground text-sm">You're all caught up! 🎉</p>
          <p className="text-muted-foreground text-sm mt-1">Follow more creators to see more content</p>
        </div>
      </div>
    </div>
  );
};

export default MainFeed;