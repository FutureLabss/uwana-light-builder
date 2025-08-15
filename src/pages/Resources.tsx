import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, Video, FileText, Users, Target } from "lucide-react";

const resources = [
  {
    category: "Guides & Handbooks",
    icon: BookOpen,
    items: [
      { title: "Youth Entrepreneurship Guide", type: "PDF", size: "2.3 MB" },
      { title: "Skills Development Handbook", type: "PDF", size: "1.8 MB" },
      { title: "Leadership Training Manual", type: "PDF", size: "3.1 MB" },
    ]
  },
  {
    category: "Video Tutorials",
    icon: Video,
    items: [
      { title: "Getting Started with Digital Skills", type: "Video", duration: "15 min" },
      { title: "Entrepreneurship Basics", type: "Video", duration: "22 min" },
      { title: "Building Your Network", type: "Video", duration: "18 min" },
    ]
  },
  {
    category: "Templates & Tools",
    icon: FileText,
    items: [
      { title: "Business Plan Template", type: "DOCX", size: "456 KB" },
      { title: "Project Proposal Template", type: "DOCX", size: "234 KB" },
      { title: "Skills Assessment Tool", type: "PDF", size: "890 KB" },
    ]
  },
  {
    category: "Community Resources",
    icon: Users,
    items: [
      { title: "Mentorship Program Guidelines", type: "PDF", size: "1.2 MB" },
      { title: "Community Project Ideas", type: "PDF", size: "678 KB" },
      { title: "Networking Event Calendar", type: "PDF", size: "345 KB" },
    ]
  }
];

const quickLinks = [
  { title: "Program Applications", description: "Apply for our various training programs", icon: Target },
  { title: "Scholarship Information", description: "Learn about available scholarships and funding", icon: BookOpen },
  { title: "Success Stories", description: "Read inspiring stories from our alumni", icon: Users },
  { title: "Frequently Asked Questions", description: "Find answers to common questions", icon: FileText },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Resources
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our comprehensive collection of resources to support your journey towards success
            </p>
          </header>

          {/* Quick Links */}
          <section className="mb-16">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <link.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                      {link.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Resource Categories */}
          <section>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8 text-center">
              Resource Library
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resources.map((category, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-card-foreground flex items-center">
                      <category.icon className="h-6 w-6 text-primary mr-3" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="flex-1">
                          <h4 className="font-body font-medium text-foreground">
                            {item.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="secondary" className="text-xs">
                              {item.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {item.size || item.duration}
                            </span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto shadow-card">
              <CardContent className="p-8">
                <h3 className="font-heading font-semibold text-2xl text-card-foreground mb-4">
                  Need More Help?
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Can't find what you're looking for? Our team is here to help you access the resources you need.
                </p>
                <Button size="lg">
                  Contact Our Team
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

export default Resources;