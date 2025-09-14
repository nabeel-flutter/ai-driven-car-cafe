import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Calendar, Coffee, ShoppingBag, Menu, User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { toast } from "sonner";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { profile, isAdmin } = useProfile();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold">Car Café</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-sm font-medium hover:text-accent transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/gallery" className="text-sm font-medium hover:text-accent transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/booking">
                <Calendar className="h-4 w-4 mr-2" />
                Book Wash
              </Link>
            </Button>
            <Button variant="coffee" size="sm">
              <Coffee className="h-4 w-4 mr-2" />
              Order
            </Button>
            <Button variant="gold" size="sm">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Shop
            </Button>
            
            {/* Auth Dropdown */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="font-medium">
                    {profile?.full_name || user.email}
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={handleSignOut} className="flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="outline" size="sm" asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            )}
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
              <Link 
                to="/services" 
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/gallery" 
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="ghost" size="sm" className="justify-start" asChild>
                  <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Wash
                  </Link>
                </Button>
                <Button variant="coffee" size="sm" className="justify-start">
                  <Coffee className="h-4 w-4 mr-2" />
                  Order Coffee
                </Button>
                <Button variant="gold" size="sm" className="justify-start">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Shop Now
                </Button>
                
                {/* Mobile Auth */}
                {user ? (
                  <div className="mt-4 pt-4 border-t">
                    <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                      {profile?.full_name || user.email}
                    </div>
                    {isAdmin && (
                      <Link 
                        to="/admin" 
                        className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" className="justify-start mt-2" asChild>
                    <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;