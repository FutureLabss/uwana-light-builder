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
              Join our social experiments and community initiatives to create lasting change
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-card-foreground flex items-center gap-3">
                    <Lightbulb className="h-6 w-6 text-primary" />
                    Social Experiment Initiative
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Our social experiment initiative is designed to test innovative approaches to youth 
                    development and community engagement. Through carefully designed interventions, we 
                    explore new ways to empower youth and create positive social change.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-heading font-semibold text-xl text-foreground">
                        Current Experiments
                      </h3>
                      <ul className="font-body text-muted-foreground space-y-2">
                        <li>• Youth-led community mapping</li>
                        <li>• Peer-to-peer mentorship networks</li>
                        <li>• Digital storytelling workshops</li>
                        <li>• Innovation challenge series</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading font-semibold text-xl text-foreground">
                        How to Participate
                      </h3>
                      <ul className="font-body text-muted-foreground space-y-2">
                        <li>• Register for upcoming experiments</li>
                        <li>• Propose your own initiative</li>
                        <li>• Volunteer as a facilitator</li>
                        <li>• Share your results</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8">
                Featured Programs
              </h2>
              
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-card-foreground flex items-center gap-3">
                      <Target className="h-5 w-5 text-primary" />
                      Akpokoro Initiative
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Akpokoro, meaning "community" in our local language, focuses on building stronger 
                      connections between urban and rural youth. This program facilitates knowledge exchange, 
                      resource sharing, and collaborative projects that benefit entire communities.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-card-foreground flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      Afeh Network
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Afeh represents our global connections program, linking Akwa Ibom youth with 
                      international opportunities, partnerships, and cultural exchanges. This initiative 
                      helps young people think globally while acting locally.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline">Join Network</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-16">
              <Card className="shadow-card bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-card-foreground flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    Get Involved Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Ready to be part of something bigger? Join our engagement programs and help shape 
                    the future of Akwa Ibom youth development.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1">Start an Experiment</Button>
                    <Button variant="outline" className="flex-1">Join Existing Program</Button>
                  </div>
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