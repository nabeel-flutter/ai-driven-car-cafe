import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Coffee, ShoppingBag, Star, Zap, Shield } from "lucide-react";
import carDetailingImage from "@/assets/car-detailing.jpg";
import cafeServiceImage from "@/assets/cafe-service.jpg";
import merchandiseStoreImage from "@/assets/merchandise-store.jpg";

const Services = () => {
  const services = [
    {
      title: "Premium Car Wash",
      description: "Professional detailing that transforms your vehicle into a masterpiece",
      image: carDetailingImage,
      icon: Calendar,
      features: ["Express Wash", "Premium Detail", "Full Service", "Paint Protection"],
      color: "luxury",
      buttonText: "Book Now",
      gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
      title: "Artisan Café",
      description: "Handcrafted beverages and gourmet treats while you wait",
      image: cafeServiceImage,
      icon: Coffee,
      features: ["Specialty Coffee", "Fresh Pastries", "Light Meals", "Premium Teas"],
      color: "coffee",
      buttonText: "Order Online",
      gradient: "from-orange-600/20 to-red-600/20"
    },
    {
      title: "Exclusive Store",
      description: "Premium automotive accessories and lifestyle merchandise",
      image: merchandiseStoreImage,
      icon: ShoppingBag,
      features: ["Car Care Kits", "Branded Apparel", "Accessories", "Gift Cards"],
      color: "metallic",
      buttonText: "Shop Now",
      gradient: "from-gray-600/20 to-slate-600/20"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-accent opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-modern opacity-5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4" />
            Three Premium Experiences
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Three Experiences,
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent relative">
              One Location
              <div className="absolute inset-0 bg-gradient-accent bg-clip-text text-transparent opacity-30 blur-sm -z-10" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Discover our unique triple concept that redefines automotive care and lifestyle with cutting-edge technology and premium service
          </p>
        </div>

        {/* Modern Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-modern transition-all duration-500 overflow-hidden border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80 hover:-translate-y-2 relative">
                {/* Service Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60`} />
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                      <IconComponent className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  
                  {/* Modern overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-3 font-bold group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 group/feature">
                        <div className="w-2 h-2 bg-accent rounded-full group-hover/feature:scale-125 transition-transform duration-300" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Modern CTA Button */}
                  <Button 
                    variant={service.color as any} 
                    className="w-full rounded-xl py-6 text-base font-semibold relative overflow-hidden group/btn"
                    size="lg"
                  >
                    <span className="relative z-10">{service.buttonText}</span>
                    <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modern Premium Features */}
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6 group animate-fade-in">
            <div className="mx-auto w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-accent">
              <Zap className="h-10 w-10 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Lightning Fast</h3>
            <p className="text-muted-foreground leading-relaxed">Express services in 30 minutes or less with cutting-edge technology and streamlined processes</p>
          </div>
          <div className="space-y-6 group animate-fade-in">
            <div className="mx-auto w-20 h-20 bg-gradient-modern rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-modern">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Premium Quality</h3>
            <p className="text-muted-foreground leading-relaxed">Professional-grade products and techniques with certified specialists and premium equipment</p>
          </div>
          <div className="space-y-6 group animate-fade-in">
            <div className="mx-auto w-20 h-20 bg-gradient-coffee rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glass">
              <Coffee className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Comfort & Style</h3>
            <p className="text-muted-foreground leading-relaxed">Relax in our premium lounge area with complimentary WiFi, charging stations, and climate control</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;