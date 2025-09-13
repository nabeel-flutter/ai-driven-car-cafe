import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Helmet } from "react-helmet-async";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Premium Car Wash & Coffee Services | Car Café</title>
        <meta name="description" content="Discover our premium car detailing, artisan coffee, and exclusive merchandise services. Where luxury automotive care meets exceptional coffee culture." />
        <meta name="keywords" content="car wash, car detailing, premium coffee, automotive services, luxury car care" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;