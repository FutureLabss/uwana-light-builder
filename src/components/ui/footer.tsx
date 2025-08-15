import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { text: "About", url: "/about" },
  { text: "Programs", url: "/programs" },
  { text: "Events", url: "/events" },
  { text: "Donate", url: "/donate" },
];

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com/uwanang", label: "Facebook" },
  { icon: Instagram, url: "https://instagram.com/uwanang", label: "Instagram" },
  { icon: Twitter, url: "https://twitter.com/uwanang", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="font-body text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body text-secondary-foreground/80">
                  Uyo, Akwa-Ibom, Nigeria
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:info@uwanang.org"
                  className="font-body text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                >
                  info@uwanang.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-body text-secondary-foreground/80">
                  +234XXXXXXXXXX
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-heading font-semibold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:bg-primary-dark transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-body text-secondary-foreground/60">
            © 2025 Uwana. Be the light, lead the way.
          </p>
        </div>
      </div>
    </footer>
  );
};