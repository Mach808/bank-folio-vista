import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionItemProps {
  type: "Credit" | "Debit";
  amount: number;
  description: string;
  timestamp: string;
  balanceAfter: number;
}

export const TransactionItem = ({ type, amount, description, timestamp, balanceAfter }: TransactionItemProps) => {
  const isCredit = type === "Credit";
  
  return (
    <div className="flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-accent/50">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full",
            isCredit ? "bg-success/10" : "bg-destructive/10"
          )}
        >
          {isCredit ? (
            <ArrowDownLeft className="h-5 w-5 text-success" />
          ) : (
            <ArrowUpRight className="h-5 w-5 text-destructive" />
          )}
        </div>
        
        <div>
          <p className="font-medium">{description || "Transaction"}</p>
          <p className="text-sm text-muted-foreground">
            {new Date(timestamp).toLocaleDateString()} at {new Date(timestamp).toLocaleTimeString()}
          </p>
        </div>
      </div>
      
      <div className="text-right">
        <p className={cn("text-lg font-semibold", isCredit ? "text-success" : "text-destructive")}>
          {isCredit ? "+" : "-"}${amount.toLocaleString()}
        </p>
        <p className="text-sm text-muted-foreground">Balance: ${balanceAfter.toLocaleString()}</p>
      </div>
    </div>
  );
};
