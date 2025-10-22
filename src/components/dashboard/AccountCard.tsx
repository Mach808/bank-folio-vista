import { CreditCard, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AccountCardProps {
  accountType: string;
  balance: number;
  accountNumber: string;
  status: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const AccountCard = ({ accountType, balance, accountNumber, status, trend }: AccountCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="bg-gradient-card pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <CreditCard className="h-5 w-5 text-primary" />
            {accountType} Account
          </CardTitle>
          <Badge variant={status === "Active" ? "default" : "secondary"}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Current Balance</p>
            <p className="text-3xl font-bold text-foreground">₹{balance.toLocaleString()}</p>
          </div>
          
          {trend && (
            <div className="flex items-center gap-2">
              {trend.isPositive ? (
                <TrendingUp className="h-4 w-4 text-success" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
              <span className={trend.isPositive ? "text-success" : "text-destructive"}>
                {trend.isPositive ? "+" : ""}{trend.value}% this month
              </span>
            </div>
          )}
          
          <div className="pt-2 text-sm text-muted-foreground">
            Account: ****{accountNumber.slice(-4)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
