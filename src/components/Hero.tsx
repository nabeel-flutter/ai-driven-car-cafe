import { Button } from "@/components/ui/button";
import { Calendar, Coffee, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-car-cafe.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury car café with premium detailing and coffee service"
          className="w-full h-full object-cover scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        {/* Modern overlay with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent/60 rounded-full animate-pulse-glow hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent/40 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent/80 rounded-full animate-pulse hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Modern Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-glass border border-white/20 text-white px-8 py-4 rounded-2xl text-sm font-medium mb-12 animate-slide-up shadow-glass">
            <div className="w-3 h-3 bg-gradient-accent rounded-full animate-pulse-glow" />
            🏆 Rated #1 Car Care Experience
            <div className="w-3 h-3 bg-gradient-accent rounded-full animate-pulse-glow" />
          </div>

          {/* Modern Headline */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up">
            Where Luxury
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent relative">
              Meets Lifestyle
              <div className="absolute inset-0 bg-gradient-accent bg-clip-text text-transparent opacity-50 blur-sm -z-10" />
            </span>
          </h1>

          {/* Modern Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light">
            Premium car detailing, artisan coffee, and exclusive merchandise in one stunning location. 
            <span className="text-accent font-medium">Experience the future of automotive luxury.</span>
          </p>

          {/* Service Highlights */}
          <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
              <Calendar className="h-5 w-5 text-accent" />
              <span className="font-medium">Premium Wash</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
              <Coffee className="h-5 w-5 text-accent" />
              <span className="font-medium">Artisan Café</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full">
              <ShoppingBag className="h-5 w-5 text-accent" />
              <span className="font-medium">Exclusive Store</span>
            </div>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
            <Button variant="gold" size="lg" className="text-lg px-10 py-7 rounded-2xl font-semibold">
              Book Car Wash
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-10 py-7 rounded-2xl font-semibold group">
              <Coffee className="h-5 w-5 mr-3" />
              Order Coffee
            </Button>
            <Button variant="metallic" size="lg" className="text-lg px-10 py-7 rounded-2xl font-semibold">
              <ShoppingBag className="h-5 w-5 mr-3" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Stats Section */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4">
        <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-3xl p-8 shadow-glass">
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-accent mb-3 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <div className="text-sm text-gray-300 font-medium">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-accent mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-sm text-gray-300 font-medium">Premium Services</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-black text-accent mb-3 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-sm text-gray-300 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;