import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Gift, CreditCard, Building2, IndianRupee, CheckCircle } from "lucide-react";

export default function RedeemPage() {
  const { toast } = useToast();
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [formData, setFormData] = useState({
    couponCode: "",
    upiId: "",
    accountNumber: "",
    ifscCode: "",
    accountHolderName: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRedeeming(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Reward Claimed Successfully!",
        description: `₹1000 will be transferred to your ${paymentMethod === 'upi' ? 'UPI ID' : 'bank account'} within 24 hours.`,
      });
      
      // Reset form
      setFormData({
        couponCode: "",
        upiId: "",
        accountNumber: "",
        ifscCode: "",
        accountHolderName: ""
      });
      
      setIsRedeeming(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-sky py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Redeem Your Reward
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your coupon code to claim your ₹1000 referral reward
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-6 w-6 text-primary" />
                  Claim Your Reward
                </CardTitle>
                <CardDescription>
                  Enter your coupon code and payment details to receive your ₹1000 reward
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Coupon Code */}
                  <div className="space-y-2">
                    <Label htmlFor="couponCode">Coupon Code *</Label>
                    <Input
                      id="couponCode"
                      name="couponCode"
                      type="text"
                      value={formData.couponCode}
                      onChange={handleInputChange}
                      placeholder="Enter your coupon code (e.g., SOLAR123XYZ)"
                      required
                      className="text-lg font-mono"
                    />
                    <p className="text-sm text-muted-foreground">
                      You received this code via SMS when your referral was completed
                    </p>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Choose Payment Method *</Label>
                    
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50">
                        <RadioGroupItem value="upi" id="upi" />
                        <div className="flex items-center gap-3 flex-1">
                          <CreditCard className="h-5 w-5 text-primary" />
                          <div>
                            <Label htmlFor="upi" className="font-medium">UPI Transfer</Label>
                            <p className="text-sm text-muted-foreground">Instant transfer to your UPI ID</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50">
                        <RadioGroupItem value="bank" id="bank" />
                        <div className="flex items-center gap-3 flex-1">
                          <Building2 className="h-5 w-5 text-primary" />
                          <div>
                            <Label htmlFor="bank" className="font-medium">Bank Transfer</Label>
                            <p className="text-sm text-muted-foreground">Transfer to your bank account (1-2 business days)</p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Payment Details */}
                  {paymentMethod === "upi" ? (
                    <div className="space-y-2">
                      <Label htmlFor="upiId">UPI ID *</Label>
                      <Input
                        id="upiId"
                        name="upiId"
                        type="text"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        placeholder="yourname@paytm / yourname@phonepe"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Make sure your UPI ID is active and linked to your bank account
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="accountHolderName">Account Holder Name *</Label>
                        <Input
                          id="accountHolderName"
                          name="accountHolderName"
                          type="text"
                          value={formData.accountHolderName}
                          onChange={handleInputChange}
                          placeholder="Enter account holder name"
                          required
                        />
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="accountNumber">Account Number *</Label>
                          <Input
                            id="accountNumber"
                            name="accountNumber"
                            type="text"
                            value={formData.accountNumber}
                            onChange={handleInputChange}
                            placeholder="Enter account number"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="ifscCode">IFSC Code *</Label>
                          <Input
                            id="ifscCode"
                            name="ifscCode"
                            type="text"
                            value={formData.ifscCode}
                            onChange={handleInputChange}
                            placeholder="e.g., SBIN0001234"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full text-lg py-6 shadow-solar"
                    disabled={isRedeeming}
                  >
                    {isRedeeming ? "Processing..." : `Claim ₹1000 via ${paymentMethod === 'upi' ? 'UPI' : 'Bank Transfer'}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IndianRupee className="h-6 w-6 text-primary" />
                  Reward Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-gradient-solar rounded-lg">
                  <div className="text-3xl font-bold text-primary-foreground mb-2">
                    ₹1,000
                  </div>
                  <p className="text-primary-foreground/90">
                    Referral Reward
                  </p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>No processing fees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>UPI: Instant transfer</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Bank: 1-2 business days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>SMS confirmation sent</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>• Each coupon can only be used once</p>
                <p>• Coupon expires 90 days after issuance</p>
                <p>• Ensure your payment details are correct</p>
                <p>• Contact support if you face any issues</p>
              </CardContent>
            </Card>

            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}