-- Fix security vulnerability: Remove anonymous access to bookings table
-- This prevents unauthorized access to customer personal information

DROP POLICY IF EXISTS "Users can view their own bookings" ON public.bookings;

-- Create new secure policy that only allows authenticated users to view their own bookings
CREATE POLICY "Users can view their own bookings" 
ON public.bookings 
FOR SELECT 
USING (auth.uid() = user_id);

-- Keep the admin policy as is for administrative access
-- Keep the insert policy as is for public booking creation