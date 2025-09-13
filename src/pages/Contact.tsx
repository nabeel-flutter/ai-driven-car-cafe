import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet-async";

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Car Café | Get in Touch</title>
        <meta name="description" content="Contact Car Café for premium car wash and coffee services. Visit us, call, or send a message. Located in Premium District, CA." />
        <meta name="keywords" content="contact car cafe, car wash location, coffee shop contact, automotive services, booking" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Contact Us
                </h1>
                <p className="text-xl text-muted-foreground">
                  We'd love to hear from you
                </p>
              </div>
            </div>
          </section>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;