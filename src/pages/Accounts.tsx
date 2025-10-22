import { Plus, MoreVertical } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockAccounts = [
  {
    id: 1,
    accountType: "Savings",
    balance: 3845320.50,
    accountNumber: "1234567890",
    status: "Active",
    createdAt: "2023-01-15",
  },
  {
    id: 2,
    accountType: "Current",
    balance: 1085000.00,
    accountNumber: "0987654321",
    status: "Active",
    createdAt: "2023-03-20",
  },
];

const Accounts = () => {
  return (
    <Layout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">My Accounts</h1>
          <p className="mt-2 text-muted-foreground">Manage all your bank accounts</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Open New Account
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockAccounts.map((account) => (
          <Card key={account.id} className="overflow-hidden transition-all hover:shadow-lg">
            <CardHeader className="bg-gradient-card">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{account.accountType}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Download Statement</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Close Account</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Account Number</p>
                  <p className="font-mono text-lg">****{account.accountNumber.slice(-4)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Current Balance</p>
                  <p className="text-3xl font-bold">₹{account.balance.toLocaleString()}</p>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <Badge variant={account.status === "Active" ? "default" : "secondary"}>
                    {account.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground">
                    Since {new Date(account.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Accounts;
