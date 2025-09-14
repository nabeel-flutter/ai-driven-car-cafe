-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum types
CREATE TYPE public.user_role AS ENUM ('customer', 'car_wash_admin', 'cafe_admin', 'store_admin', 'master_admin');
CREATE TYPE public.booking_status AS ENUM ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled');
CREATE TYPE public.order_status AS ENUM ('pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled');
CREATE TYPE public.payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');

-- User profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  role user_role DEFAULT 'customer',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Car wash packages
CREATE TABLE public.car_wash_packages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  duration_minutes INTEGER NOT NULL,
  features TEXT[],
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Car wash time slots
CREATE TABLE public.car_wash_slots (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Car wash bookings
CREATE TABLE public.car_wash_bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  package_id UUID REFERENCES public.car_wash_packages(id),
  slot_id UUID REFERENCES public.car_wash_slots(id),
  vehicle_details TEXT,
  special_requests TEXT,
  total_amount DECIMAL(10,2) NOT NULL,
  status booking_status DEFAULT 'pending',
  payment_status payment_status DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Café categories
CREATE TABLE public.cafe_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Café menu items
CREATE TABLE public.cafe_menu_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  category_id UUID REFERENCES public.cafe_categories(id),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  preparation_time INTEGER, -- minutes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Café orders
CREATE TABLE public.cafe_orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  total_amount DECIMAL(10,2) NOT NULL,
  status order_status DEFAULT 'pending',
  payment_status payment_status DEFAULT 'pending',
  special_instructions TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Café order items
CREATE TABLE public.cafe_order_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES public.cafe_orders(id) ON DELETE CASCADE,
  menu_item_id UUID REFERENCES public.cafe_menu_items(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL
);

-- E-commerce categories
CREATE TABLE public.store_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- E-commerce products
CREATE TABLE public.store_products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  category_id UUID REFERENCES public.store_categories(id),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER DEFAULT 0,
  images TEXT[],
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Store orders
CREATE TABLE public.store_orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  total_amount DECIMAL(10,2) NOT NULL,
  status order_status DEFAULT 'pending',
  payment_status payment_status DEFAULT 'pending',
  shipping_address TEXT,
  tracking_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Store order items
CREATE TABLE public.store_order_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES public.store_orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.store_products(id),
  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL
);

-- Promotions
CREATE TABLE public.promotions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  discount_type TEXT CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value DECIMAL(10,2) NOT NULL,
  module TEXT CHECK (module IN ('car_wash', 'cafe', 'store', 'all')),
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.car_wash_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.car_wash_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.car_wash_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cafe_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cafe_menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cafe_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cafe_order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.promotions ENABLE ROW LEVEL SECURITY;

-- Helper function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role user_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = _user_id AND role = _role
  );
$$;

-- Helper function for admin access
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = _user_id AND role IN ('car_wash_admin', 'cafe_admin', 'store_admin', 'master_admin')
  );
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (public.is_admin(auth.uid()));

-- RLS Policies for car wash
CREATE POLICY "Anyone can view car wash packages" ON public.car_wash_packages
  FOR SELECT USING (TRUE);

CREATE POLICY "Car wash admins can manage packages" ON public.car_wash_packages
  FOR ALL USING (public.has_role(auth.uid(), 'car_wash_admin') OR public.has_role(auth.uid(), 'master_admin'));

CREATE POLICY "Anyone can view available slots" ON public.car_wash_slots
  FOR SELECT USING (TRUE);

CREATE POLICY "Car wash admins can manage slots" ON public.car_wash_slots
  FOR ALL USING (public.has_role(auth.uid(), 'car_wash_admin') OR public.has_role(auth.uid(), 'master_admin'));

CREATE POLICY "Users can view own bookings" ON public.car_wash_bookings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings" ON public.car_wash_bookings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Car wash admins can view all bookings" ON public.car_wash_bookings
  FOR ALL USING (public.has_role(auth.uid(), 'car_wash_admin') OR public.has_role(auth.uid(), 'master_admin'));

-- RLS Policies for café
CREATE POLICY "Anyone can view cafe categories" ON public.cafe_categories
  FOR SELECT USING (TRUE);

CREATE POLICY "Cafe admins can manage categories" ON public.cafe_categories
  FOR ALL USING (public.has_role(auth.uid(), 'cafe_admin') OR public.has_role(auth.uid(), 'master_admin'));

CREATE POLICY "Anyone can view menu items" ON public.cafe_menu_items
  FOR SELECT USING (TRUE);

CREATE POLICY "Cafe admins can manage menu items" ON public.cafe_menu_items
  FOR ALL USING (public.has_role(auth.uid(), 'cafe_admin') OR public.has_role(auth.uid(), 'master_admin'));

CREATE POLICY "Users can view own orders" ON public.cafe_orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders" ON public.cafe_orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Cafe admins can view all orders" ON public.cafe_orders
  FOR ALL USING (public.has_role(auth.uid(), 'cafe_admin') OR public.has_role(auth.uid(), 'master_admin'));

CREATE POLICY "Users can view own order items" ON public.cafe_order_items
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.cafe_orders WHERE id = order_id AND user_id = auth.uid())
  );

CREATE POLICY "Cafe admins can view all order items" ON public.cafe_order_items
  FOR ALL USING (public.has_role(auth.uid(), 'cafe_admin') OR public.has_role(auth.uid(), 'master_admin'));

-- RLS Policies for store
CREATE POLICY "Anyone can view store categories" ON public.store_categories
  FOR SELECT USING (TRUE);

CREATE POLICY "Store admins can manage categories" ON public.store_categories
  FOR ALL USING (public.has_role(auth.uid(), 'store_admin') OR public.has_role(auth.uid(), 'master_admin'));

CREATE POLICY "Anyone can view products" ON public.store_products
  FOR SELECT USING (TRUE);

CREATE POLICY "Store admins can manage products" ON public.store_products
  FOR ALL USING (public.has_role(auth.uid(), 'store_admin') OR public.has_role(auth.uid(), 'master_admin'));

CREATE POLICY "Users can view own store orders" ON public.store_orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create store orders" ON public.store_orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Store admins can view all store orders" ON public.store_orders
  FOR ALL USING (public.has_role(auth.uid(), 'store_admin') OR public.has_role(auth.uid(), 'master_admin'));

CREATE POLICY "Users can view own store order items" ON public.store_order_items
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.store_orders WHERE id = order_id AND user_id = auth.uid())
  );

CREATE POLICY "Store admins can view all store order items" ON public.store_order_items
  FOR ALL USING (public.has_role(auth.uid(), 'store_admin') OR public.has_role(auth.uid(), 'master_admin'));

-- RLS Policies for promotions
CREATE POLICY "Anyone can view active promotions" ON public.promotions
  FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Admins can manage promotions" ON public.promotions
  FOR ALL USING (public.is_admin(auth.uid()));

-- Trigger function for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_car_wash_bookings_updated_at BEFORE UPDATE ON public.car_wash_bookings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_cafe_orders_updated_at BEFORE UPDATE ON public.cafe_orders FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_store_orders_updated_at BEFORE UPDATE ON public.store_orders FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample data
INSERT INTO public.car_wash_packages (name, description, price, duration_minutes, features) VALUES
('Express Wash', 'Quick exterior wash and dry', 25.00, 30, ARRAY['Exterior wash', 'Rinse', 'Dry']),
('Premium Detail', 'Complete interior and exterior service', 75.00, 90, ARRAY['Exterior wash', 'Interior vacuum', 'Dashboard polish', 'Tire shine']),
('Ultimate Combo', 'Car wash + premium coffee', 35.00, 45, ARRAY['Express wash', 'Premium coffee', 'Pastry']);

INSERT INTO public.cafe_categories (name, description) VALUES
('Coffee', 'Hot and cold coffee beverages'),
('Tea', 'Premium tea selections'),
('Pastries', 'Fresh baked goods'),
('Snacks', 'Light bites and treats');

INSERT INTO public.cafe_menu_items (category_id, name, description, price, preparation_time) VALUES
((SELECT id FROM public.cafe_categories WHERE name = 'Coffee'), 'Espresso', 'Rich and bold espresso shot', 3.50, 5),
((SELECT id FROM public.cafe_categories WHERE name = 'Coffee'), 'Cappuccino', 'Creamy cappuccino with foam art', 4.50, 7),
((SELECT id FROM public.cafe_categories WHERE name = 'Pastries'), 'Croissant', 'Buttery flaky croissant', 2.50, 2);

INSERT INTO public.store_categories (name, description) VALUES
('Apparel', 'T-shirts, caps, and clothing'),
('Accessories', 'Stickers, keychains, and accessories'),
('Car Care Kits', 'Professional car care products');

INSERT INTO public.store_products (category_id, name, description, price, stock_quantity) VALUES
((SELECT id FROM public.store_categories WHERE name = 'Apparel'), 'Car Café T-Shirt', 'Premium cotton t-shirt with logo', 19.99, 50),
((SELECT id FROM public.store_categories WHERE name = 'Apparel'), 'Car Café Cap', 'Adjustable cap with embroidered logo', 14.99, 30),
((SELECT id FROM public.store_categories WHERE name = 'Accessories'), 'Logo Sticker Pack', 'Set of 5 waterproof stickers', 4.99, 100);