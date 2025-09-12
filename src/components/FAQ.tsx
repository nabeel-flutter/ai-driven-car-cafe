import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What car wash packages do you offer?",
    answer: "We offer three premium packages: Express Wash (exterior wash and dry), Premium Wash (includes interior cleaning and waxing), and Full Detailing (complete interior and exterior restoration with premium products)."
  },
  {
    question: "Can I enjoy coffee while my car is being washed?",
    answer: "Absolutely! Our artisan café serves specialty coffee, pastries, and light meals. You can relax in our comfortable lounge area with free WiFi while our team takes care of your vehicle."
  },
  {
    question: "How long does each service take?",
    answer: "Express Wash takes 15-20 minutes, Premium Wash takes 45-60 minutes, and Full Detailing takes 2-3 hours. We'll provide an accurate time estimate when you book."
  },
  {
    question: "Do you offer membership or loyalty programs?",
    answer: "Yes! Our VIP membership includes unlimited washes, priority booking, exclusive café discounts, and early access to new merchandise. Perfect for regular customers who want premium care."
  },
  {
    question: "What makes your merchandise exclusive?",
    answer: "Our store features limited-edition automotive accessories, premium car care products, branded apparel, and unique items you won't find anywhere else. All products are carefully curated for car enthusiasts."
  },
  {
    question: "Can I book services online?",
    answer: "Yes! You can book car wash services, pre-order café items, and purchase merchandise through our website. We also offer a mobile app for even more convenience."
  },
  {
    question: "Do you cater to luxury and exotic cars?",
    answer: "Definitely! We specialize in luxury vehicle care with premium products and trained technicians experienced with high-end automobiles. Your investment is safe with us."
  },
  {
    question: "What are your operating hours?",
    answer: "We're open Monday-Saturday 7 AM - 8 PM, and Sunday 8 AM - 6 PM. The café stays open later for evening coffee service. Check our website for holiday hours."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-gold rounded-full animate-pulse-glow">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our premium car care experience
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4 animate-fadeInUp">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 overflow-hidden border border-border/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors duration-300 group"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-accent" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                  <p className="text-muted-foreground leading-relaxed animate-fadeInUp">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fadeInUp">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors duration-300 hover:scale-105 transform"
          >
            Contact our team
            <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;