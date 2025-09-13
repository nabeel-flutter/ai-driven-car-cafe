import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const Cookies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Car Café</title>
        <meta name="description" content="Learn about how Car Café uses cookies to improve your experience on our website and services." />
        <meta name="keywords" content="cookie policy, cookies, car cafe cookies, website cookies, data tracking" />
        <link rel="canonical" href="/cookies" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
                  <p className="text-muted-foreground">Last updated: January 2024</p>
                </div>

                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>What Are Cookies?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us make your experience better by remembering your preferences and understanding how you use our site.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Types of Cookies We Use</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Essential Cookies</h4>
                        <p className="text-sm text-muted-foreground">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Performance Cookies</h4>
                        <p className="text-sm text-muted-foreground">These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us improve our website.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Functionality Cookies</h4>
                        <p className="text-sm text-muted-foreground">These cookies remember your preferences and choices to provide a more personalized experience.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Marketing Cookies</h4>
                        <p className="text-sm text-muted-foreground">These cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our marketing campaigns.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Third-Party Cookies</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>We may use third-party services that place cookies on your device, including:</p>
                      <ul>
                        <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                        <li><strong>Social Media Platforms:</strong> For social sharing and login functionality</li>
                        <li><strong>Payment Processors:</strong> To securely process transactions</li>
                        <li><strong>Advertising Networks:</strong> To deliver targeted advertisements</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>How We Use Cookies</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>We use cookies to:</p>
                      <ul>
                        <li>Remember your login details and preferences</li>
                        <li>Analyze our website traffic and optimize our content</li>
                        <li>Provide personalized content and advertisements</li>
                        <li>Enable social media features</li>
                        <li>Process online bookings and payments</li>
                        <li>Improve our website's performance and security</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Managing Cookies</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-gray max-w-none">
                      <p>You can control and manage cookies in several ways:</p>
                      <ul>
                        <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings</li>
                        <li><strong>Cookie Consent:</strong> Use our cookie consent banner to choose which types of cookies to accept</li>
                        <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                      </ul>
                      <p><strong>Note:</strong> Disabling certain cookies may affect your ability to use some features of our website.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Cookie Retention</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Session Cookies</h4>
                        <p className="text-sm text-muted-foreground">These are temporary cookies that expire when you close your browser.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Persistent Cookies</h4>
                        <p className="text-sm text-muted-foreground">These cookies remain on your device for a set period or until you delete them manually.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Updates to This Policy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>If you have any questions about our use of cookies, please contact us at:</p>
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

export default Cookies;