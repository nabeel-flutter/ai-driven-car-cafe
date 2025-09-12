import { Button } from "@/components/ui/button";
import { Calendar, Coffee, ShoppingBag, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-car-cafe.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury car café with premium detailing and coffee service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay backdrop-blur-[1px]" />
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-gradient-gold text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-gold transition-all duration-700 hover:shadow-glow-hover ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <Star className="h-4 w-4 animate-pulse-glow" />
            Rated #1 Car Care Experience
            <Sparkles className="h-4 w-4 animate-pulse" />
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-200 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
            Where Luxury Meets
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent animate-pulse-glow"> 
              {" "}Lifestyle
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
            Premium car detailing, artisan coffee, and exclusive merchandise in one stunning location
          </p>

          {/* Service Highlights */}
          <div className={`flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base transition-all duration-700 delay-600 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 bg-gradient-glass backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:shadow-glow transition-all duration-300 hover:scale-105">
              <Calendar className="h-5 w-5 text-accent animate-pulse" />
              <span>Premium Wash</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-glass backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:shadow-glow transition-all duration-300 hover:scale-105">
              <Coffee className="h-5 w-5 text-accent animate-pulse" />
              <span>Artisan Café</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-glass backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:shadow-glow transition-all duration-300 hover:scale-105">
              <ShoppingBag className="h-5 w-5 text-accent animate-pulse" />
              <span>Exclusive Store</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-800 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
            <Button variant="gold" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 animate-pulse-glow">
              Book Car Wash
            </Button>
            <Button variant="luxury" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 group">
              <Coffee className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Order Coffee
            </Button>
            <Button variant="metallic" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 group">
              <ShoppingBag className="h-5 w-5 mr-2 group-hover:animate-bounce" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4 transition-all duration-700 delay-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-3 gap-8 text-center text-white bg-gradient-glass backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-glass">
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-pulse-glow">5000+</div>
            <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Happy Customers</div>
          </div>
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-pulse-glow">50+</div>
            <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Premium Services</div>
          </div>
          <div className="group hover:scale-110 transition-transform duration-300">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 animate-pulse-glow">99.9%</div>
            <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;