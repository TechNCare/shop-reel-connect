
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Camera, Image, Mic, Settings } from "lucide-react";

const Create = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="pt-4 mb-6">
        <h1 className="text-2xl font-bold">Create</h1>
        <p className="text-gray-400">Share your content with the world</p>
      </div>

      {/* Create Options */}
      <div className="space-y-4 max-w-md mx-auto">
        <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-none cursor-pointer hover:scale-105 transition-transform">
          <CardContent className="p-6 text-center">
            <Video className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold text-white mb-2">Record Video</h3>
            <p className="text-purple-100">Create engaging short videos</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors">
          <CardContent className="p-6 text-center">
            <Camera className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold text-white mb-2">Upload Video</h3>
            <p className="text-gray-400">Upload from your gallery</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors">
          <CardContent className="p-6 text-center">
            <Image className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold text-white mb-2">Create Story</h3>
            <p className="text-gray-400">Share a quick story</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors">
          <CardContent className="p-6 text-center">
            <Mic className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold text-white mb-2">Audio Post</h3>
            <p className="text-gray-400">Share audio content</p>
          </CardContent>
        </Card>
      </div>

      {/* Creation Tools */}
      <div className="mt-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Creation Tools
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Filters
            </Button>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Effects
            </Button>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Music
            </Button>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Templates
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Create;
