
import { NavLink } from "react-router-dom";
import { Home, Search, Plus, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const navItems = [
    { to: "/app", icon: Home, label: "Home" },
    { to: "/app/search", icon: Search, label: "Search" },
    { to: "/app/create", icon: Plus, label: "Create" },
    { to: "/app/activity", icon: Heart, label: "Activity" },
    { to: "/app/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/app"}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-colors",
                isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              )
            }
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
