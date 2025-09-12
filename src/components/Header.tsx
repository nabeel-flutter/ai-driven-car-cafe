import { Button } from "@/components/ui/button";
import { Calendar, Coffee, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Modern Logo */}
          <div className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-accent">
              <Coffee className="h-7 w-7 text-accent-foreground" />
            </div>
            <span className="text-2xl font-black bg-gradient-accent bg-clip-text text-transparent">Car Café</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-sm font-semibold hover:text-accent transition-all duration-300 relative group">
              Services
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#about" className="text-sm font-semibold hover:text-accent transition-all duration-300 relative group">
              About
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#gallery" className="text-sm font-semibold hover:text-accent transition-all duration-300 relative group">
              Gallery
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="text-sm font-semibold hover:text-accent transition-all duration-300 relative group">
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          {/* Modern Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="rounded-xl font-semibold">
              <Calendar className="h-4 w-4 mr-2" />
              Book Wash
            </Button>
            <Button variant="coffee" size="sm" className="rounded-xl font-semibold">
              <Coffee className="h-4 w-4 mr-2" />
              Order
            </Button>
            <Button variant="gold" size="sm" className="rounded-xl font-semibold">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Shop
            </Button>
          </div>

          {/* Modern Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Modern Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/30 bg-background/80 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col gap-6">
              <a href="#services" className="text-base font-semibold hover:text-accent transition-colors flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                Services
              </a>
              <a href="#about" className="text-base font-semibold hover:text-accent transition-colors flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                About
              </a>
              <a href="#gallery" className="text-base font-semibold hover:text-accent transition-colors flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                Gallery
              </a>
              <a href="#contact" className="text-base font-semibold hover:text-accent transition-colors flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                Contact
              </a>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/30">
                <Button variant="ghost" size="sm" className="justify-start rounded-xl">
                  <Calendar className="h-4 w-4 mr-3" />
                  Book Wash
                </Button>
                <Button variant="coffee" size="sm" className="justify-start rounded-xl">
                  <Coffee className="h-4 w-4 mr-3" />
                  Order Coffee
                </Button>
                <Button variant="gold" size="sm" className="justify-start rounded-xl">
                  <ShoppingBag className="h-4 w-4 mr-3" />
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