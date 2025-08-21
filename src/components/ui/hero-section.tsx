import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20">
      {/* Urban Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-urban rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-primary rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/40 rounded-full blur-md animate-pulse delay-500"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Be the light,<br />
              <span className="text-foreground">lead the way</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-urban mx-auto mb-8 rounded-full"></div>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Empowering <span className="text-primary font-semibold">Akwa Ibom youth</span> for a brighter, 
              more vibrant future in the heart of <span className="text-accent font-semibold">Uyo</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-gradient-primary border-0 hover:shadow-neon transition-all duration-300 transform hover:scale-105"
            >
              Join the Movement
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
            >
              Explore Programs
            </Button>
          </div>

          {/* Urban Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-urban transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Youth Empowered</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-urban transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-accent mb-2">50+</div>
              <div className="text-muted-foreground font-medium">Programs Running</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-urban transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground font-medium">Community Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};