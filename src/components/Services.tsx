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
      buttonText: "Book Now"
    },
    {
      title: "Artisan Café",
      description: "Handcrafted beverages and gourmet treats while you wait",
      image: cafeServiceImage,
      icon: Coffee,
      features: ["Specialty Coffee", "Fresh Pastries", "Light Meals", "Premium Teas"],
      color: "coffee",
      buttonText: "Order Online"
    },
    {
      title: "Exclusive Store",
      description: "Premium automotive accessories and lifestyle merchandise",
      image: merchandiseStoreImage,
      icon: ShoppingBag,
      features: ["Car Care Kits", "Branded Apparel", "Accessories", "Gift Cards"],
      color: "metallic",
      buttonText: "Shop Now"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three Experiences,
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              {" "}One Location
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our unique triple concept that redefines automotive care and lifestyle
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-accent/20 backdrop-blur-sm p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                </div>

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={service.color as any} 
                    className="w-full"
                    size="lg"
                  >
                    {service.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Premium Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Lightning Fast</h3>
            <p className="text-muted-foreground">Express services in 30 minutes or less</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Premium Quality</h3>
            <p className="text-muted-foreground">Professional-grade products and techniques</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-metallic rounded-full flex items-center justify-center">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Comfort & Style</h3>
            <p className="text-muted-foreground">Relax in our premium lounge area</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;