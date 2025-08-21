import { CheckCircle } from "lucide-react";

const messages = [
  "Every youth can be a beacon of change.",
  "Empower yourself, empower your community.",
  "Light the path to your future.",
  "Together, we reduce unemployment through self-development and innovation."
];

export const KeyMessages = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-muted/30 via-card to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Urban Values
          </h2>
          <div className="w-20 h-1 bg-gradient-urban mx-auto mb-6 rounded-full"></div>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The core principles that drive our <span className="text-accent font-semibold">urban revolution</span> in Uyo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {messages.map((message, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-gradient-card rounded-2xl border border-border/50 hover:shadow-urban transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Urban Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-urban rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-urban rounded-xl flex items-center justify-center shadow-neon">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-body text-lg md:text-xl text-card-foreground leading-relaxed font-medium">
                    {message}
                  </p>
                </div>
              </div>
              
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Urban Call-to-Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-urban rounded-full text-white font-semibold shadow-neon">
            <span>Ready to shine?</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};