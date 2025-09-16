import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  serviceName: string;
  servicePrice: string;
  preferredDate: string;
  preferredTime: string;
  bookingReference: string;
  vehicleDetails?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      serviceName,
      servicePrice,
      preferredDate,
      preferredTime,
      bookingReference,
      vehicleDetails,
    }: BookingEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Car Café <bookings@resend.dev>",
      to: [email],
      subject: `Booking Confirmation - ${bookingReference}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Booking Confirmation</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #fff; padding: 30px; border: 1px solid #ddd; border-top: none; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
            .booking-details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding-bottom: 10px; border-bottom: 1px solid #eee; }
            .label { font-weight: bold; color: #667eea; }
            .reference { background: #667eea; color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold; display: inline-block; margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚗☕ Car Café</h1>
              <h2>Booking Confirmation</h2>
            </div>
            
            <div class="content">
              <p>Dear ${firstName} ${lastName},</p>
              
              <p>Thank you for choosing Car Café! We're excited to confirm your booking.</p>
              
              <div class="reference">
                Booking Reference: ${bookingReference}
              </div>
              
              <div class="booking-details">
                <h3>Booking Details</h3>
                <div class="detail-row">
                  <span class="label">Service:</span>
                  <span>${serviceName}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Price:</span>
                  <span>${servicePrice}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Date:</span>
                  <span>${new Date(preferredDate).toLocaleDateString()}</span>
                </div>
                <div class="detail-row">
                  <span class="label">Time:</span>
                  <span>${preferredTime}</span>
                </div>
                ${vehicleDetails ? `
                <div class="detail-row">
                  <span class="label">Vehicle Details:</span>
                  <span>${vehicleDetails}</span>
                </div>
                ` : ''}
              </div>
              
              <h3>What's Next?</h3>
              <ul>
                <li>We'll call you within 24 hours to confirm your appointment</li>
                <li>Please arrive 10 minutes early for your appointment</li>
                <li>Bring this confirmation email with you</li>
              </ul>
              
              <p>If you need to make any changes or cancel your booking, please contact us as soon as possible.</p>
              
              <p>We look forward to providing you with an exceptional experience!</p>
              
              <p>Best regards,<br>The Car Café Team</p>
            </div>
            
            <div class="footer">
              <p>Car Café - Where Luxury Meets Convenience</p>
              <p>📧 info@carcafe.com | 📞 (555) 123-WASH</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Booking confirmation email sent:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending booking confirmation:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);