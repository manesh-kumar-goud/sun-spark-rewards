import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Sun, 
  Smartphone, 
  CreditCard, 
  CheckCircle, 
  Clock,
  Shield,
  Award,
  ArrowRight,
  IndianRupee
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Users,
      title: "Submit Referral",
      description: "Fill out our simple form with details of someone interested in solar installation. Takes less than 2 minutes!",
      details: [
        "Enter your contact information",
        "Provide customer's details", 
        "Add installation address",
        "Optional: Add notes about requirements"
      ]
    },
    {
      icon: Sun,
      title: "Solar Installation", 
      description: "Our team contacts the customer and completes the solar installation process through our company.",
      details: [
        "We contact the referred customer",
        "Free site survey and consultation",
        "Professional solar installation",
        "System activation and handover"
      ]
    },
    {
      icon: Smartphone,
      title: "SMS Notification",
      description: "Once installation is complete, you receive an SMS with a unique coupon code to claim your reward.",
      details: [
        "Installation completion verified",
        "Unique coupon code generated",
        "SMS sent to your registered number",
        "Code valid for 90 days"
      ]
    },
    {
      icon: CreditCard,
      title: "Claim Reward",
      description: "Use your coupon code on our website to claim ₹1000 via UPI or bank transfer.",
      details: [
        "Enter coupon code on redeem page",
        "Choose UPI or bank transfer",
        "Provide payment details",
        "Receive ₹1000 within 24 hours"
      ]
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "No Hidden Charges",
      description: "100% of the ₹1000 reward goes to you. No processing fees or deductions."
    },
    {
      icon: Clock,
      title: "Quick Payouts",
      description: "UPI transfers are instant. Bank transfers complete within 1-2 business days."
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "Your data is protected. All transactions are secured with bank-grade encryption."
    },
    {
      icon: Award,
      title: "Unlimited Referrals",
      description: "No limit on referrals. Earn ₹1000 for each successful solar installation."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to receive my reward?",
      answer: "UPI transfers are instant, while bank transfers take 1-2 business days after you redeem your coupon."
    },
    {
      question: "Can I refer the same customer multiple times?",
      answer: "No, each customer can only be referred once. Duplicate referrals will not be eligible for rewards."
    },
    {
      question: "What if the customer doesn't complete the installation?",
      answer: "Rewards are only paid for completed installations. If a customer doesn't proceed, no reward is earned."
    },
    {
      question: "Is there a limit to how many people I can refer?",
      answer: "No limit! You can refer as many people as you want and earn ₹1000 for each successful installation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-sky">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">
            ₹1000 per successful referral
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How the Solar Referral System Works
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our simple 4-step process makes it easy to earn money by helping your 
            friends and family switch to clean, renewable solar energy.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {steps.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-solar rounded-full shadow-solar">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      Step {index + 1}
                    </Badge>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground">
                    {step.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {index === 0 && (
                    <Button asChild className="shadow-solar">
                      <Link to="/refer">
                        Start Your First Referral <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  
                  {index === 3 && (
                    <Button asChild variant="outline">
                      <Link to="/redeem">
                        <IndianRupee className="mr-2 h-4 w-4" />
                        Redeem Existing Coupon
                      </Link>
                    </Button>
                  )}
                </div>
                
                <Card className={`shadow-warm ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <CardContent className="p-8">
                    <div className="aspect-square bg-gradient-warm rounded-lg flex items-center justify-center">
                      <step.icon className="h-24 w-24 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Referral Program?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've designed our program to be fair, fast, and beneficial for everyone involved.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-warm hover:shadow-solar transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-solar rounded-full w-fit">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our referral program
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-warm">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-solar">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Earning?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of people already earning money by promoting clean solar energy 
            in their communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/refer">
                Submit Your First Referral
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/redeem">
                Redeem Existing Coupon
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}