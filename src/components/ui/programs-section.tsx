import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users2, Target } from "lucide-react";
import skillsTrainingImage from "@/assets/skills-training.jpg";
import mentorshipImage from "@/assets/mentorship.jpg";

const programs = [
  {
    image: skillsTrainingImage,
    title: "Youth Skills Training",
    description: "Comprehensive hands-on training programs designed to build practical skills for self-reliance, entrepreneurship, and technological innovation.",
    link: "/programs/skills-training",
    icon: Target,
    stats: "500+ Trained",
    accent: "text-primary"
  },
  {
    image: mentorshipImage,
    title: "Mentorship & Leadership",
    description: "Connecting ambitious young people with experienced mentors and industry leaders to unlock potential and build strong networks.",
    link: "/programs/mentorship",
    icon: Users2,
    stats: "200+ Mentees",
    accent: "text-secondary"
  }
];

export const ProgramsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-background to-urban-light/5 relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="geometric-shape geometric-triangle top-20 right-32 animate-pulse-soft" />
      <div className="geometric-shape geometric-circle bottom-24 left-24 animate-pulse-soft" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-6">
        <div className="section-header text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-secondary mb-6 animate-fade-in-up">
            Featured Programs
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-right">
            Transformative programs designed to empower Akwa Ibom youth with the skills, 
            networks, and mindset needed to excel locally and globally
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mt-20">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden shadow-urban hover:shadow-floating transition-all duration-500 hover:-translate-y-3 bg-gradient-card backdrop-blur-sm border-0 animate-fade-in-up"
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Program stats overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className={`font-bold text-sm ${program.accent}`}>
                      {program.stats}
                    </span>
                  </div>
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-soft">
                    <IconComponent className={`w-6 h-6 ${program.accent}`} />
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-card-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-8 leading-relaxed text-lg">
                    {program.description}
                  </p>
                  
                  <Button 
                    variant="urban"
                    size="lg"
                    className="cta-button w-full group-hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Explore Program
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <Button 
            variant="outline" 
            size="lg"
            className="cta-button border-2 border-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-lg font-bold"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};