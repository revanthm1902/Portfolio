
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
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message, to }: ContactEmailRequest = await req.json();

    console.log("Sending email with data:", { name, email, subject, to });

    // Send email to the portfolio owner
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <noreply@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px; display: inline-block;">
              New Contact Form Submission
            </h1>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #374151;">
            <h2 style="color: #06b6d4; margin-top: 0;">Contact Details</h2>
            <p style="margin: 10px 0;"><strong style="color: #8b5cf6;">Name:</strong> <span style="color: #e5e7eb;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #8b5cf6;">Email:</strong> <span style="color: #e5e7eb;">${email}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #8b5cf6;">Subject:</strong> <span style="color: #e5e7eb;">${subject}</span></p>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; border: 1px solid #374151; border-radius: 8px;">
            <h3 style="color: #10b981; margin-top: 0;">Message:</h3>
            <div style="line-height: 1.6; color: #e5e7eb; background: #111827; padding: 15px; border-radius: 6px; border-left: 4px solid #06b6d4;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #1e3a8a; border-radius: 8px; border: 1px solid #3b82f6;">
            <p style="margin: 0; color: #93c5fd;">
              <strong>Reply to:</strong> 
              <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none; font-weight: 500;">${email}</a>
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #374151;">
          
          <div style="text-align: center;">
            <p style="color: #9ca3af; font-size: 14px; margin: 0;">
              This message was sent from your portfolio contact form.
            </p>
            <p style="color: #6b7280; font-size: 12px; margin: 10px 0 0 0;">
              Powered by Revanth's Portfolio | Built with ❤️
            </p>
          </div>
        </div>
      `,
    });

    console.log("Primary email sent:", emailResponse);

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Revanth M <noreply@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #8b5cf6; margin-bottom: 10px;">Thank you for your message, ${name}! 🎉</h1>
            <div style="width: 50px; height: 2px; background: linear-gradient(90deg, #8b5cf6, #06b6d4); margin: 0 auto;"></div>
          </div>
          
          <div style="background: #1a1a1a; padding: 25px; border-radius: 12px; border: 1px solid #374151; margin: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #e5e7eb; margin-bottom: 20px;">
              I've received your message and appreciate you taking the time to reach out! 
              I'll get back to you as soon as possible, typically within 24 hours.
            </p>
            
            <div style="background: #111827; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981;">
              <h3 style="color: #10b981; margin-top: 0; font-size: 18px;">Your message summary:</h3>
              <p style="margin: 8px 0;"><strong style="color: #8b5cf6;">Subject:</strong> <span style="color: #e5e7eb;">${subject}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #8b5cf6;">Message:</strong> <span style="color: #e5e7eb;">${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</span></p>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #8b5cf6, #06b6d4); padding: 20px; border-radius: 12px; text-align: center; margin: 25px 0;">
            <h3 style="color: #ffffff; margin: 0 0 10px 0;">Let's Connect!</h3>
            <p style="color: #f3f4f6; margin: 0; font-size: 14px;">
              Feel free to check out my other work or connect with me on social media while you wait.
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #e5e7eb; margin-bottom: 15px;">
              Best regards,<br>
              <strong style="color: #8b5cf6; font-size: 18px;">Revanth M</strong><br>
              <span style="color: #06b6d4;">Full Stack Developer</span>
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #374151;">
          
          <div style="text-align: center;">
            <p style="color: #9ca3af; font-size: 14px; margin: 0;">
              This is an automated confirmation email.
            </p>
            <p style="color: #6b7280; font-size: 12px; margin: 10px 0 0 0;">
              © 2024 Revanth M | Built with passion and modern technology
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

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
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: "Failed to send email. Please try again or contact directly."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
