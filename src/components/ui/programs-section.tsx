import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import skillsTrainingImage from "@/assets/skills-training.jpg";
import mentorshipImage from "@/assets/mentorship.jpg";

const programs = [
  {
    image: skillsTrainingImage,
    title: "Youth Skills Training",
    description: "Hands-on training for self-reliance and innovation.",
    link: "/programs/skills-training"
  },
  {
    image: mentorshipImage,
    title: "Mentorship & Leadership",
    description: "Connecting young people with experienced mentors.",
    link: "/programs/mentorship"
  }
];

export const ProgramsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Featured Programs
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we're empowering youth through practical training and mentorship
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl md:text-2xl text-card-foreground mb-3">
                  {program.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};