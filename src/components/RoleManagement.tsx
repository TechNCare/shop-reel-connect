/**
 * Role Management Component
 * 
 * Allows users to switch between different roles in the app:
 * - Consumer: Browse and purchase products
 * - Influencer: Create content and earn commissions  
 * - Vendor: Manage products and campaigns
 * 
 * Features:
 * - Clear visual distinction between roles
 * - Active role highlighting
 * - Mobile-first responsive design
 * - Role-specific navigation and descriptions
 * - Toast notifications for role switches
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Video, Store } from "lucide-react";
import { toast } from "sonner";

// Role configuration interface
interface RoleConfig {
  id: 'consumer' | 'influencer' | 'vendor';
  title: string;
  description: string;
  icon: typeof User;
  color: string;
  bgColor: string;
  ringColor: string;
  capabilities: string;
}

interface RoleManagementProps {
  activeRole: 'consumer' | 'influencer' | 'vendor';
  onRoleChange: (role: 'consumer' | 'influencer' | 'vendor') => void;
}

const RoleManagement = ({ activeRole, onRoleChange }: RoleManagementProps) => {
  const navigate = useNavigate();

  // Role configuration with Instagram-inspired colors
  const roles: RoleConfig[] = [
    {
      id: 'consumer',
      title: 'Consumer',
      description: 'Browse and purchase products from influencer recommendations',
      icon: User,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      ringColor: 'ring-primary',
      capabilities: 'You can browse products, watch reels, and make purchases.'
    },
    {
      id: 'influencer',
      title: 'Influencer',
      description: 'Create content and earn commissions from product promotions',
      icon: Video,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      ringColor: 'ring-destructive',
      capabilities: 'You can create content, promote products, and earn commissions.'
    },
    {
      id: 'vendor',
      title: 'Vendor',
      description: 'Manage products and create marketing campaigns',
      icon: Store,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      ringColor: 'ring-orange-500',
      capabilities: 'You can manage products, create campaigns, and track sales.'
    }
  ];

  /**
   * Handles role switching with navigation and feedback
   * @param role - The role to switch to
   */
  const handleRoleChange = (role: 'consumer' | 'influencer' | 'vendor') => {
    // Update the active role
    onRoleChange(role);
    
    // Show success toast
    toast.success(`Switched to ${role} mode`, {
      description: `You now have access to ${role} features`,
      duration: 3000,
    });

    // Navigate to role-specific dashboard after a brief delay
    setTimeout(() => {
      switch (role) {
        case 'vendor':
          navigate('/vendor');
          break;
        case 'influencer':
          navigate('/influencer');
          break;
        case 'consumer':
          // Stay on profile page for consumer
          break;
      }
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Role Management Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold instagram-heading">Role Management</h2>
        <p className="text-muted-foreground instagram-body">
          Switch between different user roles to access various features
        </p>
      </div>

      {/* Role Selection Grid - Mobile First */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roles.map((role) => {
          const Icon = role.icon;
          const isActive = activeRole === role.id;
          
          return (
            <Card
              key={role.id}
              className={`cursor-pointer transition-all duration-300 instagram-card ${
                isActive
                  ? `ring-2 ${role.ringColor} ${role.bgColor} shadow-lg`
                  : 'hover:shadow-md hover:scale-105'
              }`}
              onClick={() => handleRoleChange(role.id)}
            >
              <CardContent className="p-6 text-center space-y-4">
                {/* Role Icon */}
                <div className={`mx-auto w-16 h-16 rounded-full ${role.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${role.color}`} />
                </div>

                {/* Role Title */}
                <h3 className="font-semibold text-lg instagram-heading">{role.title}</h3>

                {/* Role Description */}
                <p className="text-sm text-muted-foreground instagram-body leading-relaxed">
                  {role.description}
                </p>

                {/* Action Button */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRoleChange(role.id);
                  }}
                  variant={isActive ? 'default' : 'outline'}
                  className={`w-full instagram-btn-${isActive ? 'primary' : 'secondary'} ${
                    isActive ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  {isActive ? 'Active Role' : `Switch to ${role.title}`}
                </Button>

                {/* Active Badge */}
                {isActive && (
                  <Badge className={`${role.bgColor} ${role.color} border-0`}>
                    Currently Active
                  </Badge>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Current Role Summary */}
      <Card className="instagram-card">
        <CardContent className="p-6">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <h4 className="font-medium instagram-heading">
                Current Role: {activeRole.charAt(0).toUpperCase() + activeRole.slice(1)}
              </h4>
              <Badge variant="outline" className="capitalize">
                {activeRole}
              </Badge>
            </div>
            
            <p className="text-sm text-muted-foreground instagram-body">
              {roles.find(r => r.id === activeRole)?.capabilities}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Help Text */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground instagram-timestamp">
          You can switch roles anytime to access different features of the platform
        </p>
      </div>
    </div>
  );
};

export default RoleManagement;