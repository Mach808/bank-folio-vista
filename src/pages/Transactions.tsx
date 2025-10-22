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
    amount: 2500.00,
    description: "Salary Deposit",
    timestamp: "2025-10-20T10:30:00",
    balanceAfter: 45320.50,
  },
  {
    type: "Debit" as const,
    amount: 150.00,
    description: "Grocery Shopping",
    timestamp: "2025-10-19T15:45:00",
    balanceAfter: 42820.50,
  },
  {
    type: "Debit" as const,
    amount: 85.50,
    description: "Restaurant - Dinner",
    timestamp: "2025-10-18T19:20:00",
    balanceAfter: 42970.50,
  },
  {
    type: "Credit" as const,
    amount: 500.00,
    description: "Freelance Payment",
    timestamp: "2025-10-17T14:00:00",
    balanceAfter: 43056.00,
  },
  {
    type: "Debit" as const,
    amount: 1200.00,
    description: "Rent Payment",
    timestamp: "2025-10-15T09:00:00",
    balanceAfter: 42556.00,
  },
  {
    type: "Debit" as const,
    amount: 45.00,
    description: "Subscription - Netflix",
    timestamp: "2025-10-14T12:30:00",
    balanceAfter: 43756.00,
  },
  {
    type: "Credit" as const,
    amount: 350.00,
    description: "Refund - Electronics Store",
    timestamp: "2025-10-12T16:45:00",
    balanceAfter: 43801.00,
  },
  {
    type: "Debit" as const,
    amount: 75.25,
    description: "Gas Station",
    timestamp: "2025-10-11T08:15:00",
    balanceAfter: 43451.00,
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
