import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { text: "About", url: "/about" },
  { text: "Get In Touch", url: "/get-in-touch" },
  { text: "Ibom Youth 2040", url: "/ibom-youth-2040" },
  { text: "Engage", url: "/engage" },
  { text: "News", url: "/news" },
  { text: "Business Directory", url: "/business-directory" },
];

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com/uwanang", label: "Facebook" },
  { icon: Instagram, url: "https://instagram.com/uwanang", label: "Instagram" },
  { icon: Twitter, url: "https://twitter.com/uwanang", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/20 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-black text-2xl">U</span>
              </div>
              <span className="font-heading font-black text-2xl text-foreground tracking-wide">UWANA</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md text-lg">
              Empowering Akwa-Ibom youth for a brighter future through innovation, 
              leadership, and community transformation.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group">
                <span className="text-primary group-hover:text-primary-foreground font-bold">f</span>
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group">
                <span className="text-primary group-hover:text-primary-foreground font-bold">t</span>
              </div>
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer group">
                <span className="text-primary group-hover:text-primary-foreground font-bold">i</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-black text-foreground mb-6 text-xl tracking-wide">QUICK LINKS</h3>
            <div className="w-12 h-1 bg-primary mb-6" />
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg font-medium uppercase tracking-wide"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-black text-foreground mb-6 text-xl tracking-wide">CONTACT</h3>
            <div className="w-12 h-1 bg-primary mb-6" />
            <ul className="space-y-4">
              <li className="text-muted-foreground text-lg">info@uwana.com.ng</li>
              <li className="text-muted-foreground text-lg">08037890023</li>
              <li className="text-muted-foreground text-lg">Akwa Ibom State, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-lg">
              &copy; 2024 UWANA PROJECT. ALL RIGHTS RESERVED.
            </p>
            <div className="w-24 h-1 bg-primary mt-4 md:mt-0" />
          </div>
        </div>
      </div>
    </footer>
  );
};