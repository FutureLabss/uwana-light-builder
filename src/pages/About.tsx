import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                About Uwana
              </h1>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
                Be the light, lead the way - empowering Akwa-Ibom youth for a brighter future
              </p>
            </header>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Uwana is dedicated to empowering young people in Akwa-Ibom State through comprehensive 
                skill development, mentorship programs, and innovative training initiatives. We believe 
                that every youth has the potential to be a beacon of change in their community.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Our mission is to reduce youth unemployment by fostering self-reliance, innovation, 
                and entrepreneurship through practical training and meaningful mentorship connections.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
                Our Vision
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                To create a generation of empowered, self-reliant youth who serve as catalysts for 
                positive change in Akwa-Ibom State and beyond. We envision a future where every young 
                person has the tools, knowledge, and support needed to light their own path to success.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    Empowerment
                  </h3>
                  <p className="font-body text-muted-foreground">
                    We believe in equipping youth with the tools and confidence to create their own opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    Innovation
                  </h3>
                  <p className="font-body text-muted-foreground">
                    We foster creative thinking and innovative solutions to address local and global challenges.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    Community
                  </h3>
                  <p className="font-body text-muted-foreground">
                    We strengthen communities by developing leaders who give back and support others.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    Excellence
                  </h3>
                  <p className="font-body text-muted-foreground">
                    We strive for the highest standards in all our programs and initiatives.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;