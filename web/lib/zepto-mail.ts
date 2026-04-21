import { SendMailClient } from "zeptomail"

const url = "https://api.zeptomail.com/v1.1/email"
const token = process.env.ZEPTO_MAIL_API_TOKEN!

const FROM = { address: "noreply@abodeflex.ng", name: "Jeffrey Itepu" }

// ─── Registration Confirmation ───────────────────────────────────────────────

interface SendConfirmationEmailParams {
  to_email: string
  to_name: string
}

export async function sendRegistrationConfirmation({
  to_email,
  to_name,
}: SendConfirmationEmailParams): Promise<void> {
  const client = new SendMailClient({ url, token })

  await client.sendMail({
    from: FROM,
    to: [{ email_address: { address: to_email, name: to_name } }],
    subject: "Thank you for registering for Mr Jeffrey's Master Class",
    htmlbody: buildConfirmationHtml(to_name),
  })
}

export function buildConfirmationHtml(first_name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Confirmed</title>
</head>
<body style="margin:0;padding:0;background-color:#f6f7fb;font-family:'Plus Jakarta Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f7fb;padding:40px 10px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #E0EAF1;">

          <!-- Header -->
          <tr>
            <td style="background-color:#05AAFF;padding:32px 24px;text-align:center;">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.7);">JEFFREY ITEPU</p>
              <h1 style="margin:12px 0 0;font-size:28px;font-weight:800;color:#ffffff;line-height:1.2;">You're Registered!</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 24px;">
              <p style="margin:0 0 16px;font-size:16px;color:#233a4a;line-height:1.6;">
                Hi <strong>${first_name}</strong>,
              </p>
              <p style="margin:0 0 16px;font-size:16px;color:#4E545B;line-height:1.6;">
                Thank you for registering for <strong style="color:#233a4a;">Mr Jeffrey's Master Class</strong>. We're excited to have you on board!
              </p>
              <p style="margin:0 0 16px;font-size:16px;color:#4E545B;line-height:1.6;">
                Our team will review your registration and reach out within <strong style="color:#233a4a;">24–48 hours</strong> with further details.
              </p>

              <!-- What to expect card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f7fb;border-radius:12px;margin:28px 0;border:1px solid #E0EAF1;">
                <tr>
                  <td style="padding:20px 20px;">
                    <p style="margin:0 0 16px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#05AAFF;">What to Expect</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#4E545B;">✅</td>
                        <td style="padding:6px 0 6px 8px;font-size:14px;color:#233a4a;">Confirmation of your spot</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#4E545B;">📧</td>
                        <td style="padding:6px 0 6px 8px;font-size:14px;color:#233a4a;">Event details and schedule</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:14px;color:#4E545B;">🏠</td>
                        <td style="padding:6px 0 6px 8px;font-size:14px;color:#233a4a;">Real estate insights from Jeffrey Itepu</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-size:16px;color:#4E545B;line-height:1.6;">
                In the meantime, feel free to reach out if you have any questions.
              </p>
              <p style="margin:0;font-size:16px;color:#4E545B;line-height:1.6;">
                Warm regards,<br />
                <strong style="color:#233a4a;">Jeffrey Itepu's Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 24px;border-top:1px solid #E0EAF1;text-align:center;">
              <p style="margin:0;font-size:12px;color:#B1B1B1;line-height:1.6;">
                You received this email because you registered for Mr Jeffrey's Master Class.<br />
                &copy; 2026 Jeffrey Itepu. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
