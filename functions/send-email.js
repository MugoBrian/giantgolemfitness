import generateEmailHTML from "./email-template.js";

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get form data
    const body = await request.json();
    const { name, email, phone, message, subject, program } = body;

    // Validate
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name, email, and message are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email via Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.VITE_RESEND_API_KEY}`,
      },
      // giantgolemstrength@gmail.com
      body: JSON.stringify({
        from: "Giant Golem Strength & Fitness <onboarding@resend.dev>",
        to: ["mikanmuchiri@gmail.com"], // Change to actual owner email
        subject: subject || `New Contact: ${program || "General Inquiry"}`,
        html: generateEmailHTML(name, email, phone, message, program),
      }),
    });
    console.log(`Bearer ${import.meta.env.VITE_RESEND_API_KEY}`)
    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      throw new Error(resendData.message || "Failed to send email");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
}
