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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Coffee, ShoppingCart, Package } from "lucide-react";

const CafeAdmin: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [newMenuItem, setNewMenuItem] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "",
    preparation_time: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [categoriesRes, menuItemsRes, ordersRes] = await Promise.all([
        supabase.from('cafe_categories').select('*').order('name'),
        supabase.from('cafe_menu_items').select(`
          *,
          cafe_categories(name)
        `).order('created_at', { ascending: false }),
        supabase.from('cafe_orders').select(`
          *,
          profiles(full_name, email),
          cafe_order_items(
            quantity,
            unit_price,
            total_price,
            cafe_menu_items(name)
          )
        `).order('created_at', { ascending: false })
      ]);

      if (categoriesRes.error) throw categoriesRes.error;
      if (menuItemsRes.error) throw menuItemsRes.error;
      if (ordersRes.error) throw ordersRes.error;

      setCategories(categoriesRes.data || []);
      setMenuItems(menuItemsRes.data || []);
      setOrders(ordersRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateMenuItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('cafe_menu_items').insert({
        name: newMenuItem.name,
        description: newMenuItem.description,
        price: parseFloat(newMenuItem.price),
        category_id: newMenuItem.category_id,
        preparation_time: parseInt(newMenuItem.preparation_time) || null
      });

      if (error) throw error;

      toast.success('Menu item created successfully');
      setNewMenuItem({ name: "", description: "", price: "", category_id: "", preparation_time: "" });
      fetchData();
    } catch (error) {
      console.error('Error creating menu item:', error);
      toast.error('Failed to create menu item');
    }
  };

  const updateOrderStatus = async (orderId: string, status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled') => {
    try {
      const { error } = await supabase
        .from('cafe_orders')
        .update({ status })
        .eq('id', orderId);

      if (error) throw error;

      toast.success('Order status updated');
      fetchData();
    } catch (error) {
      console.error('Error updating order:', error);
      toast.error('Failed to update order status');
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
        <title>Café Admin | Car Café</title>
        <meta name="description" content="Café administration panel for managing menu items, orders, and inventory" />
        <link rel="canonical" href="/admin/cafe" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Café Administration
            </h1>
            <p className="text-muted-foreground">
              Manage café menu, orders, and operations
            </p>
          </div>

          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="menu">Menu Management</TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Recent Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-mono text-sm">
                            {order.id.substring(0, 8)}...
                          </TableCell>
                          <TableCell>
                            <div>
                              <p className="font-medium">{order.profiles?.full_name || 'N/A'}</p>
                              <p className="text-sm text-muted-foreground">{order.profiles?.email}</p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {order.cafe_order_items?.map((item: any, index: number) => (
                                <div key={index} className="text-sm">
                                  {item.quantity}x {item.cafe_menu_items?.name}
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>${order.total_amount}</TableCell>
                          <TableCell>
                            <Badge variant={
                              order.status === 'delivered' ? 'default' :
                              order.status === 'ready' ? 'secondary' :
                              order.status === 'preparing' ? 'outline' :
                              order.status === 'cancelled' ? 'destructive' : 'outline'
                            }>
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateOrderStatus(order.id, 'preparing')}
                              >
                                Prepare
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateOrderStatus(order.id, 'ready')}
                              >
                                Ready
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateOrderStatus(order.id, 'delivered')}
                              >
                                Delivered
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

            <TabsContent value="menu">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Add New Menu Item
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCreateMenuItem} className="space-y-4">
                      <div>
                        <Label htmlFor="item-name">Item Name</Label>
                        <Input
                          id="item-name"
                          value={newMenuItem.name}
                          onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="item-description">Description</Label>
                        <Textarea
                          id="item-description"
                          value={newMenuItem.description}
                          onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="item-price">Price ($)</Label>
                          <Input
                            id="item-price"
                            type="number"
                            step="0.01"
                            value={newMenuItem.price}
                            onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="prep-time">Prep Time (min)</Label>
                          <Input
                            id="prep-time"
                            type="number"
                            value={newMenuItem.preparation_time}
                            onChange={(e) => setNewMenuItem({ ...newMenuItem, preparation_time: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Select
                          value={newMenuItem.category_id}
                          onValueChange={(value) => setNewMenuItem({ ...newMenuItem, category_id: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit" className="w-full">
                        Add Menu Item
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Current Menu Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {menuItems.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{item.name}</h3>
                            <Badge variant={item.is_available ? 'default' : 'secondary'}>
                              {item.is_available ? 'Available' : 'Unavailable'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">${item.price}</span>
                            <span className="text-sm text-muted-foreground">
                              {item.cafe_categories?.name} • {item.preparation_time || 'N/A'} min
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default CafeAdmin;