import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const IbomYouth2040 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Ibom Youth 2040
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Akwa Ibom Youth Prosperity Policy (AYPP)
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <section className="mb-16">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-card-foreground flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    Policy Document
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    A Policy Paper on Economic and Human Capital Development of Akwa Ibom Youths (2025–2040). 
                    The Akwa Ibom Youth Prosperity Policy Document is a forward-looking blueprint for inclusive 
                    economic growth and human capital development, specifically designed to harness the potential 
                    of the state's vibrant youth population.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    With individuals under the age of 35 constituting over 62% of Akwa Ibom's 7.2 million residents 
                    (NBS, 2023), this policy is both timely and transformative. It presents a strategic roadmap that 
                    identifies high-impact investment opportunities across ten priority sectors: agriculture, marine 
                    and fisheries, entrepreneurship, technology and innovation, health, education, tourism, sports, 
                    and the creative economy.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    This is not merely a policy—it is a bold, youth-led initiative that aligns state development with 
                    emerging global economic trends while leveraging Akwa Ibom's unique demographic advantage and sectoral 
                    strengths. By actively positioning under-30 indigenous youth as sectoral leaders and policy actors, 
                    the framework embraces a bottom-up, evidence-based, and investor-aligned approach to sustainable development.
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    The overarching vision is to transform Akwa Ibom into Nigeria's foremost youth-powered economy by 2040, 
                    underpinned by local ingenuity, digital transformation, and strategic public-private partnerships. To 
                    achieve this, the policy articulates actionable strategies, presents sector-specific data, outlines 
                    investor incentives, and proposes structural reforms necessary to build a resilient, inclusive, and 
                    competitive sub-national economy.
                  </p>
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Policy Document
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
                Ndise Initiative
              </h2>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                    Ndise is a well-captured documentary that highlights and showcases the investment opportunities 
                    and emerging markets in Akwa Ibom State where investors can put their money. Beyond entertainment, 
                    the documentary is educative and informative, giving investors clarity on how and where to invest 
                    in Akwa Ibom.
                  </p>
                  <Button>Watch Ndise Documentary</Button>
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

export default IbomYouth2040;