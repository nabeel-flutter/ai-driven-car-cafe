import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/admin/Dashboard";
import CarWashAdmin from "./pages/admin/CarWashAdmin";
import CafeAdmin from "./pages/admin/CafeAdmin";
import StoreAdmin from "./pages/admin/StoreAdmin";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { HelmetProvider } from "react-helmet-async";

// Create query client outside component to prevent recreation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin={true}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/car-wash" element={
            <ProtectedRoute allowedRoles={['car_wash_admin', 'master_admin']}>
              <CarWashAdmin />
            </ProtectedRoute>
          } />
          <Route path="/admin/cafe" element={
            <ProtectedRoute allowedRoles={['cafe_admin', 'master_admin']}>
              <CafeAdmin />
            </ProtectedRoute>
          } />
          <Route path="/admin/store" element={
            <ProtectedRoute allowedRoles={['store_admin', 'master_admin']}>
              <StoreAdmin />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
            </BrowserRouter>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.Fragment>
  );
};

export default App;
