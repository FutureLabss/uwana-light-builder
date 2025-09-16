import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigationItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Get In Touch", url: "/get-in-touch" },
  { label: "Ibom Youth 2040", url: "/ibom-youth-2040" },
  { label: "Engage", url: "/engage" },
  { label: "News", url: "/news" },
  { label: "Business Directory", url: "/business-directory" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="rounded w-[7rem] h-[60px] flex items-center justify-center">
              <img src="\uwanaLogo.png" alt="Uwana Logo"/>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.url}
                className="text-foreground hover:text-primary transition-colors duration-300 font-body font-bold uppercase tracking-wider text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background border-border/20">
              <nav className="flex flex-col space-y-8 mt-12">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-body font-bold uppercase tracking-wider text-lg border-b border-border/20 pb-4"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};