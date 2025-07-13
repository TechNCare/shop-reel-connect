
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreVertical, Sparkles } from "lucide-react";
import TrendingCarousel from "@/components/TrendingCarousel";
import ReelContent from "@/components/ReelContent";
import AIRecommendations from "@/components/AIRecommendations";

const MainFeed = () => {
  const [currentReel, setCurrentReel] = useState(0);

  // Enhanced sample reels with diverse content
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
        description: "These headphones changed my gaming experience! Crystal clear audio, noise cancellation is incredible, and super comfortable for long sessions 🎧✨ #TechReview #Gaming #Audio",
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
        description: "This fitness watch tracks everything! Heart rate, sleep, workouts, and even stress levels. Game changer for my fitness journey! 💪⌚ #Fitness #HealthTech",
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
    },
    {
      id: 4,
      creator: {
        username: "@skincare_guru",
        avatar: "✨",
        isVerified: true,
        followers: 340000
      },
      product: {
        name: "Vitamin C Serum Set",
        price: 89.99,
        originalPrice: 120.99,
        vendor: "GlowUp Beauty"
      },
      content: {
        type: "image" as const,
        thumbnail: "🧴",
        description: "My skin transformation with this vitamin C serum! Before & after results speak for themselves. Brighter, smoother, more radiant skin ✨🧴 #Skincare #Beauty #GlowUp"
      },
      engagement: {
        likes: 18700,
        comments: 2340,
        shares: 890,
        isLiked: false,
        isSaved: true
      },
      isSponsored: false,
      category: "Beauty"
    },
    {
      id: 5,
      creator: {
        username: "@chef_antonio",
        avatar: "👨‍🍳",
        isVerified: false,
        followers: 67000
      },
      product: {
        name: "Professional Chef Knife Set",
        price: 149.99,
        vendor: "Kitchen Masters"
      },
      content: {
        type: "video" as const,
        thumbnail: "🔪",
        description: "Professional knife set that changed my cooking game! Sharp, balanced, and beautiful. Every home cook needs these! 🔪👨‍🍳 #Cooking #KitchenTools #ChefLife",
        duration: 40
      },
      engagement: {
        likes: 9800,
        comments: 456,
        shares: 78,
        isLiked: false,
        isSaved: false
      },
      isSponsored: true,
      category: "Cooking"
    },
    {
      id: 6,
      creator: {
        username: "@travel_couple",
        avatar: "✈️",
        isVerified: false,
        followers: 156000
      },
      product: {
        name: "Travel Backpack Pro",
        price: 129.99,
        vendor: "Wanderlust Gear"
      },
      content: {
        type: "image" as const,
        thumbnail: "🎒",
        description: "This backpack survived 3 months in Southeast Asia! Waterproof, spacious, and so comfortable. Perfect travel companion! ✈️🎒 #Travel #Backpacking #Adventure"
      },
      engagement: {
        likes: 14500,
        comments: 890,
        shares: 234,
        isLiked: true,
        isSaved: false
      },
      isSponsored: false,
      category: "Travel"
    },
    {
      id: 7,
      creator: {
        username: "@home_decorator",
        avatar: "🏠",
        isVerified: true,
        followers: 201000
      },
      product: {
        name: "Smart LED Light Strips",
        price: 45.99,
        originalPrice: 79.99,
        vendor: "HomeGlow"
      },
      content: {
        type: "video" as const,
        thumbnail: "💡",
        description: "Transform any room with these smart LED strips! 16 million colors, music sync, app control. My living room has never looked better! 💡🏠 #HomeDecor #SmartHome #LED",
        duration: 35
      },
      engagement: {
        likes: 16800,
        comments: 1200,
        shares: 456,
        isLiked: false,
        isSaved: true
      },
      isSponsored: true,
      category: "Home"
    },
    {
      id: 8,
      creator: {
        username: "@pet_lover_emma",
        avatar: "🐕",
        isVerified: false,
        followers: 78000
      },
      product: {
        name: "Interactive Pet Toy",
        price: 34.99,
        vendor: "Happy Pets Co"
      },
      content: {
        type: "video" as const,
        thumbnail: "🎾",
        description: "My dog is obsessed with this toy! Keeps him entertained for hours and helps with his anxiety. Best purchase ever! 🐕🎾 #PetCare #DogToys #HappyPets",
        duration: 25
      },
      engagement: {
        likes: 7600,
        comments: 345,
        shares: 89,
        isLiked: true,
        isSaved: false
      },
      isSponsored: false,
      category: "Pets"
    },
    {
      id: 9,
      creator: {
        username: "@car_enthusiast",
        avatar: "🚗",
        isVerified: false,
        followers: 134000
      },
      product: {
        name: "Car Phone Mount Pro",
        price: 29.99,
        vendor: "DriveEasy"
      },
      content: {
        type: "image" as const,
        thumbnail: "📱",
        description: "Strongest phone mount I've ever used! Holds perfectly even on bumpy roads. Essential for every driver! 🚗📱 #CarAccessories #Driving #TechReview"
      },
      engagement: {
        likes: 11200,
        comments: 567,
        shares: 123,
        isLiked: false,
        isSaved: false
      },
      isSponsored: true,
      category: "Automotive"
    },
    {
      id: 10,
      creator: {
        username: "@yoga_meditation",
        avatar: "🧘‍♀️",
        isVerified: true,
        followers: 187000
      },
      product: {
        name: "Premium Yoga Mat",
        price: 69.99,
        originalPrice: 99.99,
        vendor: "ZenFlow"
      },
      content: {
        type: "video" as const,
        thumbnail: "🧘‍♀️",
        description: "This yoga mat changed my practice! Perfect grip, eco-friendly, and so comfortable. Namaste to better workouts! 🧘‍♀️✨ #Yoga #Meditation #Wellness",
        duration: 50
      },
      engagement: {
        likes: 13900,
        comments: 890,
        shares: 267,
        isLiked: false,
        isSaved: true
      },
      isSponsored: false,
      category: "Wellness"
    }
  ];

  const handleBuyNow = (reelId: number) => {
    const reel = sampleReels.find(r => r.id === reelId);
    if (reel?.product) {
      alert(`Redirecting to checkout for ${reel.product.name} - $${reel.product.price}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Header with AI Badge */}
      <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Reelit
          </h1>
          <div className="flex items-center gap-1 bg-purple-600/20 px-2 py-1 rounded-full">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span className="text-xs text-purple-300">AI Powered</span>
          </div>
        </div>
        <Button variant="ghost" className="text-white">
          <MoreVertical className="w-5 h-5" />
        </Button>
      </div>

      {/* Feed Container */}
      <div className="pt-16">
        {/* Trending Products Carousel */}
        <TrendingCarousel />

        {/* AI Recommendations */}
        <div className="px-4">
          <AIRecommendations context="feed" />
        </div>

        {/* Reels Content */}
        <div className="space-y-4 px-4">
          {sampleReels.map((reel, index) => (
            <div key={reel.id}>
              <ReelContent 
                reel={reel} 
                onBuyNow={handleBuyNow}
              />
              
              {/* Insert AI recommendations every 3 reels */}
              {(index + 1) % 3 === 0 && (
                <AIRecommendations 
                  context="feed" 
                  currentProduct={reel.id}
                />
              )}
            </div>
          ))}
        </div>

        {/* Reel Navigation Dots */}
        <div className="flex justify-center gap-2 py-6">
          {sampleReels.slice(0, 5).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReel(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentReel === index ? "bg-purple-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center pb-8">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Load More Content
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainFeed;
