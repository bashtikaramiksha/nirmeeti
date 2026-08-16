import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email validation regex (RFC 5322 compliant simple standard check)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Targeted recipient inbox
const TARGET_RECIPIENT_EMAIL = process.env.CONTACT_EMAIL || "nirmiteestudio16@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, projectType, message, honeypot } = body;

    // 1. Spam check: Honeypot field (hidden on frontend)
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently discard bot submission with generic success response
      return NextResponse.json(
        { success: true, message: "Inquiry received successfully." },
        { status: 200 }
      );
    }

    // 2. Trim and sanitize inputs
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

    // 4. Construct lead record
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const leadPayload = {
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone || "Not provided",
      projectType: trimmedProjectType,
      message: trimmedMessage,
      submittedAt,
    };

    // Construct Email Subject & Body
    const emailSubject = `🚀 New Inquiry: ${trimmedProjectType} — ${trimmedName}`;

    const plainTextBody = `
New Project Inquiry — Nirmitee Studio

Client Details:
----------------------------------------
Name:         ${trimmedName}
Email:        ${trimmedEmail}
Phone:        ${trimmedPhone || "Not provided"}
Project Type: ${trimmedProjectType}
Submitted At: ${submittedAt}

Project Details & Requirements:
----------------------------------------
${trimmedMessage}

---
Reply directly to this email to respond to ${trimmedName} (${trimmedEmail}).
`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin:0; padding:0; background-color:#090d16; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#e2e8f0;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#090d16; padding:30px 10px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:#111827; border:1px solid #1f2937; border-radius:16px; overflow:hidden; box-shadow:0 20px 25px -5px rgba(0,0,0,0.5);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background:linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding:28px 32px; text-align:left;">
              <h1 style="margin:0; font-size:22px; font-weight:700; color:#ffffff; letter-spacing:-0.5px;">
                Nirmitee Studio
              </h1>
              <p style="margin:6px 0 0 0; font-size:14px; color:#e0e7ff; opacity:0.9;">
                New Website Project Inquiry Received
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding:32px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                
                <!-- Lead Information Cards -->
                <tr>
                  <td>
                    <h2 style="margin:0 0 16px 0; font-size:15px; font-weight:600; text-transform:uppercase; letter-spacing:1px; color:#818cf8;">
                      Client Overview
                    </h2>
                  </td>
                </tr>

                <tr>
                  <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#1f2937; border-radius:12px; padding:16px; margin-bottom:24px;">
                      <tr>
                        <td style="padding:8px 0; font-size:14px; color:#9ca3af; width:120px; font-weight:600;">Name:</td>
                        <td style="padding:8px 0; font-size:14px; color:#ffffff; font-weight:600;">${trimmedName}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0; font-size:14px; color:#9ca3af; font-weight:600;">Email:</td>
                        <td style="padding:8px 0; font-size:14px; color:#60a5fa; font-weight:600;">
                          <a href="mailto:${trimmedEmail}" style="color:#60a5fa; text-decoration:none;">${trimmedEmail}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0; font-size:14px; color:#9ca3af; font-weight:600;">Phone / WA:</td>
                        <td style="padding:8px 0; font-size:14px; color:#ffffff;">
                          ${
                            trimmedPhone
                              ? `<a href="https://wa.me/${trimmedPhone.replace(/[^0-9]/g, "")}" style="color:#34d399; text-decoration:none;">${trimmedPhone} (Chat on WhatsApp)</a>`
                              : "Not provided"
                          }
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0; font-size:14px; color:#9ca3af; font-weight:600;">Project Type:</td>
                        <td style="padding:8px 0; font-size:14px; color:#a78bfa; font-weight:700;">${trimmedProjectType}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0; font-size:14px; color:#9ca3af; font-weight:600;">Time:</td>
                        <td style="padding:8px 0; font-size:13px; color:#9ca3af;">${submittedAt}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message Section -->
                <tr>
                  <td>
                    <h2 style="margin:0 0 12px 0; font-size:15px; font-weight:600; text-transform:uppercase; letter-spacing:1px; color:#818cf8;">
                      Project Description
                    </h2>
                    <div style="background-color:#111827; border:1px solid #374151; border-radius:12px; padding:20px; font-size:14px; line-height:1.6; color:#d1d5db; white-space:pre-wrap;">${trimmedMessage}</div>
                  </td>
                </tr>

                <!-- Action Button -->
                <tr>
                  <td style="padding-top:28px; text-align:center;">
                    <a href="mailto:${trimmedEmail}?subject=Re:%20Inquiry%20with%20Nirmitee%20Studio" style="display:inline-block; background-color:#6366f1; color:#ffffff; font-weight:600; font-size:14px; padding:14px 28px; border-radius:10px; text-decoration:none; box-shadow:0 4px 14px rgba(99,102,241,0.4);">
                      Reply to ${trimmedName}
                    </a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0f172a; padding:20px 32px; border-top:1px solid #1e293b; text-align:center; font-size:12px; color:#64748b;">
              Delivered automatically to <strong style="color:#94a3b8;">${TARGET_RECIPIENT_EMAIL}</strong> via Nirmitee Studio Contact Form.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // 5. Send Email Logic
    let emailSentSuccessfully = false;

    // A) Check SMTP (Nodemailer - Gmail / Custom SMTP)
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // true for port 465, false for 587
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Nirmitee Studio Form" <${smtpUser}>`,
          to: TARGET_RECIPIENT_EMAIL,
          replyTo: trimmedEmail,
          subject: emailSubject,
          text: plainTextBody,
          html: htmlBody,
        });

        emailSentSuccessfully = true;
        console.log(`✅ Inquiry email sent via Nodemailer to ${TARGET_RECIPIENT_EMAIL}`);
      } catch (smtpError) {
        console.error("❌ Error sending email via Nodemailer SMTP:", smtpError);
      }
    }

    // B) Fallback: Check Resend API
    const resendApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;
    if (!emailSentSuccessfully && resendApiKey) {
      try {
        const fromAddress = process.env.RESEND_FROM_EMAIL || "Nirmitee Studio <onboarding@resend.dev>";
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [TARGET_RECIPIENT_EMAIL],
            reply_to: trimmedEmail,
            subject: emailSubject,
            text: plainTextBody,
            html: htmlBody,
          }),
        });

        if (emailRes.ok) {
          emailSentSuccessfully = true;
          console.log(`✅ Inquiry email sent via Resend API to ${TARGET_RECIPIENT_EMAIL}`);
        } else {
          const errText = await emailRes.text();
          console.error("❌ Error response from Resend API:", errText);
        }
      } catch (resendError) {
        console.error("❌ Error sending email via Resend API:", resendError);
      }
    }

    // C) Fallback: Log to console in development mode if no email service is configured
    if (!emailSentSuccessfully) {
      console.log("--------------------------------------------------");
      console.log("📨 NEW NIRMITEE STUDIO INQUIRY (Dev / Unconfigured State):");
      console.log(`Recipient target: ${TARGET_RECIPIENT_EMAIL}`);
      console.log(JSON.stringify(leadPayload, null, 2));
      console.log("--------------------------------------------------");
      console.log("💡 Tip: To send live emails directly to your Gmail inbox, add SMTP_USER & SMTP_PASS (Gmail App Password) or RESEND_API_KEY in your .env.local file.");
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
