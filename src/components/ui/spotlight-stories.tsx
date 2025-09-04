import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Story {
  id: number;
  name: string;
  age: number;
  location: string;
  profession: string;
  story: string;
  achievement: string;
  image: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Emem Udoh",
    age: 24,
    location: "Uyo, Akwa Ibom",
    profession: "Tech Entrepreneur",
    story: "From selling phone accessories in Ibom Plaza to founding a fintech startup that serves over 10,000 users across Nigeria.",
    achievement: "Built a mobile payment solution that increased financial inclusion in rural Akwa Ibom by 40%",
    image: "/api/placeholder/300/300"
  },
  {
    id: 2,
    name: "Daniel Akpan",
    age: 28,
    location: "Houston, USA (Originally from Ikot Ekpene)",
    profession: "Renewable Energy Engineer",
    story: "A village boy who went from fetching water in jerry cans to designing solar power systems for communities across three continents.",
    achievement: "Pioneered affordable solar solutions that brought electricity to 50+ rural communities in Nigeria",
    image: "/api/placeholder/300/300"
  },
  {
    id: 3,
    name: "Grace Essien",
    age: 22,
    location: "Eket, Akwa Ibom",
    profession: "Creative Artist & Social Entrepreneur",
    story: "Transformed traditional Ibibio art into contemporary fashion, creating employment for 200+ local artisans.",
    achievement: "Her fashion brand showcased at New York Fashion Week, putting Akwa Ibom creativity on the global map",
    image: "/api/placeholder/300/300"
  },
  {
    id: 4,
    name: "Samuel Obot",
    age: 26,
    location: "Oron, Akwa Ibom",
    profession: "Marine Biologist & Aquaculture Specialist",
    story: "From a fishing family to revolutionizing sustainable fish farming, training over 500 young farmers in modern aquaculture.",
    achievement: "Developed climate-resilient fish farming techniques that increased local fish production by 300%",
    image: "/api/placeholder/300/300"
  }
];

export const SpotlightStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
    setIsAutoPlaying(false);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
    setIsAutoPlaying(false);
  };

  const goToStory = (index: number) => {
    setCurrentStory(index);
    setIsAutoPlaying(false);
  };

  const story = stories[currentStory];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-urban-light/20 to-background relative overflow-hidden">
      {/* Geometric shapes */}
      <div className="geometric-shape geometric-diamond top-10 right-20" />
      <div className="geometric-shape geometric-circle bottom-20 left-10" />
      <div className="geometric-shape geometric-triangle top-1/2 right-10" />
      
      <div className="container mx-auto px-4">
        <div className="section-header text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-secondary mb-4">
            Youth Spotlight Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from Akwa Ibom youth making extraordinary impact locally and globally
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main story display */}
          <Card className="bg-gradient-card backdrop-blur-sm border-0 shadow-urban animate-fade-in-up">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Story content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-primary mb-4 opacity-60" />
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-secondary mb-2">
                      {story.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {story.age} years old
                      </span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                        {story.profession}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-2 text-sm">
                      📍 {story.location}
                    </p>
                  </div>
                  
                  <blockquote className="text-lg leading-relaxed text-foreground mb-6 italic">
                    "{story.story}"
                  </blockquote>
                  
                  <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="font-semibold text-sm text-primary mb-1">KEY ACHIEVEMENT</p>
                    <p className="text-foreground">{story.achievement}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden md:rounded-r-xl">
                  <div 
                    className="w-full h-96 md:h-full bg-cover bg-center bg-gradient-to-br from-primary/20 to-secondary/20"
                    style={{ 
                      backgroundImage: `linear-gradient(45deg, rgba(255,215,0,0.1), rgba(0,100,0,0.1)), url(${story.image})`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevStory}
              className="cta-button border-primary/20 hover:border-primary hover:bg-primary/10"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>

            {/* Story indicators */}
            <div className="flex gap-3">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStory(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentStory
                      ? 'bg-primary shadow-golden scale-125'
                      : 'bg-muted hover:bg-primary/40'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextStory}
              className="cta-button border-primary/20 hover:border-primary hover:bg-primary/10"
              aria-label="Next story"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Stories auto-advance every 5 seconds • 
                <button 
                  onClick={() => setIsAutoPlaying(false)}
                  className="ml-1 underline hover:text-primary transition-colors"
                >
                  Pause
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};