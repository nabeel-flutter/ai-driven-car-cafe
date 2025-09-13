import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a premium car wash take?",
      answer: "Our express wash takes 30 minutes, while our premium detail service takes approximately 2 hours. We'll provide you with an estimated completion time when you book."
    },
    {
      question: "Can I enjoy the café while my car is being serviced?",
      answer: "Absolutely! Our café is designed for customers waiting for their cars. Enjoy premium coffee, pastries, and light meals in our comfortable lounge area with free WiFi."
    },
    {
      question: "Do you offer membership or loyalty programs?",
      answer: "Yes! Our VIP membership includes unlimited express washes, priority booking, 20% off premium services, and exclusive café discounts. Ask our team about membership options."
    },
    {
      question: "What car care products do you use?",
      answer: "We use only premium, eco-friendly products from leading automotive care brands. All our products are safe for all vehicle types and finishes, including ceramic coatings and wraps."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have a spacious parking area for customers. Our team will handle moving your vehicle during the service process, so you can relax in our café."
    },
    {
      question: "Do you accept walk-ins or is booking required?",
      answer: "We accept both! However, we recommend booking in advance to guarantee your preferred time slot, especially for premium detail services and during peak hours."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, mobile payments (Apple Pay, Google Pay), and cash. We also offer contactless payment options for your convenience."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes! Gift cards are available for purchase both in-store and online. They make perfect gifts for car enthusiasts and can be used for any of our services including café items."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Got
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              {" "}Questions?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, booking, and experience
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-scale-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-555-123-4567"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Call Us: (555) 123-4567
            </a>
            <a
              href="mailto:info@carcafe.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              Email: info@carcafe.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;