import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { KeyMessages } from "@/components/ui/key-messages";
import { ProgramsSection } from "@/components/ui/programs-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Navigation />
      <HeroSection />
      <KeyMessages />
      <ProgramsSection />
      <Footer />
    </div>
  );
};

export default Index;
