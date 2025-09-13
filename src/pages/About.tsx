import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Car, Users, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About: React.FC = () => {
  const values = [
    {
      icon: <Coffee className="h-8 w-8 text-accent" />,
      title: "Premium Quality",
      description: "We source the finest coffee beans and use premium car care products to deliver exceptional experiences."
    },
    {
      icon: <Car className="h-8 w-8 text-accent" />,
      title: "Automotive Excellence",
      description: "Our skilled technicians treat every vehicle with the care and attention it deserves."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We go above and beyond to exceed expectations."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Award Winning",
      description: "Recognized for our innovation in combining automotive care with coffee culture."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Car Café | Premium Automotive & Coffee Experience</title>
        <meta name="description" content="Learn about Car Café's mission to revolutionize automotive care by combining luxury car services with artisan coffee culture. Discover our story and values." />
        <meta name="keywords" content="about car cafe, luxury car wash, premium coffee, automotive innovation, car care story" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  About Car Café
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Where luxury automotive care meets artisan coffee culture
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <p className="text-muted-foreground mb-6">
                      Founded in 2020, Car Café was born from a simple idea: why should getting your car washed be a mundane chore? We envisioned a place where car care becomes an experience – where you can enjoy premium coffee while your vehicle receives the royal treatment it deserves.
                    </p>
                    <p className="text-muted-foreground">
                      Today, we've revolutionized the automotive care industry by creating a unique ecosystem that combines professional car detailing with artisan coffee culture, premium merchandise, and exceptional customer service.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                      <Coffee className="h-24 w-24 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    These core principles guide everything we do and define the Car Café experience
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <Card key={index} className="text-center p-6">
                      <CardContent className="space-y-4">
                        <div className="flex justify-center">{value.icon}</div>
                        <h3 className="text-xl font-semibold">{value.title}</h3>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To transform routine automotive care into extraordinary experiences by seamlessly blending premium car services with artisan coffee culture, creating a community where quality, innovation, and customer satisfaction drive everything we do.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;