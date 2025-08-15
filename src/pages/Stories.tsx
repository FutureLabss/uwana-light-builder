import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

const successStories = [
  {
    name: "Emeka Udoh",
    age: 24,
    program: "Youth Skills Training",
    achievement: "Started Tech Solutions Company",
    story: "After completing the digital skills training program, I launched my own software development company. Today, I employ 8 other young people and we've built applications for over 50 local businesses. Uwana gave me the foundation I needed to turn my passion into a thriving business.",
    image: "/placeholder.svg",
    year: "2024",
    impact: "Created 8 jobs"
  },
  {
    name: "Grace Etim",
    age: 22,
    program: "Agricultural Innovation",
    achievement: "Modern Farming Cooperative Leader",
    story: "The agricultural innovation program opened my eyes to modern farming techniques. I now lead a cooperative of 25 young farmers using smart irrigation and organic farming methods. Our yield has increased by 300% and we supply to major supermarkets in the state.",
    image: "/placeholder.svg",
    year: "2023",
    impact: "300% yield increase"
  },
  {
    name: "David Akpan",
    age: 26,
    program: "Mentorship & Leadership",
    achievement: "Community Development Coordinator",
    story: "Through the mentorship program, I connected with leaders who helped me develop my vision for community service. I now coordinate youth development projects across 5 local communities, impacting over 200 young people through skills training and empowerment programs.",
    image: "/placeholder.svg",
    year: "2024",
    impact: "200+ youth impacted"
  },
  {
    name: "Blessing Okon",
    age: 23,
    program: "Digital Literacy",
    achievement: "E-commerce Entrepreneur",
    story: "The digital literacy program taught me everything about online business. I started selling locally-made crafts online and now my e-commerce platform connects over 100 local artisans with customers worldwide. We've generated over ₦2M in sales this year.",
    image: "/placeholder.svg",
    year: "2024",
    impact: "₦2M+ in sales"
  }
];

const testimonials = [
  {
    name: "Jennifer Udo",
    program: "Skills Training Graduate",
    quote: "Uwana didn't just teach me skills; they gave me confidence. The mentorship I received was life-changing.",
    rating: 5
  },
  {
    name: "Samuel Effiong",
    program: "Leadership Program Alumni",
    quote: "The leadership training prepared me to not just succeed, but to help others succeed too. I'm now mentoring 10 young entrepreneurs.",
    rating: 5
  },
  {
    name: "Mary Bassey",
    program: "Digital Skills Graduate",
    quote: "From knowing nothing about computers to running my own digital marketing agency - that's the Uwana transformation!",
    rating: 5
  }
];

const Stories = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Success Stories
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Uwana has transformed lives and empowered young people to become leaders in their communities
            </p>
          </header>

          {/* Success Stories */}
          <section className="mb-16">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8 text-center">
              Transformational Journeys
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-foreground font-heading font-bold text-xl">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-xl text-card-foreground">
                          {story.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">Age {story.age} • Class of {story.year}</p>
                        <Badge variant="secondary" className="mt-1">
                          {story.program}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-heading font-semibold text-lg text-primary mb-2">
                        {story.achievement}
                      </h4>
                      <div className="flex items-center mb-3">
                        <Quote className="h-5 w-5 text-primary mr-2" />
                        <span className="text-sm font-medium text-foreground">Impact: {story.impact}</span>
                      </div>
                    </div>
                    
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      "{story.story}"
                    </p>
                    
                    <Button variant="outline" size="sm">
                      Read Full Story
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8 text-center">
              What Our Alumni Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="font-body text-muted-foreground italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-heading font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.program}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Impact Statistics */}
          <section className="mb-16">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8 text-center">
                  Our Impact in Numbers
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      500+
                    </div>
                    <p className="font-body text-muted-foreground">Youth Trained</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      150+
                    </div>
                    <p className="font-body text-muted-foreground">Businesses Started</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      800+
                    </div>
                    <p className="font-body text-muted-foreground">Jobs Created</p>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                      85%
                    </div>
                    <p className="font-body text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section>
            <Card className="max-w-2xl mx-auto shadow-card">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading font-semibold text-2xl text-card-foreground mb-4">
                  Ready to Write Your Success Story?
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Join hundreds of young people who have transformed their lives through Uwana's programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    Apply to a Program
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stories;