import { Coffee, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">Car Café</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Where luxury automotive care meets artisan coffee culture. Experience the ultimate in premium service.
            </p>
            <div className="flex gap-4">
              <Instagram className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Facebook className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-accent transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="/services" className="block hover:text-accent transition-colors">Services</a>
              <a href="/about" className="block hover:text-accent transition-colors">About Us</a>
              <a href="/gallery" className="block hover:text-accent transition-colors">Gallery</a>
              <a href="/contact" className="block hover:text-accent transition-colors">Contact</a>
              <a href="/booking" className="block hover:text-accent transition-colors">Book Online</a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-accent transition-colors">Car Wash & Detailing</a>
              <a href="#" className="block hover:text-accent transition-colors">Artisan Coffee</a>
              <a href="#" className="block hover:text-accent transition-colors">Premium Merchandise</a>
              <a href="#" className="block hover:text-accent transition-colors">Loyalty Program</a>
              <a href="#" className="block hover:text-accent transition-colors">Private Events</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p>123 Luxury Drive</p>
                  <p>Premium District, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <p>(555) 123-CAFE</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <p>hello@carcafe.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-primary-foreground/80">
            © 2024 Car Café. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;