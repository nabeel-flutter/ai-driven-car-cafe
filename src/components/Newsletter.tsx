import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, Sparkles } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-luxury relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto animate-scaleIn">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold text-white mb-4">Welcome to the Family!</h3>
            <p className="text-gray-300 text-lg">
              Thank you for subscribing! You'll be the first to know about our exclusive offers and events.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-luxury relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto animate-fadeInUp">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-gold rounded-full animate-pulse-glow">
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the <span className="text-accent animate-pulse">Loop</span>
          </h3>
          
          <p className="text-gray-300 text-lg mb-8">
            Get exclusive access to VIP events, special offers, and be the first to know about new services
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative group">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-accent focus:ring-accent transition-all duration-300 group-hover:bg-white/15"
                required
              />
              <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <Button
              type="submit"
              variant="gold"
              disabled={isLoading}
              className="px-8 hover:scale-105 transition-all duration-300"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  Subscribing...
                </div>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-gray-400 text-sm mt-4">
            No spam, just premium content. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;