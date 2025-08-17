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
                Shining a light on Akwa Ibom's greatest asset: its people
              </p>
            </header>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
                What is Uwana?
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Uwana (a word meaning "light" or "brightness" in the local language) is a new non-governmental 
                initiative designed to shine a light on Akwa Ibom's greatest asset: its people. The Uwana Project 
                aims to amplify the voices of Akwa Ibom youths in all spheres of life, from a point-of-sale 
                attendant in a rural village to an Akwa Ibomite professional in the United States.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                By capturing and sharing their stories, achievements, and aspirations, Uwana will bring much-needed 
                visibility to their talents and challenges. This project is rooted in the belief that the voices 
                and creativity of Akwa Ibom's youth are powerful catalysts for change when given a platform.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Many youths in the state are hardworking, educated, and ambitious, yet have been held back by 
                insufficient government support, high poverty and unemployment, and limited opportunities to be heard. 
                Uwana seeks to fill this gap as a bright beacon connecting these youths to the world.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Uwana's mission is to raise a generation of Akwa Ibom youth who are heard, supported, and 
                equipped to lead change, build prosperity, and shine on the global stage.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
                Our Vision
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                An Akwa Ibom where youth potential is fully realized, where young people are heard, supported, 
                and equipped to contribute meaningfully to society, thereby catalyzing economic growth, cultural 
                renaissance, and global recognition for the state.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;