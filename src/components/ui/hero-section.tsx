import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-light.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Subtle yellow beacon effect */}
      <div className="absolute inset-0 bg-gradient-beacon animate-pulse-soft" />
      
      {/* Geometric elements with yellow accents */}
      <div className="absolute top-20 right-32 w-24 h-24 border-2 border-primary/30 rotate-45 animate-pulse-soft" />
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-primary/20 rounded-full animate-pulse-soft" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/3 right-16 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-primary/30 animate-pulse-soft" style={{animationDelay: '2s'}} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl mb-8 leading-none tracking-tighter text-foreground">
            BE THE{" "}
            <span className="text-primary block text-7xl md:text-9xl lg:text-[10rem]">
              LIGHT
            </span>
            <span className="text-foreground/80 text-4xl md:text-6xl lg:text-7xl font-light tracking-wide">
              LEAD THE WAY
            </span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-muted-foreground animate-slide-in-left">
            Empowering Akwa-Ibom youth for a brighter future through innovation, 
            leadership, and community transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-12 py-6 text-xl rounded-none uppercase tracking-wider transform hover:scale-105 transition-all duration-300 min-w-[250px]"
            >
              Join the Movement
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-12 py-6 text-xl rounded-none uppercase tracking-wider min-w-[250px] transition-all duration-300 hover:scale-105"
            >
              Support Us
            </Button>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-20 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};