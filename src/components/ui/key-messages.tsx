import { CheckCircle, Lightbulb, Users, Target, Zap } from "lucide-react";

const messages = [
  {
    text: "Every youth can be a beacon of change.",
    icon: Lightbulb,
    color: "text-primary"
  },
  {
    text: "Empower yourself, empower your community.",
    icon: Users,
    color: "text-secondary"
  },
  {
    text: "Light the path to your future.",
    icon: Target,
    color: "text-accent"
  },
  {
    text: "Together, we reduce unemployment through self-development and innovation.",
    icon: Zap,
    color: "text-primary"
  }
];

export const KeyMessages = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-background via-urban-light/10 to-background relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="geometric-shape geometric-diamond top-16 right-24 animate-pulse-soft" />
      <div className="geometric-shape geometric-circle bottom-16 left-16 animate-pulse-soft" style={{animationDelay: '1.5s'}} />
      
      <div className="container mx-auto px-6">
        <div className="section-header text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-secondary mb-6 animate-fade-in-up">
            Our Core Values
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
            The principles that drive our mission to transform Akwa Ibom youth into global changemakers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          {messages.map((message, index) => {
            const IconComponent = message.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-card backdrop-blur-sm rounded-2xl shadow-urban hover:shadow-floating transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-urban opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative flex items-start space-x-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${message.color} group-hover:animate-pulse`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-lg md:text-xl text-card-foreground leading-relaxed font-medium">
                      {message.text}
                    </p>
                  </div>
                </div>
                
                {/* Accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-urban rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};