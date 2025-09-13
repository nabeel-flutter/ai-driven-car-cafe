import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { Helmet } from "react-helmet-async";

const GalleryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Car Café Premium Services</title>
        <meta name="description" content="Explore our gallery showcasing premium car detailing results, artisan coffee creations, and the luxurious Car Café experience." />
        <meta name="keywords" content="car wash gallery, before and after, car detailing photos, coffee gallery, luxury automotive" />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Our Gallery
                </h1>
                <p className="text-xl text-muted-foreground">
                  Discover the artistry behind our premium services
                </p>
              </div>
            </div>
          </section>
          <Gallery />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;