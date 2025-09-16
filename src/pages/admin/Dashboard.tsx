import React from "react";
import { useProfile } from "@/hooks/useProfile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Car, 
  Coffee, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  Settings,
  Calendar,
  DollarSign
} from "lucide-react";

const AdminDashboard: React.FC = () => {
  const { profile, hasRole } = useProfile();

  if (!profile) return null;

  const adminCards = [
    {
      title: "Booking Management",
      description: "Manage all bookings and appointments",
      icon: Calendar,
      href: "/admin/bookings",
      show: true // All admins can see bookings
    },
    {
      title: "Car Wash Management",
      description: "Manage bookings, packages, and time slots",
      icon: Car,
      href: "/admin/car-wash",
      show: hasRole('car_wash_admin') || hasRole('master_admin')
    },
    {
      title: "Café Management",
      description: "Manage menu, orders, and inventory",
      icon: Coffee,
      href: "/admin/cafe",
      show: hasRole('cafe_admin') || hasRole('master_admin')
    },
    {
      title: "Store Management",
      description: "Manage products, orders, and inventory",
      icon: ShoppingBag,
      href: "/admin/store",
      show: hasRole('store_admin') || hasRole('master_admin')
    },
    {
      title: "User Management",
      description: "Manage users, roles, and permissions",
      icon: Users,
      href: "/admin/users",
      show: hasRole('master_admin')
    },
    {
      title: "Analytics & Reports",
      description: "View sales reports and analytics",
      icon: BarChart3,
      href: "/admin/analytics",
      show: hasRole('master_admin')
    },
    {
      title: "Promotions",
      description: "Manage discounts and promotions",
      icon: DollarSign,
      href: "/admin/promotions",
      show: hasRole('master_admin')
    }
  ];

  const visibleCards = adminCards.filter(card => card.show);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Car Café</title>
        <meta name="description" content="Admin dashboard for Car Café management system" />
        <link rel="canonical" href="/admin" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {profile.full_name || profile.email}
            </p>
            <p className="text-sm text-muted-foreground capitalize">
              Role: {profile.role.replace('_', ' ')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.href} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{card.title}</CardTitle>
                        <CardDescription>{card.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to={card.href}>
                        Access {card.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {visibleCards.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <h3 className="text-lg font-semibold mb-2">No Admin Access</h3>
                <p className="text-muted-foreground">
                  You don't have administrative privileges. Contact your system administrator.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;