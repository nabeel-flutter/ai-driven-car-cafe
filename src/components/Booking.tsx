import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Car, Coffee, ShoppingBag } from "lucide-react";

const Booking = () => {
  const [selectedService, setSelectedService] = useState("");
  
  const services = [
    {
      id: "express-wash",
      name: "Express Wash",
      price: "$25",
      duration: "30 min",
      icon: Car,
      description: "Quick exterior wash and dry"
    },
    {
      id: "premium-detail",
      name: "Premium Detail",
      price: "$85",
      duration: "2 hours",
      icon: Car,
      description: "Complete interior and exterior detailing"
    },
    {
      id: "cafe-experience",
      name: "Café Experience",
      price: "$15",
      duration: "45 min",
      icon: Coffee,
      description: "Premium coffee and pastries"
    },
    {
      id: "combo-package",
      name: "Ultimate Combo",
      price: "$120",
      duration: "3 hours",
      icon: ShoppingBag,
      description: "Car detail + café experience + merchandise discount"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              {" "}Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve your spot for the ultimate car care and lifestyle experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Selection */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Choose Your Service</h3>
            
            <div className="grid gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-luxury ${
                      selectedService === service.id ? "ring-2 ring-accent bg-accent/5" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          <span className="text-2xl font-bold text-accent">{service.price}</span>
                        </div>
                        <CardDescription>{service.description}</CardDescription>
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Booking Form */}
          <Card className="animate-slide-in-right">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Book Your Appointment
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll confirm your booking
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="car-details">Vehicle Details (Optional)</Label>
                <Textarea
                  id="car-details"
                  placeholder="Make, model, year, special requests..."
                  className="min-h-[80px]"
                />
              </div>

              <Button 
                variant="luxury" 
                size="lg" 
                className="w-full"
                disabled={!selectedService}
              >
                Book Now - {services.find(s => s.id === selectedService)?.price || "$0"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                You'll receive a confirmation email within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;