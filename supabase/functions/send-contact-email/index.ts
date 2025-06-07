
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  to: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function called with method:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const requestBody = await req.text();
    console.log("Request body received:", requestBody);
    
    const { name, email, subject, message, to }: ContactEmailRequest = JSON.parse(requestBody);

    console.log("Parsed request data:", { name, email, subject, to });

    // Validate required fields
    if (!name || !email || !subject || !message || !to) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Sending email to portfolio owner:", to);

    // Send email to the portfolio owner
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [to],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            New Contact Form Submission
          </h1>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #7c3aed; margin-top: 0;">Contact Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; color: #0066cc;">
              <strong>Reply to:</strong> 
              <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="color: #777; font-size: 14px; margin: 0;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    console.log("Email sent to portfolio owner, response:", emailResponse);

    if (emailResponse.error) {
      console.error("Error sending email to portfolio owner:", emailResponse.error);
      throw new Error(emailResponse.error.message || 'Failed to send email to portfolio owner');
    }

    console.log("Sending confirmation email to sender:", email);

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #7c3aed;">Thank you for your message, ${name}!</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            I've received your message and will get back to you as soon as possible, 
            typically within 24 hours.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your message summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
          </div>
          
          <p style="color: #555;">
            Best regards,<br>
            <strong>Alex (Portfolio Developer)</strong>
          </p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          
          <p style="color: #777; font-size: 14px;">
            This is an automated confirmation email. Please do not reply to this message.
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent, response:", confirmationResponse);

    if (confirmationResponse.error) {
      console.error("Error sending confirmation email:", confirmationResponse.error);
      // Don't throw here as the main email was successful
    }

    console.log("Both emails sent successfully");

    return new Response(JSON.stringify({ 
      success: true,
      message: "Emails sent successfully"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    console.error("Error stack:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || "An unexpected error occurred",
        details: error.stack
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
