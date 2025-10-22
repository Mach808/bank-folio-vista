import { ArrowUpRight, Wallet, TrendingUp, CreditCard } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AccountCard } from "@/components/dashboard/AccountCard";
import { TransactionItem } from "@/components/dashboard/TransactionItem";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

// Mock data - in real app, this would come from API
const mockAccounts = [
  {
    accountType: "Savings",
    balance: 3845320.50,
    accountNumber: "1234567890",
    status: "Active",
    trend: { value: 12.5, isPositive: true },
  },
  {
    accountType: "Current",
    balance: 1085000.00,
    accountNumber: "0987654321",
    status: "Active",
    trend: { value: 5.2, isPositive: true },
  },
];

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
];

const Dashboard = () => {
  const totalBalance = mockAccounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <Layout>
      {/* Hero Section */}
      <div 
        className="relative -mx-8 -mt-8 mb-8 overflow-hidden rounded-b-3xl p-8"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
        <div className="relative z-10 text-primary-foreground">
          <h1 className="mb-2 text-4xl font-bold">Welcome Back!</h1>
          <p className="text-lg opacity-90">Here's your financial overview</p>
          
          <div className="mt-8 flex items-center gap-8">
            <div>
              <p className="text-sm opacity-80">Total Balance</p>
              <p className="text-5xl font-bold">₹{totalBalance.toLocaleString()}</p>
            </div>
            
            <Link to="/transfer">
              <Button variant="secondary" size="lg" className="gap-2">
                Transfer Money
                <ArrowUpRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockAccounts.length}</div>
            <p className="text-xs text-muted-foreground">All accounts active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">+₹2,30,000</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
            <Wallet className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">-₹19,350</div>
            <p className="text-xs text-muted-foreground">-5% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Accounts Overview */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Your Accounts</h2>
          <Link to="/accounts">
            <Button variant="ghost">View All</Button>
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {mockAccounts.map((account, index) => (
            <AccountCard key={index} {...account} />
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest financial activity</CardDescription>
            </div>
            <Link to="/transactions">
              <Button variant="ghost">View All</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
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

export default Dashboard;
