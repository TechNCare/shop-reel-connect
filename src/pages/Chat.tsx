
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Users, MessageCircle, Phone, Video } from "lucide-react";

const Chat = () => {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  const mockChats = [
    {
      id: 1,
      name: "TechStore Pro",
      type: "Vendor",
      lastMessage: "Great job on the headphones review! Ready for the next campaign?",
      time: "2 min ago",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "@fashionista_sarah",
      type: "Influencer",
      lastMessage: "The dress campaign performed amazingly! 🔥",
      time: "15 min ago",
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: "Beauty Brand Co",
      type: "Vendor",
      lastMessage: "When can we schedule the skincare collaboration?",
      time: "1 hour ago",
      unread: 1,
      online: false
    },
    {
      id: 4,
      name: "@tech_reviewer_mike",
      type: "Influencer",
      lastMessage: "Product samples received! Starting content creation.",
      time: "3 hours ago",
      unread: 0,
      online: false
    }
  ];

  const mockMessages = [
    { id: 1, sender: "TechStore Pro", message: "Hi! We loved your recent tech reviews.", time: "10:30 AM", isOwn: false },
    { id: 2, sender: "You", message: "Thank you! I'm always excited about new tech products.", time: "10:32 AM", isOwn: true },
    { id: 3, sender: "TechStore Pro", message: "We have a new wireless headphones line launching. Would you be interested in a collaboration?", time: "10:35 AM", isOwn: false },
    { id: 4, sender: "You", message: "Absolutely! I'd love to learn more about the campaign details.", time: "10:37 AM", isOwn: true },
    { id: 5, sender: "TechStore Pro", message: "Great job on the headphones review! Ready for the next campaign?", time: "10:45 AM", isOwn: false },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <MessageCircle className="w-8 h-8 text-blue-500" />
                Messages
              </h1>
              <p className="text-gray-600">Connect with vendors, influencers, and customers</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[70vh]">
          {/* Chat List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Conversations
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {mockChats.map((chat, index) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(index)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
                      selectedChat === index ? "bg-blue-50 border-blue-200" : ""
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${chat.online ? "bg-green-400" : "bg-gray-300"}`}></div>
                        <h3 className="font-semibold">{chat.name}</h3>
                        <Badge variant="outline" className="text-xs">{chat.type}</Badge>
                      </div>
                      {chat.unread > 0 && (
                        <Badge className="bg-red-500 text-white text-xs">{chat.unread}</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{chat.lastMessage}</p>
                    <p className="text-xs text-gray-400 mt-1">{chat.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Messages */}
          <Card className="lg:col-span-2 flex flex-col">
            <CardHeader className="flex-shrink-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${mockChats[selectedChat].online ? "bg-green-400" : "bg-gray-300"}`}></div>
                  <div>
                    <CardTitle className="text-lg">{mockChats[selectedChat].name}</CardTitle>
                    <p className="text-sm text-gray-600">{mockChats[selectedChat].type} • {mockChats[selectedChat].online ? "Online" : "Offline"}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {mockMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isOwn 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      <p className="text-sm">{message.message}</p>
                      <p className={`text-xs mt-1 ${message.isOwn ? "text-blue-100" : "text-gray-500"}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-blue-500 hover:bg-blue-600">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
