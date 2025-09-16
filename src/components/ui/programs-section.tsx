import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users2, Target } from "lucide-react";
import skillsTrainingImage from "@/assets/skills-training.jpg";
import mentorshipImage from "@/assets/mentorship.jpg";

export const ProgramsSection = () => {
  const programs = [
    {
      image: skillsTrainingImage,
      title: "SKILLS TRAINING",
      description: "Comprehensive training programs in technology, entrepreneurship, and vocational skills to prepare youth for the modern economy.",
      features: ["Digital Literacy", "Entrepreneurship", "Vocational Skills"],
      link: "/programs"
    },
    {
      image: mentorshipImage,
      title: "MENTORSHIP NETWORK",
      description: "Connecting young talents with industry leaders and successful professionals for guidance and career development.",
      features: ["Industry Leaders", "Career Guidance", "Professional Network"],
      link: "/programs"
    }
  ];

  return (
    <section className="py-28 bg-muted/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading font-black text-5xl md:text-7xl text-foreground mb-8 tracking-tight">
            OUR
            <span className="block text-primary">PROGRAMS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive initiatives designed to empower Akwa Ibom youth through education, mentorship, and community engagement.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-card border border-border/20 overflow-hidden rounded-sm hover:border-primary/50 transition-all duration-500 hover:-translate-y-4 group relative"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-80">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" /> */}
              </div>
              
              <div className="p-8">
                <h3 className="font-heading text-2xl font-black text-foreground mb-4 tracking-wide">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {program.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {program.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-primary/10 text-primary text-sm uppercase tracking-wide border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-wider font-bold py-4 transition-all duration-300"
                  asChild
                >
                  <a href={program.link}>Learn More</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};