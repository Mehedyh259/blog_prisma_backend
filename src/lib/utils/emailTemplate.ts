type VerificationEmailTemplateParams = {
  verificationUrl: string;
  name:string
};

export function verificationEmailTemplate({
  verificationUrl,name
}: VerificationEmailTemplateParams) {
  const text = `
 Welcome to Prisma Blog!

Please verify your email address by visiting the link below:
${verificationUrl}

If you did not create an account, you can safely ignore this email.

— Prisma Blog Team
  `.trim();

  const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Verify your email</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
      <tr>
        <td align="center">
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              max-width:520px;
              background:#ffffff;
              border-radius:12px;
              padding:32px;
              font-family:Arial, Helvetica, sans-serif;
              color:#111827;
            "
          >
            <tr>
              <td align="center">
                <h1 style="margin:0 0 12px; font-size:24px;">
                 Hello "${name}", Welcome to <span style="color:#4f46e5;">Prisma Blog</span> 👋
                </h1>
                <p style="margin:0 0 24px; color:#4b5563; font-size:15px;">
                  Thanks for joining! Please confirm your email address to get started.
                </p>
              </td>
            </tr>

            <tr>
              <td align="center">
                <a
                  href="${verificationUrl}"
                  style="
                    display:inline-block;
                    padding:14px 28px;
                    background:#4f46e5;
                    color:#ffffff;
                    text-decoration:none;
                    border-radius:8px;
                    font-weight:600;
                    font-size:15px;
                  "
                >
                  Verify Email Address
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding-top:24px;">
                <p style="margin:0 0 8px; font-size:14px; color:#6b7280;">
                  Or copy and paste this link into your browser:
                </p>
                <p style="margin:0; font-size:13px; word-break:break-all;">
                  <a href="${verificationUrl}" style="color:#4f46e5;">
                    ${verificationUrl}
                  </a>
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding-top:32px; border-top:1px solid #e5e7eb;">
                <p style="margin:0; font-size:13px; color:#9ca3af;">
                  If you did not create an account, you can safely ignore this email.
                </p>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding-top:24px;">
                <p style="margin:0; font-size:13px; color:#9ca3af;">
                  © ${new Date().getFullYear()} Prisma Blog
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();

  return { html, text };
}
