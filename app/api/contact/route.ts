import { NextResponse } from "next/server";

// Email validation regex (RFC 5322 compliant simple standard check)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, projectType, message, honeypot } = body;

    // 1. Spam check: Honeypot field (hidden on frontend)
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently discard bot submission with generic success
      return NextResponse.json(
        { success: true, message: "Inquiry received successfully." },
        { status: 200 }
      );
    }

    // 2. Trim inputs
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedPhone = typeof phone === "string" ? phone.trim() : "";
    const trimmedProjectType = typeof projectType === "string" ? projectType.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    // 3. Server-side validation
    if (!trimmedName || trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid name (1-100 characters)." },
        { status: 400 }
      );
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 254) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (trimmedPhone.length > 30) {
      return NextResponse.json(
        { success: false, error: "Phone number is too long (max 30 characters)." },
        { status: 400 }
      );
    }

    if (!trimmedProjectType || trimmedProjectType.length > 50) {
      return NextResponse.json(
        { success: false, error: "Please select a valid project type." },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10 || trimmedMessage.length > 3000) {
      return NextResponse.json(
        { success: false, error: "Please enter a project description (10-3000 characters)." },
        { status: 400 }
      );
    }

    // 4. Construct sanitized lead record
    const leadPayload = {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone || "Not provided",
      projectType: trimmedProjectType,
      message: trimmedMessage,
      submittedAt: new Date().toISOString(),
    };

    // 5. Send Email via Provider if configured, else log to console
    const apiKey = process.env.EMAIL_API_KEY || process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "nirmiteestudio16@gmail.com";

    if (apiKey) {
      // External email provider integration (e.g. Resend / Web3Forms / SendGrid)
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Nirmitee Studio Inquiry <noreply@nirmiteestudio.com>",
            to: [recipientEmail],
            subject: `New Project Inquiry: ${trimmedProjectType} - ${trimmedName}`,
            text: `
New Project Inquiry — Nirmitee Studio

Name:
${trimmedName}

Email:
${trimmedEmail}

Phone:
${trimmedPhone || "Not provided"}

Project Type:
${trimmedProjectType}

Project Details:
${trimmedMessage}
            `,
          }),
        });

        if (!emailRes.ok) {
          const errText = await emailRes.text();
          console.error("Failed to deliver email via provider:", errText);
        }
      } catch (err) {
        console.error("Error sending email via provider:", err);
      }
    } else {
      // Local development fallback: Log structured inquiry to server console
      console.log("--------------------------------------------------");
      console.log("📨 NEW NIRMITEE STUDIO INQUIRY RECEIVED:");
      console.log(JSON.stringify(leadPayload, null, 2));
      console.log("--------------------------------------------------");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! Your inquiry has been sent successfully. We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't send your inquiry right now. Please try again or contact us via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
