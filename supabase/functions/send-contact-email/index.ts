
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

    console.log("Attempting to send email with the following details:");
    console.log("From:", email);
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("RESEND_API_KEY exists:", !!Deno.env.get("RESEND_API_KEY"));

    // Validate required fields
    if (!name || !email || !subject || !message || !to) {
      throw new Error("Missing required fields");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !emailRegex.test(to)) {
      throw new Error("Invalid email format");
    }

    // Send email to the portfolio owner
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [to],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px; display: inline-block;">
              New Contact Form Submission
            </h1>
          </div>
          
          <div style="background: linear-gradient(135deg, #1a1a1a, #2a2a2a); padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #8b5cf6;">
            <h2 style="color: #06b6d4; margin-top: 0; margin-bottom: 20px;">Contact Details</h2>
            <div style="margin-bottom: 15px;">
              <strong style="color: #8b5cf6;">Name:</strong> 
              <span style="color: #e5e7eb; margin-left: 10px;">${name}</span>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #8b5cf6;">Email:</strong> 
              <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none; margin-left: 10px;">${email}</a>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #8b5cf6;">Subject:</strong> 
              <span style="color: #e5e7eb; margin-left: 10px;">${subject}</span>
            </div>
          </div>
          
          <div style="background: #1a1a1a; padding: 25px; border: 1px solid #374151; border-radius: 12px; margin: 20px 0;">
            <h3 style="color: #10b981; margin-top: 0; margin-bottom: 15px;">Message:</h3>
            <div style="line-height: 1.6; color: #d1d5db; white-space: pre-wrap; font-size: 14px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #1e40af20, #06b6d420); border-radius: 12px; border: 1px solid #06b6d4;">
            <div style="margin: 0; color: #06b6d4; text-align: center;">
              <strong>Quick Reply:</strong> 
              <a href="mailto:${email}?subject=Re: ${subject}" style="color: #06b6d4; text-decoration: none; margin-left: 10px; font-weight: bold;">
                Click here to reply directly
              </a>
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #374151;">
          
          <div style="text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              This message was sent from your portfolio contact form.
            </p>
            <p style="color: #6b7280; font-size: 11px; margin: 5px 0 0 0;">
              Timestamp: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully to portfolio owner:", emailResponse);

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Revanth Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out! ✨",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #8b5cf6; margin-bottom: 10px;">Thank you, ${name}! 🚀</h1>
            <div style="width: 100px; height: 2px; background: linear-gradient(90deg, #8b5cf6, #06b6d4, #10b981); margin: 0 auto;"></div>
          </div>
          
          <div style="background: linear-gradient(135deg, #1a1a1a, #2a2a2a); padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #8b5cf6;">
            <p style="font-size: 16px; line-height: 1.6; color: #e5e7eb; margin-bottom: 20px;">
              I've received your message and truly appreciate you taking the time to reach out! 
              I'll get back to you as soon as possible, typically within 24 hours.
            </p>
            
            <div style="background: #0f172a; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4;">
              <h3 style="color: #06b6d4; margin-top: 0; margin-bottom: 15px;">Your message summary:</h3>
              <div style="margin-bottom: 10px;">
                <strong style="color: #8b5cf6;">Subject:</strong> 
                <span style="color: #e5e7eb; margin-left: 8px;">${subject}</span>
              </div>
              <div>
                <strong style="color: #8b5cf6;">Message preview:</strong>
                <div style="color: #d1d5db; margin-top: 8px; font-style: italic;">
                  "${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"
                </div>
              </div>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #10b98120, #8b5cf620); padding: 20px; border-radius: 12px; border: 1px solid #10b981; text-align: center;">
            <p style="color: #10b981; margin: 0; font-weight: bold;">
              In the meantime, feel free to:
            </p>
            <div style="margin-top: 15px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
              <a href="#" style="color: #06b6d4; text-decoration: none; padding: 8px 16px; border: 1px solid #06b6d4; border-radius: 6px; font-size: 14px;">
                Check out my projects
              </a>
              <a href="#" style="color: #8b5cf6; text-decoration: none; padding: 8px 16px; border: 1px solid #8b5cf6; border-radius: 6px; font-size: 14px;">
                Read my blog
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; border-top: 1px solid #374151;">
            <p style="color: #10b981; margin-bottom: 5px; font-weight: bold;">
              Best regards,
            </p>
            <p style="color: #8b5cf6; font-size: 18px; font-weight: bold; margin: 0;">
              Revanth M
            </p>
            <p style="color: #06b6d4; font-size: 14px; margin: 5px 0 0 0;">
              Full Stack Developer
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #374151;">
          
          <div style="text-align: center;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              This is an automated confirmation email. 
            </p>
            <p style="color: #6b7280; font-size: 11px; margin: 5px 0 0 0;">
              Sent on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent successfully:", confirmationResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Emails sent successfully",
      emailId: emailResponse.data?.id,
      confirmationId: confirmationResponse.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Detailed error in send-contact-email function:", {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    });
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: "Check the function logs for more information"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
