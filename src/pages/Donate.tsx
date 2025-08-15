import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Target, Gift, Star, Check } from "lucide-react";

const donationTiers = [
  {
    name: "Light Bearer",
    amount: "₦5,000",
    monthly: "₦500/month",
    description: "Help provide basic training materials for one youth",
    impact: "Supports one youth for a month",
    features: [
      "Training materials for 1 youth",
      "Monthly impact updates",
      "Donor appreciation certificate"
    ],
    popular: false
  },
  {
    name: "Path Lighter",
    amount: "₦25,000",
    monthly: "₦2,500/month",
    description: "Sponsor a complete skills training program for one youth",
    impact: "Complete training for 1 youth",
    features: [
      "Full program sponsorship",
      "Direct youth updates",
      "Graduation ceremony invitation",
      "Tax deduction certificate"
    ],
    popular: true
  },
  {
    name: "Community Champion",
    amount: "₦100,000",
    monthly: "₦10,000/month",
    description: "Support multiple youth and program development",
    impact: "Trains 5 youth + program expansion",
    features: [
      "Sponsor 5 youth programs",
      "Quarterly impact reports",
      "VIP event access",
      "Recognition on website",
      "Program naming opportunities"
    ],
    popular: false
  },
  {
    name: "Transformation Leader",
    amount: "₦500,000",
    monthly: "₦50,000/month",
    description: "Fund entire program cycles and infrastructure",
    impact: "Complete program cycle for 25+ youth",
    features: [
      "Fund complete program cycles",
      "Personal program updates",
      "Advisory board invitation",
      "Legacy recognition",
      "Custom impact reports"
    ],
    popular: false
  }
];

const impactAreas = [
  {
    icon: Users,
    title: "Youth Training",
    description: "Direct skills training and mentorship for young people",
    percentage: "60%"
  },
  {
    icon: Target,
    title: "Program Development",
    description: "Creating new programs and improving existing ones",
    percentage: "25%"
  },
  {
    icon: Heart,
    title: "Community Outreach",
    description: "Expanding our reach to more communities",
    percentage: "10%"
  },
  {
    icon: Gift,
    title: "Operations",
    description: "Administrative costs and infrastructure",
    percentage: "5%"
  }
];

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Be the Light
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Your donation empowers Akwa-Ibom youth to build brighter futures for themselves and their communities
            </p>
          </header>

          {/* Impact Statistics */}
          <section className="mb-16">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-heading font-semibold text-2xl text-center text-card-foreground mb-8">
                  Your Impact This Year
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      500+
                    </div>
                    <p className="font-body text-muted-foreground">Youth Trained</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      150
                    </div>
                    <p className="font-body text-muted-foreground">New Businesses</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      800+
                    </div>
                    <p className="font-body text-muted-foreground">Jobs Created</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      25
                    </div>
                    <p className="font-body text-muted-foreground">Communities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Donation Tiers */}
          <section className="mb-16">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8 text-center">
              Choose Your Impact Level
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationTiers.map((tier, index) => (
                <Card key={index} className={`shadow-card hover:shadow-soft transition-shadow duration-300 relative ${tier.popular ? 'border-primary border-2' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="font-heading text-xl text-card-foreground">
                      {tier.name}
                    </CardTitle>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-primary">
                        {tier.amount}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        or {tier.monthly}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-sm text-muted-foreground text-center">
                      {tier.description}
                    </p>
                    
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm font-semibold text-primary">
                        {tier.impact}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2 pt-4">
                      <Button 
                        className="w-full" 
                        variant={tier.popular ? "default" : "outline"}
                      >
                        Donate {tier.amount}
                      </Button>
                      <Button variant="ghost" size="sm" className="w-full text-xs">
                        Monthly: {tier.monthly}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Custom Amount */}
          <section className="mb-16">
            <Card className="max-w-md mx-auto shadow-card">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-card-foreground text-center">
                  Custom Amount
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Enter your amount (NGN)
                  </label>
                  <input 
                    type="number" 
                    placeholder="10,000"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">One-time</Button>
                  <Button variant="outline" className="flex-1">Monthly</Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* How Funds Are Used */}
          <section className="mb-16">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8 text-center">
              How Your Donation Is Used
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactAreas.map((area, index) => (
                <Card key={index} className="shadow-card text-center">
                  <CardContent className="p-6">
                    <area.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                      {area.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-3">
                      {area.description}
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      {area.percentage}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Other Ways to Help */}
          <section className="mb-16">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8 text-center">
              Other Ways to Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                    Volunteer
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Share your skills and experience as a mentor or trainer
                  </p>
                  <Button variant="outline">
                    Join as Volunteer
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                    Corporate Partnership
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Partner with us for sustainable youth development programs
                  </p>
                  <Button variant="outline">
                    Explore Partnership
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                    Spread the Word
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Help us reach more youth by sharing our mission
                  </p>
                  <Button variant="outline">
                    Share Our Story
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testimonial */}
          <section>
            <Card className="max-w-4xl mx-auto shadow-card">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-heading font-bold text-xl">
                      EU
                    </span>
                  </div>
                  <p className="font-body text-lg text-muted-foreground italic mb-4">
                    "Thanks to a generous donor who sponsored my training, I now run a successful tech company that employs 8 other young people. Your donation can create the same transformation for another youth."
                  </p>
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      Emeka Udoh
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Skills Training Graduate & Tech Entrepreneur
                    </p>
                  </div>
                </div>
                <Button size="lg">
                  Sponsor a Youth Today
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
