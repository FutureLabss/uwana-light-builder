import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Globe, Search, Plus } from "lucide-react";

const BusinessDirectory = () => {
  const businesses = [
    {
      id: 1,
      name: "TechHub Uyo",
      category: "Technology",
      description: "Co-working space and incubator for tech startups",
      location: "Uyo",
      phone: "+234 803 123 4567",
      website: "www.techhubuyo.com",
      founded: "2023"
    },
    {
      id: 2,
      name: "Akwa Farm Fresh",
      category: "Agriculture",
      description: "Organic farming and fresh produce delivery service",
      location: "Ikot Ekpene",
      phone: "+234 801 987 6543",
      website: "www.akwafarmfresh.ng",
      founded: "2022"
    },
    {
      id: 3,
      name: "Creative Minds Studio",
      category: "Creative Arts",
      description: "Digital design and multimedia production services",
      location: "Uyo",
      phone: "+234 805 456 7890",
      website: "www.creativemindsstudio.com",
      founded: "2024"
    },
    {
      id: 4,
      name: "EduTech Solutions",
      category: "Education",
      description: "Online learning platform for skill development",
      location: "Eket",
      phone: "+234 807 234 5678",
      website: "www.edutechsolutions.ng",
      founded: "2023"
    }
  ];

  const categories = ["All", "Technology", "Agriculture", "Creative Arts", "Education", "Healthcare", "Finance", "Retail"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Business Directory
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              A platform dedicated to market, discover, and invest in SME and Akwa Ibom innovative youths
            </p>
          </header>

          <div className="max-w-6xl mx-auto">
            {/* Search and Filter Section */}
            <section className="mb-12">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        placeholder="Search businesses..." 
                        className="pl-10"
                      />
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="uyo">Uyo</SelectItem>
                        <SelectItem value="eket">Eket</SelectItem>
                        <SelectItem value="ikot-ekpene">Ikot Ekpene</SelectItem>
                        <SelectItem value="oron">Oron</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Add Business Section */}
            <section className="mb-12">
              <Card className="shadow-card bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                        Is your business youth-led or innovation-focused?
                      </h3>
                      <p className="font-body text-muted-foreground">
                        Join our directory and connect with the Uwana community
                      </p>
                    </div>
                    <Button className="flex items-center gap-2 whitespace-nowrap">
                      <Plus className="h-4 w-4" />
                      Add Your Business
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Business Listings */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground">
                  Featured Businesses
                </h2>
                <span className="font-body text-muted-foreground">
                  {businesses.length} businesses found
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businesses.map((business) => (
                  <Card key={business.id} className="shadow-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="font-heading text-xl text-card-foreground mb-2">
                            {business.name}
                          </CardTitle>
                          <Badge variant="secondary" className="mb-3">
                            {business.category}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Est. {business.founded}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {business.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {business.location}, Akwa Ibom
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          {business.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          {business.website}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Profile
                        </Button>
                        <Button size="sm" className="flex-1">
                          Connect
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button variant="outline">Load More Businesses</Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessDirectory;