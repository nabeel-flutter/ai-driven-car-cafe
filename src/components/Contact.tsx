import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Us
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              {" "}Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the ultimate in automotive care and lifestyle at our premium location
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-gold p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">123 Luxury Drive, Premium District<br />Downtown, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-luxury p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">(555) 123-CAFE<br />(555) 123-2233</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-metallic p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@carcafe.com<br />booking@carcafe.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-coffee p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-coffee-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 9:00 PM</p>
                      <p>Sunday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden border-0 shadow-luxury">
              <div className="h-64 bg-gradient-to-r from-muted to-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                  <p className="text-sm text-muted-foreground">Click for directions</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-luxury">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Service Interest</label>
                <select className="w-full p-3 border border-input rounded-lg bg-background">
                  <option>Car Wash & Detailing</option>
                  <option>Café Services</option>
                  <option>Merchandise</option>
                  <option>Private Events</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us how we can help you..."
                  className="min-h-[120px]"
                />
              </div>

              <Button variant="gold" className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;