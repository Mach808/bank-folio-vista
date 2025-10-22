import { Plus, MoreVertical, UserPlus } from "lucide-react";
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

const mockBeneficiaries = [
  {
    id: 1,
    name: "John Doe",
    accountNumber: "1234567890",
    bankName: "Bank of America",
    nickname: "John",
    addedOn: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    accountNumber: "9876543210",
    bankName: "Chase Bank",
    nickname: "Jane",
    addedOn: "2024-02-20",
  },
  {
    id: 3,
    name: "Bob Wilson",
    accountNumber: "5678901234",
    bankName: "Wells Fargo",
    nickname: "Bob",
    addedOn: "2024-03-10",
  },
  {
    id: 4,
    name: "Alice Johnson",
    accountNumber: "4321098765",
    bankName: "Citibank",
    nickname: "Alice",
    addedOn: "2024-04-05",
  },
];

const Beneficiaries = () => {
  return (
    <Layout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Beneficiaries</h1>
          <p className="mt-2 text-muted-foreground">Manage your saved payment recipients</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Beneficiary
        </Button>
      </div>

      {mockBeneficiaries.length === 0 ? (
        <Card className="flex flex-col items-center justify-center py-16">
          <UserPlus className="mb-4 h-16 w-16 text-muted-foreground" />
          <h3 className="mb-2 text-xl font-semibold">No Beneficiaries Yet</h3>
          <p className="mb-6 text-muted-foreground">Add beneficiaries to make transfers easier</p>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Your First Beneficiary
          </Button>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockBeneficiaries.map((beneficiary) => (
            <Card key={beneficiary.id} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    {beneficiary.name.charAt(0)}
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Send Money</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Remove Beneficiary
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <CardTitle className="mb-1 text-lg">{beneficiary.name}</CardTitle>
                  {beneficiary.nickname && (
                    <Badge variant="secondary">{beneficiary.nickname}</Badge>
                  )}
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Account Number</p>
                  <p className="font-mono">****{beneficiary.accountNumber.slice(-4)}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Bank</p>
                  <p className="font-medium">{beneficiary.bankName}</p>
                </div>

                <div className="pt-2 text-xs text-muted-foreground">
                  Added on {new Date(beneficiary.addedOn).toLocaleDateString()}
                </div>

                <Button variant="outline" className="w-full">
                  Send Money
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Beneficiaries;
