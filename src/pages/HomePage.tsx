import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sun, 
  IndianRupee, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Smartphone,
  CreditCard
} from "lucide-react";
import heroImage from "@/assets/solar-hero.jpg";

export default function HomePage() {
  const steps = [
    {
      icon: Users,
      title: "Submit Referral",
      description: "Share details of someone interested in solar installation"
    },
    {
      icon: Sun,
      title: "Solar Installation", 
      description: "Your friend gets solar installed through our company"
    },
    {
      icon: Smartphone,
      title: "Get Coupon",
      description: "Receive SMS with unique redemption code"
    },
    {
      icon: CreditCard,
      title: "Claim ₹1000",
      description: "Redeem reward via UPI or bank transfer"
    }
  ];

  const benefits = [
    "Instant UPI payments",
    "No hidden charges", 
    "Track your referrals",
    "24/7 support"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                ₹1000 per successful referral
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Earn Money by 
                <span className="text-primary block">
                  Referring Solar
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Help your friends save on electricity bills with solar power 
                and earn ₹1000 for every successful installation. It's a win-win!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg shadow-solar">
                  <Link to="/refer">
                    Start Referring <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" className="text-lg">
                  <Link to="/how-it-works">
                    How it Works
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Solar panels installation" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating reward card */}
              <Card className="absolute -bottom-6 -left-6 w-64 shadow-warm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-solar rounded-lg">
                      <IndianRupee className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Instant Rewards</p>
                      <p className="text-sm text-muted-foreground">₹1000 per referral</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple 4-step process to earn money through solar referrals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-gradient-solar rounded-full shadow-solar group-hover:scale-110 transition-transform">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="mb-3">
                    Step {index + 1}
                  </Badge>
                  
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Earning?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of people already earning money by helping their 
            community switch to clean, renewable solar energy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg shadow-solar">
              <Link to="/refer">
                <Award className="mr-2 h-5 w-5" />
                Submit Your First Referral
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg">
              <Link to="/redeem">
                <IndianRupee className="mr-2 h-5 w-5" />
                Redeem Existing Coupon
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}