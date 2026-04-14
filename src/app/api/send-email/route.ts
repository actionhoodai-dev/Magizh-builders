import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, message, service } = await request.json();

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'magizhbuilder@gmail.com', // Recipient Address
      subject: `New Enquiry from ${name} - Magizh Builders`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f3f5f4; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #eaeaea;">
            
            <!-- Header Section -->
            <div style="background-color: #1B6644; padding: 40px 30px; text-align: center; border-bottom: 4px solid #D4AF37;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase;">MAGIZH BUILDERS</h1>
              <p style="color: rgba(255,255,255,0.85); margin: 10px 0 0 0; font-size: 13px; font-weight: 500; font-style: italic; letter-spacing: 1.5px; text-transform: uppercase;">Premium Residential & Villa Construction</p>
            </div>

            <!-- Body Section -->
            <div style="padding: 40px 30px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #111111; margin: 0 0 10px 0; font-size: 22px; font-weight: 700;">New Project Enquiry</h2>
                <p style="color: #666666; margin: 0; font-size: 15px; line-height: 1.5;">A new potential client has submitted an enquiry through the website portal. Please review the details below.</p>
              </div>

              <!-- Contact Information Table -->
              <div style="background-color: #f8faf9; border-left: 4px solid #1B6644; padding: 25px; border-radius: 0 8px 8px 0; margin-bottom: 30px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; width: 50%; vertical-align: top;">
                      <strong style="color: #888888; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 5px;">Client Name</strong>
                      <span style="color: #111111; font-size: 17px; font-weight: 700;">${name}</span>
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; vertical-align: top;">
                      <strong style="color: #888888; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 5px;">Phone Number</strong>
                      <a href="tel:${phone}" style="color: #1B6644; font-size: 17px; font-weight: 700; text-decoration: none;">${phone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding: 20px 0 10px 0; border-bottom: 1px solid #eeeeee;">
                      <strong style="color: #888888; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 5px;">Email Address</strong>
                      <a href="mailto:${email}" style="color: #1B6644; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  ${service ? `
                  <tr>
                    <td colspan="2" style="padding: 20px 0 0 0;">
                      <strong style="color: #888888; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-bottom: 10px;">Service of Interest</strong>
                      <span style="display: inline-block; background-color: #D4AF37; color: #ffffff; padding: 6px 14px; border-radius: 4px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px;">${service}</span>
                    </td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <!-- Message Block -->
              <div>
                <h3 style="color: #1B6644; font-size: 14px; font-weight: 700; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Message Details</h3>
                <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; color: #333333; line-height: 1.7; font-size: 15px; box-shadow: inset 0 2px 5px rgba(0,0,0,0.02); white-space: pre-wrap;">${message}</div>
              </div>
            </div>

            <!-- Footer Section -->
            <div style="background-color: #f9f9f9; padding: 25px; text-align: center; border-top: 1px solid #eeeeee;">
              <p style="color: #999999; font-size: 12px; margin: 0; line-height: 1.6;">This notification was automatically sent from the<br><strong>Magizh Builders Official Website</strong> contact form.</p>
              <p style="color: #bbbbbb; font-size: 11px; margin: 10px 0 0 0; text-transform: uppercase; letter-spacing: 1px;">&copy; ${new Date().getFullYear()} Magizh Builders.</p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Resend error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
