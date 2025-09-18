import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { KeyMessages } from "@/components/ui/key-messages";
import { ProgramsSection } from "@/components/ui/programs-section";
import { SpotlightStories } from "@/components/ui/spotlight-stories";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <div id="home-marker" style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
      <Navigation />
      <HeroSection />
      {/* Section divider */}
      <div className="section-divider" />
      <KeyMessages />
      {/* Section divider */}
      {/* <div className="section-divider" /> */}
      <SpotlightStories />
      {/* Section divider */}
      {/* <div className="section-divider" /> */}
      <ProgramsSection />
      <Footer />
    </div>
  );
};

export default Index;
