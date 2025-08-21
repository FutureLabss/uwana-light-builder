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
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Urban Programs
          </h2>
          <div className="w-20 h-1 bg-gradient-urban mx-auto mb-6 rounded-full"></div>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Street-smart training and <span className="text-accent font-semibold">real connections</span> for the next generation of Uyo leaders
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="group overflow-hidden border-2 border-border/50 hover:border-accent/50 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 shadow-card hover:shadow-urban">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-urban rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <CardContent className="p-8 bg-gradient-card">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed text-lg">
                  {program.description}
                </p>
                <Button 
                  className="bg-gradient-urban border-0 text-white font-semibold px-6 py-3 hover:shadow-neon transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Urban Call-to-Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-urban rounded-full"></div>
            <span className="font-heading font-bold text-xl text-muted-foreground">Ready to level up?</span>
            <div className="w-12 h-0.5 bg-gradient-urban rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};