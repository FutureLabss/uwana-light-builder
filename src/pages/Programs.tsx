import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Youth Skills Training",
    description: "Comprehensive hands-on training programs designed to equip young people with practical skills for self-reliance and innovation in various trades and technologies.",
    features: ["Technical Skills", "Entrepreneurship", "Innovation Labs", "Certification"],
    duration: "3-6 months",
    level: "Beginner to Advanced"
  },
  {
    title: "Mentorship & Leadership",
    description: "Connecting young people with experienced mentors and leaders to provide guidance, support, and career development opportunities.",
    features: ["One-on-One Mentoring", "Group Sessions", "Leadership Training", "Network Building"],
    duration: "6-12 months",
    level: "All Levels"
  },
  {
    title: "Digital Literacy",
    description: "Essential digital skills training to prepare youth for the modern economy and digital workforce opportunities.",
    features: ["Computer Skills", "Internet Literacy", "Digital Marketing", "Online Business"],
    duration: "2-4 months",
    level: "Beginner to Intermediate"
  },
  {
    title: "Agricultural Innovation",
    description: "Modern farming techniques and agribusiness training to revolutionize agriculture and create sustainable livelihoods.",
    features: ["Smart Farming", "Agribusiness", "Cooperative Formation", "Market Access"],
    duration: "4-8 months",
    level: "Beginner to Advanced"
  }
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Our Programs
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive programs designed to empower youth through practical training and mentorship
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-card-foreground">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-heading font-semibold text-foreground">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span><strong>Duration:</strong> {program.duration}</span>
                    <span><strong>Level:</strong> {program.level}</span>
                  </div>

                  <Button className="w-full mt-4">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;