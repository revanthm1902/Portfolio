
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
  console.log('Contact email function called with method:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message, to }: ContactEmailRequest = await req.json();
    
    console.log('Processing contact form submission:', { name, email, subject, to });

    // Validate required fields
    if (!name || !email || !subject || !message || !to) {
      throw new Error('All fields are required');
    }

    // Send email to the portfolio owner
    console.log('Sending email to portfolio owner...');
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [to],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
          <div style="border-bottom: 3px solid #8B5CF6; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="color: #1a202c; margin: 0; font-size: 28px;">
              New Contact Form Submission
            </h1>
            <p style="color: #666; margin: 5px 0 0 0;">From your portfolio website</p>
          </div>
          
          <div style="background: #f7fafc; padding: 25px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8B5CF6;">
            <h2 style="color: #8B5CF6; margin-top: 0; font-size: 20px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2d3748; width: 80px;">Name:</td>
                <td style="padding: 8px 0; color: #4a5568;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2d3748;">Email:</td>
                <td style="padding: 8px 0; color: #4a5568;">
                  <a href="mailto:${email}" style="color: #8B5CF6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #2d3748;">Subject:</td>
                <td style="padding: 8px 0; color: #4a5568;">${subject}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #ffffff; padding: 25px; border: 2px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d3748; margin-top: 0; font-size: 18px;">Message:</h3>
            <div style="line-height: 1.6; color: #4a5568; white-space: pre-wrap; font-size: 15px;">${message}</div>
          </div>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
            <p style="margin: 0; color: white; font-size: 16px;">
              <strong>Quick Reply:</strong> 
              <a href="mailto:${email}?subject=Re: ${subject}" style="color: #ffd700; text-decoration: underline;">
                Click here to reply directly
              </a>
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          
          <p style="color: #718096; font-size: 14px; margin: 0; text-align: center;">
            This message was sent from your portfolio contact form.<br>
            <strong>Timestamp:</strong> ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log('Portfolio owner email sent:', emailResponse);

    // Send confirmation email to the sender
    console.log('Sending confirmation email to sender...');
    const confirmationResponse = await resend.emails.send({
      from: "Revanth Portfolio <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
          <div style="text-align: center; border-bottom: 3px solid #06B6D4; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #1a202c; margin: 0; font-size: 32px;">Thank you, ${name}!</h1>
            <p style="color: #06B6D4; margin: 10px 0 0 0; font-size: 18px; font-weight: 500;">Your message has been received</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <div style="font-size: 48px; margin-bottom: 15px;">🚀</div>
            <p style="font-size: 18px; line-height: 1.6; color: #4a5568; margin: 0;">
              I've received your message and will get back to you as soon as possible, 
              typically within <strong style="color: #10B981;">24 hours</strong>.
            </p>
          </div>
          
          <div style="background: #f0f9ff; padding: 25px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #06B6D4;">
            <h3 style="color: #0c4a6e; margin-top: 0; font-size: 18px;">Your message summary:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0c4a6e; width: 80px;">Subject:</td>
                <td style="padding: 8px 0; color: #075985;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #0c4a6e;">Sent on:</td>
                <td style="padding: 8px 0; color: #075985;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #bae6fd;">
              <strong style="color: #0c4a6e;">Message preview:</strong>
              <p style="color: #075985; margin: 8px 0 0 0; font-style: italic;">"${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"</p>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); padding: 20px; border-radius: 8px; text-align: center; color: white; margin: 30px 0;">
            <h3 style="margin: 0 0 10px 0; font-size: 18px;">In the meantime...</h3>
            <p style="margin: 0; font-size: 15px; opacity: 0.95;">
              Feel free to check out my latest projects and blog posts on the website!
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #4a5568; margin: 0; font-size: 16px;">
              Best regards,<br>
              <strong style="color: #8B5CF6; font-size: 18px;">Revanth M</strong><br>
              <span style="color: #06B6D4;">Full Stack Developer</span>
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          
          <p style="color: #718096; font-size: 13px; text-align: center; margin: 0;">
            This is an automated confirmation email. Please do not reply to this message.<br>
            If you need immediate assistance, please contact me directly at revanthm051@gmail.com
          </p>
        </div>
      `,
    });

    console.log('Confirmation email sent:', confirmationResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Emails sent successfully',
      emailId: emailResponse.id,
      confirmationId: confirmationResponse.id
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
        details: 'Please check the server logs for more information'
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
