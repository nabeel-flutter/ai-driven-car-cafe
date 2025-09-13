import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Booking from "@/components/Booking";
import { Helmet } from "react-helmet-async";

const BookingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Book Online | Car Café Premium Services</title>
        <meta name="description" content="Book your premium car wash, coffee experience, or ultimate combo package online. Easy scheduling for luxury automotive care services." />
        <meta name="keywords" content="book car wash, online booking, car detailing appointment, coffee reservation, automotive services" />
        <link rel="canonical" href="/booking" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Book Your Experience
                </h1>
                <p className="text-xl text-muted-foreground">
                  Schedule your premium service today
                </p>
              </div>
            </div>
          </section>
          <Booking />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BookingPage;