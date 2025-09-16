import { CheckCircle, Lightbulb, Users, Target, Zap } from "lucide-react";

export const KeyMessages = () => {
  const messages = [
    {
      icon: Users,
      title: "COMMUNITY FIRST",
      description: "Building stronger communities through youth engagement and collaborative initiatives that create lasting impact.",
    },
    {
      icon: Lightbulb,
      title: "INNOVATION HUB",
      description: "Fostering creativity and technological advancement to solve local challenges with global solutions.",
    },
    {
      icon: Target,
      title: "STRATEGIC FOCUS",
      description: "Targeted programs that address the most pressing needs of Akwa Ibom youth across all sectors.",
    }
  ];

  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading font-black text-5xl md:text-7xl text-foreground mb-8 tracking-tight">
            OUR CORE
            <span className="block text-primary">VALUES</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Guided by principles that drive meaningful change and sustainable growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {messages.map((message, index) => (
            <div 
              key={index}
              className="bg-card border border-border/20 p-12 rounded hover:border-primary/50 transition-all duration-500 hover:-translate-y-4 group relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="w-20 h-20 bg-primary/10 p-5 mb-8 group-hover:bg-primary/20 transition-colors duration-300">
                <message.icon className="w-full h-full text-primary" />
              </div>
              
              <h3 className="font-heading text-2xl font-black text-foreground mb-6 tracking-wide">
                {message.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {message.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};