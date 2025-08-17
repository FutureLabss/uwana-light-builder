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
              A comprehensive policy framework for youth development in Akwa Ibom State
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
                    The Ibom Youth 2040 policy document outlines our strategic vision for youth development 
                    and empowerment in Akwa Ibom State. This comprehensive framework addresses key areas 
                    including education, employment, entrepreneurship, and civic engagement.
                  </p>
                  <Button className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Policy Document
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8">
                Key Focus Areas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-card-foreground">
                      Education & Skills Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground">
                      Bridging the gap between education and industry needs through relevant skill acquisition programs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-card-foreground">
                      Economic Empowerment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground">
                      Creating sustainable economic opportunities for youth through entrepreneurship and innovation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-card-foreground">
                      Technology Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground">
                      Leveraging digital technologies to enhance youth participation in the global economy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-card-foreground">
                      Leadership Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-muted-foreground">
                      Building the next generation of leaders who will drive positive change in our communities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
                Ndise Initiative
              </h2>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="font-body text-lg text-muted-foreground leading-relaxed">
                    Ndise, meaning "to show" in the local dialect, is our flagship initiative under the 
                    Ibom Youth 2040 framework. This program focuses on showcasing the talents, innovations, 
                    and achievements of Akwa Ibom youth on both local and international platforms.
                  </p>
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