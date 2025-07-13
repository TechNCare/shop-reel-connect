
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MainFeed from "./pages/MainFeed";
import Search from "./pages/Search";
import Create from "./pages/Create";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import RoleSelection from "./pages/RoleSelection";
import Wallet from "./pages/Wallet";
import VendorDashboard from "./pages/VendorDashboard";
import InfluencerDashboard from "./pages/InfluencerDashboard";
import AdminPanel from "./pages/AdminPanel";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";
import AppLayout from "./components/AppLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Main App Routes with Bottom Navigation */}
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<MainFeed />} />
            <Route path="search" element={<Search />} />
            <Route path="create" element={<Create />} />
            <Route path="activity" element={<Activity />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          
          {/* Role Selection and Management */}
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/wallet" element={<Wallet />} />
          
          {/* Role-Specific Dashboards */}
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/influencer" element={<InfluencerDashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/chat" element={<Chat />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
