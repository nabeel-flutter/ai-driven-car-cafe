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
import { ShoppingBag, Package, Truck } from "lucide-react";

const StoreAdmin: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock_quantity: "",
    category_id: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [categoriesRes, productsRes, ordersRes] = await Promise.all([
        supabase.from('store_categories').select('*').order('name'),
        supabase.from('store_products').select(`
          *,
          store_categories(name)
        `).order('created_at', { ascending: false }),
        supabase.from('store_orders').select(`
          *,
          profiles(full_name, email),
          store_order_items(
            quantity,
            unit_price,
            total_price,
            store_products(name)
          )
        `).order('created_at', { ascending: false })
      ]);

      if (categoriesRes.error) throw categoriesRes.error;
      if (productsRes.error) throw productsRes.error;
      if (ordersRes.error) throw ordersRes.error;

      setCategories(categoriesRes.data || []);
      setProducts(productsRes.data || []);
      setOrders(ordersRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from('store_products').insert({
        name: newProduct.name,
        description: newProduct.description,
        price: parseFloat(newProduct.price),
        stock_quantity: parseInt(newProduct.stock_quantity),
        category_id: newProduct.category_id
      });

      if (error) throw error;

      toast.success('Product created successfully');
      setNewProduct({ name: "", description: "", price: "", stock_quantity: "", category_id: "" });
      fetchData();
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error('Failed to create product');
    }
  };

  const updateOrderStatus = async (orderId: string, status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled') => {
    try {
      const { error } = await supabase
        .from('store_orders')
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
        <title>Store Admin | Car Café</title>
        <meta name="description" content="Store administration panel for managing products, orders, and inventory" />
        <link rel="canonical" href="/admin/store" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Store Administration
            </h1>
            <p className="text-muted-foreground">
              Manage store products, orders, and inventory
            </p>
          </div>

          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="products">Product Management</TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
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
                        <TableHead>Tracking</TableHead>
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
                              {order.store_order_items?.map((item: any, index: number) => (
                                <div key={index} className="text-sm">
                                  {item.quantity}x {item.store_products?.name}
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>${order.total_amount}</TableCell>
                          <TableCell>
                            <Badge variant={
                              order.status === 'delivered' ? 'default' :
                              order.status === 'confirmed' ? 'secondary' :
                              order.status === 'pending' ? 'outline' :
                              order.status === 'cancelled' ? 'destructive' : 'outline'
                            }>
                              {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="font-mono text-sm">
                              {order.tracking_number || 'Not assigned'}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateOrderStatus(order.id, 'confirmed')}
                              >
                                Confirm
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

            <TabsContent value="products">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Add New Product
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleCreateProduct} className="space-y-4">
                      <div>
                        <Label htmlFor="product-name">Product Name</Label>
                        <Input
                          id="product-name"
                          value={newProduct.name}
                          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="product-description">Description</Label>
                        <Textarea
                          id="product-description"
                          value={newProduct.description}
                          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="product-price">Price ($)</Label>
                          <Input
                            id="product-price"
                            type="number"
                            step="0.01"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="stock-quantity">Stock Quantity</Label>
                          <Input
                            id="stock-quantity"
                            type="number"
                            value={newProduct.stock_quantity}
                            onChange={(e) => setNewProduct({ ...newProduct, stock_quantity: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="product-category">Category</Label>
                        <Select
                          value={newProduct.category_id}
                          onValueChange={(value) => setNewProduct({ ...newProduct, category_id: value })}
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
                        Add Product
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Current Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {products.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold">{product.name}</h3>
                            <Badge variant={product.is_active ? 'default' : 'secondary'}>
                              {product.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">${product.price}</span>
                            <div className="text-sm text-muted-foreground">
                              Stock: {product.stock_quantity} • {product.store_categories?.name}
                            </div>
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

export default StoreAdmin;