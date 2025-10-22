import { Search, Filter, Download } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { TransactionItem } from "@/components/dashboard/TransactionItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockTransactions = [
  {
    type: "Credit" as const,
    amount: 185000.00,
    description: "Salary Credit",
    timestamp: "2025-10-20T10:30:00",
    balanceAfter: 3845320.50,
  },
  {
    type: "Debit" as const,
    amount: 12500.00,
    description: "Big Bazaar Shopping",
    timestamp: "2025-10-19T15:45:00",
    balanceAfter: 3660320.50,
  },
  {
    type: "Debit" as const,
    amount: 6850.00,
    description: "Swiggy Order",
    timestamp: "2025-10-18T19:20:00",
    balanceAfter: 3672820.50,
  },
  {
    type: "Credit" as const,
    amount: 45000.00,
    description: "Freelance Payment",
    timestamp: "2025-10-17T14:00:00",
    balanceAfter: 3679670.50,
  },
  {
    type: "Debit" as const,
    amount: 95000.00,
    description: "Rent Payment",
    timestamp: "2025-10-15T09:00:00",
    balanceAfter: 3634670.50,
  },
  {
    type: "Debit" as const,
    amount: 799.00,
    description: "Netflix Subscription",
    timestamp: "2025-10-14T12:30:00",
    balanceAfter: 3729670.50,
  },
  {
    type: "Credit" as const,
    amount: 28500.00,
    description: "Refund - Croma Electronics",
    timestamp: "2025-10-12T16:45:00",
    balanceAfter: 3730469.50,
  },
  {
    type: "Debit" as const,
    amount: 5850.00,
    description: "Indian Oil Petrol",
    timestamp: "2025-10-11T08:15:00",
    balanceAfter: 3701969.50,
  },
];

const Transactions = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Transaction History</h1>
        <p className="mt-2 text-muted-foreground">View and manage all your transactions</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filter & Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-9" />
            </div>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Transaction Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="credit">Credit Only</SelectItem>
                <SelectItem value="debit">Debit Only</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="30">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Last 7 Days</SelectItem>
                <SelectItem value="30">Last 30 Days</SelectItem>
                <SelectItem value="90">Last 3 Months</SelectItem>
                <SelectItem value="365">Last Year</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {mockTransactions.map((transaction, index) => (
              <TransactionItem key={index} {...transaction} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Transactions;
