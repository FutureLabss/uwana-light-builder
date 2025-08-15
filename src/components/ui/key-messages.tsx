import { CheckCircle } from "lucide-react";

const messages = [
  "Every youth can be a beacon of change.",
  "Empower yourself, empower your community.",
  "Light the path to your future.",
  "Together, we reduce unemployment through self-development and innovation."
];

export const KeyMessages = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Key Messages
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our core beliefs that guide everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card hover:shadow-soft transition-shadow duration-300"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="font-body text-lg text-card-foreground leading-relaxed">
                {message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};