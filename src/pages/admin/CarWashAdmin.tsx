import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Calendar, Clock, Package, Users } from "lucide-react";

const CarWashAdmin: React.FC = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [slots, setSlots] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [newPackage, setNewPackage] = useState({
    name: "",
    description: "",
    price: "",
    duration_minutes: "",
    features: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [packagesRes, bookingsRes, slotsRes] = await Promise.all([
        supabase.from('car_wash_packages').select('*').order('created_at', { ascending: false }),
        supabase.from('car_wash_bookings').select(`
          *,
          profiles(full_name, email),
          car_wash_packages(name),
          car_wash_slots(date, start_time, end_time)
        `).order('created_at', { ascending: false }),
        supabase.from('car_wash_slots').select('*').order('date', { ascending: true })
      ]);

      if (packagesRes.error) throw packagesRes.error;
      if (bookingsRes.error) throw bookingsRes.error;
      if (slotsRes.error) throw slotsRes.error;

      setPackages(packagesRes.data || []);
      setBookings(bookingsRes.data || []);
      setSlots(slotsRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePackage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('car_wash_packages').insert({
        name: newPackage.name,
        description: newPackage.description,
        price: parseFloat(newPackage.price),
        duration_minutes: parseInt(newPackage.duration_minutes),
        features: newPackage.features.split(',').map(f => f.trim())
      });

      if (error) throw error;

      toast.success('Package created successfully');
      setNewPackage({ name: "", description: "", price: "", duration_minutes: "", features: "" });
      fetchData();
    } catch (error) {
      console.error('Error creating package:', error);
      toast.error('Failed to create package');
    }
  };

  const updateBookingStatus = async (bookingId: string, status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled') => {
    try {
      const { error } = await supabase
        .from('car_wash_bookings')
        .update({ status })
        .eq('id', bookingId);

      if (error) throw error;

      toast.success('Booking status updated');
      fetchData();
    } catch (error) {
      console.error('Error updating booking:', error);
      toast.error('Failed to update booking status');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Car Wash Admin | Car Café</title>
        <meta name="description" content="Car wash administration panel for managing packages, bookings, and time slots" />
        <link rel="canonical" href="/admin/car-wash" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Car Wash Administration
            </h1>
            <p className="text-muted-foreground">
              Manage car wash packages, bookings, and schedules
            </p>
          </div>

          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
              <TabsTrigger value="slots">Time Slots</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Recent Bookings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Package</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell>
                            <div>
                              <p className="font-medium">{booking.profiles?.full_name || 'N/A'}</p>
                              <p className="text-sm text-muted-foreground">{booking.profiles?.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>{booking.car_wash_packages?.name}</TableCell>
                          <TableCell>
                            {booking.car_wash_slots && (
                              <div>
                                <p>{booking.car_wash_slots.date}</p>
                                <p className="text-sm text-muted-foreground">
                                  {booking.car_wash_slots.start_time} - {booking.car_wash_slots.end_time}
                                </p>
                              </div>
                            )}
                          </TableCell>
                          <TableCell>${booking.total_amount}</TableCell>
                          <TableCell>
                            <Badge variant={
                              booking.status === 'completed' ? 'default' :
                              booking.status === 'confirmed' ? 'secondary' :
                              booking.status === 'cancelled' ? 'destructive' : 'outline'
                            }>
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                              >
                                Confirm
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateBookingStatus(booking.id, 'completed')}
                              >
                                Complete
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="packages">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Create New Package
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCreatePackage} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Package Name</Label>
                        <Input
                          id="name"
                          value={newPackage.name}
                          onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={newPackage.description}
                          onChange={(e) => setNewPackage({ ...newPackage, description: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="price">Price ($)</Label>
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            value={newPackage.price}
                            onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="duration">Duration (minutes)</Label>
                          <Input
                            id="duration"
                            type="number"
                            value={newPackage.duration_minutes}
                            onChange={(e) => setNewPackage({ ...newPackage, duration_minutes: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="features">Features (comma-separated)</Label>
                        <Textarea
                          id="features"
                          value={newPackage.features}
                          onChange={(e) => setNewPackage({ ...newPackage, features: e.target.value })}
                          placeholder="Exterior wash, Interior vacuum, Tire shine"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Create Package
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Existing Packages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {packages.map((pkg) => (
                        <div key={pkg.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{pkg.name}</h3>
                            <Badge variant={pkg.is_active ? 'default' : 'secondary'}>
                              {pkg.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">${pkg.price}</span>
                            <span className="text-sm text-muted-foreground">{pkg.duration_minutes} min</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="slots">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Time Slots Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Start Time</TableHead>
                        <TableHead>End Time</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {slots.slice(0, 10).map((slot) => (
                        <TableRow key={slot.id}>
                          <TableCell>{slot.date}</TableCell>
                          <TableCell>{slot.start_time}</TableCell>
                          <TableCell>{slot.end_time}</TableCell>
                          <TableCell>
                            <Badge variant={slot.is_available ? 'default' : 'secondary'}>
                              {slot.is_available ? 'Available' : 'Booked'}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default CarWashAdmin;