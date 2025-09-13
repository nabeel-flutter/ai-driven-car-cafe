import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Car Café</title>
        <meta name="description" content="Car Café's terms of service. Read our terms and conditions for using our premium car wash and coffee services." />
        <meta name="keywords" content="terms of service, terms and conditions, car cafe terms, service agreement" />
        <link rel="canonical" href="/terms" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                  <p className="text-muted-foreground">Last updated: January 2024</p>
                </div>

                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Acceptance of Terms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>By accessing and using Car Café services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our services.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Service Description</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>Car Café provides:</p>
                      <ul>
                        <li>Professional automotive washing and detailing services</li>
                        <li>Artisan coffee and beverage services</li>
                        <li>Retail merchandise</li>
                        <li>Online booking and customer management services</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Booking and Cancellation Policy</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <ul>
                        <li><strong>Booking:</strong> All services must be booked in advance through our online system or by phone</li>
                        <li><strong>Cancellation:</strong> Cancellations must be made at least 24 hours in advance for a full refund</li>
                        <li><strong>No-show:</strong> Failure to appear for a scheduled appointment may result in a cancellation fee</li>
                        <li><strong>Rescheduling:</strong> Services can be rescheduled up to 12 hours before the appointment time</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Terms</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <ul>
                        <li>Payment is due at the time of service unless other arrangements have been made</li>
                        <li>We accept cash, credit cards, and digital payments</li>
                        <li>Prices are subject to change without notice</li>
                        <li>Refunds are processed according to our refund policy</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Limitation of Liability</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Car Café's liability is limited to the cost of the service provided. We are not responsible for items left in vehicles, pre-existing damage, or damage caused by factors beyond our control. Customers are encouraged to remove valuables before service.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Prohibited Uses</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>You may not use our services:</p>
                      <ul>
                        <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                        <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                        <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                        <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Changes to Terms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services following the posting of changes constitutes acceptance of those changes.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>For questions about these Terms of Service, please contact us at:</p>
                      <p className="mt-4">
                        <strong>Email:</strong> legal@carcafe.com<br />
                        <strong>Phone:</strong> (555) 123-CAFE<br />
                        <strong>Address:</strong> 123 Luxury Drive, Premium District, CA 90210
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terms;