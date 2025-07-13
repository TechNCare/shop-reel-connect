
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { Settings, Wallet, Store, Users, ShoppingBag, BarChart3, LogOut, Crown } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [activeRoles, setActiveRoles] = useState<string[]>(["consumer"]);
  const [walletBalance] = useState(245.67);

  const handleRoleManagement = () => {
    navigate("/role-selection");
  };

  const handleWalletAccess = () => {
    navigate("/wallet");
  };

  const handleRoleAccess = (role: string) => {
    switch (role) {
      case "vendor":
        navigate("/vendor");
        break;
      case "influencer":
        navigate("/influencer");
        break;
      case "admin":
        navigate("/admin");
        break;
      default:
        break;
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "vendor":
        return Store;
      case "influencer":
        return Users;
      case "consumer":
        return ShoppingBag;
      case "admin":
        return Crown;
      default:
        return Users;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "vendor":
        return "bg-orange-500";
      case "influencer":
        return "bg-pink-500";
      case "consumer":
        return "bg-purple-500";
      case "admin":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-4">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Button variant="ghost" className="text-white">
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* Profile Info */}
      <Card className="bg-gray-900 border-gray-800 mb-6">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
              JD
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">John Doe</h2>
              <p className="text-gray-400">@johndoe</p>
              <p className="text-gray-400">john.doe@example.com</p>
            </div>
          </div>

          {/* Active Roles */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Active Roles</h3>
            <div className="flex flex-wrap gap-2">
              {activeRoles.map((role) => {
                const Icon = getRoleIcon(role);
                return (
                  <Badge 
                    key={role} 
                    className={`${getRoleColor(role)} text-white hover:opacity-80 cursor-pointer`}
                    onClick={() => handleRoleAccess(role)}
                  >
                    <Icon className="w-3 h-3 mr-1" />
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Wallet Balance */}
          <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-2">
              <Wallet className="w-5 h-5 text-green-400" />
              <span className="text-white">Wallet Balance</span>
            </div>
            <span className="text-xl font-bold text-green-400">${walletBalance.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button 
          onClick={handleRoleManagement}
          className="h-16 bg-purple-600 hover:bg-purple-700 flex flex-col items-center"
        >
          <Users className="w-6 h-6 mb-1" />
          <span className="text-sm">Manage Roles</span>
        </Button>
        <Button 
          onClick={handleWalletAccess}
          className="h-16 bg-green-600 hover:bg-green-700 flex flex-col items-center"
        >
          <Wallet className="w-6 h-6 mb-1" />
          <span className="text-sm">Wallet</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <BarChart3 className="w-6 h-6 mx-auto mb-2 text-blue-400" />
            <p className="text-2xl font-bold text-white">1.2K</p>
            <p className="text-sm text-gray-400">Followers</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <ShoppingBag className="w-6 h-6 mx-auto mb-2 text-orange-400" />
            <p className="text-2xl font-bold text-white">24</p>
            <p className="text-sm text-gray-400">Purchases</p>
          </CardContent>
        </Card>
      </div>

      {/* Settings */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
            <Settings className="w-4 h-4 mr-3" />
            Account Settings
          </Button>
          <Separator className="bg-gray-700" />
          <Button variant="ghost" className="w-full justify-start text-red-400 hover:bg-gray-800">
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
