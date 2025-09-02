import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Target, Globe } from "lucide-react";

const Engage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Engage
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              The Akwa Ibom of Our Dream
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-card-foreground flex items-center gap-3">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    The "Akwa Ibom of Our Dream" Campaign
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    The "Akwa Ibom of Our Dream" campaign represents a significant opportunity to shape the future 
                    of our state. By engaging every citizen, fostering dialogue, and promoting collaboration, we can 
                    build bridges that lead to a thriving Akwa Ibom where every citizen's dreams and aspirations are realized.
                  </p>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Together, let us embark on this transformative journey to create a brighter and more prosperous 
                    future for our beloved state.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-16">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-card-foreground flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    Akpokoro
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Akpokoro is an investment event that aims to promote investment and economic growth in Akwa Ibom State. 
                    The event provides a platform for government officials, business leaders, investors, and other stakeholders 
                    to come together and discuss opportunities for investment, showcase the state's potential sectors, and explore collaborations.
                  </p>
                  <Button>Learn More About Akpokoro</Button>
                </CardContent>
              </Card>
            </section>

            <section className="mb-16">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-card-foreground flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    Afeh
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Afeh is a platform to discuss the youth policy and the challenges facing the youths from various 
                    communities and villages across the state. It serves as a vital forum for understanding grassroots 
                    perspectives and ensuring that youth voices from all corners of Akwa Ibom are heard and incorporated 
                    into policy development.
                  </p>
                  <Button>Join Afeh Discussion</Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Engage;