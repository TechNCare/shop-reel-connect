
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, CreditCard, TrendingUp, TrendingDown, Wallet as WalletIcon } from "lucide-react";

const Wallet = () => {
  const navigate = useNavigate();
  const [balance] = useState(245.67);
  const [pendingEarnings] = useState(89.32);

  const transactions = [
    {
      id: 1,
      type: "earning",
      amount: 25.50,
      description: "Commission from headphones sale",
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      type: "purchase",
      amount: -79.99,
      description: "Summer Floral Dress purchase",
      date: "2024-01-14",
      status: "completed"
    },
    {
      id: 3,
      type: "earning",
      amount: 15.75,
      description: "Commission from skincare serum",
      date: "2024-01-13",
      status: "completed"
    },
    {
      id: 4,
      type: "deposit",
      amount: 100.00,
      description: "Wallet top-up",
      date: "2024-01-12",
      status: "completed"
    },
    {
      id: 5,
      type: "earning",
      amount: 32.20,
      description: "Campaign completion bonus",
      date: "2024-01-11",
      status: "pending"
    }
  ];

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "earning":
        return TrendingUp;
      case "purchase":
        return TrendingDown;
      case "deposit":
        return Plus;
      default:
        return WalletIcon;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "earning":
        return "text-green-400";
      case "purchase":
        return "text-red-400";
      case "deposit":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <Button variant="ghost" onClick={() => navigate("/app/profile")} className="text-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-bold">Wallet</h1>
        <div className="w-8" /> {/* Spacer */}
      </div>

      <div className="p-4">
        {/* Balance Cards */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-none">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Available Balance</p>
                  <p className="text-3xl font-bold text-white">${balance.toFixed(2)}</p>
                </div>
                <WalletIcon className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600 to-yellow-600 border-none">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Pending Earnings</p>
                  <p className="text-2xl font-bold text-white">${pendingEarnings.toFixed(2)}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button className="h-12 bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Money
          </Button>
          <Button className="h-12 bg-blue-600 hover:bg-blue-700">
            <Minus className="w-4 h-4 mr-2" />
            Withdraw
          </Button>
        </div>

        {/* Transaction History */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {transactions.map((transaction, index) => {
              const Icon = getTransactionIcon(transaction.type);
              const colorClass = getTransactionColor(transaction.type);
              
              return (
                <div key={transaction.id}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full bg-gray-800`}>
                        <Icon className={`w-4 h-4 ${colorClass}`} />
                      </div>
                      <div>
                        <p className="text-white font-medium">{transaction.description}</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm text-gray-400">{transaction.date}</p>
                          <Badge 
                            variant={transaction.status === "completed" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className={`font-bold ${colorClass}`}>
                      {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                  </div>
                  {index < transactions.length - 1 && <Separator className="bg-gray-700 mt-4" />}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
