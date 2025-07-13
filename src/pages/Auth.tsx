
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock, User, Instagram } from "lucide-react";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (type: string) => {
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`${type} successful! Welcome to Reelit!`);
      
      // Redirect to main app feed
      navigate("/app");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Button variant="ghost" onClick={() => navigate('/')} className="text-white absolute top-4 left-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-4xl font-bold text-white">Reel<span className="text-orange-300">it</span></h1>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">Join Reelit</CardTitle>
            <CardDescription className="text-gray-200">
              Sign in or create your account to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 bg-white/20">
                <TabsTrigger value="login" className="text-white">Sign In</TabsTrigger>
                <TabsTrigger value="register" className="text-white">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-white">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="login-email" type="email" placeholder="Enter your email" className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-white">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="login-password" type="password" placeholder="Enter your password" className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleAuth("Login")} 
                  disabled={isLoading}
                  className="w-full bg-white text-purple-900 hover:bg-gray-100"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name" className="text-white">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="register-name" placeholder="Enter your full name" className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-white">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="register-email" type="email" placeholder="Enter your email" className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-white">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input id="register-password" type="password" placeholder="Create a password" className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300" />
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleAuth("Registration")} 
                  disabled={isLoading}
                  className="w-full bg-white text-purple-900 hover:bg-gray-100"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                <div className="space-y-3">
                  <div className="text-center text-white text-sm">Quick signup options</div>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/30 text-white hover:bg-white/10"
                    onClick={() => toast.info("Instagram OAuth integration coming soon!")}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Continue with Instagram
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
