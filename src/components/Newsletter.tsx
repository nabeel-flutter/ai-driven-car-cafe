import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Gift, Calendar, Star } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
    }
  };

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Offers",
      description: "Get 20% off your first premium detail service"
    },
    {
      icon: Calendar,
      title: "Early Access",
      description: "Be first to book special events and new services"
    },
    {
      icon: Star,
      title: "VIP Perks",
      description: "Member-only discounts and priority scheduling"
    }
  ];

  return (
    <section className="py-20 bg-gradient-luxury text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-6 py-2 rounded-full text-accent text-sm font-semibold mb-6">
              <Mail className="h-4 w-4" />
              Join Our Community
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Connected with
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                {" "}Car Café
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get exclusive offers, early access to events, and insider tips for keeping your vehicle pristine
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto animate-fade-in">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                  <Button
                    type="submit"
                    variant="gold"
                    className="px-8 whitespace-nowrap"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-400">
                  Join 5,000+ car enthusiasts. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Welcome to Car Café!</h3>
                <p className="text-gray-300">
                  Thank you for subscribing. Check your email for your exclusive 20% off coupon!
                </p>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-12 animate-fade-in">
            <p className="text-gray-400 text-sm mb-4">
              Trusted by car enthusiasts across the city
            </p>
            <div className="flex items-center justify-center gap-8 text-accent">
              <div className="text-center">
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm text-gray-400">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;