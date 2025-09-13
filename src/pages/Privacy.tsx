import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Car Café</title>
        <meta name="description" content="Car Café's privacy policy. Learn how we collect, use, and protect your personal information when you use our services." />
        <meta name="keywords" content="privacy policy, data protection, car cafe privacy, personal information" />
        <link rel="canonical" href="/privacy" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                  <p className="text-muted-foreground">Last updated: January 2024</p>
                </div>

                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Information We Collect</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>We collect information you provide directly to us, such as when you:</p>
                      <ul>
                        <li>Create an account or book a service</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Contact us for support</li>
                        <li>Participate in surveys or promotions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>How We Use Your Information</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>We use the information we collect to:</p>
                      <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>Process transactions and send related information</li>
                        <li>Send you technical notices and support messages</li>
                        <li>Communicate with you about products, services, and events</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Information Sharing</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share your information with:</p>
                      <ul>
                        <li>Service providers who assist us in operating our business</li>
                        <li>Law enforcement when required by law</li>
                        <li>Business partners with your consent</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Data Security</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Your Rights</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>You have the right to:</p>
                      <ul>
                        <li>Access and update your personal information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Opt out of marketing communications</li>
                        <li>Request a copy of your data</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                      <p className="mt-4">
                        <strong>Email:</strong> privacy@carcafe.com<br />
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

export default Privacy;