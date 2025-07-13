
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Store, Users, ShoppingBag, Check } from "lucide-react";
import { toast } from "sonner";

const RoleSelection = () => {
  const navigate = useNavigate();
  const [selectedRoles, setSelectedRoles] = useState<string[]>(["consumer"]);

  const roles = [
    {
      id: "vendor",
      title: "Vendor",
      icon: Store,
      color: "from-orange-500 to-red-500",
      description: "Sell products, create campaigns, and partner with influencers",
      features: ["Product Catalog", "Campaign Management", "Sales Analytics", "Shopify Integration"]
    },
    {
      id: "influencer",
      title: "Influencer",
      icon: Users,
      color: "from-pink-500 to-purple-500",
      description: "Create content, earn commissions, and grow your audience",
      features: ["Video Creation", "Commission Tracking", "Analytics Dashboard", "Brand Partnerships"]
    },
    {
      id: "consumer",
      title: "Consumer",
      icon: ShoppingBag,
      color: "from-purple-500 to-blue-500",
      description: "Discover products through engaging videos and shop seamlessly",
      features: ["Personalized Feed", "Easy Shopping", "Wishlist", "Reviews & Ratings"]
    }
  ];

  const toggleRole = (roleId: string) => {
    setSelectedRoles(prev => {
      if (prev.includes(roleId)) {
        // Don't allow removing all roles
        if (prev.length === 1) {
          toast.error("You must have at least one active role");
          return prev;
        }
        return prev.filter(id => id !== roleId);
      } else {
        return [...prev, roleId];
      }
    });
  };

  const handleSave = () => {
    toast.success("Roles updated successfully!");
    navigate("/app/profile");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <Button variant="ghost" onClick={() => navigate("/app/profile")} className="text-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-bold">Choose Your Roles</h1>
        <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
          Save
        </Button>
      </div>

      <div className="p-4">
        {/* Description */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Select Your Roles</h2>
          <p className="text-gray-400">You can choose multiple roles and switch between them anytime</p>
        </div>

        {/* Role Cards */}
        <div className="space-y-4 max-w-md mx-auto">
          {roles.map((role) => {
            const isSelected = selectedRoles.includes(role.id);
            const Icon = role.icon;
            
            return (
              <Card 
                key={role.id}
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? "bg-gray-800 border-purple-500 ring-2 ring-purple-500/50" 
                    : "bg-gray-900 border-gray-700 hover:border-gray-600"
                }`}
                onClick={() => toggleRole(role.id)}
              >
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-white text-xl">{role.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-400">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {role.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Selected Roles Summary */}
        {selectedRoles.length > 0 && (
          <div className="mt-8 p-4 bg-gray-900 rounded-lg max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-white mb-2">Selected Roles</h3>
            <div className="flex flex-wrap gap-2">
              {selectedRoles.map((roleId) => {
                const role = roles.find(r => r.id === roleId);
                const Icon = role?.icon || Users;
                return (
                  <Badge key={roleId} className="bg-purple-600 text-white">
                    <Icon className="w-3 h-3 mr-1" />
                    {role?.title}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleSelection;
