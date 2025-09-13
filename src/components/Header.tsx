import { Button } from "@/components/ui/button";
import { Calendar, Coffee, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold">Car Café</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </a>
            <a href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="/gallery" className="text-sm font-medium hover:text-accent transition-colors">
              Gallery
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <a href="/booking">
                <Calendar className="h-4 w-4 mr-2" />
                Book Wash
              </a>
            </Button>
            <Button variant="coffee" size="sm">
              <Coffee className="h-4 w-4 mr-2" />
              Order
            </Button>
            <Button variant="gold" size="sm">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Shop
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a href="/services" className="text-sm font-medium hover:text-accent transition-colors">
                Services
              </a>
              <a href="/about" className="text-sm font-medium hover:text-accent transition-colors">
                About
              </a>
              <a href="/gallery" className="text-sm font-medium hover:text-accent transition-colors">
                Gallery
              </a>
              <a href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
                Contact
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="ghost" size="sm" className="justify-start" asChild>
                  <a href="/booking">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Wash
                  </a>
                </Button>
                <Button variant="coffee" size="sm" className="justify-start">
                  <Coffee className="h-4 w-4 mr-2" />
                  Order Coffee
                </Button>
                <Button variant="gold" size="sm" className="justify-start">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Shop Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;