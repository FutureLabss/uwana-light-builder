import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-light.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Beacon Effect */}
      <div className="absolute inset-0 bg-gradient-beacon" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Be the light,{" "}
          <span className="text-primary-light">lead the way.</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Empowering Akwa-Ibom youth for a brighter future through skills training, 
          mentorship, and community development.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-golden font-body font-semibold px-8 py-3 text-lg"
          >
            Join a Program
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-foreground font-body font-semibold px-8 py-3 text-lg"
          >
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
};