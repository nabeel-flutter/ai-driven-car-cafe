import { Button } from "@/components/ui/button";
import { Car, Coffee, ShoppingBag, Clock, Star, CheckCircle, Sparkles, Zap } from "lucide-react";
import carDetailingImage from "@/assets/car-detailing.jpg";
import cafeServiceImage from "@/assets/cafe-service.jpg";
import merchandiseImage from "@/assets/merchandise-store.jpg";
import { useState } from "react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent/10 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-gold rounded-full animate-pulse-glow">
              <Sparkles className="h-8 w-8 text-primary animate-rotate-slow" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Premium <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent animate-pulse-glow">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of automotive care, artisan coffee, and exclusive lifestyle products
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Car Wash Service */}
          <div 
            className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fadeInLeft"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0">
              <img 
                src={carDetailingImage} 
                alt="Premium car detailing service"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {hoveredCard === 0 && (
                <div className="absolute inset-0 bg-gradient-gold/20 animate-fadeInUp" />
              )}
            </div>
            <div className="relative z-10 p-6 text-white h-64 flex flex-col justify-end">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Car className={`h-8 w-8 text-accent transition-all duration-300 ${hoveredCard === 0 ? 'animate-bounce' : ''}`} />
                  <Zap className={`h-4 w-4 text-accent ${hoveredCard === 0 ? 'animate-pulse' : 'opacity-0'} transition-opacity duration-300`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium Car Wash</h3>
                <p className="text-gray-300 text-sm">Professional detailing with eco-friendly products</p>
              </div>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm animate-fadeInRight" style={{ animationDelay: '0.1s' }}>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Exterior wash & wax</span>
                </div>
                <div className="flex items-center gap-2 text-sm animate-fadeInRight" style={{ animationDelay: '0.2s' }}>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Interior vacuuming & cleaning</span>
                </div>
                <div className="flex items-center gap-2 text-sm animate-fadeInRight" style={{ animationDelay: '0.3s' }}>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Tire shine & rim cleaning</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">45-60 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-current animate-pulse" />
                  <span className="text-sm font-semibold">4.9/5</span>
                </div>
              </div>
              <Button variant="gold" className="w-full hover:scale-105 transition-transform duration-300 animate-pulse-glow">
                Book Now - From $29
              </Button>
            </div>
          </div>

          {/* Café Service */}
          <div 
            className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fadeInUp"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0">
              <img 
                src={cafeServiceImage} 
                alt="Artisan coffee and café service"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {hoveredCard === 1 && (
                <div className="absolute inset-0 bg-coffee/20 animate-fadeInUp" />
              )}
            </div>
            <div className="relative z-10 p-6 text-white h-64 flex flex-col justify-end">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Coffee className={`h-8 w-8 text-accent transition-all duration-300 ${hoveredCard === 1 ? 'animate-bounce' : ''}`} />
                  <Sparkles className={`h-4 w-4 text-accent ${hoveredCard === 1 ? 'animate-pulse' : 'opacity-0'} transition-opacity duration-300`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Artisan Café</h3>
                <p className="text-gray-300 text-sm">Premium coffee and fresh pastries while you wait</p>
              </div>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm animate-fadeInLeft" style={{ animationDelay: '0.1s' }}>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Specialty coffee drinks</span>
                </div>
                <div className="flex items-center gap-2 text-sm animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Fresh pastries & light meals</span>
                </div>
                <div className="flex items-center gap-2 text-sm animate-fadeInLeft" style={{ animationDelay: '0.3s' }}>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Free WiFi & comfortable seating</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Open 7 AM - 8 PM</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-current animate-pulse" />
                  <span className="text-sm font-semibold">4.8/5</span>
                </div>
              </div>
              <Button variant="coffee" className="w-full hover:scale-105 transition-transform duration-300">
                Order Online - From $3
              </Button>
            </div>
          </div>

          {/* Merchandise Store */}
          <div 
            className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fadeInRight"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0">
              <img 
                src={merchandiseImage} 
                alt="Exclusive car café merchandise"
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {hoveredCard === 2 && (
                <div className="absolute inset-0 bg-metallic/20 animate-fadeInUp" />
              )}
            </div>
            <div className="relative z-10 p-6 text-white h-64 flex flex-col justify-end">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <ShoppingBag className={`h-8 w-8 text-accent transition-all duration-300 ${hoveredCard === 2 ? 'animate-bounce' : ''}`} />
                  <Star className={`h-4 w-4 text-accent ${hoveredCard === 2 ? 'animate-pulse' : 'opacity-0'} transition-opacity duration-300`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Exclusive Store</h3>
                <p className="text-gray-300 text-sm">Curated automotive accessories and lifestyle products</p>
              </div>
            </div>
            <div className="p-6 bg-card">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm animate-fadeInLeft" style={{ animationDelay: '0.1s' }}>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Premium car care products</span>
                </div>
                <div className="flex items-center gap-2 text-sm animate-fadeInLeft" style={{ animationDelay: '0.2s' }}>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Branded apparel & accessories</span>
                </div>
                <div className="flex items-center gap-2 text-sm animate-fadeInLeft" style={{ animationDelay: '0.3s' }}>
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Limited edition collectibles</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Always open</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent fill-current animate-pulse" />
                  <span className="text-sm font-semibold">4.7/5</span>
                </div>
              </div>
              <Button variant="metallic" className="w-full hover:scale-105 transition-transform duration-300">
                Shop Now - From $15
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="text-center animate-fadeInUp">
          <h3 className="text-2xl font-bold mb-8">Why Choose Car Café?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-glass backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
              <p className="text-muted-foreground">Express services completed in 30 minutes or less</p>
            </div>
            <div className="bg-gradient-glass backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
              <p className="text-muted-foreground">Professional-grade products and expert techniques</p>
            </div>
            <div className="bg-gradient-glass backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-metallic rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Comfort & Style</h4>
              <p className="text-muted-foreground">Relax in our premium lounge with artisan coffee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;