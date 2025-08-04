/**
 * Profile Page Component
 * 
 * Main user profile page with role-based functionality:
 * - Consumer: Analytics, purchase history, spending patterns
 * - Activity tracking across all interactions
 * - Role management for switching between user types
 * 
 * Features:
 * - Mobile-first Instagram-inspired design
 * - Responsive layout optimized for all screen sizes
 * - Comprehensive analytics with interactive charts
 * - Modular component architecture for maintainability
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Settings, Heart } from "lucide-react";
import { toast } from "sonner";
import ConsumerProfile from "@/components/ConsumerProfile";
import RoleManagement from "@/components/RoleManagement";
const Profile = () => {
  const navigate = useNavigate();
  
  // Active role state - determines which features are available
  const [activeRole, setActiveRole] = useState<'consumer' | 'influencer' | 'vendor'>('consumer');

  /**
   * Handles role switching with navigation
   * @param role - The new role to switch to
   */
  const handleRoleChange = (role: 'consumer' | 'influencer' | 'vendor') => {
    setActiveRole(role);
    // Note: Navigation handled in RoleManagement component
  };
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 pb-20">
        {/* Enhanced Profile Header - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4 w-full">
            <Avatar className="w-20 h-20 story-ring">
              <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl font-semibold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground instagram-heading">
                John Doe
              </h1>
              <p className="text-muted-foreground instagram-body">john.doe@example.com</p>
              <Badge 
                variant="secondary" 
                className="mt-2 bg-primary/10 text-primary border-primary/20"
              >
                {activeRole.charAt(0).toUpperCase() + activeRole.slice(1)}
              </Badge>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => navigate('/app/profile')} 
            className="instagram-btn-secondary w-full sm:w-auto"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>

        {/* Enhanced Tabs Navigation - Mobile Optimized */}
        <Tabs defaultValue="overview" className="space-y-6">
          <div className="space-y-3">
            <TabsList className="grid w-full grid-cols-2 h-12 bg-muted/50">
              <TabsTrigger 
                value="overview" 
                className="instagram-body text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="instagram-body text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Analytics
              </TabsTrigger>
            </TabsList>
            
            <TabsList className="grid w-full grid-cols-2 h-12 bg-muted/50">
              <TabsTrigger 
                value="activity" 
                className="instagram-body text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Activity
              </TabsTrigger>
              <TabsTrigger 
                value="roles" 
                className="instagram-body text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Role Management
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-6">
            <ConsumerProfile />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <ConsumerProfile />
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold instagram-heading">Recent Activity</h2>
              
              <Card className="instagram-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium instagram-body">Purchased Wireless Headphones</p>
                      <p className="text-sm text-muted-foreground instagram-timestamp">From @techguru's recommendation • $199.99</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="instagram-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium instagram-body">Liked @fashionista's summer collection reel</p>
                      <p className="text-sm text-muted-foreground instagram-timestamp">2 hours ago</p>
                    </div>
                    <Heart className="w-4 h-4 text-red-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="roles" className="space-y-6">
            <RoleManagement 
              activeRole={activeRole} 
              onRoleChange={handleRoleChange} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;