import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-light.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dynamic overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Enhanced beacon effect */}
      <div className="absolute inset-0 bg-gradient-beacon animate-pulse-soft" />
      
      {/* Urban geometric elements */}
      <div className="geometric-shape geometric-diamond top-20 right-32 animate-pulse-soft" />
      <div className="geometric-shape geometric-circle bottom-32 left-20 animate-pulse-soft" style={{animationDelay: '1s'}} />
      <div className="geometric-shape geometric-triangle top-1/3 right-16 animate-pulse-soft" style={{animationDelay: '2s'}} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight tracking-tight">
            Be the light,{" "}
            <span className="text-primary-light bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent animate-pulse-soft">
              lead the way.
            </span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-95 animate-slide-in-left">
            Empowering Akwa-Ibom youth for a brighter future through innovation, 
            leadership, and community transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right">
            <Button 
              size="lg" 
              className="cta-button font-body font-bold px-10 py-4 text-lg rounded-xl min-w-[200px] transform hover:scale-105 transition-all duration-300"
            >
              Join the Movement
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white font-body font-bold px-10 py-4 text-lg rounded-xl min-w-[200px] backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Support Us
            </Button>
          </div>
        </div>

        {/* Urban accent */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};