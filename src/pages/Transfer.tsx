import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Transfer = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [description, setDescription] = useState("");

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !fromAccount || !toAccount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Transfer Successful!",
      description: `₹${amount} has been transferred successfully.`,
    });

    // Reset form
    setAmount("");
    setToAccount("");
    setDescription("");
  };

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Transfer Money</h1>
        <p className="mt-2 text-muted-foreground">Send money to beneficiaries securely</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Transfer Details</CardTitle>
              <CardDescription>Enter the transfer information below</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTransfer} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="from-account">From Account</Label>
                  <Select value={fromAccount} onValueChange={setFromAccount}>
                    <SelectTrigger id="from-account">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Savings - ****7890 (₹38,45,320.50)</SelectItem>
                      <SelectItem value="current">Current - ****4321 (₹10,85,000.00)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="to-account">To Beneficiary</Label>
                  <Select value={toAccount} onValueChange={setToAccount}>
                    <SelectTrigger id="to-account">
                      <SelectValue placeholder="Select beneficiary" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rajesh">Rajesh Kumar - HDFC Bank</SelectItem>
                      <SelectItem value="priya">Priya Sharma - ICICI Bank</SelectItem>
                      <SelectItem value="amit">Amit Patel - State Bank of India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="0.01"
                    step="0.01"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Payment for..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  Transfer Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Transfer Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="font-semibold">₹{amount || "0.00"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Transfer Fee</span>
                  <span className="font-semibold text-success">₹0.00</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-primary">
                      ₹{amount || "0.00"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <p className="text-xs text-muted-foreground">
                  Transfers are processed instantly. Make sure all details are correct before confirming.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Transfer;
