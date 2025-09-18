import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Uwana Project Launches Youth Innovation Challenge",
      excerpt: "Young innovators across Akwa Ibom invited to showcase their solutions to local challenges",
      date: "January 15, 2025",
      category: "Innovation",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "First Akpokoro Community Exchange Program Successfully Completed",
      excerpt: "Rural and urban youth collaborate on sustainable development projects",
      date: "January 10, 2025",
      category: "Community",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Ibom Youth 2040 Policy Framework Receives Government Support",
      excerpt: "State government endorses comprehensive youth development strategy",
      date: "January 8, 2025",
      category: "Policy",
      readTime: "4 min read"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Youth Leadership Summit 2025",
      date: "February 20, 2025",
      location: "Uyo International Convention Center",
      description: "Annual gathering of young leaders from across Akwa Ibom State"
    },
    {
      id: 2,
      title: "Digital Skills Workshop Series",
      date: "March 5-7, 2025",
      location: "Various Locations",
      description: "Three-day intensive training on digital literacy and online entrepreneurship"
    },
    {
      id: 3,
      title: "Afeh Global Connect Virtual Conference",
      date: "March 15, 2025",
      location: "Virtual Event",
      description: "Connecting Akwa Ibom youth with global opportunities and partnerships"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div id="news-marker" style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0 }} />
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              News & Events
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Upcoming projects and events updated daily and weekly
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* News Section */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8">
                Latest News
              </h2>
              
              <div className="space-y-6">
                {newsItems.map((item) => (
                  <Card key={item.id} className="shadow-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.readTime}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="font-heading text-xl text-card-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-body text-muted-foreground leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                      <Button variant="ghost" className="p-0 h-auto font-semibold">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline">View All News</Button>
              </div>
            </div>

            {/* Events Sidebar */}
            <div>
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8">
                Upcoming Events
              </h2>
              
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="shadow-card">
                    <CardHeader className="pb-3">
                      <CardTitle className="font-heading text-lg text-card-foreground">
                        {event.title}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                        </div>
                        <div>📍 {event.location}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                        {event.description}
                      </p>
                      <Button size="sm" className="w-full">Register</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" className="w-full">View All Events</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;