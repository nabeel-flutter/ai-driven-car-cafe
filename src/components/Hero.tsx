import { Button } from "@/components/ui/button";
import { Calendar, Coffee, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-car-cafe-clean.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury car café with premium detailing and coffee service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-gold text-primary px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-float">
            🏆 Rated #1 Car Care Experience
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Where Luxury Meets
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"> 
              {" "}Lifestyle
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Premium car detailing, artisan coffee, and exclusive merchandise in one stunning location
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <Calendar className="h-5 w-5 text-accent" />
              <span>Premium Wash</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <Coffee className="h-5 w-5 text-accent" />
              <span>Artisan Café</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <ShoppingBag className="h-5 w-5 text-accent" />
              <span>Exclusive Store</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="gold" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
              Book Car Wash
            </Button>
            <Button variant="luxury" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
              <Coffee className="h-5 w-5 mr-2" />
              Order Coffee
            </Button>
            <Button variant="metallic" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="grid grid-cols-3 gap-8 text-center text-white">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5000+</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-gray-300">Premium Services</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;