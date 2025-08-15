import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const upcomingEvents = [
  {
    title: "Youth Entrepreneurship Workshop",
    date: "2025-01-25",
    time: "10:00 AM - 4:00 PM",
    location: "Uwana Training Center, Uyo",
    description: "Learn the fundamentals of starting and running a successful business. This workshop covers business planning, funding options, and marketing strategies.",
    capacity: "50 participants",
    status: "registration_open",
    price: "Free"
  },
  {
    title: "Digital Skills Bootcamp",
    date: "2025-02-08",
    time: "9:00 AM - 5:00 PM",
    location: "Computer Center, Akwa-Ibom",
    description: "Intensive 3-day bootcamp covering web development, digital marketing, and online business skills for the modern economy.",
    capacity: "30 participants",
    status: "registration_open",
    price: "₦5,000"
  },
  {
    title: "Leadership & Mentorship Summit",
    date: "2025-02-20",
    time: "8:00 AM - 6:00 PM",
    location: "Convention Center, Uyo",
    description: "Annual summit bringing together young leaders and experienced mentors for networking, learning, and collaboration.",
    capacity: "200 participants",
    status: "coming_soon",
    price: "₦2,000"
  }
];

const pastEvents = [
  {
    title: "Skills Training Graduation Ceremony",
    date: "2024-12-15",
    description: "Celebrating the graduation of 45 youth from our skills training program.",
    participants: "150+ attendees"
  },
  {
    title: "Community Innovation Challenge",
    date: "2024-11-30",
    description: "Youth presented innovative solutions to local community challenges.",
    participants: "80+ participants"
  },
  {
    title: "Agricultural Innovation Workshop",
    date: "2024-10-22",
    description: "Training on modern farming techniques and agribusiness opportunities.",
    participants: "60+ farmers"
  }
];

const Events = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'registration_open':
        return <Badge className="bg-green-500 text-white">Registration Open</Badge>;
      case 'coming_soon':
        return <Badge variant="secondary">Coming Soon</Badge>;
      default:
        return <Badge variant="outline">TBA</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Events
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us for workshops, training sessions, and community events designed to empower and connect youth
            </p>
          </header>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="font-heading text-xl text-card-foreground">
                        {event.title}
                      </CardTitle>
                      {getStatusBadge(event.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.capacity}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="font-heading font-semibold text-primary">
                        {event.price}
                      </span>
                      <Button 
                        disabled={event.status === 'coming_soon'}
                        className="w-auto"
                      >
                        {event.status === 'coming_soon' ? 'Coming Soon' : 'Register Now'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="mb-16">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-8">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-4">
                      {event.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        {formatDate(event.date)}
                      </span>
                      <span className="text-primary font-medium">
                        {event.participants}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section>
            <Card className="max-w-2xl mx-auto shadow-card">
              <CardContent className="p-8 text-center">
                <h3 className="font-heading font-semibold text-2xl text-card-foreground mb-4">
                  Stay Updated
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Subscribe to our newsletter to be the first to know about upcoming events and opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground"
                  />
                  <Button>Subscribe</Button>
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

export default Events;